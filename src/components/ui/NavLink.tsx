import Link from "next/link";

/** Text link used in the header and footer navigation. */
export function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="rounded-full px-3.5 py-2 text-base leading-[28.8px] text-ink transition-colors duration-200 hover:bg-white"
    >
      {children}
    </Link>
  );
}
