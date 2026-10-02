"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/ui/NavLink";
import { headerNav } from "@/data/site";
import { cn } from "@/lib/cn";
import { LanguageSelect } from "./LanguageSelect";

/**
 * Site header. On tablet/desktop it overlays the page hero; on mobile it is
 * a fixed bar that expands into a full-width menu.
 */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 md:absolute md:px-6"
      // Close the mobile menu once any link inside it is followed.
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) setOpen(false);
      }}
    >
      <div
        className={cn(
          "overflow-hidden bg-card px-6 pt-6 transition-[height] duration-300 ease-out",
          "md:container-site md:flex md:h-[105px]! md:items-center md:bg-transparent md:px-0 md:py-4",
          open ? "h-[395px]" : "h-20",
        )}
      >
        <div className="flex items-center justify-between md:flex-1">
          <Link href="/" aria-label="Devtailor home">
            <Image src="/images/logo.svg" alt="Devtailor Software" width={112} height={32} priority />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
            className="relative size-6 md:hidden"
          >
            <span
              className={cn(
                "absolute left-1 h-0.5 w-[17px] rounded-[10px] bg-ink transition-transform duration-300",
                open ? "top-[11px] rotate-45" : "top-[7px]",
              )}
            />
            <span
              className={cn(
                "absolute left-1 h-0.5 w-[17px] rounded-[10px] bg-ink transition-transform duration-300",
                open ? "top-[11px] -rotate-45" : "top-[15px]",
              )}
            />
          </button>
        </div>

        <nav
          id="site-nav"
          className={cn(
            "mt-8 flex flex-col items-center gap-1.5 transition-[visibility] duration-300",
            "md:visible md:mt-0 md:flex-row md:justify-end md:gap-4",
            // Keep collapsed mobile links out of the tab order.
            !open && "invisible",
          )}
        >
          {headerNav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <Button href="/contact" className="w-full md:w-auto">
            Contact us
          </Button>
          <LanguageSelect />
        </nav>
      </div>
    </header>
  );
}
