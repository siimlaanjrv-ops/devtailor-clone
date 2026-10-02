import type { ComponentType, SVGProps } from "react";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export type Feature = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

type FeatureGridProps = {
  title: string;
  description?: string;
  features: Feature[];
  /** Grid classes for tablet/desktop columns. */
  columnsClassName: string;
  muted?: boolean;
};

/** Centred icon + title + text items under a section heading. */
export function FeatureGrid({ title, description, features, columnsClassName, muted }: FeatureGridProps) {
  return (
    <Section muted={muted} containerClassName="flex flex-col gap-12">
      <Reveal>
        <SectionHeading title={title} description={description} />
      </Reveal>
      <ul className={cn("grid gap-x-6", columnsClassName)}>
        {features.map(({ icon: Icon, title, text }) => (
          <li key={title}>
            <Reveal className="flex flex-col items-center gap-5 text-center">
              <IconBadge>
                <Icon />
              </IconBadge>
              <div className="flex flex-col gap-2.5">
                <p className="leading-6 font-semibold text-ink">{title}</p>
                <p className="text-copy text-body">{text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
