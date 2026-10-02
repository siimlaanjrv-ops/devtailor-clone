import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { HubSpotForm } from "@/components/contact/HubSpotForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    // pt-28 = the 80px header band + 32px padding, as on the original.
    <section className="relative isolate px-6 pt-28 pb-8">
      {/* Split background: grey on the left, gradient image on the right (behind the details on mobile). */}
      <div aria-hidden className="absolute inset-x-0 top-20 bottom-0 -z-10 bg-card md:right-1/2" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-[1209px] -z-10 h-[398px] md:top-20 md:bottom-0 md:left-1/2 md:h-auto"
      >
        <Image
          src="/images/contact/background.png"
          alt=""
          fill
          sizes="(min-width: 810px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="container-site flex flex-col md:flex-row md:items-center">
        <div className="flex flex-col gap-10 py-8 md:w-1/2 md:pr-[30px] lg:w-[646px] lg:pr-[120px] lg:pl-8">
          <Reveal effect="down" className="flex flex-col gap-4">
            <p className="leading-6 font-semibold text-ink">Contact us</p>
            <h1 className="font-display text-5xl leading-[1.2] text-ink">Get in touch. Now.</h1>
            <p className="text-lg leading-[27px] text-body">
              We’re always happy to hear from you. Whether it’s about new business, joining our team or just
              general feedback.
            </p>
          </Reveal>
          <HubSpotForm />
        </div>

        <div className="flex flex-col gap-8 self-stretch pt-8 md:flex-1 md:pl-[30px] lg:pl-[60px]">
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-[27px] font-bold text-body">Visit the office.</p>
            <div className="flex flex-col gap-2.5 md:flex-row">
              <Detail title="Address">
                Valukoja 8/2
                <br />
                Öpiku maja, D sissepääs
                <br />
                11415 Tallinn
                <br />
                Estonia
              </Detail>
              <Detail title="Devtailor OÜ">
                Reg no: 12890714
                <br />
                VAT: EE101810128
              </Detail>
            </div>
          </div>
          <hr className="h-px border-0 bg-divider" />
          <div className="flex flex-col gap-2.5 md:flex-row">
            <Detail title="Email">
              <a href="mailto:hello@devtailor.com" className="text-ink underline">
                hello@devtailor.com
              </a>
            </Detail>
            <Detail title="Phone">
              <a href="tel:+3726615166" className="text-ink underline">
                +372 661 5166
              </a>
            </Detail>
          </div>
          <hr className="h-px border-0 bg-divider" />
        </div>
      </div>
    </section>
  );
}

function Detail({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5 md:flex-1">
      <p className="leading-6 font-semibold text-ink">{title}</p>
      <p className="text-copy text-body">{children}</p>
    </div>
  );
}
