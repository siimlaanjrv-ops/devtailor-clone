import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { cn } from "@/lib/cn";

type CtaBannerProps = {
  title: string;
  text: ReactNode;
  cta: { label: string; href: string };
  /**
   * "cubes": wide copy on a 3D-cubes image (home "Join the AI Revolution").
   * "gradient": narrower copy on the gradient photo ("Let's Build the Future Together").
   */
  variant?: "cubes" | "gradient";
};

const layout = {
  cubes: {
    card: "p-6 md:p-8 lg:p-16",
    row: "flex-col items-stretch md:items-start lg:flex-row lg:items-center lg:gap-2.5",
    copy: "lg:w-[853px]",
  },
  gradient: {
    card: "p-8 md:p-[42px] lg:p-16",
    row: "flex-col items-stretch md:flex-row md:items-center md:justify-center lg:justify-between",
    copy: "md:w-[580px]",
  },
};

/** Rounded call-to-action card with a heading, copy and one button. */
export function CtaBanner({ title, text, cta, variant = "gradient" }: CtaBannerProps) {
  const l = layout[variant];
  return (
    <div className="px-6">
      <div className={cn("container-site relative isolate overflow-hidden rounded-xl", l.card)}>
        {variant === "gradient" ? (
          <GradientBackdrop />
        ) : (
          <Image
            src="/images/cta-cubes.png"
            alt=""
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            className="-z-10 object-cover"
          />
        )}
        <div className={cn("flex gap-8", l.row)}>
          <div className={cn("flex flex-col gap-4", l.copy)}>
            <h3 className="font-display text-2xl leading-[1.4] text-ink">{title}</h3>
            <p className="text-copy text-body">{text}</p>
          </div>
          <Button href={cta.href} className="max-md:w-full">
            {cta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
