import { Link } from "@/app/i18n/routing";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { ElektrochemieCaseStudyData } from "../../data/case-studies-types";
import { nextCaseStudyHref } from "../../data/case-study-order";
import { display, mono } from "../elektrochemie-styles";

interface ElektrochemieNextSectionProps {
  next: ElektrochemieCaseStudyData["next"];
  contact: ElektrochemieCaseStudyData["contact"];
  locale: string;
}

export default function ElektrochemieNextSection({ next, contact, locale }: ElektrochemieNextSectionProps) {
  return (
    <section className={`${sectionX} py-[clamp(64px,8vw,96px)]`}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-4">
        <Link
          href={nextCaseStudyHref("elektrochemie")}
          locale={locale}
          className="flex flex-col gap-2.5 p-8 rounded-xl bg-white border border-[#D9DFE7] no-underline text-[#0E2340]"
        >
          <span className={`${mono} text-xs text-[#5B6B80]`}>{next.label} →</span>
          <span className={`${display} text-[28px] font-semibold`}>{next.title}</span>
        </Link>
        <Link href="/#contact" locale={locale} className="flex flex-col gap-2.5 p-8 rounded-xl bg-[#1F4F83] no-underline text-white">
          <span className={`${mono} text-xs text-[#70C3D8]`}>{contact.label}</span>
          <span className={`${display} text-[28px] font-semibold`}>{contact.title} →</span>
        </Link>
      </div>
    </section>
  );
}
