import Image from "next/image";
import { Link } from "@/app/i18n/routing";
import { caseStudiesUrl } from "@/app/configs/configs";
import { websiteThemes } from "../../../projekte/data/case-study-themes";
import { WebsiteProjectTeaser } from "../data/types/home-types";
import { CardCta, CaseStudyBadge, Tags, cardClassName } from "./project-card-parts";

interface WebsiteProjectCardProps {
  project: WebsiteProjectTeaser;
  badge: string;
  cta: string;
  locale: string;
}

/** Website case study teaser: screenshot in a browser frame tinted with the client's brand colours. */
export default function WebsiteProjectCard({ project, badge, cta, locale }: WebsiteProjectCardProps) {
  const theme = websiteThemes[project.slug];
  return (
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
          <CaseStudyBadge label={badge} />
          <span className="text-[0.81rem] text-(--text-300)">{project.category}</span>
        </div>
        <h3 className="m-0 font-mono text-[1.62rem] font-medium tracking-[-0.02em] leading-[1.15]">{project.title}</h3>
        <p className="m-0 text-[0.94rem] leading-[1.65] text-(--text-300)">{project.description}</p>
        <Tags tags={project.tags} className="text-xs border border-(--border-light) px-2.5 py-1" />
        <CardCta label={cta} arrow="→" />
      </div>
    </Link>
  );
}
