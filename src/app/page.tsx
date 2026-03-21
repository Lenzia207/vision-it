"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SUPPORTED_LOCALES = ["en", "de"];
const DEFAULT_LOCALE = "en";

function detectBrowserLocale(): string {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;

  const browserLangs = navigator.languages || [navigator.language];

  for (const lang of browserLangs) {
    const short = lang.split("-")[0];
    if (SUPPORTED_LOCALES.includes(short)) return short;
  }

  return DEFAULT_LOCALE;
}

export default function RootRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const locale = detectBrowserLocale();
    router.replace(`/${locale}`);
  }, [router]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] glow-blue pointer-events-none" />
      
      {/* Loading */}
      <div className="relative z-10 text-center">
        <div className="inline-block">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>Loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
