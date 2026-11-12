"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { StoreLinks } from "../data/case-studies-types";

const TOAST_DURATION_MS = 3000;

function getBadges(stores: StoreLinks, locale: string) {
  const badgeLocale = locale === "de" ? "de" : "en";
  return [
    { ...stores.appStore, src: "/images/badges/app-store-en.svg", width: 150, height: 50, className: "h-[50px] w-auto" },
    // The Google Play PNGs carry transparent padding, offset via negative margin
    { ...stores.googlePlay, src: `/images/badges/google-play-${badgeLocale}.png`, width: 168, height: 65, className: "h-[65px] w-auto -my-2 -mx-1" },
  ];
}

// Official store badges; each one becomes an external link once its url is set,
// until then a click shows a "Coming Soon" toast
export default function StoreBadges({ stores, locale }: { stores: StoreLinks; locale: string }) {
  const [toastVisible, setToastVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  function showComingSoon() {
    clearTimeout(hideTimer.current);
    setToastVisible(true);
    hideTimer.current = setTimeout(() => setToastVisible(false), TOAST_DURATION_MS);
  }

  return (
    <>
      {getBadges(stores, locale).map((badge) => {
        const image = <Image src={badge.src} alt={badge.alt} width={badge.width} height={badge.height} className={badge.className} />;
        return badge.url ? (
          <a key={badge.src} href={badge.url} target="_blank" rel="noopener noreferrer" className="inline-flex">
            {image}
          </a>
        ) : (
          <button key={badge.src} type="button" onClick={showComingSoon} className="inline-flex cursor-pointer">
            {image}
          </button>
        );
      })}
      <div
        role="status"
        aria-live="polite"
        className={`fixed top-12 left-1/2 z-50 -translate-x-1/2 flex items-center gap-2 px-5 py-3 rounded-[14px] bg-[#181411] text-white font-semibold shadow-lg transition-all duration-300 ${
          toastVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span aria-hidden="true">🚀</span> Coming Soon
      </div>
    </>
  );
}
