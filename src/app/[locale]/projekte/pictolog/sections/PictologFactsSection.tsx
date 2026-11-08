import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { PictologCaseStudyData } from "../../data/case-studies-types";

export default function PictologFactsSection({ facts }: { facts: PictologCaseStudyData["facts"] }) {
  return (
    <section className={sectionX}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-white rounded-[18px] p-5 flex flex-col gap-1.5">
            <span className="text-xs text-[#686D74]">{fact.label}</span>
            <b>{fact.value}</b>
          </div>
        ))}
      </div>
    </section>
  );
}
