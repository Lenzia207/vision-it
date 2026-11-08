import Image from "next/image";
import { Link } from "@/app/i18n/routing";
import { caseStudiesUrl } from "@/app/configs/configs";
import { AppProjectTeaser } from "../data/types/home-types";
import { CardCta, CaseStudyBadge, Tags, cardClassName } from "./project-card-parts";

// Icon panel background and icon shape per app
const appIconClassNames: Record<string, { panel: string; icon: string }> = {
  pictolog: { panel: "bg-[#F2F4F5]", icon: "max-w-[150px]" },
  splitn: {
    panel: "bg-[#F8F7F6]",
    icon: "max-w-[108px] rounded-[22.5%] shadow-[0_10px_24px_rgba(24,20,17,.22),0_0_0_1px_rgba(24,20,17,.06)]",
  },
};

interface AppProjectCardProps {
  app: AppProjectTeaser;
  badge: string;
  cta: string;
  locale: string;
}

export default function AppProjectCard({ app, badge, cta, locale }: AppProjectCardProps) {
  const classNames = appIconClassNames[app.slug];
  return (
    <Link
      href={`${caseStudiesUrl}/${app.slug}`}
      locale={locale}
      className={`${cardClassName} grid grid-cols-1 sm:grid-cols-[minmax(150px,220px)_1fr] bg-(--bg-surface-1) border-(--bg-surface-1)`}
    >
      <div className={`flex items-center justify-center p-7 border-b sm:border-b-0 sm:border-r border-(--border-faint) ${classNames.panel}`}>
        <Image src={app.icon} alt={app.iconAlt} width={512} height={512} sizes="150px" className={`block w-full h-auto ${classNames.icon}`} />
      </div>
      <div className="flex flex-col gap-3 p-[26px]">
        <div className="flex flex-wrap gap-2 items-center">
          <CaseStudyBadge label={badge} />
          <span className="text-[0.81rem] text-(--text-300)">{app.category}</span>
        </div>
        <h3 className="m-0 font-mono text-2xl font-medium tracking-[-0.02em]">{app.title}</h3>
        <p className="m-0 text-[0.94rem] leading-[1.6] text-(--text-300)">{app.description}</p>
        <Tags tags={app.tags} className="text-xs border border-(--border-light) px-2.5 py-1" />
        <CardCta label={cta} arrow="→" />
      </div>
    </Link>
  );
}
