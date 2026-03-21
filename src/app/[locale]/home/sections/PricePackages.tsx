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
      className="relative section-padding"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <TitleHeader title={title} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => {
            const isHighlighted = index === 1;

            return (
              <div
                key={index}
                className="group p-8 rounded-2xl hover-lift reveal-on-scroll flex flex-col"
                style={{
                  background: isHighlighted
                    ? "linear-gradient(135deg, var(--accent), #4f46e5)"
                    : "var(--bg-card)",
                  border: `1px solid ${isHighlighted ? "rgba(59,130,246,0.5)" : "var(--border)"}`,
                  boxShadow: isHighlighted ? "0 0 40px var(--accent-glow)" : undefined,
                }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: isHighlighted ? "#fff" : "var(--text-primary)" }}>
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold mb-4" style={{ color: isHighlighted ? "#fff" : "var(--text-primary)" }}>
                    {pkg.price}
                  </div>
                  <p className="text-sm h-10" style={{ color: isHighlighted ? "rgba(191,219,254,0.9)" : "var(--text-secondary)" }}>
                    {pkg.for}
                  </p>
                </div>

                <div className="grow">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <IconLucide
                          iconName="Check"
                          className={`w-5 h-5 mr-3 shrink-0 mt-0.5 ${isHighlighted ? "text-blue-200" : "text-blue-400"}`}
                        />
                        <span className="text-sm leading-relaxed" style={{ color: isHighlighted ? "rgba(239,246,255,0.9)" : "var(--text-secondary)" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex justify-end">
                  <AppButton btnText={btnText} packageName={pkg.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}