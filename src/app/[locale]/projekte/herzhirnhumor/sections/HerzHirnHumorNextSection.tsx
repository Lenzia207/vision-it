import { Link } from "@/app/i18n/routing";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { HerzHirnHumorCaseStudyData } from "../../data/case-studies-types";
import { nextCaseStudyHref } from "../../data/case-study-order";
import { display } from "../herzhirnhumor-styles";

interface HerzHirnHumorNextSectionProps {
  next: HerzHirnHumorCaseStudyData["next"];
  contact: HerzHirnHumorCaseStudyData["contact"];
  locale: string;
}

export default function HerzHirnHumorNextSection({ next, contact, locale }: HerzHirnHumorNextSectionProps) {
  return (
    <section className={`${sectionX} pb-[clamp(72px,8vw,104px)]`}>
      <div className="max-w-[1120px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-4">
        <Link href={nextCaseStudyHref("herzhirnhumor")} locale={locale} className="flex flex-col gap-2.5 p-8 rounded-3xl bg-[#FFFDF8] no-underline text-[#37372F]">
          <span className="text-xs font-semibold tracking-[.14em] uppercase text-[#5F7468]">{next.label} →</span>
          <span className={`${display} text-[28px] font-normal`}>{next.title}</span>
        </Link>
        <Link href="/#contact" locale={locale} className="flex flex-col gap-2.5 p-8 rounded-3xl bg-[#4C5D53] no-underline text-white">
          <span className="text-xs font-semibold tracking-[.14em] uppercase text-[#E6ECE8]">{contact.label}</span>
          <span className={`${display} text-[28px] font-normal`}>{contact.title} →</span>
        </Link>
      </div>
    </section>
  );
}
