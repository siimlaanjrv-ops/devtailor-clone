import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: ReactNode;
  /** Small line shown above the title. */
  eyebrow?: string;
  description?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
  className?: string;
};

/** Display-font heading with optional eyebrow and description. */
export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "center",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "mx-auto max-w-[540px] text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && <p className="text-copy text-body">{eyebrow}</p>}
      <Tag
        className={cn(
          "font-display text-ink",
          Tag === "h1" ? "text-5xl leading-[1.2]" : "text-4xl leading-[1.2]",
        )}
      >
        {title}
      </Tag>
      {typeof description === "string" ? <p className="text-copy text-body">{description}</p> : description}
    </div>
  );
}
