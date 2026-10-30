"use client";

import { useParams, usePathname } from "next/navigation";
import { routing } from "@/app/i18n/routing";

const languages: Record<string, { short: string; name: string }> = {
  de: { short: "DE", name: "Deutsch" },
  en: { short: "EN", name: "English" },
};

interface LanguageSwitcherProps {
  /** Layout and text colour of the group; the links inherit the colour. */
  className?: string;
  /** Colour of the current language, e.g. the lime highlight in the main navigation. */
  activeClassName?: string;
}

/** Links to the current page in each language. */
export default function LanguageSwitcher({ className = "", activeClassName = "" }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const currentLocale = useParams().locale as string;
  // Page path without the locale segment and trailing slash
  const path = pathname.replace(/^\/[^/]+/, "").replace(/\/+$/, "");

  return (
    <div
      role="group"
      aria-label={currentLocale === "de" ? "Sprache wählen" : "Choose language"}
      className={`flex items-center font-mono text-xs font-medium uppercase tracking-[0.14em] ${className}`}
    >
      {routing.locales.map((locale) => {
        const isCurrent = locale === currentLocale;
        return (
          // Plain link: a full reload for SSG-hosted site
          <a
            key={locale}
            href={`/${locale}${path}/`}
            lang={locale}
            hrefLang={locale}
            aria-label={languages[locale].name}
            aria-current={isCurrent ? "true" : undefined}
            className="flex items-center justify-center min-w-9 min-h-9 max-[1059px]:min-w-11 max-[1059px]:min-h-11 no-underline"
          >
            <span
              className={`py-1 border-b-2 transition-[opacity,border-color] ${
                isCurrent ? `border-current ${activeClassName}` : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              {languages[locale].short}
            </span>
          </a>
        );
      })}
    </div>
  );
}
