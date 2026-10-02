import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_URL } from "@/data/site";
import "./globals.css";

// Inter 4.0 (OFL), the same latin build the original serves. Google Fonts'
// Inter omits the character variants (cv03, cv11 …) the body copy uses.
const inter = localFont({
  variable: "--font-inter",
  src: [
    { path: "../fonts/Inter-Regular.woff2", weight: "400" },
    { path: "../fonts/Inter-SemiBold.woff2", weight: "600" },
    { path: "../fonts/Inter-Bold.woff2", weight: "700" },
  ],
});

// Devtailor's licensed display face, used for all headings.
const neueHaas = localFont({
  variable: "--font-neue-haas",
  src: "../fonts/NeueHaasUnicaW1G-Bold.woff2",
  weight: "400",
});

const description =
  "Tailored AI that delivers results. We design and build ethical, secure, and scalable solutions—from automation and data analysis to custom tools—with rapid prototyping and 10+ years of experience.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Devtailor — Tailored AI Solutions That Deliver Real Business Value",
    template: "%s - Devtailor",
  },
  description,
  openGraph: { description, images: "/og-image.png" },
  icons: {
    icon: [
      { url: "/favicon-light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

/*
 * Runs before hydration:
 * 1. Adds the `js` class that enables the <Reveal> hidden state, so content
 *    stays visible without JavaScript.
 * 2. Removes comment/whitespace nodes that hosts inject into <head> (Netlify
 *    adds a "hosted on Netlify" comment), which would otherwise make React's
 *    hydration fail and re-render the whole page on the client.
 */
const headScript = `document.documentElement.classList.add('js');
for (const n of [...document.head.childNodes]) if (n.nodeType === 8 || (n.nodeType === 3 && !n.textContent.trim())) n.remove();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${neueHaas.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
