import TitleHeader from "@/components/TitleHeader";
import IconLucide from "@/components/IconsLucide";
import { PricePackage } from "./data/types/home-types";
import AppButton from "@/components/AppButton";

interface PricePackagesProps {
  title: string;
  btnText: string;
  packages: PricePackage[];
}

export default function PricePackages({ title, btnText, packages }: PricePackagesProps) {
  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        <TitleHeader title={title} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => {
            const isHighlighted = index === 1; // highlights the middle package
            const bgClass = isHighlighted 
              ? "bg-zinc-800/60 border-blue-500/50" 
              : "bg-zinc-900/40 border-white/5";
            
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl border hover-lift reveal-on-scroll flex flex-col ${bgClass}`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-white mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-zinc-400 text-sm h-10">
                    {pkg.for}
                  </p>
                </div>
                
                <div className="grow">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <IconLucide
                          iconName="Check"
                          className="w-5 h-5 text-blue-400 mr-3 shrink-0 mt-0.5"
                        />
                        <span className="text-zinc-300 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <AppButton btnText={btnText} packageName={pkg.name} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}