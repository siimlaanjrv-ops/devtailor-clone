import { CtaBanner } from "./CtaBanner";

/** Closing call-to-action shared by most pages. */
export function BuildTogetherCta() {
  return (
    <CtaBanner
      title="Let’s Build the Future Together"
      text="At Devtailor, we’re more than a tech company—we’re your partner in innovation. Together, we’ll unlock new possibilities and drive your business forward. Ready to transform your business with AI?"
      cta={{ label: "Contact us", href: "/contact" }}
    />
  );
}
