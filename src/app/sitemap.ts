import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/data/site";

// Static export: generated once at build time as /sitemap.xml.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about-us",
    "/projects",
    "/career",
    "/contact",
    ...projects.map((p) => `/projects/${p.slug}`),
    "/offer-templates/devtailor",
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
