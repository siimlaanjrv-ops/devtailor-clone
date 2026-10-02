"use client";

import { useEffect, useRef } from "react";

const PORTAL_ID = "146785902";
const FORM_ID = "e97e2901-5c26-492a-8ef4-e226eac85272";
const REGION = "eu1";

/**
 * Devtailor's own HubSpot contact form, embedded exactly like the original
 * site does. HubSpot's loader scans the page for `.hs-form-frame` elements
 * when it runs, so the script is (re)attached on every mount — that also
 * covers client-side navigation to /contact.
 */
export function HubSpotForm() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const script = document.createElement("script");
    script.src = `https://js-${REGION}.hsforms.net/forms/embed/${PORTAL_ID}.js`;
    script.defer = true;
    host.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div ref={ref} className="min-h-[604px] w-full md:min-h-[428px]">
      <div className="hs-form-frame" data-region={REGION} data-form-id={FORM_ID} data-portal-id={PORTAL_ID} />
    </div>
  );
}
