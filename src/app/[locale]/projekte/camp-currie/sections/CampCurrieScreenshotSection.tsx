import Image from "next/image";
import BrowserFrame from "../../components/BrowserFrame";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";

export default function CampCurrieScreenshotSection({ domain, screenshotAlt }: { domain: string; screenshotAlt: string }) {
  return (
    <section className={`${sectionX} py-[clamp(64px,8vw,96px)]`}>
      <BrowserFrame
        domain={domain}
        className="max-w-[1180px] mx-auto rounded-[20px] overflow-hidden bg-white shadow-[0_30px_80px_rgba(23,23,23,.14)]"
        barClassName="px-4 py-3 bg-[#EFEDE6]"
        dotClassName="bg-[#D3CFC4]"
        domainClassName="px-3.5 py-1 rounded-full bg-white text-xs text-[#5A5A5A]"
      >
        <Image
          src="/images/portfolio/case-camp-currie.jpg"
          alt={screenshotAlt}
          width={1600}
          height={859}
          sizes="(min-width: 1308px) 1180px, 100vw"
          className="block w-full h-auto"
        />
      </BrowserFrame>
    </section>
  );
}
