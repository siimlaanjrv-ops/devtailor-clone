import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: string;
  variant?: "accent" | "dark";
  className?: string;
};

const variants = {
  accent: "bg-accent text-ink",
  dark: "bg-ink text-white",
};

/**
 * Pill button with the original's "rolling text" hover: the label is
 * rendered twice in a 24px-tall clip and slides up on hover.
 */
export function Button({ href, children, variant = "accent", className }: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center rounded-md px-4 py-2.5 text-base",
    variants[variant],
    className,
  );
  const label = (
    <span className="flex h-6 flex-col items-center overflow-hidden">
      <span className="leading-[28.8px] transition-transform duration-300 ease-out group-hover:-translate-y-[28.8px]">
        {children}
      </span>
      <span
        aria-hidden
        className="text-copy transition-transform duration-300 ease-out group-hover:-translate-y-[28.8px]"
      >
        {children}
      </span>
    </span>
  );

  // Only site-internal paths use client-side navigation. External and mailto
  // links open in the same tab, as on the original site.
  if (!href.startsWith("/")) {
    return (
      <a href={href} className={classes}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
