import { Link } from "@/app/i18n/routing";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { PictologCaseStudyData } from "../../data/case-studies-types";
import { nextCaseStudyHref } from "../../data/case-study-order";

interface PictologNextSectionProps {
  next: PictologCaseStudyData["next"];
  contact: PictologCaseStudyData["contact"];
  locale: string;
}

export default function PictologNextSection({ next, contact, locale }: PictologNextSectionProps) {
  return (
    <section className={`${sectionX} pb-[clamp(72px,8vw,104px)]`}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-4">
        <Link href={nextCaseStudyHref("pictolog")} locale={locale} className="flex flex-col gap-2.5 p-8 rounded-3xl bg-white no-underline text-black">
          <span className="text-[13px] text-[#686D74]">{next.label} →</span>
          <span className="text-[28px] font-bold">{next.title}</span>
        </Link>
        <Link href="/#contact" locale={locale} className="flex flex-col gap-2.5 p-8 rounded-3xl bg-[#C0E859] no-underline text-black">
          <span className="text-[13px]">{contact.label}</span>
          <span className="text-[28px] font-bold">{contact.title} →</span>
        </Link>
      </div>
    </section>
  );
}
