import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Discovery & alignment",
    text: "We begin by understanding your goals, challenges, and the impact you want to make.",
  },
  {
    title: "Opportunity mapping",
    text: "We identify the areas where AI can drive the most value in your business.",
  },
  {
    title: "Custom strategy design",
    text: "We craft a tailored solution plan — no off-the-shelf shortcuts.",
  },
  {
    title: "Prototyping & validation",
    text: "We build a working proof of concept to test core functionality and value early.",
  },
  {
    title: "Full development & integration",
    text: "We turn the prototype into a robust product and integrate it into your workflow.",
  },
  {
    title: "Launch & ongoing support",
    text: "We help you launch smoothly and stay by your side with continuous improvements.",
  },
];

/** "The process works. Proven." — six numbered steps, two columns on desktop. */
export function ProcessSection() {
  return (
    <Section containerClassName="flex flex-col gap-12 md:flex-row md:gap-8 lg:gap-16">
      <Reveal className="md:w-[418px] lg:w-[516px]">
        <SectionHeading
          align="left"
          title="The process works. Proven."
          description="From first idea to fully deployed AI — here's how we bring your vision to life."
        />
      </Reveal>
      {/* Desktop fills column-first (1–3 left, 4–6 right). */}
      <ol className="grid flex-1 gap-x-6 gap-y-8 md:gap-y-6 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-3 lg:gap-y-8">
        {steps.map(({ title, text }, i) => (
          <li key={title}>
            <Reveal className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-md shadow-[inset_0_0_0_1px_var(--color-divider),var(--shadow-icon)]">
                <span className="bg-brand-gradient flex size-6 items-center justify-center rounded-[30px] leading-[28.8px] text-ink shadow-icon">
                  {i + 1}
                </span>
              </div>
              <div className="flex flex-col gap-2.5 leading-6">
                <p className="font-semibold text-ink">{title}</p>
                <p className="text-copy text-body">{text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
