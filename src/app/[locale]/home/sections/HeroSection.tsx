import { MessageCircle } from "lucide-react";
import BackgroundEffect from "@/components/BackgroundEffect";
import AppButton from "@/components/AppButton";

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
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8">
          <span className="block animate-enter text-white">{titleLine1}</span>
      
        </h1>

        <p className="animate-enter delay-300 text-lg lg:text-2xl text-zinc-400  mx-auto font-light leading-relaxed mb-10 whitespace-pre-line">
          {description}
        </p>
        <AppButton btnText={btnText} />
      </div>
    </section>
  );
}
