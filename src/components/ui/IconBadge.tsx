import type { ReactNode } from "react";

/** 40×40 rounded square with the brand gradient, holding a 24px icon. */
export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <div className="bg-brand-gradient flex size-10 shrink-0 items-center justify-center rounded-md text-black shadow-icon">
      {children}
    </div>
  );
}
