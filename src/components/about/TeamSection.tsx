import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const team = [
  {
    name: "Rutmar Silde",
    role: "CEO",
    bio: "Leads the company with a clear vision, driving AI innovation and strategic growth across products and partnerships.",
    photo: "/images/team/rutmar-silde-card.jpg",
  },
  {
    name: "Janno Stern",
    role: "Founder",
    bio: "Builds breakthrough products with purpose, combining technical expertise, creative thinking, and unstoppable execution from idea to launch.",
    photo: "/images/team/janno-stern-card.jpg",
  },
  {
    name: "Oskar Pärle",
    role: "Head Of Sales",
    bio: "Leads revenue growth end-to-end—building pipeline, winning key accounts, and creating repeatable sales processes. Turns customer needs into clear go-to-market strategy and long-term partnerships.",
    photo: "/images/team/oskar-parle.jpg",
  },
];

/** "Teamwork-driven. Success-oriented." — leadership cards. */
export function TeamSection() {
  return (
    <Section muted containerClassName="flex flex-col gap-12">
      <Reveal>
        <SectionHeading
          title={
            <>
              Teamwork-driven. <br />
              Success-oriented.
            </>
          }
        />
      </Reveal>
      <ul className="grid gap-6 md:grid-cols-3">
        {team.map(({ name, role, bio, photo }) => (
          <li key={name} className="flex flex-col gap-6 pb-4">
            <div className="relative h-[278px] overflow-hidden rounded-xl">
              <Image
                src={photo}
                alt={name}
                fill
                sizes="(min-width: 1200px) 384px, (min-width: 810px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 text-ink">
              <div className="flex flex-col gap-1">
                <p className="text-lg leading-[27px] font-bold">{name}</p>
                <p className="text-copy">{role}</p>
              </div>
              <p className="text-copy">{bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
