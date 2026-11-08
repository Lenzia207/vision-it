import { SplitnCaseStudyData } from "../../data/case-studies-types";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";

// The first split is highlighted in the brand accent colour
export default function SplitnSplitsSection({ splits }: { splits: SplitnCaseStudyData["splits"] }) {
  return (
    <section id="split" className={`${sectionX} py-[clamp(72px,8vw,104px)]`}>
      <div className="max-w-[1240px] mx-auto flex flex-col gap-8">
        <h2 className="m-0 font-extrabold italic text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.05] tracking-[-0.02em]">{splits.title}</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-3.5">
          {splits.items.map((split, i) => {
            const highlighted = i === 0;
            return (
              <div key={split.value} className={`rounded-3xl p-7 flex flex-col gap-2.5 ${highlighted ? "bg-[#EFAC39] text-[#181411]" : "bg-[#F8F7F6]"}`}>
                <span className={`text-[38px] font-extrabold italic ${highlighted ? "" : "text-[#9A6510]"}`}>{split.value}</span>
                <span className={`text-[15px] leading-[1.6] ${highlighted ? "" : "text-[#4A4036]"}`}>{split.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
