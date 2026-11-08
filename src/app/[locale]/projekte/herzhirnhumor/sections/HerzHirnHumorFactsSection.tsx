import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { HerzHirnHumorCaseStudyData } from "../../data/case-studies-types";

export default function HerzHirnHumorFactsSection({ facts }: { facts: HerzHirnHumorCaseStudyData["facts"] }) {
  return (
    <section className={`${sectionX} pt-[clamp(48px,6vw,72px)]`}>
      <div className="max-w-[1120px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-[#FFFDF8] rounded-[18px] px-[22px] py-5 flex flex-col gap-1.5">
            <span className="text-[11px] font-semibold tracking-[.14em] uppercase text-[#5F7468]">{fact.label}</span>
            <span className="font-medium">{fact.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
