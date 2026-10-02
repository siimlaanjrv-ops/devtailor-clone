import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` emits plain HTML/CSS/JS into `out/`,
  // which Netlify serves directly from its CDN without a Node server.
  output: "export",
  images: {
    // The default image optimizer needs a server; images are pre-sized
    // locally instead (see public/images).
    unoptimized: true,
  },
};

export default nextConfig;
