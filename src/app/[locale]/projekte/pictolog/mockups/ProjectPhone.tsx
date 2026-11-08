import { PictologCaseStudyData } from "../../data/case-studies-types";
import { phoneFrame } from "./phone-styles";

export default function ProjectPhone({ mock }: { mock: PictologCaseStudyData["mock"] }) {
  return (
    <div aria-hidden="true" className={`w-[240px] h-[500px] rounded-[40px] p-2.5 ${phoneFrame}`}>
      <div className="size-full rounded-[31px] bg-[#F2F4F5] pt-[34px] px-3.5 pb-3.5 box-border flex flex-col gap-3">
        <span className="text-[22px] font-bold">{mock.title}</span>
        <span className="h-[34px] rounded-[17px] bg-white flex items-center px-3 text-[11px] text-[#686D74]">{mock.search}</span>
        <span className="text-[10px] font-bold text-[#686D74] tracking-[.06em]">{mock.recent}</span>
        {mock.projects.map((project, i) => (
          <div key={project.title} className="flex gap-2.5 bg-white rounded-[14px] p-2.5">
            <span className={`size-[46px] rounded-[9px] ${i === 1 ? "bg-[#E3E7EA]" : "bg-[#CFD5DA]"}`} />
            <span className="flex flex-col gap-1">
              <b className="text-xs">{project.title}</b>
              <span className="text-[10px] text-[#686D74]">{project.pages}</span>
            </span>
          </div>
        ))}
        <span className="mt-auto self-end rounded-2xl bg-black text-white px-4 py-3 text-xs font-bold">{mock.add}</span>
      </div>
    </div>
  );
}
