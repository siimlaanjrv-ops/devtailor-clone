import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

/** Bold list with check-mark bullets; pass `className` to change the layout (e.g. a grid). */
export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 leading-6 font-semibold text-body">
          <CheckIcon className="shrink-0 text-black" />
          {item}
        </li>
      ))}
    </ul>
  );
}
