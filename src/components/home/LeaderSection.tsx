import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type LeaderSectionProps = {
  title: string;
  text: string;
  points: string[];
  cta: { label: string; href: string };
  photo: string;
  /** Caption lead-in, e.g. "Our head-tailor, the CEO". */
  role: string;
  name: string;
  muted?: boolean;
};

/** Copy + checklist + booking button next to a portrait (CEO and CTO blocks). */
export function LeaderSection({ title, text, points, cta, photo, role, name, muted }: LeaderSectionProps) {
  return (
    <Section
      muted={muted}
      containerClassName="flex flex-col gap-8 md:flex-row md:items-start lg:items-center lg:gap-16"
    >
      <div className="flex flex-1 flex-col items-start gap-8">
        <Reveal>
          <SectionHeading align="left" title={title} description={text} />
        </Reveal>
        <Reveal className="w-full">
          <CheckList items={points} />
        </Reveal>
        <Button href={cta.href} className="max-md:w-full">
          {cta.label}
        </Button>
      </div>
      <figure className="flex w-full flex-1 flex-col gap-2">
        <Reveal effect="scale" className="relative aspect-[568/610] overflow-hidden rounded-xl">
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(min-width: 1200px) 568px, (min-width: 810px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        {/* pre-wrap keeps the space before the mobile <br>, which Framer counts in the right alignment. */}
        <figcaption className="text-copy text-right whitespace-pre-wrap text-body">
          {role} <br className="md:hidden" />
          <strong className="font-bold">{name}.</strong>
        </figcaption>
      </figure>
    </Section>
  );
}
