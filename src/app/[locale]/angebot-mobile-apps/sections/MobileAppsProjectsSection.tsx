import Image from "next/image";
import { Istok_Web, Plus_Jakarta_Sans } from "next/font/google";
import { Link } from "@/app/i18n/routing";
import { caseStudiesUrl } from "@/app/configs/configs";
import Eyebrow from "../../home/sections/components/Eyebrow";
import {
  AngebotMobileAppsApp,
  AngebotMobileAppsProjectsData,
  AngebotMobileAppsSplitnMock,
} from "../data/mobile-apps-types";

interface MobileAppsProjectsSectionProps {
  projects: AngebotMobileAppsProjectsData;
  locale: string;
}

// The phone mockups use each app's own typeface
const istokWeb = Istok_Web({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

const cardHoverClassName = "transition-[border-color,transform] duration-300 hover:border-(--lime) hover:-translate-y-1";

function PictologPhone({ title }: { title: string }) {
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

function SplitnPhone({ mock }: { mock: AngebotMobileAppsSplitnMock }) {
  return (
    <div className={`w-[180px] h-[260px] bg-white border-[6px] border-b-0 border-[#181411] rounded-t-[30px] px-3.5 py-[18px] flex flex-col gap-2.5 box-border ${plusJakartaSans.className}`}>
      <span className="text-[10px] font-bold tracking-[.08em] text-[#6E5C49]">{mock.balanceLabel}</span>
      <span className="text-2xl font-extrabold text-[#9A6510]">{mock.balance}</span>
      <div className="grid grid-cols-2 gap-1.5">
        <span className="bg-[#F3EFEA] rounded-lg p-2 text-[9px] text-[#6E5C49]">
          {mock.oweLabel}
          <br />
          <b className="text-[#181411] text-xs">{mock.owe}</b>
        </span>
        <span className="bg-[#F3EFEA] rounded-lg p-2 text-[9px] text-[#6E5C49]">
          {mock.owedLabel}
          <br />
          <b className="text-[#181411] text-xs">{mock.owed}</b>
        </span>
      </div>
      <span className="bg-[#EFAC39] text-[#181411] rounded-[10px] p-[9px] text-[11px] font-bold text-center">{mock.add}</span>
    </div>
  );
}

function AppCard({
  app,
  href,
  locale,
  roleLabel,
  highlightsLabel,
  ctaLabel,
  panelClassName,
  iconClassName,
  phone,
}: {
  app: AngebotMobileAppsApp;
  href: string;
  locale: string;
  roleLabel: string;
  highlightsLabel: string;
  ctaLabel: string;
  panelClassName: string;
  iconClassName: string;
  phone: React.ReactNode;
}) {
  return (
    <article className={`flex flex-col bg-(--bg-surface-1) border-2 border-(--bg-surface-1) ${cardHoverClassName}`}>
      <div className={`relative h-[280px] flex items-end justify-center gap-[18px] px-6 pt-8 overflow-hidden ${panelClassName}`}>
        <Image src={app.icon} alt="" aria-hidden="true" width={64} height={64} className={`absolute left-6 top-6 size-16 ${iconClassName}`} />
        <div aria-hidden="true">{phone}</div>
      </div>
      <div className="flex-1 flex flex-col gap-4 p-8">
        <span className="font-mono text-[0.69rem] font-semibold uppercase tracking-[0.1em] bg-(--teal) text-white px-2.5 py-[5px] w-fit">
          {app.badge}
        </span>
        <h3 className="m-0 font-mono text-[1.62rem] font-medium tracking-[-0.02em] text-(--teal)">{app.title}</h3>
        <p className="m-0 text-[0.94rem] leading-[1.65] text-(--text-300)">{app.description}</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[18px]">
          {[
            { label: roleLabel, items: app.roleItems },
            { label: highlightsLabel, items: app.highlightItems },
          ].map((column) => (
            <div key={column.label} className="flex flex-col gap-1.5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-(--text-300)">{column.label}</span>
              <span className="text-[0.875rem] leading-[1.7] text-(--teal)">
                {column.items.map((item) => (
                  <span key={item} className="block">{item}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
        <Link href={href} locale={locale} className="btn btn-primary mt-auto w-fit">
          {ctaLabel} →
        </Link>
      </div>
    </article>
  );
}

export default function MobileAppsProjectsSection({ projects, locale }: MobileAppsProjectsSectionProps) {
  const { label, title, description, roleLabel, highlightsLabel, caseStudyCta, pictolog, splitn, teamLabel, team } = projects;

  return (
    <section id="projekte" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="max-w-[700px] flex flex-col gap-[18px] reveal-on-scroll">
          <Eyebrow>{label}</Eyebrow>
          <h2 className="text-display-2">{title}</h2>
          <p className="m-0 text-[1.06rem] leading-[1.65] text-(--text-300)">{description}</p>
        </div>

        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] reveal-on-scroll">
          <AppCard
            app={pictolog}
            href={`${caseStudiesUrl}/pictolog`}
            locale={locale}
            roleLabel={roleLabel}
            highlightsLabel={highlightsLabel}
            ctaLabel={caseStudyCta}
            panelClassName="bg-[#F2F4F5]"
            iconClassName=""
            phone={<PictologPhone title={pictolog.mock.title} />}
          />
          <AppCard
            app={splitn}
            href={`${caseStudiesUrl}/splitn`}
            locale={locale}
            roleLabel={roleLabel}
            highlightsLabel={highlightsLabel}
            ctaLabel={caseStudyCta}
            panelClassName="bg-[#F8F7F6]"
            iconClassName="rounded-[14px]"
            phone={<SplitnPhone mock={splitn.mock} />}
          />
        </div>

        <div className="flex flex-col gap-5 reveal-on-scroll">
          <span className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-(--teal) border-t-2 border-(--teal) pt-[18px]">
            {teamLabel}
          </span>
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))]">
            {team.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`grid grid-cols-1 sm:grid-cols-[minmax(130px,190px)_1fr] border-2 border-(--border-light) no-underline text-(--teal) ${cardHoverClassName}`}
              >
                <div className="relative min-h-40">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 640px) 190px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 p-[22px]">
                  <h3 className="m-0 font-mono text-[1.19rem] font-medium">{project.title}</h3>
                  <p className="m-0 text-[0.875rem] leading-[1.6] text-(--text-300)">{project.description}</p>
                  <span className="mt-auto font-mono text-[0.875rem] font-semibold">{project.cta} ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
