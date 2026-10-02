"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";
const OPEN_EVENT = "cookie-settings:open";

function readConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

/** Cookie consent card, shown until the visitor accepts or rejects. */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reading localStorage must wait until after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!readConsent()) setVisible(true);
    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Storage unavailable (private mode): just hide for this visit.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      className="fixed right-0 bottom-0 z-[60] w-full p-5 md:w-[400px]"
    >
      <div className="rounded-[14px] bg-white p-5 shadow-[inset_0_0_0_1px_rgb(0_0_0/0.05)]">
        <p id="cookie-title" className="text-sm font-bold text-black">
          Cookie Settings
        </p>
        <p className="mt-2.5 text-sm leading-[21px] text-[#444]">
          We use cookies to enhance your experience, analyze site traffic and deliver personalized content.
        </p>
        <div className="mt-4 flex gap-2.5">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="h-[34px] flex-1 rounded-lg bg-[#eee] text-sm text-[#444]"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="h-[34px] flex-1 rounded-lg bg-black text-sm text-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

/** Footer link that reopens the cookie banner. */
export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className="text-sm leading-[14px] text-ink"
    >
      Cookie Settings
    </button>
  );
}
