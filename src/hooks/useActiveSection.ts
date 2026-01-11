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
  // Default is tuned for a sticky top navbar: treat the top ~80px as "not visible"
  // so the active section doesn't lag/jump while smooth-scrolling to anchors.
  const { rootMargin = "-80px 0px -60% 0px", threshold = 0.1 } = options;
  const firstId = sectionIds[0] ?? "";
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

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          );

        const nextId = visible[0]?.target?.id;
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
    // (but don't clear the visited list).
    if (!firstId) return;
    const onScroll = () => {
      if (window.scrollY <= 0) {
        setActiveId(firstId);
        setActiveIds((prev) => (prev.includes(firstId) ? prev : [firstId, ...prev]));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [firstId]);

  return { activeId, activeIds };
};

export const useActiveSectionId = () => {
  return useContext(ActiveSectionIdContext)?.activeId ?? null;
};

export const useActiveSectionIds = () => {
  return useContext(ActiveSectionIdContext)?.activeIds ?? [];
};

export const useActiveSectionState = () => {
  return useContext(ActiveSectionIdContext);
};
