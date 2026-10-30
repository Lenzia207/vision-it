import Image from "next/image";
import { Istok_Web } from "next/font/google";
import { Link } from "@/app/i18n/routing";
import { caseStudiesUrl } from "@/app/configs/configs";
import CaseStudyShell, { CaseStudyNav } from "../components/CaseStudyShell";
import { PictologCaseStudyData } from "../data/case-studies-types";

const istokWeb = Istok_Web({ subsets: ["latin"], weight: ["400", "700"], variable: "--cs-body", display: "swap" });

const sectionX = "px-[clamp(20px,5vw,64px)]";
const sectionHeading = "m-0 font-bold text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] tracking-[-0.02em]";

function ProjectPhone({ mock }: { mock: PictologCaseStudyData["mock"] }) {
  return (
    <div aria-hidden="true" className="w-[240px] h-[500px] rounded-[40px] bg-black p-2.5 box-border shadow-[0_30px_60px_rgba(0,0,0,.18)]">
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

function PreviewPhone({ mock }: { mock: PictologCaseStudyData["mock"] }) {
  return (
    <div aria-hidden="true" className="hidden sm:block w-[200px] h-[420px] rounded-[36px] bg-black p-[9px] box-border shadow-[0_30px_60px_rgba(0,0,0,.18)]">
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

interface PictologCaseStudyProps {
  data: PictologCaseStudyData;
  locale: string;
}

export default function PictologCaseStudy({ data, locale }: PictologCaseStudyProps) {
  return (
    <CaseStudyShell locale={locale} className={`${istokWeb.variable} font-(family-name:--cs-body) text-black bg-[#F2F4F5]`}>
      <CaseStudyNav
        locale={locale}
        nav={data.nav}
        className="bg-white border-b border-black/5 text-sm"
        backClassName="font-bold text-black"
        labelClassName="text-[#686D74]"
      />

      <header className={`${sectionX} pt-[clamp(72px,9vw,120px)] pb-[clamp(56px,7vw,88px)]`}>
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-[clamp(40px,6vw,80px)] items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3.5">
              <Image src="/images/portfolio/icon-pictolog.png" alt={data.hero.iconAlt} width={64} height={64} priority className="size-16" />
              <span className="text-xl font-bold">{data.hero.appName}</span>
            </div>
            <h1 className="m-0 font-bold text-[clamp(2.6rem,5.6vw,4.6rem)] leading-[1.02] tracking-[-0.03em]">
              {data.hero.titleStart}
              <span className="bg-[#C0E859] px-[.12em]">{data.hero.titleAccent}</span>
            </h1>
            <p className="m-0 max-w-[540px] text-[19px] leading-[1.6] text-[#3A3E43]">{data.hero.description}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={data.hero.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[50px] px-[26px] rounded-[14px] bg-black text-white font-bold no-underline"
              >
                {data.hero.storeCta} ↗
              </a>
              <a href="#features" className="inline-flex items-center min-h-[50px] px-[26px] rounded-[14px] bg-white border border-[#C4C8CC] text-black font-bold no-underline">
                {data.hero.featuresCta}
              </a>
            </div>
          </div>
          <div className="flex justify-center items-end gap-5">
            <ProjectPhone mock={data.mock} />
            <PreviewPhone mock={data.mock} />
          </div>
        </div>
      </header>

      <section className={sectionX}>
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
          {data.facts.map((fact) => (
            <div key={fact.label} className="bg-white rounded-[18px] p-5 flex flex-col gap-1.5">
              <span className="text-xs text-[#686D74]">{fact.label}</span>
              <b>{fact.value}</b>
            </div>
          ))}
        </div>
      </section>

      <section className={`${sectionX} pt-[clamp(88px,10vw,128px)]`}>
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(32px,6vw,96px)]">
          <div className="flex flex-col gap-3.5">
            <span className="text-[13px] font-bold text-[#686D74]">{data.idea.label}</span>
            <h2 className={sectionHeading}>{data.idea.title}</h2>
          </div>
          <div className="flex flex-col gap-[18px] text-[17px] leading-[1.7] text-[#3A3E43]">
            {data.idea.paragraphs.map((paragraph) => (
              <p key={paragraph} className="m-0">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionX} py-[clamp(72px,8vw,104px)]`}>
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-4">
          {data.steps.map((step, i) => (
            <div key={step.title} className="bg-black text-white rounded-3xl p-8 flex flex-col gap-3.5">
              <span className="size-11 rounded-full bg-[#C0E859] text-black flex items-center justify-center font-bold">{i + 1}</span>
              <h3 className="m-0 text-[22px] font-bold">{step.title}</h3>
              <p className="m-0 text-[15px] leading-[1.6] text-[#D6D6D6]">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className={`${sectionX} pb-[clamp(88px,10vw,128px)]`}>
        <div className="max-w-[1240px] mx-auto flex flex-col gap-9">
          <div className="flex flex-col gap-3.5 max-w-[720px]">
            <span className="text-[13px] font-bold text-[#686D74]">{data.features.label}</span>
            <h2 className={sectionHeading}>{data.features.title}</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] gap-3">
            {data.features.items.map((feature) => (
              <div key={feature.title} className="bg-white rounded-[20px] p-[26px] flex flex-col gap-2.5">
                <b className="text-[17px]">{feature.title}</b>
                <span className="text-sm leading-[1.6] text-[#3A3E43]">{feature.description}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {data.features.stack.map((tech) => (
              <span key={tech} className="rounded-full bg-black text-white px-3.5 py-[7px] text-[13px]">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionX} pb-[clamp(72px,8vw,104px)]`}>
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-4">
          <Link href={`${caseStudiesUrl}/splitn`} locale={locale} className="flex flex-col gap-2.5 p-8 rounded-3xl bg-white no-underline text-black">
            <span className="text-[13px] text-[#686D74]">{data.next.label} →</span>
            <span className="text-[28px] font-bold">{data.next.title}</span>
          </Link>
          <Link href="/#contact" locale={locale} className="flex flex-col gap-2.5 p-8 rounded-3xl bg-[#C0E859] no-underline text-black">
            <span className="text-[13px]">{data.contact.label}</span>
            <span className="text-[28px] font-bold">{data.contact.title} →</span>
          </Link>
        </div>
      </section>
    </CaseStudyShell>
  );
}
