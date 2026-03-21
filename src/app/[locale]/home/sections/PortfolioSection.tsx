import Image from "next/image";
import TitleHeader from "@/components/TitleHeader";
import { Project } from "./data/types/home-types";

interface PortfolioSectionProps {
  title: string;
  description: string;
  categories: string[];
  projects: Project[];
}

function getProjectType(tags: string[]): string {
  if (tags.includes("PWA")) return "PWA App";
  if (tags.includes("Flutter") || tags.includes("Dart")) return "Mobile App";
  return "Web Application";
}

function getProjectStatus(title: string): { label: string; cyan: boolean } {
  if (title.includes("Tageszeitung")) return { label: "[ SCALE ]", cyan: true };
  if (title.includes("Pictolog")) return { label: "[ LIVE ]", cyan: true };
  return { label: "[ PROD ]", cyan: false };
}

export default function PortfolioSection({ title, projects }: PortfolioSectionProps) {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <TitleHeader title={title} tag="[ WORK_LOG ]" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project, index) => {
            const status = getProjectStatus(project.title);
            const type = getProjectType(project.tags);
            return (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group"
              >
                <div className="project-img-wrapper">
                  <Image
                    src={project.image || "/images/placeholder.png"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "brightness(0.8) contrast(1.1)" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="project-img-overlay" />
                </div>

                <div className="project-content">
                  <div className="project-meta-row">
                    <span className="label-mono">{type}</span>
                    <span
                      className="label-mono"
                      style={status.cyan ? { color: "var(--accent-cyan)" } : {}}
                    >
                      {status.label}
                    </span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <div className="project-footer">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag-micro">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
