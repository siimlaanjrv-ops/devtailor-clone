import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Career" };

const perks = [
  "Inspiring projects and opportunity to work on them with the latest technologies",
  "A possibility to grow both personally and professionally as we scale",
  "A team of intelligent, innovative, and high-performing people to work with",
  "Great company culture and team events",
  "Well-being perks - Stebby, Confido health insurance",
  "Modern office in Ülemiste City",
  "Flexibility in how, when, and where you work as we trust that you choose the best and most efficient way for your work-life blend",
  "Unlimited coffee and snacks in the office",
];

export default function CareerPage() {
  return (
    <>
      <section className="relative isolate px-6 pt-[140px] pb-16 md:pb-24">
        <GradientBackdrop overlay="hero" />
        <div className="container-site flex flex-col gap-8 md:flex-row md:gap-6 lg:items-center lg:gap-8">
          <Reveal immediate effect="down" className="md:flex-1 lg:w-[580px] lg:flex-none">
            <SectionHeading
              as="h1"
              align="left"
              title="Boring work sucks."
              description={
                <p className="text-lg leading-[27px] text-body">
                  Devtailor is an agile product development company that keeps things exciting. We use modern
                  technologies to build innovative business solutions in fintech, blockchain, medical, events
                  and sports technology sectors.
                  <br />
                  <br />
                  Our work is more than just crafting great software. We are leading the way in digital
                  transformation and software innovation. We push our clients to think bigger and dream more.
                </p>
              }
            />
          </Reveal>
          <Reveal
            immediate
            effect="scale"
            className="relative aspect-[588/462] overflow-hidden rounded-xl md:flex-1"
          >
            <Image
              src="/images/career/hero.webp"
              alt="Devtailor team at work"
              fill
              priority
              sizes="(min-width: 1200px) 588px, (min-width: 810px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <Section containerClassName="flex flex-col gap-12 md:flex-row md:gap-8 lg:gap-16">
        <Reveal className="flex flex-col items-start gap-5 md:w-[418px] lg:w-[516px]">
          <SectionHeading
            align="left"
            title="Invent. Grow. Thrive."
            description="Devtailor is always looking for talented people with the drive and vision to take on big projects with even bigger potential."
          />
          {/* Dead button on the original (no link); here it opens an email instead. */}
          <Button href="mailto:hello@devtailor.com">See open positions</Button>
        </Reveal>
        <CheckList
          items={perks}
          className="grid flex-1 gap-x-6 gap-y-8 md:gap-y-6 lg:grid-cols-2 lg:gap-y-8"
        />
      </Section>

      <section className="px-6 pb-24">
        <Reveal
          effect="scale"
          className="container-site relative aspect-[1200/583] overflow-hidden rounded-xl"
        >
          <Image
            src="/images/career/office.webp"
            alt="Devtailor office in Ülemiste City"
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      <div className="px-6">
        <div className="container-site relative isolate overflow-hidden rounded-xl p-6 md:p-[42px] lg:p-16">
          <GradientBackdrop />
          <div className="mx-auto flex max-w-[580px] flex-col gap-4 text-center">
            <h3 className="font-display text-2xl leading-[1.4] text-ink">Don’t see an open position?</h3>
            <p className="text-copy text-body">
              Drop us a line at&nbsp;
              <a href="mailto:hello@devtailor.com" className="text-ink underline">
                hello@devtailor.com
              </a>
              &nbsp;and we’ll be in touch!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
