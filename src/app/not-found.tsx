import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-svh items-center justify-center px-6 pt-[140px] pb-24">
      <GradientBackdrop overlay="hero" />
      <div className="flex max-w-[580px] flex-col items-center gap-5 text-center text-ink">
        <h1 className="font-display text-5xl leading-[1.2]">404</h1>
        <h2 className="font-display text-2xl leading-[1.4]">Page not found</h2>
        <p className="text-copy">
          The page you’re looking for doesn’t exist or may have moved. Let’s get you back on track
        </p>
        <Button href="/">Home page</Button>
      </div>
    </section>
  );
}
