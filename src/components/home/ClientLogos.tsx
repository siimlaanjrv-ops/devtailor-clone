import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const clients = [
  { name: "Telema", src: "/images/clients/telema.png" },
  { name: "SportScientia", src: "/images/clients/sportscientia.png" },
  { name: "DocAid", src: "/images/clients/docaid.png" },
  { name: "Ampwise", src: "/images/clients/ampwise.png" },
  { name: "Jupiter", src: "/images/clients/jupiter.png" },
  { name: "Gridraven", src: "/images/clients/gridraven.png" },
];

/** "For the best, with the best." — endlessly scrolling client logo strip. */
export function ClientLogos() {
  // The list is rendered twice so the track can loop seamlessly at -50%.
  const track = [...clients, ...clients];
  return (
    <section className="px-6 pb-16 md:pb-24">
      <div className="container-site flex flex-col gap-8 md:gap-12">
        <Reveal>
          <SectionHeading
            title="For the best, with the best."
            description="We collaborate with industry leaders and innovators to bring you the best solutions."
          />
        </Reveal>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,#000_12.5%,#000_87.5%,transparent_100%)]">
          <ul className="flex w-max animate-[marquee_30s_linear_infinite] motion-reduce:animate-none">
            {track.map((client, i) => (
              <li key={i} aria-hidden={i >= clients.length} className="mr-8 shrink-0">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={140}
                  height={24}
                  className="h-6 w-[140px] object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
