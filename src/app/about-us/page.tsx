import type { Metadata } from "next";
import { TeamSection } from "@/components/about/TeamSection";
import { CodeIcon, DatabaseIcon, GridIcon, MagicWandIcon } from "@/components/icons";
import { BuildTogetherCta } from "@/components/sections/BuildTogetherCta";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { StatsSection } from "@/components/sections/StatsSection";

export const metadata: Metadata = { title: "About us" };

const stats = [
  {
    label: "Team size",
    value: "11",
    text: "Small enough to stay agile, big enough to deliver complex AI solutions.",
  },
  {
    label: "Annual revenue",
    value: "€ 1.1 million",
    text: "Steady growth fueled by delivering measurable value through AI-driven innovation.",
  },
  {
    label: "Average project budget",
    value: "€ 105,000",
    text: "We focus on high-impact projects that drive real business transformation.",
  },
];

const convictions = [
  {
    icon: MagicWandIcon,
    title: "Every client has the potential to excel",
    text: "We challenge our clients to exceed their expectations and work together to achieve.",
  },
  {
    icon: GridIcon,
    title: "Not all projects are created equal",
    text: "No cookie-cutter approach. Each project has its own challenges and unique potential.",
  },
  {
    icon: CodeIcon,
    title: "It is never “just a project”",
    text: "Every project has an opportunity to become greater than imagined. We make sure that potential is realized.",
  },
  {
    icon: DatabaseIcon,
    title: "You’re not “just a client”",
    text: "Personalized approach with every client. Success lies in caring about needs, concerns and dreams.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Tailored developing. <br />
            More focus.
          </>
        }
        intro="Our work is more than just software and hardware development. We are leading the way in digital transformation and software innovation. We push our clients to think bigger and dream more. Let us realize your vision and more importantly - your potential."
      />
      <StatsSection
        title="Bigger than the obvious."
        description="From a small, focused team to impactful projects across industries, our growth reflects the trust our clients place in us. These numbers highlight the scale, ambition, and results behind our work."
        stats={stats}
        columnsClassName="md:grid-cols-3"
      />
      <FeatureGrid
        muted
        title="Convictions over beliefs."
        features={convictions}
        columnsClassName="gap-y-6 md:grid-cols-2 lg:grid-cols-4"
      />
      <TeamSection />
      <BuildTogetherCta />
    </>
  );
}
