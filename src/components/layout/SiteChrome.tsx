import type { ReactNode } from "react";
import { CookieBanner } from "./CookieBanner";
import { Footer } from "./Footer";
import { Header } from "./Header";

/**
 * Header, footer and cookie banner around page content. Used by the (site)
 * route-group layout and by the 404 page, which renders outside that group.
 * The standalone offer template sits outside the group and gets neither.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
