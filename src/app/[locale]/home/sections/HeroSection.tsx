import BackgroundEffect from "@/components/BackgroundEffect";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  titleLine1: string;
  description: string;
  btnText: string;
  viewMore: string;
}

export default function HeroSection({
  titleLine1,
  description,
  btnText,
  viewMore,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient Glow */}
      <BackgroundEffect />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Tag */}
        <div className="animate-enter inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full badge-outline">
          <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent-light)" }} />
          <span className="text-xs font-medium tracking-wide uppercase" style={{ color: "var(--text-secondary)" }}>
            Web &amp; App Development
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.08] mb-8">
          <span className="block animate-enter text-gradient-hero">{titleLine1}</span>
        </h1>

        {/* Subline */}
        <p
          className="animate-enter delay-200 text-lg lg:text-xl mx-auto font-light leading-relaxed mb-12 max-w-2xl whitespace-pre-line"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>

        {/* CTA Row */}
        <div className="animate-enter delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-medium text-white rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 32px var(--accent-glow)",
            }}
          >
            {btnText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-full transition-all duration-200 hover:scale-105"
            style={{
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            {viewMore}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1.5px solid var(--border-hover)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: "var(--text-muted)" }}
          />
        </div>
      </div>
    </section>
  );
}
