import { Fragment } from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Link } from "@/app/i18n/routing";
import { caseStudiesUrl } from "@/app/configs/configs";
import CaseStudyShell, { CaseStudyNav } from "../components/CaseStudyShell";
import { SplitnCaseStudyData } from "../data/case-studies-types";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--cs-body",
  display: "swap",
});

const sectionX = "px-[clamp(20px,5vw,64px)]";
const overline = "text-[13px] font-bold text-[#9A6510]";

function HomePhone({ mock }: { mock: SplitnCaseStudyData["mock"] }) {
  return (
    <div aria-hidden="true" className="w-[240px] h-[500px] rounded-[40px] bg-[#181411] p-2.5 box-border shadow-[0_30px_80px_rgba(24,20,17,.18)]">
      <div className="size-full rounded-[31px] bg-white pt-[34px] px-3.5 pb-3.5 box-border flex flex-col gap-3">
        <span className="text-xs text-[#6E5C49]">{mock.greeting}</span>
        <span className="text-base font-bold">{mock.headline}</span>
        <div className="bg-[#F3EFEA] rounded-2xl p-3.5 flex flex-col gap-1">
          <span className="text-[9px] font-bold tracking-[.08em] text-[#6E5C49]">{mock.balanceLabel}</span>
          <span className="text-[26px] font-extrabold text-[#9A6510]">{mock.balance}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: mock.oweLabel, value: mock.owe },
            { label: mock.owedLabel, value: mock.owed },
          ].map((entry) => (
            <span key={entry.label} className="bg-[#F3EFEA] rounded-xl p-2.5 text-[8px] font-bold text-[#6E5C49]">
              {entry.label}
              <br />
              <span className="text-[13px] text-[#181411]">{entry.value}</span>
            </span>
          ))}
        </div>
        <span className="text-[11px] font-bold">{mock.quickActions}</span>
        <div className="grid grid-cols-3 gap-1.5 text-[8px] text-center text-[#4A4036]">
          {mock.actions.map((action, i) => (
            <span
              key={action}
              className={`rounded-[10px] px-0.5 py-2.5 ${i === 0 ? "bg-[#EFAC39] text-[#181411] font-bold" : "bg-[#F3EFEA]"}`}
            >
              {action}
            </span>
          ))}
        </div>
        <span className="text-[11px] font-bold">{mock.groups}</span>
        <div className="bg-[#F3EFEA] rounded-xl p-2.5 flex justify-between text-[11px]">
          <span>{mock.groupName}</span>
          <span className="text-[#9A6510]">{mock.groupBalance}</span>
        </div>
      </div>
    </div>
  );
}

function ExpensePhone({ mock }: { mock: SplitnCaseStudyData["mock"] }) {
  return (
    <div aria-hidden="true" className="hidden sm:block w-[200px] h-[420px] rounded-[36px] bg-[#181411] p-[9px] box-border shadow-[0_30px_80px_rgba(24,20,17,.18)]">
      <div className="size-full rounded-[28px] bg-white pt-[30px] px-3 pb-3 box-border flex flex-col gap-2.5">
        <span className="text-[13px] font-bold">{mock.expenseTitle}</span>
        <span className="bg-[#F3EFEA] rounded-[10px] p-2.5 text-[10px] text-[#6E5C49]">{mock.expensePlaceholder}</span>
        <span className="text-[30px] font-extrabold text-center py-2">{mock.expenseAmount}</span>
        <span className="text-[9px] font-bold text-[#6E5C49]">{mock.splitWith}</span>
        <div className="grid grid-cols-2 gap-[5px] text-[9px] text-center">
          {mock.splitOptions.map((option, i) => (
            <span
              key={option}
              className={`rounded-lg p-[7px] ${i === 0 ? "bg-[#EFAC39] text-[#181411] font-bold" : "bg-[#F3EFEA]"}`}
            >
              {option}
            </span>
          ))}
        </div>
        <span className="mt-auto bg-[#EFAC39] text-[#181411] rounded-xl p-[11px] text-[11px] font-bold text-center">{mock.save}</span>
      </div>
    </div>
  );
}

interface SplitnCaseStudyProps {
  data: SplitnCaseStudyData;
  locale: string;
}

