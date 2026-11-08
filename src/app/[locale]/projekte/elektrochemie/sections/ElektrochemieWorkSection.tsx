import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { ElektrochemieCaseStudyData } from "../../data/case-studies-types";
import { display, mono, sectionHeading } from "../elektrochemie-styles";

// Periodic-table style tile colours, one per work item in order
const symbolClassNames = [
  "bg-[#1F4F83] text-white",
  "bg-[#70C3D8] text-[#0E2340]",
  "bg-[#765F95] text-white",
  "bg-[#0E2340] text-white",
  "bg-[#1F4F83] text-white",
  "bg-[#70C3D8] text-[#0E2340]",
];

export default function ElektrochemieWorkSection({ work }: { work: ElektrochemieCaseStudyData["work"] }) {
  return (
    <section id="umsetzung" className={`${sectionX} pb-[clamp(80px,10vw,128px)]`}>
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4 max-w-[760px]">
          <span className={`${mono} text-[13px] text-[#765F95]`}>{work.label}</span>
          <h2 className={sectionHeading}>{work.title}</h2>
          <p className="m-0 text-[17px] leading-[1.7] text-[#33465E]">{work.description}</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-4">
          {work.items.map((item, i) => (
            <article
              key={item.title}
              className="bg-white border border-[#D9DFE7] rounded-xl p-[26px] flex flex-col gap-3.5 transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(14,35,64,.12)]"
            >
              <div className="flex justify-between items-start">
                <span className={`size-16 rounded-[10px] flex items-center justify-center ${display} text-[28px] font-semibold ${symbolClassNames[i]}`}>
                  {item.symbol}
                </span>
                <span className={`${mono} text-xs text-[#5B6B80]`}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="m-0 text-[22px] font-semibold">{item.title}</h3>
              <p className="m-0 text-[15px] leading-[1.65] text-[#33465E]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
