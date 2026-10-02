import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProjectAbout,
  ProjectFaq,
  ProjectGallery,
  SeeMoreProjects,
} from "@/components/projects/ProjectDetails";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { BuildTogetherCta } from "@/components/sections/BuildTogetherCta";
import { getProject, projects } from "@/data/projects";

// Static export: every case study is pre-rendered, unknown slugs 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <>
      <ProjectHero project={project} />
      <ProjectAbout project={project} />
      <ProjectFaq project={project} />
      <ProjectGallery project={project} />
      <SeeMoreProjects current={project.slug} />
      <BuildTogetherCta />
    </>
  );
}
