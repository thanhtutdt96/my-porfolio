import { useActiveSectionIds } from "../hooks/useActiveSection";
import type { FC, ReactNode } from "react";
import { DefaultSectionSkeleton } from "./common/skeletons/DefaultSectionSkeleton";
import { SectionHeadingSkeleton } from "./common/skeletons/SectionHeadingSkeleton";

type Props = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  skeleton?: ReactNode;
};

export const Section: FC<Props> = ({
  id,
  title,
  eyebrow,
  children,
  skeleton,
}) => {
  const activeIds = useActiveSectionIds();
  const isActive = activeIds.length > 0 ? activeIds.includes(id) : true;

  return (
    <section id={id} className="scroll-mt-20 py-10 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10" id={`${id}-heading`}>
          {isActive ? (
            <>
              <h2 className="animate-in slide-in-from-right-20 duration-500 ease-in-out mb-2 text-xl lg:text-3xl font-bold tracking-tight sm:text-4xl ">
                {title}
              </h2>
              {eyebrow ? (
                <div className="animate-in slide-in-from-right-20 duration-800 ease-in-out text-sm font-semibold text-primary/90">
                  {eyebrow}
                </div>
              ) : null}
            </>
          ) : (
            <SectionHeadingSkeleton hasEyebrow={!!eyebrow} />
          )}
        </div>
        {isActive ? children : skeleton ?? <DefaultSectionSkeleton />}
      </div>
    </section>
  );
};
