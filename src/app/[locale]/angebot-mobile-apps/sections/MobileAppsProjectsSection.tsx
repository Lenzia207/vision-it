import { caseStudiesUrl } from "@/app/configs/configs";
import Eyebrow from "../../home/sections/components/Eyebrow";
import AppCard from "../components/AppCard";
import TeamProjectCard from "../components/TeamProjectCard";
import { AngebotMobileAppsProjectsData } from "../data/mobile-apps-types";
import PictologPhone from "../mockups/PictologPhone";
import SplitnPhone from "../mockups/SplitnPhone";

interface MobileAppsProjectsSectionProps {
  projects: AngebotMobileAppsProjectsData;
  locale: string;
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
              <TeamProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
