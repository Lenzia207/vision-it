import Image from "next/image";
import BrowserFrame from "../../components/BrowserFrame";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";

export default function HerzHirnHumorScreenshotSection({ domain, screenshotAlt }: { domain: string; screenshotAlt: string }) {
  return (
    <section className={sectionX}>
      <BrowserFrame
        domain={domain}
        className="max-w-[1120px] mx-auto rounded-3xl overflow-hidden bg-[#FFFDF8] border border-[#E8E3D7] shadow-[0_30px_80px_rgba(55,55,47,.10)]"
        barClassName="px-[18px] py-3.5 bg-[#F6F3EC] border-b border-[#E8E3D7]"
        dotClassName="bg-[#D9D4C7]"
        domainClassName="px-4 py-1 rounded-full bg-[#FFFDF8] text-xs text-[#6A6960]"
      >
        <Image
          src="/images/portfolio/case-herzhirnhumor.jpg"
          alt={screenshotAlt}
          width={800}
          height={500}
          priority
          sizes="(min-width: 1248px) 1120px, 100vw"
          className="block w-full h-auto"
        />
      </BrowserFrame>
    </section>
  );
}
