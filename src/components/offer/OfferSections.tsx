import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { getProject } from "@/data/projects";
import {
  about,
  contactDetails,
  costIntro,
  costSummary,
  offerDate,
  offerProjects,
  phases,
  purpose,
  relatedWorks,
  scrumNote,
  scrumPoints,
  startTimeline,
  taxDetails,
  timelineIntro,
} from "@/data/offer";
import { cn } from "@/lib/cn";

/*
 * Sections of the standalone offer template page. Desktop and tablet match
 * the original; the original has no mobile layout (its columns squeeze to
 * ~110px), so below 810px the columns stack instead.
 */

// Every section is separated by a 1px line drawn as an overlay, like Framer's borders.
const sectionLine =
  "relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#e8e8e8]";

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Devtailor home" className={className}>
      <Image src="/images/logo.svg" alt="Devtailor Software" width={112} height={32} />
    </Link>
  );
}

function Heading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Reveal effect="blur">
      <h2 className={cn("text-[28px] leading-[1.2] font-semibold text-black md:text-[32px]", className)}>
        {children}
      </h2>
    </Reveal>
  );
}

/**
 * Standard light section. On tablet/desktop the original reserves a 94px band
 * (an invisible logo) above each heading, hence the extra top padding.
 * `compact` sections use 60px outer padding plus 32px inner padding.
 */
