import { ClientLogos } from "@/components/home/ClientLogos";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomeHero } from "@/components/home/HomeHero";
import { LeaderSection } from "@/components/home/LeaderSection";
import { Testimonials } from "@/components/home/Testimonials";
import { BuildTogetherCta } from "@/components/sections/BuildTogetherCta";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import {
  ChartIcon,
  CodeIcon,
  DatabaseIcon,
  GridIcon,
  HierarchyIcon,
  MagicWandIcon,
} from "@/components/icons";
import { pickProjects } from "@/data/projects";
import { CEO_CALENDAR_URL, CTO_CALENDAR_URL } from "@/data/site";

const services = [
  {
    icon: MagicWandIcon,
    title: "Handcrafted AI",
    text: "Sophisticated AI isn’t just for tech giants. It’s for everyone.",
  },
  {
    icon: GridIcon,
    title: "Digital solution design (UX/UI)",
    text: "Appealing. Intuitive. Useful. The trinity that enforces your success.",
  },
  {
    icon: CodeIcon,
    title: "Full-stack software development",
    text: "Solutions that are profitable, ethical, transparent, and designed with you in mind.",
  },
  {
    icon: DatabaseIcon,
    title: "Big data. Analyzed.",
    text: "Turning big data to big results for even the smaller businesses.",
  },
  {
    icon: ChartIcon,
    title: "Business analysis & automation",
    text: "Your data works for you. Unlocking new avenues for growth.",
  },
  {
    icon: HierarchyIcon,
    title: "Complex system integrations",
    text: "Making different systems play nice with each other.",
  },
];

const stats = [
  { value: "153", text: "projects successfully delivered to clients across industries." },
  { value: "24h", text: "to build and demo your first AI prototype." },
  { value: "2 weeks", text: "from idea to market with our rapid delivery model." },
  { value: "10 years", text: "of hands-on experience in custom software development." },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeatureGrid
        title="The stack. Tailored each time."
        description="Devtailor’s craftmanship includes an array of skills. We’re keen on inventing things that combine the different in novel ways."
        features={services}
        columnsClassName="gap-y-16 md:grid-cols-2 lg:grid-cols-3"
      />
      <LeaderSection
        muted
        title="What can AI do for you."
        text="That’s the question for us to answer – after our first meeting. From automation to smart decision-making, AI can unlock real value for your business. We craft tailored AI solutions that fit set goals – not the other way around."
        points={[
          "Automate time-consuming tasks and free up your team’s focus",
          "Build AI-powered tools like chatbots, recommendation engines, or predictive systems",
          "Integrate intelligent features into your existing software",
          "Rapidly prototype and test new AI-driven ideas",
          "Analyze large volumes of data to uncover insights and trends",
          "Ensure your AI solutions are ethical, secure, and scalable",
        ]}
        cta={{ label: "Book a free consultation with our CEO", href: CEO_CALENDAR_URL }}
        photo="/images/team/rutmar-silde.webp"
        role="Our head-tailor, the CEO"
        name="Rutmar Silde"
      />
      <FeaturedProjects
        eyebrow="Our greatest hits."
        title="Stuff that makes a difference."
        projects={pickProjects("ai-procurement", "suits-legal", "fleetbrains")}
      />
      <StatsSection
        title="Quick to success. Backed by experience."
        stats={stats}
        columnsClassName="md:grid-cols-4"
        titleClassName="max-md:text-left"
      />
      <Testimonials />
      <FeaturedProjects
        muted
        title="Improved businesses. Check."
        projects={pickProjects("docaid", "telema", "grid-raven")}
      />
      <ProcessSection />
      <CtaBanner
        variant="cubes"
        title="Join the AI Revolution"
        text={
          <>
            Don’t get left behind. Let AI be the catalyst for your business growth.
            <br />
            Get Started Today
          </>
        }
        cta={{ label: "Book Free Consultation", href: CEO_CALENDAR_URL }}
      />
      <LeaderSection
        title="It’s whats under the hood that matters."
        text="Looking for real-world, scalable AI implementation? Our CTO is here to help you plan, architect, and ship solid solutions — fast. Here’s what we can bring to your stack:"
        points={[
          "Fine-tuned models and embeddings tailored to your domain",
          "Vector databases for lightning-fast semantic search",
          "AVS (Azure Virtual Systems) infrastructure and orchestration",
          "Streaming pipelines for real-time data processing",
          "Scalable backend architecture for AI-heavy workloads",
          "Secure API gateways and access control mechanisms",
        ]}
        cta={{ label: "Book a free consultation with our CTO", href: CTO_CALENDAR_URL }}
        photo="/images/team/janno-stern.webp"
        role="Our master of patterns, the CTO"
        name="Janno Stern"
      />
      <ClientLogos />
      <BuildTogetherCta />
    </>
  );
}
