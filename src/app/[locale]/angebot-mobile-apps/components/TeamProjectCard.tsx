import Image from "next/image";
import { AngebotMobileAppsTeamProject } from "../data/mobile-apps-types";
import { cardHoverClassName } from "./card-styles";

export default function TeamProjectCard({ project }: { project: AngebotMobileAppsTeamProject }) {
  return (
    <a
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
  );
}
