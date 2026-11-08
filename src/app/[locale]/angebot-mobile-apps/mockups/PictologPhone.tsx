import localFont from "next/font/local";

// The mockup uses the app's own typeface
const istokWeb = localFont({
  src: [
    { path: "../../../../fonts/istok-web-400.woff2", weight: "400" },
    { path: "../../../../fonts/istok-web-700.woff2", weight: "700" },
  ],
  display: "swap",
});

export default function PictologPhone({ title }: { title: string }) {
  return (
    <div className={`w-[180px] h-[260px] bg-white border-[6px] border-b-0 border-black rounded-t-[30px] px-3.5 py-[18px] flex flex-col gap-2.5 box-border ${istokWeb.className}`}>
      <span className="text-[15px] font-bold text-black">{title}</span>
      <div className="h-[22px] rounded-[11px] bg-[#F2F4F5]" />
      {["w-4/5", "w-[70%]"].map((width) => (
        <div key={width} className="flex gap-2 items-center bg-[#F2F4F5] rounded-[10px] p-2">
          <span className="size-[34px] rounded-md bg-[#CFD5DA]" />
          <span className="flex flex-col gap-1 flex-1">
            <span className={`h-1.5 rounded-[3px] bg-[#3A3E43] ${width}`} />
            <span className="h-[5px] w-1/2 rounded-[3px] bg-[#C4C8CC]" />
          </span>
        </div>
      ))}
    </div>
  );
}
