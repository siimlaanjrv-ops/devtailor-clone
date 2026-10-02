import Image from "next/image";
import { BriefcaseIcon, RocketIcon, ScatterChartIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/data/projects";
import { ProjectTile } from "./ProjectTile";

const aboutIcons = [BriefcaseIcon, ScatterChartIcon, RocketIcon];

/** "About that." — background / problem / solution cards. */
export function ProjectAbout({ project }: { project: Project }) {
  return (
    <Section containerClassName="flex flex-col gap-12">
      <Reveal>
        <SectionHeading title="About that." />
      </Reveal>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {project.about.map(({ title, text }, i) => {
          const Icon = aboutIcons[i];
          return (
            <li
              key={title}
              className="flex flex-col items-center gap-5 rounded-xl bg-surface p-8 text-center shadow-[0_3px_5px_0_rgb(0_0_0/0.1)]"
            >
              <IconBadge>
                <Icon />
              </IconBadge>
              <div className="flex flex-col gap-2.5">
                <p className="leading-6 font-semibold text-ink">{title}</p>
                <p className="text-copy text-body">{text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

/** Question/answer rows (two columns from tablet up). */
export function ProjectFaq({ project }: { project: Project }) {
  return (
    <section className="px-6 pb-16 md:pb-24">
      <dl className="container-site flex flex-col gap-8">
        {project.faq.map(({ question, answer }) => (
          <Reveal
            key={question}
            className="flex flex-col gap-5 pt-8 shadow-[inset_0_1px_0_#bdbfbf] md:flex-row"
          >
            <dt className="leading-6 font-semibold text-ink md:flex-1">{question}</dt>
            <dd className="text-copy whitespace-pre-line text-ink md:flex-1">{answer}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

/** "Pics or didn't happen." — screenshots plus outbound links. */
export function ProjectGallery({ project }: { project: Project }) {
  const [primary, ...secondary] = project.links;
  return (
    <Section muted containerClassName="flex flex-col gap-8 lg:gap-12">
      <Reveal>
        {/* On tablet the original keeps this 540px title box flush left. */}
        <SectionHeading title="Pics or didn’t happen." className="md:max-lg:mx-0" />
      </Reveal>
      {/* Both rows render even when empty: the original keeps their gaps. */}
      <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {project.gallery.map((image, i) => (
          <Image
            key={`${image.src}-${i}`}
            src={image.src}
            alt={`${project.name} screenshot ${i + 1}`}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1200px) 384px, (min-width: 810px) 50vw, 100vw"
            className="h-auto w-full"
          />
        ))}
      </div>
      <div className="flex justify-center gap-2.5">
        {primary && (
          <Button href={primary.href} variant="dark">
            {primary.label}
          </Button>
        )}
        {secondary.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center gap-2 rounded-md px-4 py-2.5 text-copy text-black"
          >
            {link.label}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        ))}
      </div>
    </Section>
  );
}

/** "See more." — the first three other projects. */
export function SeeMoreProjects({ current }: { current: string }) {
  const others = projects.filter((p) => p.slug !== current).slice(0, 3);
  return (
    <Section containerClassName="flex flex-col gap-9 md:gap-10">
      <h2 className="text-center font-display text-4xl leading-[1.2] text-ink">See more.</h2>
      <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
        {others.map((project, i) => (
          // Tablet shows a single row of two, like the original.
          <div key={project.slug} className={i === 2 ? "md:max-lg:hidden" : undefined}>
            <ProjectTile
              project={project}
              sizes="(min-width: 1200px) 384px, (min-width: 810px) 50vw, 100vw"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
