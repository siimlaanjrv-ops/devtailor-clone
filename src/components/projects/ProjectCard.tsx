import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

/**
 * Home-page project card: image with a hover zoom and an arrow badge that
 * drops in from above, followed by the name, title and optional highlights.
 */
export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group flex flex-col gap-6 rounded-[10px] pb-4", className)}
    >
      <div className="relative h-[278px] overflow-hidden rounded-xl">
        <Image
          src={project.image.src}
          alt={project.name}
          fill
          sizes="(min-width: 1200px) 384px, (min-width: 810px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <span className="absolute top-[11px] right-[11px] flex size-[34px] -translate-y-[46px] -rotate-45 items-center justify-center rounded-full bg-ink text-white transition-transform duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-45">
          <ArrowUpRightIcon width={23} height={23} />
        </span>
      </div>
      <div className="flex flex-col gap-3 text-ink">
        <div className="flex flex-col gap-1">
          <p className="text-lg leading-[27px] font-bold">{project.name}</p>
          <p className="leading-6 font-semibold">{project.title}</p>
        </div>
        {/* Rendered even when empty: the original keeps the 12px gap. */}
        <ul className="text-copy list-disc pl-5">
          {project.highlights?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
