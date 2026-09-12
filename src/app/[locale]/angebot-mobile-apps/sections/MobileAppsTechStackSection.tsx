import { AngebotMobileAppsTechStackData } from "../data/mobile-apps-types";

interface MobileAppsTechStackSectionProps {
  techStack: AngebotMobileAppsTechStackData;
}

export default function MobileAppsTechStackSection({ techStack }: MobileAppsTechStackSectionProps) {
  const { label, title, note, categories } = techStack;

  return (
    <section id="tech-stack" className="section-dark section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-11">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="section-tag">{label}</span>
          <h2 className="text-display-2">{title}</h2>
        </div>

        <div className="grid gap-8 reveal-on-scroll" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          {categories.map((category) => (
            <div key={category.category} className="flex flex-col gap-4">
              <span className="label-mono">{category.category}</span>
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <span key={item} className="pill-accent">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="max-w-2xl reveal-on-scroll" style={{ color: "var(--text-300)" }}>{note}</p>
      </div>
    </section>
  );
}
