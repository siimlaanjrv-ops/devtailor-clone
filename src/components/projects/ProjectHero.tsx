import Image from "next/image";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

/** Case-study header: white card with title, summary, sector/tech pills and the cover image. */
export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative isolate px-6 pt-[100px] pb-16 md:pb-24">
      <GradientBackdrop overlay="hero" />
      <Reveal
        immediate
        effect="down"
        className="container-site flex flex-col gap-6 rounded-xl md:flex-row md:items-end md:bg-white md:shadow-[0_10px_15px_0_rgb(0_0_0/0.1)] lg:gap-16"
      >
        <div className="flex flex-col items-center gap-6 text-center md:w-[476px] md:items-start md:gap-8 md:py-6 md:pl-6 md:text-left lg:w-[600px] lg:gap-14 lg:py-[62px] lg:pl-16">
          <h1 className="font-display text-4xl leading-[1.2] text-ink">{project.title}</h1>
          <p className="text-lg leading-[27px] text-body">{project.summary}</p>
          <div className="flex w-full flex-col items-center gap-6 md:items-start">
            <PillGroup label="Sector" items={project.sectors} className="w-fit" />
            {/* The original leaves an extra 10px gap below the tech pills. */}
            <PillGroup label="Technologies" items={project.technologies} className="w-full" trailingGap />
          </div>
        </div>
        <div className="relative aspect-[536/456] overflow-hidden rounded-xl md:flex-1 md:rounded-none md:rounded-tl-xl">
          <Image
            src={project.image.src}
            alt={project.name}
            fill
            priority
            sizes="(min-width: 1200px) 536px, (min-width: 810px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}

type PillGroupProps = { label: string; items: string[]; className?: string; trailingGap?: boolean };

function PillGroup({ label, items, className, trailingGap }: PillGroupProps) {
  return (
    <div className={cn("flex w-full flex-col items-center gap-2.5 md:items-start", trailingGap && "pb-2.5")}>
      <p className="text-lg leading-[27px] text-body">{label}</p>
      <ul className={cn("flex flex-wrap gap-2", className)}>
        {items.map((item) => (
          <li key={item} className="rounded-[30px] bg-ink px-2.5 py-1 leading-[28.8px] text-white">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
