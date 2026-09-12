import Image from "next/image";
import { AngebotAgenturenProjectsData } from "../data/agenturen-types";

interface AgenturenProjectsSectionProps {
  projects: AngebotAgenturenProjectsData;
}

export default function AgenturenProjectsSection({ projects }: AgenturenProjectsSectionProps) {
  const { label, title, items } = projects;

  return (
    <section className="section-padding" style={{ background: "var(--bg-surface-1)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{label}</span>
          <h2 className="text-display-2">{title}</h2>
        </div>

        <div className="grid gap-6 reveal-on-scroll" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" }}>
          {items.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-img-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="project-content">
                <span className="tag-micro w-fit">{project.role}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.description}</p>
                <div className="project-footer">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-micro">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
