import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { CaseStudyQuote } from "../../data/case-studies-types";
import { display } from "../herzhirnhumor-styles";

export default function HerzHirnHumorQuoteSection({ quote }: { quote: CaseStudyQuote }) {
  return (
    <section className={`${sectionX} pb-[clamp(80px,10vw,120px)]`}>
      <div className="max-w-[1120px] mx-auto bg-[#E6ECE8] rounded-[32px] p-[clamp(36px,6vw,72px)] flex flex-col items-center text-center gap-5">
        <span aria-hidden="true" className={`${display} text-[64px] font-light leading-[.6] text-[#6F887A]`}>
          “
        </span>
        <blockquote className={`m-0 max-w-[760px] ${display} font-light text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.35]`}>{quote.text}</blockquote>
        <span className="text-sm font-semibold text-[#4C5D53]">{quote.author}</span>
      </div>
    </section>
  );
}
