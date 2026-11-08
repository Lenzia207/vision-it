import { ProjectsSection as ProjectsData } from "./data/types/home-types";
import Eyebrow from "./components/Eyebrow";
import AppProjectCard from "./Projects/AppProjectCard";
import { GroupHeading, RevealCard } from "./Projects/project-card-parts";
import TeamProjectCard from "./Projects/TeamProjectCard";
import WebsiteProjectCard from "./Projects/WebsiteProjectCard";

interface ProjectsSectionProps {
  data: ProjectsData;
  locale: string;
}

export default function ProjectsSection({ data, locale }: ProjectsSectionProps) {
  return (
    <section id="projekte" className="bg-white px-[clamp(20px,5vw,64px)] py-[clamp(88px,10vw,136px)]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
        <div className="reveal-on-scroll flex flex-wrap justify-between items-end gap-8">
          <div className="flex flex-col gap-3.5 max-w-[720px]">
            <span className="inline-flex items-center gap-2.5">
              <span aria-hidden="true" className="size-2.5 bg-(--lime)" />
              <Eyebrow>{data.tag}</Eyebrow>
            </span>
            <h2 className="m-0 font-mono font-medium text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04] tracking-[-0.03em] text-(--teal)">
              {data.title}
            </h2>
            <p className="m-0 mt-1.5 text-[1.06rem] leading-[1.65] text-(--text-300)">{data.description}</p>
          </div>
          <dl className="m-0 flex border border-(--border-light)">
            {data.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse justify-end gap-0.5 px-[22px] py-3.5 border-r border-(--border-light) last:border-r-0"
              >
                <dt className="text-xs font-normal text-(--text-300)">{stat.label}</dt>
                <dd className="m-0 font-mono text-[1.75rem] font-medium text-(--teal)">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-6">
          <GroupHeading index="01" title={data.websitesTitle} />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-6">
            {data.websites.map((project, i) => (
              <RevealCard key={project.slug} index={i}>
                <WebsiteProjectCard project={project} badge={data.caseStudyBadge} cta={data.caseStudyCta} locale={locale} />
              </RevealCard>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <GroupHeading index="02" title={data.appsTitle} />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] gap-6">
            {data.apps.map((app, i) => (
              <RevealCard key={app.slug} index={i}>
                <AppProjectCard app={app} badge={data.caseStudyBadge} cta={data.caseStudyCta} locale={locale} />
              </RevealCard>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <GroupHeading index="03" title={data.teamTitle} />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] gap-6">
            {data.team.map((project, i) => (
              <RevealCard key={project.title} index={i}>
                <TeamProjectCard project={project} cta={data.teamCta} />
              </RevealCard>
            ))}
          </div>
        </div>

        <div className="reveal-on-scroll section-dark flex flex-wrap items-center justify-between gap-6 p-[clamp(28px,4vw,44px)]">
          <div className="flex flex-col gap-1.5 max-w-[640px]">
            <span className="font-mono text-[clamp(22px,2.4vw,30px)] font-medium tracking-[-0.02em] text-white">{data.cta.title}</span>
            <span className="text-[0.94rem] text-(--text-300)">{data.cta.description}</span>
          </div>
          <a href="#contact" className="btn btn-primary">
            {data.cta.label} →
          </a>
        </div>
      </div>
    </section>
  );
}
