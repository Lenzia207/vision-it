import Image from "next/image";
import { Link } from "@/app/i18n/routing";
import { caseStudiesUrl } from "@/app/configs/configs";
import { ProjectsSection as ProjectsData } from "./data/types/home-types";
import { websiteThemes } from "../../projekte/data/case-study-themes";
import Eyebrow from "./components/Eyebrow";

interface ProjectsSectionProps {
  data: ProjectsData;
  locale: string;
}

const cardClassName =
  "group flex-1 no-underline text-(--teal) border-2 transition-[border-color,transform] duration-300 hover:border-(--lime) hover:-translate-y-1";

const appIconClassNames: Record<string, { panel: string; icon: string }> = {
  pictolog: { panel: "bg-[#F2F4F5]", icon: "max-w-[150px]" },
  splitn: {
    panel: "bg-[#F8F7F6]",
    icon: "max-w-[108px] rounded-[22.5%] shadow-[0_10px_24px_rgba(24,20,17,.22),0_0_0_1px_rgba(24,20,17,.06)]",
  },
};

function GroupHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-t-2 border-(--teal) pt-[18px]">
      <span className="font-mono text-[0.8rem] font-bold text-(--text-400)">{index}</span>
      <span className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-(--teal)">{title}</span>
    </div>
  );
}

function Tags({ tags, className }: { tags: string[]; className: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className={`font-semibold text-(--text-300) ${className}`}>
          {tag}
        </span>
      ))}
    </div>
  );
}

function CaseStudyBadge({ label }: { label: string }) {
  return (
    <span className="font-mono text-[0.69rem] font-semibold uppercase tracking-[0.1em] bg-(--teal) text-white px-2.5 py-[5px]">
      {label}
    </span>
  );
}

function CardCta({ label, arrow }: { label: string; arrow: string }) {
  return (
    <span className="mt-auto font-mono text-[0.94rem] font-semibold">
      {label}{" "}
      <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
        {arrow}
      </span>
    </span>
  );
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
            {data.websites.map((project, i) => {
              const theme = websiteThemes[project.slug];
              return (
                <div
                  key={project.slug}
                  className="reveal-on-scroll flex flex-col"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <Link
                    href={`${caseStudiesUrl}/${project.slug}`}
                    locale={locale}
                    className={`${cardClassName} flex flex-col bg-(--bg-surface-1) border-(--bg-surface-1)`}
                  >
                    <div className={`px-7 pt-7 ${theme.panel}`}>
                      <div className={`bg-white rounded-t-lg overflow-hidden ${theme.glow}`}>
                        <div className={`flex items-center gap-1.5 px-3.5 py-2.5 ${theme.bar}`}>
                          {[0, 1, 2].map((dot) => (
                            <span key={dot} className={`size-[9px] rounded-full ${theme.dot}`} />
                          ))}
                          <span className={`ml-2.5 font-mono text-[11px] ${theme.domain}`}>{project.domain}</span>
                        </div>
                        <div className="relative w-full aspect-video">
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            sizes="(min-width: 1100px) 360px, (min-width: 760px) 50vw, 100vw"
                            className={`object-cover ${theme.image}`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-3.5 p-7">
                      <div className="flex flex-wrap gap-2 items-center">
                        <CaseStudyBadge label={data.caseStudyBadge} />
                        <span className="text-[0.81rem] text-(--text-300)">{project.category}</span>
                      </div>
                      <h3 className="m-0 font-mono text-[1.62rem] font-medium tracking-[-0.02em] leading-[1.15]">
                        {project.title}
                      </h3>
                      <p className="m-0 text-[0.94rem] leading-[1.65] text-(--text-300)">{project.description}</p>
                      <Tags tags={project.tags} className="text-xs border border-(--border-light) px-2.5 py-1" />
                      <CardCta label={data.caseStudyCta} arrow="→" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <GroupHeading index="02" title={data.appsTitle} />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] gap-6">
            {data.apps.map((app, i) => {
              const classNames = appIconClassNames[app.slug];
              return (
                <div
                  key={app.slug}
                  className="reveal-on-scroll flex flex-col"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <Link
                    href={`${caseStudiesUrl}/${app.slug}`}
                    locale={locale}
                    className={`${cardClassName} grid grid-cols-1 sm:grid-cols-[minmax(150px,220px)_1fr] bg-(--bg-surface-1) border-(--bg-surface-1)`}
                  >
                    <div className={`flex items-center justify-center p-7 border-b sm:border-b-0 sm:border-r border-(--border-faint) ${classNames.panel}`}>
                      <Image
                        src={app.icon}
                        alt={app.iconAlt}
                        width={512}
                        height={512}
                        sizes="150px"
                        className={`block w-full h-auto ${classNames.icon}`}
                      />
                    </div>
                    <div className="flex flex-col gap-3 p-[26px]">
                      <div className="flex flex-wrap gap-2 items-center">
                        <CaseStudyBadge label={data.caseStudyBadge} />
                        <span className="text-[0.81rem] text-(--text-300)">{app.category}</span>
                      </div>
                      <h3 className="m-0 font-mono text-2xl font-medium tracking-[-0.02em]">{app.title}</h3>
                      <p className="m-0 text-[0.94rem] leading-[1.6] text-(--text-300)">{app.description}</p>
                      <Tags tags={app.tags} className="text-xs border border-(--border-light) px-2.5 py-1" />
                      <CardCta label={data.caseStudyCta} arrow="→" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <GroupHeading index="03" title={data.teamTitle} />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] gap-6">
            {data.team.map((project, i) => (
              <div
                key={project.title}
                className="reveal-on-scroll flex flex-col"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardClassName} grid grid-cols-1 sm:grid-cols-[minmax(140px,200px)_1fr] bg-white border-(--border-light)`}
                >
                  <div className="relative min-h-[180px]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 640px) 200px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5 p-6">
                    <span className="text-xs text-(--text-300)">{project.category}</span>
                    <h3 className="m-0 font-mono text-xl font-medium tracking-[-0.01em]">{project.title}</h3>
                    <p className="m-0 text-[0.875rem] leading-[1.6] text-(--text-300)">{project.description}</p>
                    <Tags tags={project.tags} className="text-[11px] bg-(--bg-surface-1) px-2 py-[3px]" />
                    <CardCta label={data.teamCta} arrow="↗" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-on-scroll section-dark flex flex-wrap items-center justify-between gap-6 p-[clamp(28px,4vw,44px)]">
          <div className="flex flex-col gap-1.5 max-w-[640px]">
            <span className="font-mono text-[clamp(22px,2.4vw,30px)] font-medium tracking-[-0.02em] text-white">
              {data.cta.title}
            </span>
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
