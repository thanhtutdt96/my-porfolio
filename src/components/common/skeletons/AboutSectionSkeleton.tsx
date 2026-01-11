import { Skeleton } from "./Skeleton";

export function AboutSectionSkeleton() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="mx-auto w-full max-w-md">
        <Skeleton className="aspect-square w-full rounded-2xl" />
      </div>

      <div>
        <Skeleton className="h-10 w-72 max-w-full" />
        <Skeleton className="mt-3 h-6 w-64 max-w-full" />

        <div className="mt-4 grid gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-9/12" />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Skeleton className="size-9 rounded-full" />
          <Skeleton className="size-9 rounded-full" />
          <Skeleton className="size-9 rounded-full" />
          <Skeleton className="size-9 rounded-full" />
          <Skeleton className="size-9 rounded-full" />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Skeleton className="h-9 w-32 rounded-btn" />
          <Skeleton className="h-9 w-28 rounded-btn" />
        </div>
      </div>
    </div>
  );
}

