import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { CampCurrieCaseStudyData } from "../../data/case-studies-types";
import { display, hand, sectionHeading } from "../camp-currie-styles";

export default function CampCurrieWorkSection({ work }: { work: CampCurrieCaseStudyData["work"] }) {
  return (
    <section id="umsetzung" className={`${sectionX} pb-[clamp(88px,10vw,128px)]`}>
      <div className="max-w-[1180px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2.5 items-center text-center">
          <span className={`${hand} text-[28px] text-[#5D735F]`}>{work.label}</span>
          <h2 className={sectionHeading}>{work.title}</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
          {work.items.map((item, i) => (
            <article key={item.title} className="bg-white rounded-[20px] p-[30px] flex flex-col gap-3">
              <span className={`${display} text-[40px] text-[#E5A130] leading-none`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="m-0 font-normal text-2xl uppercase">{item.title}</h3>
              <p className="m-0 text-[15px] leading-[1.7] text-[#3A3A3A]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
