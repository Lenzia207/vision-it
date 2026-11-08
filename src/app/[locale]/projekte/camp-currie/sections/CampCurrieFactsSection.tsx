import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { CampCurrieCaseStudyData } from "../../data/case-studies-types";
import { display } from "../camp-currie-styles";

// Overlaps the bottom of the hero image via negative margin
export default function CampCurrieFactsSection({ facts }: { facts: CampCurrieCaseStudyData["facts"] }) {
  return (
    <section className={sectionX}>
      <div className="relative max-w-[1180px] mx-auto -mt-10 grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-3">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-white rounded-2xl px-[22px] py-5 flex flex-col gap-1.5 shadow-[0_10px_30px_rgba(23,23,23,.08)]">
            <span className={`${display} text-[13px] tracking-[.06em] text-[#5D735F]`}>{fact.label}</span>
            <span className="font-medium">{fact.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
