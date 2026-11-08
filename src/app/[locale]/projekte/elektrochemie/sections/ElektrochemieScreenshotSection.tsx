import Image from "next/image";
import BrowserFrame from "../../components/BrowserFrame";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { mono } from "../elektrochemie-styles";

export default function ElektrochemieScreenshotSection({ domain, screenshotAlt }: { domain: string; screenshotAlt: string }) {
  return (
    <section className={`${sectionX} py-[clamp(64px,8vw,96px)]`}>
      <BrowserFrame
        domain={domain}
        className="max-w-[1240px] mx-auto rounded-[14px] overflow-hidden bg-white shadow-[0_30px_80px_rgba(14,35,64,.18)] border border-[#D9DFE7]"
        barClassName="px-4 py-3 bg-[#EEF1F5] border-b border-[#D9DFE7]"
        dotClassName="bg-[#C9D0DA]"
        domainClassName={`px-3.5 py-1 rounded-md bg-white ${mono} text-xs text-[#5B6B80]`}
      >
        <Image
          src="/images/portfolio/case-egm.jpg"
          alt={screenshotAlt}
          width={1600}
          height={804}
          sizes="(min-width: 1368px) 1240px, 100vw"
          className="block w-full h-auto"
        />
      </BrowserFrame>
    </section>
  );
}
