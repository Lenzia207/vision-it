import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { ElektrochemieCaseStudyData } from "../../data/case-studies-types";
import { display, mono, sectionHeading } from "../elektrochemie-styles";

interface ElektrochemieResultSectionProps {
  result: ElektrochemieCaseStudyData["result"];
  quote: ElektrochemieCaseStudyData["quote"];
}

export default function ElektrochemieResultSection({ result, quote }: ElektrochemieResultSectionProps) {
  return (
    <section className={`bg-[#0E2340] text-white ${sectionX} py-[clamp(80px,10vw,128px)]`}>
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 max-w-[760px]">
          <span className={`${mono} text-[13px] text-[#70C3D8]`}>{result.label}</span>
          <h2 className={sectionHeading}>{result.title}</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px bg-white/15 border border-white/15 rounded-xl overflow-hidden">
          {result.stats.map((stat) => (
            <div key={stat.label} className="bg-[#0E2340] p-7 flex flex-col gap-1.5">
              <span className={`${display} text-[56px] font-semibold leading-none text-[#70C3D8]`}>{stat.value}</span>
              <span className="text-[15px] text-white/80">{stat.label}</span>
            </div>
          ))}
        </div>
        {quote && (
          <figure className="m-0 flex flex-col gap-[18px] max-w-[860px] pt-2">
            <blockquote className={`m-0 ${display} text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.3] font-medium`}>„{quote.text}“</blockquote>
            <figcaption className={`${mono} text-[13px] text-white/70`}>{quote.author}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
