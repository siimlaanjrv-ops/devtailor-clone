import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export type Stat = { label?: string; value: string; text: string };

type StatsSectionProps = {
  title: string;
  description?: string;
  stats: Stat[];
  /** Grid classes for tablet/desktop columns. */
  columnsClassName: string;
};

/**
 * Dark stat cards sitting flush on the bottom edge of a gradient band
 * (on mobile they merge into one rounded stack).
 */
export function StatsSection({ title, description, stats, columnsClassName }: StatsSectionProps) {
  return (
    <section className="relative isolate px-6 pt-16 max-md:pb-16 md:pt-24">
      <GradientBackdrop overlay="none" />
      <div className="container-site flex flex-col gap-12">
        <Reveal>
          <SectionHeading title={title} description={description} />
        </Reveal>
        <ul
          className={cn(
            "grid overflow-hidden max-md:rounded-xl max-md:bg-ink md:gap-4 lg:gap-6",
            columnsClassName,
          )}
        >
          {stats.map(({ label, value, text }, i) => (
            <li
              key={value}
              className={cn(
                "relative flex flex-col justify-center gap-3 rounded-t-xl bg-ink p-4 lg:p-6",
                // On mobile the stacked cards show a thin light top edge, as on the original.
                i > 0 &&
                  "max-md:after:pointer-events-none max-md:after:absolute max-md:after:inset-0 max-md:after:rounded-t-xl max-md:after:border max-md:after:border-b-0 max-md:after:border-divider",
              )}
            >
              {label && <p className="text-copy text-card">{label}</p>}
              <p className="font-display text-4xl leading-[1.2]">
                <span className="-m-[1.8px] inline-block bg-[linear-gradient(0deg,var(--color-blush)_0%,var(--color-peach)_100%)] bg-clip-text p-[1.8px] text-transparent">
                  {value}
                </span>
              </p>
              <p className="leading-[28.8px] text-card">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
