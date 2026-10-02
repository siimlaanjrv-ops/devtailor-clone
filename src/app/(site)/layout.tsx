import { SiteChrome } from "@/components/layout/SiteChrome";

/** Every regular page shares the header, footer and cookie banner. */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return <SiteChrome>{children}</SiteChrome>;
}
