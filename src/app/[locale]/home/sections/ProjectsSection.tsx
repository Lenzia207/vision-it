import Image from "next/image";
import { ProjectsSection as ProjectsData } from "./data/types/home-types";
import Eyebrow from "./components/Eyebrow";

interface ProjectsSectionProps {
  data: ProjectsData;
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <section id="projekte" className="bg-white px-[clamp(20px,5vw,64px)] py-[clamp(88px,10vw,136px)]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-14">
        <div className="reveal-on-scroll flex flex-col gap-3">
          <Eyebrow>{data.tag}</Eyebrow>
          <h2 className="m-0 font-mono font-medium text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-(--teal)">
            {data.title}
          </h2>
          <p className="m-0 mt-1.5 max-w-2xl text-base leading-relaxed text-(--text-300)">{data.description}</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-12 items-start">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-5">
            {data.projects.map((project, i) => (
              <div
                key={project.title}
                className={`reveal-on-scroll flex flex-col ${i === 0 ? "min-[900px]:col-span-2" : ""}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-col overflow-hidden bg-(--bg-surface-1) border-2 border-(--bg-surface-1) no-underline transition-[border-color,transform] duration-300 hover:border-(--lime) hover:-translate-y-1"
                >
                  <div className="relative w-full aspect-video overflow-hidden bg-(--bg-surface-3)">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes={i === 0 ? "(min-width: 900px) 620px, 100vw" : "(min-width: 900px) 310px, 100vw"}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <h3 className="m-0 font-mono text-[1.12rem] font-medium leading-tight text-(--teal)">
                      {project.title}
                    </h3>
                    <p className="m-0 text-[0.92rem] leading-relaxed text-(--text-300)">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.72rem] font-semibold text-(--text-300) border border-(--border-light) px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="reveal-on-scroll flex flex-col gap-[18px]" style={{ transitionDelay: "150ms" }}>
            <div className="flex justify-between items-baseline gap-3">
              <h3 className="m-0 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-(--text-300)">
                {data.articlesTitle}
              </h3>
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-[0.04em] text-(--text-300) border border-(--border-light)">
                {data.articlesBadge}
              </span>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col border-t-2 border-(--teal)">
              {data.articles.map((title, i) => (
                <li
                  key={title}
                  className="grid grid-cols-[40px_minmax(0,1fr)_auto] gap-4 items-start px-1 py-[22px] border-b border-(--border-light) text-(--teal)"
                >
                  <span className="font-mono text-[0.8rem] font-bold text-(--text-400) pt-[3px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-col gap-2">
                    <span className="font-mono text-[1.12rem] font-medium leading-[1.3]">{title}</span>
                    <span className="text-[0.82rem] text-(--text-400)">{data.articleStatus}</span>
                  </span>
                  <span aria-hidden="true" className="font-mono text-[1.1rem] text-(--text-400)">→</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
