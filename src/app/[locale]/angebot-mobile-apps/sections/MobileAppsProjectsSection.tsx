import Image from "next/image";
import { AngebotMobileAppsProjectsData } from "../data/mobile-apps-types";

interface MobileAppsProjectsSectionProps {
  projects: AngebotMobileAppsProjectsData;
}

export default function MobileAppsProjectsSection({ projects }: MobileAppsProjectsSectionProps) {
  const { label, title, featured, items } = projects;

  return (
    <section id="projekte" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{label}</span>
          <h2 className="text-display-2">{title}</h2>
        </div>

        <article
          className="grid reveal-on-scroll"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", background: "var(--bg-surface-1)", border: "1px solid var(--border-faint)" }}
        >
          <div style={{ position: "relative", minHeight: 300 }}>
            <Image src={featured.image} alt={featured.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="flex flex-col gap-4 p-10">
            <span className="badge w-fit">{featured.badgeLabel}</span>
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "1.5rem", fontWeight: 500, letterSpacing: "-0.02em" }}>{featured.title}</h3>
            <p style={{ color: "var(--text-300)" }}>{featured.description}</p>
            <div className="grid gap-6 pt-1" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
              <div className="flex flex-col gap-2.5">
                <span className="label-mono">{featured.roleLabel}</span>
                <ul className="flex flex-col gap-1.5" style={{ margin: 0, padding: 0, listStyle: "none", color: "var(--text-200)" }}>
                  {featured.roleItems.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="label-mono">{featured.highlightsLabel}</span>
                <ul className="flex flex-col gap-1.5" style={{ margin: 0, padding: 0, listStyle: "none", color: "var(--text-200)" }}>
                  {featured.highlightItems.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {featured.tags.map((tag) => <span key={tag} className="pill">{tag}</span>)}
            </div>
          </div>
        </article>

        <div className="grid gap-6 reveal-on-scroll" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))" }}>
          {items.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-img-wrapper">
                <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="project-content">
                <span className="badge-outline w-fit">{project.badgeLabel}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.description}</p>
                {project.role && (
                  <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "0.88rem", color: "var(--text-400)" }}>{project.role}</p>
                )}
                <div className="project-footer">
                  {project.tags.map((tag) => <span key={tag} className="tag-micro">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
