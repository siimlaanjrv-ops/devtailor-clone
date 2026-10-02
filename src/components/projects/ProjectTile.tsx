import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import type { Project } from "@/data/projects";

/**
 * Wide project card used on /projects and in "See more.": image, name and
 * summary, with the same hover zoom + arrow badge as the home cards.
 */
export function ProjectTile({ project, sizes }: { project: Project; sizes: string }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      // The 1px outline is an overlay (like Framer's borders) so it never shifts layout.
      className="group relative flex flex-col overflow-hidden rounded-[10px] pb-4 after:pointer-events-none after:absolute after:inset-0 after:rounded-[10px] after:border after:border-divider"
    >
      <div className="relative aspect-[595/293] overflow-hidden rounded-xl">
        <Image
          src={project.image.src}
          alt={project.name}
          fill
          sizes={sizes}
          className="rounded-lg object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <span className="absolute top-[11px] right-[11px] flex size-[34px] -translate-y-[46px] -rotate-45 items-center justify-center rounded-full bg-ink text-white transition-transform duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-45">
          <ArrowUpRightIcon width={23} height={23} />
        </span>
      </div>
      {/* pb-10 = 32px padding + the two empty 4px-gap rows of the original. */}
      <div className="flex flex-col gap-1 px-8 pt-8 pb-10">
        <p className="text-lg leading-[27px] font-bold text-ink">{project.name}</p>
        <p className="leading-[28.8px] text-body">{project.summary}</p>
      </div>
    </Link>
  );
}
