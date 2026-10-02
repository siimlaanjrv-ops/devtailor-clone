import Image from "next/image";
import { cn } from "@/lib/cn";

type GradientBackdropProps = {
  /** White wash on top of the photo; "hero" tilts it on mobile like the original. */
  overlay?: "default" | "hero" | "none";
  className?: string;
};

/** The soft blue/peach gradient photo used behind heroes, stats and CTAs. */
export function GradientBackdrop({ overlay = "default", className }: GradientBackdropProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <Image src="/images/gradient-bg.png" alt="" fill sizes="100vw" className="object-cover" priority />
      {overlay !== "none" && (
        <div
          className={cn(
            "absolute inset-0 bg-[linear-gradient(90deg,rgb(255_255_255/0.23)_0%,rgb(255_255_255/0.95)_100%)] opacity-40",
            overlay === "hero" &&
              "max-md:bg-[linear-gradient(194deg,rgb(255_255_255/0.23)_0%,rgb(255_255_255/0.95)_100%)]",
          )}
        />
      )}
    </div>
  );
}
