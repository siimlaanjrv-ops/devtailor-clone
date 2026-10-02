import type { Metadata } from "next";
import {
  OfferAbout,
  OfferContact,
  OfferCost,
  OfferHero,
  OfferProjects,
  OfferPurpose,
  OfferStart,
  OfferTimeline,
} from "@/components/offer/OfferSections";

export const metadata: Metadata = { title: "Project offer" };

/**
 * Standalone project-offer template (linked only from the original's
 * sitemap). It lives outside the (site) group: no site header or footer.
 */
export default function OfferTemplatePage() {
  return (
    <main>
      <OfferHero />
      <OfferPurpose />
      <OfferStart />
      <OfferCost />
      <OfferTimeline />
      <OfferAbout />
      <OfferProjects />
      <OfferContact />
    </main>
  );
}
