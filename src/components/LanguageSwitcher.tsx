"use client";

import { routing, usePathname } from "@/app/i18n/routing";
import { useParams } from "next/navigation";


export function SwitchLanguage() {
    const pathname = usePathname();
    const params = useParams();
    const currentLocale = params.locale as string;

    const handleLanguageSwitch = () => {
        const newLocale = currentLocale === "de" ? "en" : "de";
        const normalized = normalizePathForLocaleSwitch(pathname || "/", Array.from(routing.locales));
        const newPath = `/${newLocale}${normalized}`;
        // full reload for SSG-hosted site
        window.location.assign(newPath);
    };

    return (
        <button
            onClick={handleLanguageSwitch}
            className="relative z-50 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
            style={{ background: "transparent" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-surface)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            aria-label={`Switch to ${currentLocale === "de" ? "English" : "German"}`}
        >
            {currentLocale === "de" ? (
                // UK flag for switching to English
                <svg
                    viewBox="0 0 60 30"
                    className="w-6 h-4 rounded"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <clipPath id="s">
                        <path d="M0,0 v30 h60 v-30 z" />
                    </clipPath>
                    <clipPath id="t">
                        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                    </clipPath>
                    <g clipPath="url(#s)">
                        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                        <path
                            d="M0,0 L60,30 M60,0 L0,30"
                            clipPath="url(#t)"
                            stroke="#C8102E"
                            strokeWidth="4"
                        />
                        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                    </g>
                </svg>
            ) : (
                // Austrian flag for switching to German
                <svg
                    viewBox="0 0 900 600"
                    className="w-6 h-4 rounded"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect fill="#ED2939" width="900" height="600" />
                    <rect fill="#FFFFFF" y="200" width="900" height="200" />
                </svg>
            )}
        </button>
    );
}


// Utility to normalize paths for locale switching
export function normalizePathForLocaleSwitch(path = "/", locales: string[]) {
  const segments = path.split("/").filter(Boolean); // remove empty parts
  if (segments.length > 0 && locales.includes(segments[0])) {
    segments.shift(); // remove existing locale
  }
  if (segments.length === 0) return "/";
  return `/${segments.join("/")}/`; // keep trailing slash per next.config
}