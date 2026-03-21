"use client";

import { useState, useEffect, useRef } from "react";
import IconLucide from "@/components/IconsLucide";
import { Project } from "./data/types/home-types";
import Image from "next/image";
import TitleHeader from "@/components/TitleHeader";
import OverlayOnHover from "@/components/OverlayOnHover";

interface PortfolioSectionProps {
  title: string;
  description: string;
  categories: string[];
  projects: Project[];
}

export default function PortfolioSection({
  title,
  description,
  categories,
  projects,
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0] || "Web",
  );
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory,
  );

  // Re-trigger scroll reveal animation when category changes
  useEffect(() => {
    if (!gridRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = gridRef.current.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section id="projects" className="section-padding" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <TitleHeader title={title} description={description} />

        {/* Category Filter */}
        <div className="flex justify-center mb-12 reveal-on-scroll">
          <div className="inline-flex p-1.5 gap-2 rounded-xl" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                style={{
                  background: activeCategory === category ? "var(--accent)" : "transparent",
                  color: activeCategory === category ? "#fff" : "var(--text-secondary)",
                  boxShadow: activeCategory === category ? "0 0 20px var(--accent-glow)" : "none",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className={
            filteredProjects.length === 1
              ? "max-w-xl mx-auto"
              : "grid grid-cols-1 md:grid-cols-2 gap-8"
          }
          key={activeCategory}
        >
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-12 reveal-on-scroll" style={{ color: "var(--text-muted)" }}>
              No projects found in this category.
            </div>
          ) : (
            filteredProjects.map((project, index) => {
              return (
                <div
                  key={`${project.title}-${index}`}
                  className="group relative card-dark rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 reveal-on-scroll"
                >
                  {/* Image */}
                  <div className="aspect-video w-full relative overflow-hidden">
                    <div className="absolute inset-0" />
                    {project.image == null && (
                      <div className="absolute inset-0 flex items-center justify-center" style={{ color: "var(--text-muted)" }}>
                        <IconLucide
                          iconName="Image"
                          className="w-12 h-12 opacity-20"
                        />
                      </div>
                    )}

                    <Image
                      src={project.image || "/images/placeholder.png"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    
                    <OverlayOnHover text="View Project" url={project.url} />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="badge-outline text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-2 transition-colors" style={{ color: "var(--text-primary)" }}>
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
