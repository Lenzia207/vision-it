import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { HerzHirnHumorCaseStudyData } from "../../data/case-studies-types";
import { overline } from "../herzhirnhumor-styles";
import { workIcons } from "../illustrations";

export default function HerzHirnHumorWorkSection({ work }: { work: HerzHirnHumorCaseStudyData["work"] }) {
  return (
    <section id="umsetzung" className={`${sectionX} py-[clamp(72px,8vw,104px)]`}>
      <div className="max-w-[1120px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-3.5">
          <span className={overline}>{work.label}</span>
          <h2 className="m-0 font-light text-[clamp(2rem,3.8vw,3rem)] leading-[1.1] tracking-[-0.02em]">{work.title}</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
          {work.items.map((item, i) => (
            <article
              key={item.title}
              className="bg-[#FFFDF8] rounded-3xl p-8 flex flex-col gap-3.5 transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(55,55,47,.08)]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-9" fill="none" stroke="#6F887A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {workIcons[i]}
              </svg>
              <h3 className="m-0 font-normal text-2xl">{item.title}</h3>
              <p className="m-0 text-[15px] leading-[1.7] text-[#605F58]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
