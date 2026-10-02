import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/data/projects";

type FeaturedProjectsProps = {
  title: string;
  eyebrow?: string;
  projects: Project[];
  muted?: boolean;
};

/** Three project cards with a "See all" link to /projects. */
export function FeaturedProjects({ title, eyebrow, projects, muted }: FeaturedProjectsProps) {
  return (
    <Section muted={muted} containerClassName="flex flex-col items-center gap-12">
      <Reveal className="w-full">
        <SectionHeading eyebrow={eyebrow} title={title} />
      </Reveal>
      <div className="grid w-full auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          // Tablet shows a single row of two cards, like the original.
          <ProjectCard
            key={project.slug}
            project={project}
            className={i === 2 ? "md:max-lg:hidden" : undefined}
          />
        ))}
      </div>
      <Button href="/projects" variant="dark" className="max-md:w-full">
        See all
      </Button>
    </Section>
  );
}
