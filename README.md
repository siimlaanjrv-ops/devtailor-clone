**English** | [Eesti](README.et.md)

# Devtailor — website clone

A pixel-accurate rebuild of [devtailor.com](https://www.devtailor.com) (originally built with Framer) in **Next.js 16, React 19, TypeScript and Tailwind CSS 4**, exported as a fully static site and deployed on Netlify.

- **Live site:** https://devtailor-clone.netlify.app
- **Source:** https://github.com/siimlaanjrv-ops/devtailor-clone
- **Pages:** all 17 pages in the original's sitemap: home, `/projects` (with filters), all 11 case studies under `/projects/[slug]`, `/about-us`, `/career`, `/contact` and the standalone offer template `/offer-templates/devtailor`, plus a custom 404
- **Responsive:** matches the original at its three Framer breakpoints: mobile (< 810 px), tablet (810–1199 px) and desktop (≥ 1200 px)

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
npx serve out      # preview the production build
```

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Development server with hot reload            |
| `npm run build`     | Type-checks and exports the static site       |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript) |
| `npm run typecheck` | Generates route types and runs `tsc`          |
| `npm run format`    | Formats everything with Prettier              |

## Tech stack and why

| Choice                                 | Why                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js (App Router)**               | A multi-page marketing site benefits from file-based routing and from HTML that is pre-rendered at build time (fast first paint, good SEO, works without JavaScript). A plain Vite + React SPA would ship an empty HTML shell, need a client-side router and Netlify redirect rules.                                                                  |
| **Static export (`output: "export"`)** | Every page is known at build time, so no server is needed. Netlify serves plain files from its CDN: cheaper, faster and with nothing to maintain at runtime.                                                                                                                                                                                          |
| **TypeScript**                         | Typed content (`Project`, `Service`, `Sector`) catches mistakes in the 11 case studies at compile time. Route `params` are typed through Next's generated `PageProps`.                                                                                                                                                                                |
| **Tailwind CSS 4**                     | Pixel-matching means hundreds of measured values (`pt-[140px]`, `gap-[63px]`). Tailwind keeps them next to the markup, makes responsive variants explicit (`md:` / `lg:`) and keeps all design tokens in one `@theme` block. The visual result would be identical with CSS Modules; Tailwind is simply faster to match and easier to keep consistent. |
| **`next/font/local`**                  | Self-hosted fonts with automatic preloading and size-adjusted fallbacks, so text does not shift when the fonts load.                                                                                                                                                                                                                                  |
| **No UI or animation libraries**       | Everything the site needs (scroll reveals, hover effects, marquee, mobile menu) is a few lines of CSS or a small hook. That keeps the JavaScript bundle small and the code easy to read.                                                                                                                                                              |

## Project structure

```
src/
├── app/                      # Routes (App Router)
│   ├── layout.tsx            # Root: fonts, metadata, pre-hydration script
│   ├── globals.css           # Tailwind import, design tokens, custom utilities
│   ├── (site)/               # Route group: pages with header, footer and cookie banner
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Home
│   │   ├── projects/page.tsx # Project list with filters
│   │   ├── projects/[slug]/  # Case study template (pre-rendered for all 11 projects)
│   │   └── about-us/, career/, contact/
│   ├── offer-templates/devtailor/  # Standalone offer page (no site header/footer)
│   ├── sitemap.ts, robots.ts # Generated sitemap.xml and robots.txt
│   └── not-found.tsx         # Custom 404
├── components/
│   ├── ui/                   # Small building blocks: Button, Section, SectionHeading, Reveal, …
│   ├── layout/               # Header (+ mobile menu), Footer, CookieBanner, LanguageSelect, SiteChrome
│   ├── sections/             # Reusable page sections: PageHero, FeatureGrid, StatsSection, CtaBanner, …
│   ├── home/, about/, contact/, projects/, offer/   # Page-specific components
│   └── icons.tsx             # Line icons from the original, as React components
├── data/
│   ├── projects.ts           # All 11 case studies (typed)
│   ├── offer.ts              # Offer template content
│   └── site.ts               # Site URL, navigation and booking links
├── fonts/                    # Inter + Neue Haas Unica (woff2)
└── lib/cn.ts                 # Class-name helper
public/images/                # Optimised images with readable names
```

### How it fits together

- **Content lives in data, not in templates.** `src/data/projects.ts` holds every case study: title, summary, services, sectors, technologies, Q&A and gallery. One template (`projects/[slug]/page.tsx`) renders all 11 pages. `generateStaticParams` pre-renders them, and `dynamicParams = false` makes any unknown slug a 404. The `/projects` filter and the "See more." block read from the same array.
- **Layouts via a route group.** The original's offer template has no site header or footer. The regular pages live in the `(site)` route group, whose layout adds them; the group name does not appear in URLs.
- **Components are layered.** `ui/` holds primitives with no page knowledge. `sections/` combines them into sections that appear on several pages (for example `StatsSection` is used on home with 4 columns and on About with 3 columns plus labels). Page folders hold anything used once.
- **Server Components by default.** Only five components run in the browser: `Header` (menu state), `ProjectsExplorer` (filter state), `CookieBanner` (localStorage), `HubSpotForm` (third-party script) and `Reveal` (IntersectionObserver). Everything else ships as HTML only.
- **Design tokens** (colours, fonts, shadows, breakpoints) are defined once in `globals.css` under `@theme`, and the breakpoints are set to the original's 810 px and 1200 px. Custom utilities cover the repeated patterns: `container-site` (1200 px column), `section-y` (64/96 px section padding), `text-copy` (body text style) and `bg-brand-gradient`.

## How pixel accuracy was achieved

Nothing was measured by eye. During development I used a set of Playwright scripts against both the original and the clone:

1. **Layout dumps:** for every page at 1440, 1000 and 390 px, the original's DOM was saved as a tree of positions, sizes, paddings, gaps, colours, radii, shadows and font settings, together with full-page screenshots.
2. **Content extraction:** the case-study pages, filter mappings (services/sectors per project) and SVG icons were extracted programmatically, so no text was retyped by hand.
3. **Numeric diff:** every text element on the clone is matched to the same text on the original, and its position, size, font and colour are compared. Any difference above 2 px is reported. All pages are within 1–2 px at all three widths.
4. **Visual diff:** side-by-side full-page screenshots to catch what numbers miss (backgrounds, images, borders, hover states).

A few non-obvious findings from this process:

- **Fonts.** The original uses Inter's character variants (`cv03`, `cv04`, `cv09`, `cv11`, e.g. the single-storey "a") for body text only. Google Fonts' Inter does not include them, which changed glyph widths and therefore line breaks on mobile. The clone self-hosts the same Inter 4.0 build as the original.
- **Borders.** Framer draws borders as `::after` overlays that do not affect layout. The clone does the same (overlay pseudo-elements and inset shadows) so card sizes stay identical.
- **Equal-height rows.** Framer grids use `grid-auto-rows: 1fr`, which makes mobile project cards as tall as the tallest one. The clone reproduces this with `auto-rows-fr`.

## Interactions

- **Rolling-text buttons:** the label is rendered twice in a 24 px clip and slides up on hover.
- **Project cards:** the image zooms to 110% and an arrow badge drops in and rotates.
- **Scroll reveals:** elements fade in and rise 30 px (or drop 40 px / scale from 90% in heroes), like the original's Framer "appear" effects. They are disabled with `prefers-reduced-motion`, and the hidden state only applies once JavaScript is running, so content is never lost without JS.
- **Mobile menu:** animated height and hamburger-to-cross icon. It closes after navigation and keeps collapsed links out of the tab order.
- **Client logo marquee:** CSS-only infinite scroll with faded edges.
- **Cookie banner:** the choice is stored in `localStorage` and can be reopened from "Cookie Settings" in the footer.
- **Project filters:** service and sector filters on `/projects`, using the same project–category mapping as the original.

## Intentional differences from the original

The original has a few bugs. They were fixed rather than copied:

| Original                                                                                                                                                                         | Clone                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| The last checklist item on home ("Ensure your AI solutions are ethical…") and the last perk on Career (tablet) never become visible, because their appear animation never fires. | Visible.                                                            |
| On tablet the process steps read 1, 4, 2, 5, 3, 6.                                                                                                                               | 1–6 in order.                                                       |
| "See open positions" on Career is a button with no link.                                                                                                                         | Opens an email to hello@devtailor.com.                              |
| The company name is misspelled "Detavailor" in two places.                                                                                                                       | "Devtailor".                                                        |
| Every main page has the same `<title>`, and case studies end with "- My Framer Site".                                                                                            | A unique title per page, e.g. "Native TV apps - Devtailor".         |
| Case studies have no `<h1>` (the title is an `<h2>`).                                                                                                                            | `<h1>` with the same styling.                                       |
| Call-to-action banners use `<h3>` directly after the page `<h1>`, skipping a level.                                                                                              | `<h2>` with the same styling (correct heading order).               |
| The offer template has no mobile layout: below 810 px its columns squeeze to about 110 px and images overlap the text.                                                           | Desktop and tablet match the original; on mobile the columns stack. |
| The offer template's map shows Framer B.V. in Amsterdam (Framer's default map location).                                                                                         | Shows Devtailor's office at Valukoja 8/2, Tallinn.                  |
| Missing space in "…hear from you.Whether…" on the offer template.                                                                                                                | Space added.                                                        |

Some original content was kept as is even where it looks like a placeholder, for example the AI Procurement case study, whose "Visit website" and "See app" buttons link to framer.com, and the offer template's sample figures (XXX, 20 hours × €40).

The offer template (`/offer-templates/devtailor`) is not linked from any page of the original; it is only listed in the original's `sitemap.xml`. It was included so that every public page is covered.

## Quality checks

Measured on the deployed site with Lighthouse (home page; the original was measured the same way for comparison):

|                | Clone (mobile) | Original (mobile) | Clone (desktop) | Original (desktop) |
| -------------- | -------------- | ----------------- | --------------- | ------------------ |
| Performance    | 89             | 73                | 100             | 96                 |
| Accessibility  | 100            | 97                | 100             | 97                 |
| Best Practices | 100            | 100               | 100             | 100                |
| SEO            | 100            | 100               | 100             | 100                |
| LCP            | 3.7 s          | 5.6 s             | 0.7 s           | 1.3 s              |
| CLS            | 0              | 0.05              | 0.001           | 0.001              |

Accessibility is 100 on every page. Every route was also checked for console errors, broken images, a single `<h1>`, alt text, unique IDs and horizontal overflow at 1440 px and 390 px.

Two production-only issues were found and fixed this way:

- **Hydration error on Netlify.** Netlify injects a "hosted on Netlify" comment into `<head>`, which made React re-render every page on the client (error #418). A small inline script removes it before hydration.
- **Slow LCP on mobile.** Hero text waited for JavaScript before fading in. Above-the-fold reveals now run as pure CSS animations on load, which cut the LCP element render delay from about 1.3 s to 0.17 s.

## Third-party assets

- **Neue Haas Unica W1G** is a commercial Monotype typeface licensed by Devtailor for devtailor.com. It is included only because this is a homework assignment for Devtailor and must not be reused elsewhere.
- **Inter** is licensed under the SIL Open Font License.
- **Contact form:** `/contact` embeds Devtailor's own HubSpot form, exactly like the original. **Submissions from the clone reach Devtailor's real HubSpot account.**
- All images, logos and texts belong to Devtailor and its clients.

## Deployment

`netlify.toml` configures everything: build command `npm run build`, publish directory `out`, Node 22, and long-term caching for hashed assets. Netlify automatically serves `out/404.html` for unknown URLs.

Next.js 16's static export writes client-navigation prefetch files as `__next.<segment>/__PAGE__.txt` while the browser requests `__next.<segment>.__PAGE__.txt`. Netlify resolves this automatically; a plain static server such as `npx serve out` does not, so local previews show harmless 404s for those prefetches (navigation still works).

On the Free plan, Netlify adds a "Powered by Netlify" badge to public projects. It covers the cookie banner's buttons, so it is turned off under **Project configuration → General → Powered by Netlify badge**, with a CSS rule in `globals.css` as a fallback.
