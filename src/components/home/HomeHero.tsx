import Image from "next/image";
import { CrownIcon, DatabaseIcon, GaugeIcon } from "@/components/icons";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const challenges = [
  { icon: CrownIcon, title: "Staying Competitive", text: "How do you differentiate in a saturated market?" },
  { icon: GaugeIcon, title: "Efficiency Gaps", text: "Are outdated processes slowing you down?" },
  { icon: DatabaseIcon, title: "Data Overload", text: "Is your business leveraging data effectively?" },
];

export function HomeHero() {
  return (
    <section className="relative isolate px-6 pt-[140px] pb-16 md:pb-24">
      <GradientBackdrop overlay="hero" />
      <div className="container-site flex flex-col items-center gap-[33px] md:gap-[62px] lg:flex-row lg:gap-[63px]">
        <div className="flex w-full flex-col gap-8 lg:flex-1">
          <Reveal immediate effect="down">
            <SectionHeading
              as="h1"
              align="left"
              className="max-w-[540px]"
              title="AI solutions that earn its keep."
              description={
                <p className="text-lg leading-[27px] text-body">
                  In an era where technology evolves at lightning speed, many businesses struggle to keep up.
                  The challenges are real:
                </p>
              }
            />
          </Reveal>
          <ul className="flex flex-col gap-6">
            {challenges.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Reveal className="flex gap-5">
                  <IconBadge>
                    <Icon />
                  </IconBadge>
                  <div className="flex flex-col gap-2.5 leading-6">
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="text-copy text-body">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <Reveal immediate effect="scale" className="relative aspect-[569/606] w-full lg:flex-1">
          <Image
            src="/images/home/hero-cubes.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1200px) 569px, 100vw"
            className="object-contain"
          />
        </Reveal>
      </div>
    </section>
  );
}
