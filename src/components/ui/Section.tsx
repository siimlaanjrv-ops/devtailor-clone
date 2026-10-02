import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Light grey band used to alternate sections. */
  muted?: boolean;
};

/** Full-width section with the site's standard gutters and 1200px container. */
export function Section({ children, className, containerClassName, muted }: SectionProps) {
  return (
    <section className={cn("relative isolate px-6 section-y", muted && "bg-surface", className)}>
      <div className={cn("container-site", containerClassName)}>{children}</div>
    </section>
  );
}
