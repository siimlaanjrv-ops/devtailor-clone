import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { BuildTogetherCta } from "@/components/sections/BuildTogetherCta";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Made it. Smarter."
        intro="At Devtailor, we design and build AI solutions that solve real problems. From our own products to client-driven projects, our portfolio showcases how smart technology can create measurable impact across industries."
      />
      <Section>
        <ProjectsExplorer />
      </Section>
      <BuildTogetherCta />
    </>
  );
}