export default function SplitnCaseStudy({ data, locale }: SplitnCaseStudyProps) {
  return (
    <CaseStudyShell locale={locale} className={`${plusJakartaSans.variable} font-(family-name:--cs-body) text-[#181411] bg-white`}>
      <CaseStudyNav
        locale={locale}
        nav={data.nav}
        className="bg-[#F8F7F6] border-b border-[#181411]/8 text-sm"
        backClassName="font-semibold text-[#181411]"
        labelClassName="text-[#6E5C49]"
      />

      <header className={`relative overflow-hidden ${sectionX} pt-[clamp(64px,8vw,112px)] pb-[clamp(56px,7vw,96px)]`}>
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-[clamp(40px,6vw,80px)] items-center">
          <div className="flex flex-col gap-6">
            <Image
              src="/images/portfolio/logo-splitn.png"
              alt={data.hero.logoAlt}
              width={240}
              height={240}
              priority
              className="w-[240px] h-auto -mt-10 -mb-[50px] -ml-[30px]"
            />
            <h1 className="m-0 font-extrabold italic text-[clamp(2.6rem,5.6vw,4.6rem)] leading-none tracking-[-0.03em] [transform:skewY(-3deg)] origin-left">
              {data.hero.titleStart}
              <span className="bg-[#EFAC39] px-[.15em]">{data.hero.titleAccent}</span>
            </h1>
            <p className="m-0 max-w-[540px] text-[19px] leading-[1.6] text-[#4A4036]">{data.hero.description}</p>
            <div className="flex flex-wrap gap-3">
              {data.hero.storeCta && data.hero.storeUrl && (
                <a
                  href={data.hero.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-[50px] px-[26px] rounded-[14px] bg-[#EFAC39] text-[#181411] font-bold no-underline"
                >
                  {data.hero.storeCta}
                </a>
              )}
              <a href="#split" className="inline-flex items-center min-h-[50px] px-[26px] rounded-[14px] border border-[#181411]/25 text-[#181411] font-semibold no-underline">
                {data.hero.detailsCta}
              </a>
            </div>
          </div>
          <div className="flex justify-center items-end gap-5">
            <HomePhone mock={data.mock} />
            <ExpensePhone mock={data.mock} />
          </div>
        </div>
      </header>

      <section className={sectionX}>
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
          {data.facts.map((fact) => (
            <div key={fact.label} className="bg-[#F8F7F6] rounded-[18px] p-5 flex flex-col gap-1.5">
              <span className="text-xs text-[#6E5C49]">{fact.label}</span>
              <b>{fact.value}</b>
            </div>
          ))}
        </div>
      </section>

      <section className={`${sectionX} pt-[clamp(88px,10vw,128px)]`}>
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(32px,6vw,96px)]">
          <div className="flex flex-col gap-3.5">
            <span className={overline}>{data.idea.label}</span>
            <h2 className="m-0 font-extrabold text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] tracking-[-0.02em]">{data.idea.title}</h2>
          </div>
          <div className="flex flex-col gap-[18px] text-[17px] leading-[1.7] text-[#4A4036]">
            {data.idea.paragraphs.map((paragraph) => (
              <p key={paragraph} className="m-0">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="split" className={`${sectionX} py-[clamp(72px,8vw,104px)]`}>
        <div className="max-w-[1240px] mx-auto flex flex-col gap-8">
          <h2 className="m-0 font-extrabold italic text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.05] tracking-[-0.02em]">{data.splits.title}</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-3.5">
            {data.splits.items.map((split, i) => (
              <div key={split.value} className={`rounded-3xl p-7 flex flex-col gap-2.5 ${i === 0 ? "bg-[#EFAC39] text-[#181411]" : "bg-[#F8F7F6]"}`}>
                <span className={`text-[38px] font-extrabold italic ${i === 0 ? "" : "text-[#9A6510]"}`}>{split.value}</span>
                <span className={`text-[15px] leading-[1.6] ${i === 0 ? "" : "text-[#4A4036]"}`}>{split.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionX} pb-[clamp(88px,10vw,128px)]`}>
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-[clamp(32px,5vw,64px)]">
          <div className="flex flex-col gap-5">
            <span className={overline}>{data.features.label}</span>
            <ul className="m-0 p-0 list-none flex flex-col border-t border-[#181411]/12">
              {data.features.items.map((feature, i) => (
                <li key={feature.title} className="py-4 border-b border-[#181411]/12 flex gap-4">
                  <b className="text-[#9A6510] min-w-7">{String(i + 1).padStart(2, "0")}</b>
                  <span>
                    <b>{feature.title}</b>
                    <br />
                    <span className="text-[#4A4036] text-[15px]">{feature.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <span className={overline}>{data.architecture.label}</span>
            <div className="bg-[#F8F7F6] rounded-3xl p-7 flex flex-col gap-3">
              {data.architecture.nodes.map((node, i) => (
                <Fragment key={node.title}>
                  {i > 0 && (
                    <span aria-hidden="true" className="text-center text-[#9A6510]">
                      {i === 1 ? data.architecture.clientLabel : "↓"}
                    </span>
                  )}
                  <div className="bg-white border border-[#EFAC39]/50 rounded-[14px] p-4">
                    <b>{node.title}</b>
                    <br />
                    <span className="text-sm text-[#4A4036]">{node.description}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionX} pb-[clamp(72px,8vw,104px)]`}>
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-4">
          <Link href={`${caseStudiesUrl}/elektrochemie`} locale={locale} className="flex flex-col gap-2.5 p-8 rounded-3xl bg-[#F8F7F6] no-underline text-[#181411]">
            <span className="text-[13px] text-[#6E5C49]">{data.next.label} →</span>
            <span className="text-[28px] font-extrabold">{data.next.title}</span>
          </Link>
          <Link href="/#contact" locale={locale} className="flex flex-col gap-2.5 p-8 rounded-3xl bg-[#EFAC39] no-underline text-[#181411]">
            <span className="text-[13px] font-semibold">{data.contact.label}</span>
            <span className="text-[28px] font-extrabold">{data.contact.title} →</span>
          </Link>
        </div>
      </section>
    </CaseStudyShell>
  );
}
