import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className = "", ...props }: Props) {
  return <div className={`skeleton ${className}`.trim()} {...props} />;
}
