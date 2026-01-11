import { Skeleton } from "./Skeleton";

type Props = {
  hasEyebrow: boolean;
};

export function SectionHeadingSkeleton({ hasEyebrow }: Props) {
  return (
    <>
      <Skeleton className="mb-3 h-10 w-64 max-w-full" />
      {hasEyebrow ? <Skeleton className="h-4 w-52 max-w-full" /> : null}
    </>
  );
}

