import BackgroundEffect from "@/components/BackgroundEffect";
import HeroCoreSymbol from "./components/HersoCoreSymbol";
import GridOverlay from "./components/GridOverlay";

interface HeroSectionProps {
  titleLine1: string;
  description: string;
  btnText: string;
  viewMore: string;
}

const TECH_STACK = ["React", "Next.js", "Tailwind CSS", "Flutter", "Dart"];

export default function HeroSection({
  titleLine1,
  description,
  btnText,
  viewMore,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden lg:pt-28">
      <BackgroundEffect />
      {/* Background Grid overlay */}
      <GridOverlay />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">

          {/* Left: Content */}
          <div className="flex flex-col items-start gap-8">
            {/* Status pill */}
            <div className="pill pill-accent animate-enter flex items-center gap-2">
              <span className="status-dot" />
              Freelance Developer für Web &amp; Mobile Apps
            </div>

            {/* Headline */}
            <h1 className="lg:text-display-1 text-display-2 animate-enter delay-100">
              {titleLine1.split(" ").map((word, i) => {
                const isAccent = word.toLowerCase().includes("software") || word.toLowerCase().includes("entwicklung") || word.toLowerCase().includes("development");
                return (
                  <span key={i} style={isAccent ? { color: "var(--accent-cyan)" } : {}}>
                    {word}{" "}
                  </span>
                );
              })}
            </h1>

            {/* Description */}
            <p className="animate-enter delay-200 text-lg leading-relaxed max-w-xl" style={{ color: "var(--text-300)" }}>
              {description}
            </p>

            {/* CTAs */}
            <div className="animate-enter delay-300 flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                {btnText}
              </a>
              <a href="#projects" className="btn btn-secondary">
                {viewMore}
              </a>
            </div>

            {/* Tech stack */}
            <div className="animate-enter delay-400 w-full">
              <div className="label-mono mb-3">Core Stack //</div>
              <div className="flex flex-wrap gap-3">
                {TECH_STACK.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <HeroCoreSymbol />
        </div>
      </div>
    </section>
  );
}

