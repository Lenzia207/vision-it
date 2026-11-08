import { CirclePlus, House, Plane, UserPlus, Wallet } from "lucide-react";
import { SplitnCaseStudyData } from "../../data/case-studies-types";
import BalanceScale from "./BalanceScale";
import { card, phoneFrame, phoneScreen } from "./phone-styles";

type HomeMock = SplitnCaseStudyData["mock"]["home"];

const groupIcons = { home: House, travel: Plane } as const;

export default function HomePhone({ mock }: { mock: HomeMock }) {
  const quickActions = [
    { label: mock.settleUp, Icon: Wallet, iconClassName: "bg-[#CDEBD3] text-[#2E9A48]" },
    { label: mock.createGroup, Icon: UserPlus, iconClassName: "bg-[#C9E2FB] text-[#1E73D8]" },
  ];

  return (
    <div aria-hidden="true" className={`w-60 h-[500px] rounded-[40px] p-2.5 ${phoneFrame}`}>
      <div className={`${phoneScreen} rounded-[31px] pt-[30px] px-3 pb-3 gap-2.5`}>
        <div className="flex items-start justify-between gap-2">
          <span className="flex flex-col min-w-0">
            <span className="text-[13px] font-bold leading-tight truncate">{mock.greeting}</span>
            <span className="text-[8px] text-[#8A8580] truncate">{mock.subtitle}</span>
          </span>
          <span className="shrink-0 size-7 rounded-full bg-[#FDEBD3] border-2 border-[#F6D9AE]" />
        </div>

        <div className={`${card} relative pt-2.5 pb-2 flex flex-col items-center overflow-hidden`}>
          <span className="absolute -right-5 -top-5 size-14 rounded-full bg-[#FDF3E6]" />
          <span className="absolute -left-5 -bottom-5 size-14 rounded-full bg-[#FDF3E6]" />
          <span className="relative text-[7px] tracking-[.12em] text-[#8A8580]">{mock.balanceLabel}</span>
          <span className="relative text-[22px] font-extrabold leading-tight text-[#0A8F7E]">{mock.balance}</span>
          <BalanceScale oweLabel={mock.oweLabel} owedLabel={mock.owedLabel} className="relative w-[130px] h-auto" />
        </div>

        <span className="text-[11px] font-bold">{mock.quickActions}</span>
        <span className="bg-[#EFAC39] text-white rounded-lg py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold">
          <CirclePlus className="size-3.5" strokeWidth={2.2} />
          {mock.add}
        </span>
        <div className="grid grid-cols-2 gap-1.5">
          {quickActions.map(({ label, Icon, iconClassName }) => (
            <span key={label} className={`${card} py-2 flex flex-col items-center gap-1 text-[8px] font-medium`}>
              <span className={`size-5 rounded-full flex items-center justify-center ${iconClassName}`}>
                <Icon className="size-2.5" strokeWidth={2.5} />
              </span>
              {label}
            </span>
          ))}
        </div>

        <div className="flex items-baseline justify-between">
          <span className="text-[11px] font-bold">{mock.groups}</span>
          <span className="text-[8px] text-[#EFAC39]">{mock.seeAll}</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {mock.groupItems.map((group) => {
            const Icon = groupIcons[group.icon];
            return (
              <span key={group.name} className={`${card} p-1.5 flex items-center gap-1.5 min-w-0`}>
                <span className="relative shrink-0 size-6 rounded-md bg-[#FDF3E6] text-[#EFAC39] flex items-center justify-center">
                  <Icon className="size-3" fill="currentColor" strokeWidth={1.5} />
                  <span className="absolute -right-0.5 -bottom-0.5 size-1.5 rounded-full bg-[#F07F2B]" />
                </span>
                <span className="flex flex-col min-w-0">
                  <span className="text-[8px] font-bold truncate">{group.name}</span>
                  <span className="text-[7px] text-[#8A6A48] truncate">{group.type}</span>
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
