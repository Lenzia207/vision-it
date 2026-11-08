import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { CaseStudyQuote } from "../../data/case-studies-types";
import { display, hand } from "../camp-currie-styles";

export default function CampCurrieQuoteSection({ quote }: { quote: CaseStudyQuote }) {
  return (
    <section className={`${sectionX} pb-[clamp(80px,10vw,120px)]`}>
      <div className="max-w-[1180px] mx-auto bg-[#5D735F] text-white rounded-[28px] p-[clamp(36px,6vw,72px)] flex flex-col items-center text-center gap-[18px]">
        <blockquote className={`m-0 max-w-[780px] ${hand} text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.3]`}>„{quote.text}“</blockquote>
        <span className={`${display} tracking-[.06em] text-sm text-[#F3E3C0]`}>{quote.author}</span>
      </div>
    </section>
  );
}
