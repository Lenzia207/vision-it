import { Link } from "@/app/i18n/routing";
import { caseStudiesUrl } from "@/app/configs/configs";
import { SplitnCaseStudyData } from "../../data/case-studies-types";
import { sectionX } from "../splitn-styles";

interface SplitnNextSectionProps {
  next: SplitnCaseStudyData["next"];
  contact: SplitnCaseStudyData["contact"];
  locale: string;
}

export default function SplitnNextSection({ next, contact, locale }: SplitnNextSectionProps) {
  return (
    <section className={`${sectionX} pb-[clamp(72px,8vw,104px)]`}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-4">
        <Link href={`${caseStudiesUrl}/elektrochemie`} locale={locale} className="flex flex-col gap-2.5 p-8 rounded-3xl bg-[#F8F7F6] no-underline text-[#181411]">
          <span className="text-[13px] text-[#6E5C49]">{next.label} →</span>
          <span className="text-[28px] font-extrabold">{next.title}</span>
        </Link>
        <Link href="/#contact" locale={locale} className="flex flex-col gap-2.5 p-8 rounded-3xl bg-[#EFAC39] no-underline text-[#181411]">
          <span className="text-[13px] font-semibold">{contact.label}</span>
          <span className="text-[28px] font-extrabold">{contact.title} →</span>
        </Link>
      </div>
    </section>
  );
}
