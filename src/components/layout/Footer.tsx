import Image from "next/image";
import Link from "next/link";
import { NavLink } from "@/components/ui/NavLink";
import { footerNav } from "@/data/site";
import { CookieSettingsButton } from "./CookieBanner";

export function Footer() {
  return (
    <footer className="px-6 py-16 md:py-24">
      <div className="container-site flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <Link
            href="/"
            aria-label="Devtailor home"
            className="flex justify-center md:w-[345px] md:justify-start"
          >
            <Image src="/images/logo.svg" alt="Devtailor Software" width={112} height={32} />
          </Link>
          <nav className="flex flex-col items-center gap-1.5 md:flex-row md:gap-3">
            {footerNav.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="h-px bg-divider" />

        <div className="flex flex-col items-center gap-2.5 md:flex-row">
          <div className="flex flex-col items-center gap-2.5 md:w-[419px] md:flex-col-reverse md:items-start lg:w-[529px] lg:flex-row lg:items-center">
            <p className="max-w-[274px] text-center leading-[28.8px] text-body md:max-w-none md:text-left lg:w-[339px]">
              Proud member of Estonian Chamber of Commerce and Industry
            </p>
            <Image
              src="/images/chamber-of-commerce.png"
              alt="Estonian Chamber of Commerce and Industry member"
              width={180}
              height={70}
            />
          </div>
          <div className="flex flex-1 flex-col items-center gap-2.5 md:items-end">
            <CookieSettingsButton />
            <p className="text-center leading-[28.8px] text-body">
              Copyright © 2025 Devtailor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
