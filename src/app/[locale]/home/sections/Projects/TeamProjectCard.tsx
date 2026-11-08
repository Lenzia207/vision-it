import Image from "next/image";
import { TeamProjectTeaser } from "../data/types/home-types";
import { CardCta, Tags, cardClassName } from "./project-card-parts";

/** Team project: links out to the live product. */
export default function TeamProjectCard({ project, cta }: { project: TeamProjectTeaser; cta: string }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardClassName} grid grid-cols-1 sm:grid-cols-[minmax(140px,200px)_1fr] bg-white border-(--border-light)`}
    >
      <div className="relative min-h-[180px]">
        <Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 640px) 200px, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-2.5 p-6">
        <span className="text-xs text-(--text-300)">{project.category}</span>
        <h3 className="m-0 font-mono text-xl font-medium tracking-[-0.01em]">{project.title}</h3>
        <p className="m-0 text-[0.875rem] leading-[1.6] text-(--text-300)">{project.description}</p>
        <Tags tags={project.tags} className="text-[11px] bg-(--bg-surface-1) px-2 py-[3px]" />
        <CardCta label={cta} arrow="↗" />
      </div>
    </a>
  );
}