function OfferSection({
  children,
  tint = "card",
  compact = false,
}: {
  children: ReactNode;
  tint?: "card" | "surface";
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        sectionLine,
        "isolate px-6 py-16",
        tint === "card" ? "bg-card" : "bg-surface",
        compact ? "md:py-[60px]" : "md:py-[120px]",
      )}
    >
      <div
        className={cn(
          "container-site flex flex-col gap-6",
          compact ? "md:px-8 md:pt-[150px] md:pb-8" : "md:px-8 md:pt-[118px]",
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function OfferHero() {
  return (
    <section className={cn(sectionLine, "isolate flex h-[900px] items-center justify-center bg-card px-6")}>
      <Image
        src="/images/offer/hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <Logo className="absolute top-8 left-1/2 -translate-x-1/2" />
      <Reveal
        immediate
        effect="down"
        className="flex flex-col items-center gap-3.5 text-center text-[32px] leading-[1.2] text-black"
      >
        <h1 className="flex flex-wrap justify-center gap-x-1.5">
          <span>It&apos;s</span>
          <span>{offerDate}</span>
        </h1>
        <p className="flex flex-wrap justify-center gap-x-1.5">
          <span>Time to start with</span>
          <span className="font-semibold">Devtailor</span>
          <span>Project</span>
        </p>
      </Reveal>
    </section>
  );
}

export function OfferPurpose() {
  return (
    <section className={cn(sectionLine, "bg-card px-6 py-16 md:px-0 md:py-[120px]")}>
      <div className="container-site flex flex-col gap-10 md:flex-row md:items-center md:gap-8 md:px-8">
        <div className="flex items-center justify-center gap-[26px] md:flex-1 md:justify-start">
          <Reveal effect="scale" className="pt-[120px]">
            <div className="relative isolate flex aspect-[200/260] w-[150px] items-center justify-center overflow-hidden rounded-xl md:w-[200px]">
              <Image
                src="/images/gradient-bg.webp"
                alt=""
                fill
                sizes="200px"
                className="-z-10 object-cover"
              />
              <Logo />
            </div>
          </Reveal>
          <Reveal effect="scale" className="pb-20">
            <div className="relative aspect-[200/260] w-[150px] overflow-hidden rounded-xl md:w-[200px]">
              <Image src="/images/offer/building.webp" alt="" fill sizes="200px" className="object-cover" />
            </div>
          </Reveal>
        </div>
        <div className="flex flex-col gap-6 md:flex-1">
          <Heading>Purpose of the project</Heading>
          <Reveal effect="blur" className="flex flex-col gap-[32.4px] text-lg leading-[32.4px] text-black">
            {purpose.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function OfferStart() {
  return (
    <OfferSection tint="surface">
      <Image
        src="/images/offer/waves.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.17]"
      />
      <Heading>Start, timeline, resources</Heading>
      <Reveal effect="blur" className="flex flex-col gap-[32.4px] text-lg leading-[32.4px] text-black">
        {startTimeline.map((p) => (
          <p key={p.slice(0, 20)}>{p}</p>
        ))}
      </Reveal>
    </OfferSection>
  );
}

export function OfferCost() {
  // Cells and rows share a 4:1 split; the "Time" column has a left rule.
  const timeCell =
    "relative text-center after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-[#e8e8e8]";
  return (
    <OfferSection>
      <Heading>Development cost</Heading>
      <Reveal effect="blur">
        <p className="leading-[28.8px] text-black">{costIntro}</p>
      </Reveal>
      <div className="relative flex flex-col gap-1 overflow-hidden rounded-md leading-[28.8px] after:pointer-events-none after:absolute after:inset-0 after:rounded-md after:border after:border-[#01060d]">
        <div className="grid grid-cols-[4fr_1fr] bg-[#01060d] px-4 py-2 font-semibold text-[#ffe3d4]">
          <span>Phase</span>
          <span className="text-center">Time</span>
        </div>
        {phases.map(({ phase, time }) => (
          <div key={phase} className="contents">
            <div className="grid grid-cols-[4fr_1fr] px-4 py-2 text-black">
              <span>{phase}</span>
              <span className={timeCell}>{time}</span>
            </div>
            <div className="h-px bg-[#e8e8e8]" />
          </div>
        ))}
        {costSummary.map(({ label, value }, i) => (
          <div key={label} className="contents">
            <div className="grid grid-cols-[4fr_1fr] p-2 font-semibold text-black">
              <span className="pr-4 text-right">{label}</span>
              <span className={timeCell}>{value}</span>
            </div>
            {i < costSummary.length - 1 && <div className="h-px bg-[#e8e8e8]" />}
          </div>
        ))}
      </div>
    </OfferSection>
  );
}

export function OfferTimeline() {
  return (
    <OfferSection>
      <Heading>Timeline</Heading>
      <Reveal effect="blur">
        <p className="leading-[28.8px] text-black">{timelineIntro}</p>
      </Reveal>
      <div className="relative isolate overflow-hidden rounded-xl p-6 md:px-20 md:py-[120px]">
        <Image
          src="/images/offer/timeline-bg.webp"
          alt=""
          fill
          sizes="(min-width: 1200px) 1136px, 100vw"
          className="-z-10 object-cover"
        />
        <div className="relative aspect-[1526/514] overflow-hidden rounded-xl after:absolute after:inset-0 after:rounded-xl after:border after:border-white">
          <Image
            src="/images/offer/timeline.webp"
            alt="Project timeline: Tuya PoC, design, setup, integration service and the three portals from October to June"
            fill
            sizes="(min-width: 1200px) 976px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </OfferSection>
  );
}

export function OfferAbout() {
  return (
    <section className={cn(sectionLine, "bg-ink px-6 py-16 md:py-[120px]")}>
      <div className="container-site flex flex-col gap-16 md:gap-20 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-[60px]">
          <Reveal effect="scale" className="relative aspect-[538/501] overflow-hidden rounded-xl md:flex-1">
            <Image
              src="/images/offer/about.webp"
              alt=""
              fill
              sizes="(min-width: 1200px) 538px, 50vw"
              className="object-cover object-bottom"
            />
          </Reveal>
          <Reveal effect="blur" className="flex flex-col gap-6 md:flex-1">
            <h2 className="text-[28px] leading-[39.2px] text-white">About Devtailor</h2>
            <p className="text-xl leading-7 text-white">
              Devtailor is an agile product <br />
              <span className="text-accent">development company</span>
            </p>
            <div className="flex flex-col gap-[22.4px] leading-[22.4px] text-[#bdbfbf]">
              {about.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-[60px]">
          <Reveal effect="blur" className="flex flex-col gap-6 md:flex-1">
            <h3 className="text-xl leading-7 text-white">
              We use Scrum Process for our agile development process management.
            </h3>
            <ul className="list-disc pl-5 leading-[25.6px] text-[#bdbfbf]">
              {scrumPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="leading-[25.6px] text-[#bdbfbf]">{scrumNote}</p>
          </Reveal>
          <div className="relative h-[260px] overflow-hidden rounded-xl bg-white md:h-[400px] md:flex-1">
            <Image
              src="/images/offer/scrum.webp"
              alt="Scrum process: product backlog, sprint planning, 1–4 week sprints with daily scrums, review and retrospective"
              fill
              sizes="(min-width: 1200px) 538px, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const rowLine =
  "relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:border-b after:border-dashed after:border-[#80898c]";

export function OfferProjects() {
  const projects = offerProjects.map((slug) => getProject(slug)!);
  return (
    <OfferSection compact>
      <div className="flex flex-col gap-2.5">
        <Heading>Projects</Heading>
        <ul>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className={cn(
                  rowLine,
                  "flex flex-col gap-2 py-4 md:flex-row md:items-center md:justify-between",
                )}
              >
                <span className="leading-[28.8px] text-ink">{project.name}</span>
                <span className="flex flex-wrap gap-x-4 gap-y-1 text-xs leading-[16.8px] text-ink">
                  {project.services.map((service) => (
                    <span key={service}>{service}</span>
                  ))}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2.5">
        <Heading>Related Works</Heading>
        <ul>
          {relatedWorks.map(({ name, description }) => (
            <li
              key={name}
              className={cn(
                rowLine,
                "flex flex-col gap-1 py-4 md:flex-row md:items-center md:justify-between",
              )}
            >
              <span className="leading-[28.8px] text-ink">{name}</span>
              <span className="text-xs leading-[14.4px] text-black">{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </OfferSection>
  );
}

function DetailRows({ rows }: { rows: { label: string; value: string | string[] }[] }) {
  return (
    // Each dt/dd pair sits directly in a row <div> (valid <dl> markup); the
    // divider between rows is the row's bottom border.
    <dl className="flex flex-col gap-2.5">
      {rows.map(({ label, value }) => (
        <div key={label} className="flex items-start border-[#e8e8e8] not-last:border-b not-last:pb-2.5">
          <dt className="w-1/2">{label}</dt>
          <dd className="w-1/2 text-right">
            {Array.isArray(value)
              ? value.map((line, j) => (
                  <span key={line}>
                    {j > 0 && <br />}
                    {line}
                  </span>
                ))
              : value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function OfferContact() {
  return (
    <section className={cn(sectionLine, "bg-card px-6 py-16 md:py-[60px]")}>
      <div className="container-site flex flex-col gap-10 md:gap-[62px] md:p-8">
        <div className="flex flex-col gap-6 md:pt-[118px]">
          <Heading>Contact</Heading>
          <Reveal effect="blur">
            <p className="leading-[28.8px] text-black">
              We’re always happy to hear from you. Whether it’s about new business, joining our team or just
              general feedback.
            </p>
          </Reveal>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-2.5 leading-[28.8px] text-black md:flex-1">
            <DetailRows rows={contactDetails} />
            <p className="font-bold">Tax Details</p>
            <DetailRows rows={taxDetails} />
            <div className="flex flex-col gap-1">
              <p className="font-bold">More info</p>
              <p>
                {/* Darker than the original #0099ff, which fails WCAG contrast (2.8:1). */}
                <Link href="/" className="text-[#0073c4] underline">
                  www.devtailor.com
                </Link>
              </p>
            </div>
          </div>
          {/* Half of the row (minus the 32px gap) plus 8px: 560px desktop, 436px tablet. */}
          <div className="h-[416px] shrink-0 rounded-2xl bg-white p-2 md:w-[calc((100%-32px)/2+8px)]">
            <iframe
              title="Devtailor office on the map"
              src="https://maps.google.com/maps?q=Valukoja%208%2F2%2C%20Tallinn&z=15&output=embed"
              loading="lazy"
              className="size-full rounded-xl border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
