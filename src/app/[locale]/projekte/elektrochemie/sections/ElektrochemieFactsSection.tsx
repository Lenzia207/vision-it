import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { ElektrochemieCaseStudyData } from "../../data/case-studies-types";
import { mono } from "../elektrochemie-styles";

export default function ElektrochemieFactsSection({ facts }: { facts: ElektrochemieCaseStudyData["facts"] }) {
  return (
    <section className={sectionX}>
      <div className="max-w-[1240px] mx-auto -mt-px grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-px bg-[#D9DFE7] border border-[#D9DFE7] rounded-b-xl overflow-hidden">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-white p-[22px] flex flex-col gap-1.5">
            <span className={`${mono} text-[11px] tracking-[.1em] uppercase text-[#5B6B80]`}>{fact.label}</span>
            <span className="font-semibold">{fact.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
