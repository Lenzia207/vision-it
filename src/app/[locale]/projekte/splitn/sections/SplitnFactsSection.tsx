import { SplitnCaseStudyData } from "../../data/case-studies-types";
import { sectionX } from "../splitn-styles";

export default function SplitnFactsSection({ facts }: { facts: SplitnCaseStudyData["facts"] }) {
  return (
    <section className={sectionX}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-[#F8F7F6] rounded-[18px] p-5 flex flex-col gap-1.5">
            <span className="text-xs text-[#6E5C49]">{fact.label}</span>
            <b>{fact.value}</b>
          </div>
        ))}
      </div>
    </section>
  );
}
