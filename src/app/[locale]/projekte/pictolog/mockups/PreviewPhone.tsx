import { PictologCaseStudyData } from "../../data/case-studies-types";
import { phoneFrame } from "./phone-styles";

export default function PreviewPhone({ mock }: { mock: PictologCaseStudyData["mock"] }) {
  return (
    <div aria-hidden="true" className={`hidden sm:block w-[200px] h-[420px] rounded-[36px] p-[9px] ${phoneFrame}`}>
      <div className="size-full rounded-[28px] bg-[#2A2D30] pt-[30px] px-3.5 pb-3.5 box-border flex flex-col gap-2.5">
        <span className="text-[13px] font-bold text-white">{mock.previewTitle}</span>
        <div className="flex-1 bg-white rounded p-3.5 flex flex-col gap-2">
          <span className="text-[7px] text-[#686D74] tracking-[.1em]">{mock.documentLabel}</span>
          <b className="text-[13px]">{mock.documentTitle}</b>
          <span className="h-[70px] bg-[#CFD5DA] rounded-sm" />
          <span className="h-1 w-[90%] bg-[#C4C8CC]" />
          <span className="h-1 w-[70%] bg-[#C4C8CC]" />
          <span className="h-[70px] bg-[#E3E7EA] rounded-sm" />
        </div>
        <span className="rounded-xl bg-[#C0E859] text-black p-2.5 text-[11px] font-bold text-center">{mock.share}</span>
      </div>
    </div>
  );
}
