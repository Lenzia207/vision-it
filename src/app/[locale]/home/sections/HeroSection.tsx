import { MessageCircle } from "lucide-react";
import BackgroundEffect from "@/components/BackgroundEffect";

interface HeroSectionProps {
  titleLine1: string;
  description: string;
  btnText: string;
}
export default function HeroSection({
  titleLine1,
  description,
  btnText,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <BackgroundEffect />
      
      {/* Main Title */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8">
          <span className="block animate-enter text-white">{titleLine1}</span>
      
        </h1>

        <p className="animate-enter delay-300 text-lg md:text-xl text-zinc-400 max-w-xxl mx-auto font-light leading-relaxed mb-10 whitespace-pre-line">
          {description}
        </p>

        <div className="animate-enter delay-300 flex justify-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              {btnText}
              <MessageCircle className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
