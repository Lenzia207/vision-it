import { Link } from "@/app/i18n/routing";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { CampCurrieCaseStudyData } from "../../data/case-studies-types";
import { nextCaseStudyHref } from "../../data/case-study-order";
import { display } from "../camp-currie-styles";

interface CampCurrieNextSectionProps {
  next: CampCurrieCaseStudyData["next"];
  contact: CampCurrieCaseStudyData["contact"];
  locale: string;
}

export default function CampCurrieNextSection({ next, contact, locale }: CampCurrieNextSectionProps) {
  return (
    <section className={`${sectionX} pb-[clamp(72px,8vw,104px)]`}>
      <div className="max-w-[1180px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-4">
        <Link href={nextCaseStudyHref("camp-currie")} locale={locale} className="flex flex-col gap-2.5 p-8 rounded-[20px] bg-white no-underline text-[#171717]">
          <span className="text-[13px] text-[#5A5A5A]">{next.label} →</span>
          <span className={`${display} text-[28px] uppercase`}>{next.title}</span>
        </Link>
        <Link href="/#contact" locale={locale} className="flex flex-col gap-2.5 p-8 rounded-[20px] bg-[#E5A130] no-underline text-[#171717]">
          <span className="text-[13px] font-semibold">{contact.label}</span>
          <span className={`${display} text-[28px] uppercase`}>{contact.title} →</span>
        </Link>
      </div>
    </section>
  );
}
