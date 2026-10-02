"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** up: rise 30px · down: drop 40px (hero) · scale: grow from 90% */
  effect?: "up" | "down" | "scale";
  delay?: number;
  className?: string;
};

/**
 * Fades its children in when they scroll into view, mirroring the
 * original's Framer "appear" effects. Hidden styles only apply once JS has
 * run (see the `js` class in the root layout), so content is never lost
 * without JavaScript, and `prefers-reduced-motion` disables the motion.
 */
export function Reveal({ children, effect = "up", delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={effect}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
