"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** up: rise 30px · down: drop 40px (hero) · scale: grow from 90% */
  effect?: "up" | "down" | "scale";
  /**
   * Animate on page load with pure CSS instead of waiting for JavaScript and
   * scrolling. Use for above-the-fold hero content so it paints immediately
   * (keeps Largest Contentful Paint fast).
   */
  immediate?: boolean;
  className?: string;
};

/**
 * Fades its children in when they scroll into view, mirroring the
 * original's Framer "appear" effects. Hidden styles only apply once JS has
 * run (see the `js` class in the root layout), so content is never lost
 * without JavaScript, and `prefers-reduced-motion` disables the motion.
 */
export function Reveal({ children, effect = "up", immediate = false, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || immediate) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.revealed = "";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div
      ref={ref}
      {...(immediate ? { "data-reveal-load": effect } : { "data-reveal": effect })}
      className={className}
    >
      {children}
    </div>
  );
}
