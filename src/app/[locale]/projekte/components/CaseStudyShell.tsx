import { ReactNode } from "react";
import Footer from "../../home/sections/Footer";
import { Link } from "@/app/i18n/routing";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { caseStudySectionX } from "./case-study-styles";

interface CaseStudyShellProps {
  locale: string;
  /** next/font variable classes plus the page's base font, text and background colours. */
  className: string;
  children: ReactNode;
}

/** Page frame of a case study: the client's look on top, the regular site footer below. */
export default function CaseStudyShell({ locale, className, children }: CaseStudyShellProps) {
  return (
    <main className="min-h-screen">
      <div className={`case-study ${className}`}>{children}</div>
      <Footer locale={locale} />
    </main>
  );
}

interface CaseStudyNavProps {
  locale: string;
  nav: { ariaLabel: string; back: string; label: string };
  className: string;
  backClassName: string;
  labelClassName: string;
}

export function CaseStudyNav({ locale, nav, className, backClassName, labelClassName }: CaseStudyNavProps) {
  return (
    <nav
      aria-label={nav.ariaLabel}
      className={`flex flex-wrap justify-between items-center gap-3 py-4 ${caseStudySectionX} ${className}`}
    >
      <Link href="/#projekte" locale={locale} className={`inline-flex items-center min-h-11 no-underline ${backClassName}`}>
        ← {nav.back}
      </Link>
      <span className="flex items-center gap-3">
        <span className={labelClassName}>{nav.label}</span>
        <LanguageSwitcher />
      </span>
    </nav>
  );
}
