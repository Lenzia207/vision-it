import localFont from "next/font/local";
import BalanceScale from "../../projekte/splitn/mockups/BalanceScale";
import { AngebotMobileAppsSplitnMock } from "../data/mobile-apps-types";

// The mockup uses the app's own typeface
const plusJakartaSans = localFont({
  src: "../../../../fonts/plus-jakarta-sans.woff2",
  weight: "200 800",
  display: "swap",
});

export default function SplitnPhone({ mock }: { mock: AngebotMobileAppsSplitnMock }) {
  return (
    <div className={`w-[180px] h-[260px] bg-[#F8F7F6] border-[6px] border-b-0 border-[#181411] rounded-t-[30px] px-2.5 pt-4 flex flex-col gap-2 box-border overflow-hidden text-[#181411] ${plusJakartaSans.className}`}>
      <div className="flex items-start justify-between gap-1.5">
        <span className="flex flex-col min-w-0">
          <span className="text-[11px] font-bold leading-tight truncate">{mock.greeting}</span>
          <span className="text-[7px] text-[#8A8580] truncate">{mock.subtitle}</span>
        </span>
        <span className="shrink-0 size-[22px] rounded-full bg-[#FDEBD3] border-2 border-[#F6D9AE]" />
      </div>

      <div className="relative bg-white rounded-xl pt-2 pb-1 flex flex-col items-center overflow-hidden">
        <span className="absolute -right-4 -top-4 size-10 rounded-full bg-[#FDF3E6]" />
        <span className="absolute -left-4 -bottom-4 size-10 rounded-full bg-[#FDF3E6]" />
        <span className="relative text-[6px] tracking-[.12em] text-[#8A8580]">{mock.balanceLabel}</span>
        <span className="relative text-lg font-extrabold leading-tight text-[#0A8F7E]">{mock.balance}</span>
        <BalanceScale oweLabel={mock.oweLabel} owedLabel={mock.owedLabel} className="relative w-28 h-auto" />
      </div>

      <span className="bg-[#EFAC39] text-white rounded-lg py-2 text-[10px] font-bold text-center">⊕ {mock.add}</span>
    </div>
  );
}
