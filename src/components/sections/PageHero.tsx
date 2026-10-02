import type { ReactNode } from "react";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { Reveal } from "@/components/ui/Reveal";

/** Centred page title + intro on the gradient backdrop (Projects, About, …). */
export function PageHero({ title, intro }: { title: ReactNode; intro: ReactNode }) {
  return (
    <section className="relative isolate px-6 pt-[140px] pb-16 md:pb-24">
      <GradientBackdrop overlay="hero" />
      <Reveal immediate effect="down" className="container-site">
        <div className="mx-auto flex max-w-[580px] flex-col gap-5 text-center">
          <h1 className="font-display text-5xl leading-[1.2] text-ink">{title}</h1>
          <p className="text-lg leading-[27px] text-body">{intro}</p>
        </div>
      </Reveal>
    </section>
  );
}
