import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote: "“Devtailor’s AI solutions have revolutionized our approach to government services.”",
    name: "Rainer",
    company: "Bürokratt",
    avatar: "/images/testimonials/rainer.png",
  },
  {
    quote:
      '"Thanks to Devtailor, ERR’s television content reached Estonian viewers’ smart TVs for the first time as a modern and convenient solution via the Jupiter TV application."',
    name: "Raul",
    company: "ERR Jupiter team",
    avatar: "/images/testimonials/raul.jpeg",
  },
  {
    quote:
      '"Devtailor has helped us turn elite athlete data into meaningful insights, improving how we approach injury recovery and elevate performance."',
    name: "Peter",
    company: "SportScientia",
    avatar: "/images/testimonials/peter.png",
  },
];

/** "Real talk." — client quotes. */
export function Testimonials() {
  return (
    <Section containerClassName="flex flex-col gap-12">
      <Reveal>
        <SectionHeading
          title="Real talk."
          description="Our success is driven solely by the success of our clients."
        />
      </Reveal>
      <ul className="grid gap-4 md:grid-cols-3">
        {testimonials.map(({ quote, name, company, avatar }) => (
          <li key={name}>
            <figure className="flex h-full flex-col gap-4 rounded-xl bg-card p-8 shadow-card md:justify-between md:gap-0">
              <blockquote className="text-copy text-ink">{quote}</blockquote>
              <figcaption className="flex items-center gap-4 pt-4 leading-6 md:pt-6">
                <Image
                  src={avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover shadow-icon"
                />
                <div>
                  <p className="font-semibold text-ink">{name}</p>
                  <p className="text-copy text-body">{company}</p>
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
