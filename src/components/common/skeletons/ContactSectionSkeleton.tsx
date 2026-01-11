import { Skeleton } from "./Skeleton";

export function ContactSectionSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <Skeleton className="h-96 w-full" />
      <Skeleton className="h-96 w-full" />
    </div>
  );
}

