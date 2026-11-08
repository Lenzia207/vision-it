import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { PictologCaseStudyData } from "../../data/case-studies-types";

export default function PictologStepsSection({ steps }: { steps: PictologCaseStudyData["steps"] }) {
  return (
    <section className={`${sectionX} py-[clamp(72px,8vw,104px)]`}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-4">
        {steps.map((step, i) => (
          <div key={step.title} className="bg-black text-white rounded-3xl p-8 flex flex-col gap-3.5">
            <span className="size-11 rounded-full bg-[#C0E859] text-black flex items-center justify-center font-bold">{i + 1}</span>
            <h3 className="m-0 text-[22px] font-bold">{step.title}</h3>
            <p className="m-0 text-[15px] leading-[1.6] text-[#D6D6D6]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
