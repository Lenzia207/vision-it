import { ArrowLeft, ArrowUp, Check, CircleUserRound, Clock, ReceiptText, Settings } from "lucide-react";
import { SplitnCaseStudyData } from "../../data/case-studies-types";
import { card, phoneFrame, phoneScreen } from "./phone-styles";

type GroupMock = SplitnCaseStudyData["mock"]["group"];

export default function GroupPhone({ mock }: { mock: GroupMock }) {
  return (
    <div aria-hidden="true" className={`hidden sm:block w-[200px] h-[420px] rounded-[36px] p-[9px] ${phoneFrame}`}>
      <div className={`${phoneScreen} rounded-[28px] pt-[26px] px-2.5 gap-2`}>
        <div className="flex items-center gap-2">
          <ArrowLeft className="size-3 shrink-0" strokeWidth={2.5} />
          <span className="flex-1 text-[11px] font-bold truncate">{mock.title}</span>
          <Settings className="size-3 shrink-0" strokeWidth={2.5} />
        </div>
        <span className="flex justify-center -mt-1">
          <span className="size-[18px] rounded-full bg-[#FDEBD3] border border-white" />
          <span className="-ml-1 size-[18px] rounded-full bg-[#F4C7A8] border border-white" />
        </span>

        <div className={`${card} px-2 pt-2 pb-1.5 flex flex-col items-center`}>
          <span className="text-[17px] font-extrabold leading-tight text-[#EFAC39]">{mock.balance}</span>
          <span className="flex items-center gap-0.5 text-[6px] tracking-[.06em] text-[#8A8580]">
            <ArrowUp className="size-2 text-[#EFAC39]" strokeWidth={3} />
            {mock.balanceLabel}
          </span>
          <span className="w-full h-px bg-[#EEEAE5] my-1.5" />
          <span className="w-full grid grid-cols-2 divide-x divide-[#EEEAE5] text-center">
            <span className="flex flex-col">
              <b className="text-[10px] text-[#0A8F7E]">{mock.paid}</b>
              <span className="text-[5.5px] tracking-[.06em] text-[#0A8F7E]">{mock.paidLabel}</span>
            </span>
            <span className="flex flex-col">
              <b className="text-[10px]">{mock.total}</b>
              <span className="text-[5.5px] tracking-[.06em]">{mock.totalLabel}</span>
            </span>
          </span>
        </div>

        <span className="bg-[#EFAC39] text-white rounded-lg py-[7px] flex items-center justify-center gap-1 text-[9px] font-bold">
          {mock.settleAll}
          <Check className="size-2.5" strokeWidth={3} />
        </span>

        <span className="text-[10px] font-bold">{mock.membersLabel}</span>
        <div className={`${card} p-1.5 flex items-center gap-1.5`}>
          <span className="shrink-0 size-5 rounded-full bg-[#F1EFEC] text-[#6B6560] flex items-center justify-center">
            <CircleUserRound className="size-3" strokeWidth={2} />
          </span>
          <span className="flex-1 flex flex-col min-w-0">
            <span className="text-[8px] font-medium">{mock.member.name}</span>
            <span className="text-[5.5px] text-[#8A8580] truncate">{mock.member.detail}</span>
          </span>
          <b className="text-[8px]">{mock.member.balance}</b>
        </div>

        <span className="text-[10px] font-bold">{mock.activityLabel}</span>
        <div className="flex flex-col gap-1">
          {mock.activities.map((activity) => (
            <div key={activity.title} className={`${card} p-1.5 flex items-center gap-1.5`}>
              <span className="shrink-0 size-5 rounded-full bg-[#F1EFEC] text-[#6B6560] flex items-center justify-center">
                <ReceiptText className="size-2.5" strokeWidth={2} />
              </span>
              <span className="flex-1 flex flex-col min-w-0">
                <span className="text-[8px] font-medium truncate">{activity.title}</span>
                <span className="text-[6px] text-[#8A8580] truncate">{activity.detail}</span>
              </span>
              <span className="flex flex-col items-end gap-0.5 shrink-0">
                <b className={`text-[8px] ${activity.positive ? "text-[#0A8F7E]" : "text-[#EFAC39]"}`}>{activity.amount}</b>
                <span className="flex items-center gap-0.5 rounded-full bg-[#FDF3E6] px-1 text-[5px] font-semibold text-[#EFAC39]">
                  <Clock className="size-1.5" strokeWidth={3} />
                  {mock.pendingLabel}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
