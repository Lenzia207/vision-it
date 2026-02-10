"use client";

import { useState, useEffect, useRef } from "react";
import IconLucide from "@/components/IconsLucide";
import { Project } from "./data/types/home-types";
import Image from "next/image";

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
    categories[0] || "Web"
  );
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
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
      { threshold: 0.1 }
    );

    const elements = gridRef.current.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">{description}</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 reveal-on-scroll">
          <div className="inline-flex p-2 gap-4 bg-zinc-900/50 rounded-xl border border-white/5 backdrop-blur-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-black shadow-lg scale-105"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
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
            <div className="col-span-full text-center py-12 text-zinc-500 reveal-on-scroll">
              No projects found in this category.
            </div>
          ) : (
            filteredProjects.map((project, index) => {
              console.log(project.url);
              return (
                <div
                  key={`${project.title}-${index}`}
                  className="group relative bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-1 reveal-on-scroll"
                >
                  {/* Image Placeholder - In a real app, use Next.js Image */}
                  <div className="aspect-video w-full bg-zinc-800/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
                    {/* Placeholder for actual image */}
                    {project.image == null && (
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
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
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        View Project
                        <IconLucide
                          iconName="ArrowUpRight"
                          className="w-4 h-4"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium text-zinc-400 bg-white/5 rounded-full border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
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
