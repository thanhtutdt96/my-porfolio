import { useContext, useEffect, useMemo, useState } from "react";
import { ActiveSectionIdContext } from "../contexts/activeSectionContext";

type UseActiveSectionOptions = {
  rootMargin?: string;
  threshold?: number | number[];
};

export type ActiveSectionState = {
  activeId: string;
  activeIds: readonly string[];
};

export const useActiveSection = (
  sectionIds: readonly string[],
  options: UseActiveSectionOptions = {}
): ActiveSectionState => {
  const { rootMargin = "-120px 0px -60% 0px", threshold = 0.1 } = options;
  const firstId = sectionIds[0] ?? "";
  const lastId = sectionIds[sectionIds.length - 1] ?? "";
  const [activeId, setActiveId] = useState(firstId);
  const [activeIds, setActiveIds] = useState<readonly string[]>(
    firstId ? [firstId] : []
  );

  const ids = useMemo(() => [...sectionIds], [sectionIds]);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (els.length === 0) return;

    const latest = new Map<
      string,
      { isIntersecting: boolean; ratio: number }
    >();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = (e.target as HTMLElement | null)?.id;
          if (!id) continue;
          latest.set(id, {
            isIntersecting: e.isIntersecting,
            ratio: e.intersectionRatio ?? 0,
          });
        }

        // Pick the most visible *currently intersecting* section across all ids.
        // Tie-breaker is stable: earlier id in `ids` wins when ratios match.
        let nextId: string | null = null;
        let bestRatio = -1;
        for (const id of ids) {
          const s = latest.get(id);
          if (!s?.isIntersecting) continue;
          if (s.ratio > bestRatio) {
            bestRatio = s.ratio;
            nextId = id;
          }
        }

        if (!nextId) return;

        setActiveId(nextId);
        setActiveIds((prev) => {
          if (prev.includes(nextId)) return prev;
          return [...prev, nextId];
        });
      },
      { root: null, rootMargin, threshold }
    );

    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, [firstId, ids, rootMargin, threshold]);

  useEffect(() => {
    // If user scrolls all the way to the top, keep the first section active
    // (but don't clear the visited list). Also, if user scrolls all the way to
    // the bottom, keep the last section active (IO can miss the last one,
    // especially with aggressive rootMargins and a footer after sections).
    if (!firstId && !lastId) return;
    const onScroll = () => {
      if (firstId && window.scrollY <= 0) {
        setActiveId(firstId);
        setActiveIds((prev) =>
          prev.includes(firstId) ? prev : [firstId, ...prev]
        );
        return;
      }

      if (lastId) {
        const bottom = window.scrollY + window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        // small epsilon to handle fractional scroll values
        if (bottom >= docHeight - 2) {
          setActiveId(lastId);
          setActiveIds((prev) =>
            prev.includes(lastId) ? prev : [...prev, lastId]
          );
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [firstId, lastId]);

  return { activeId, activeIds };
};

export const useActiveSectionId = () => {
  const activeSection = useContext(ActiveSectionIdContext);
  return activeSection?.activeId ?? null;
};

export const useActiveSectionIds = () => {
  const activeSection = useContext(ActiveSectionIdContext);
  return activeSection?.activeIds ?? [];
};
