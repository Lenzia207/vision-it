
import type { PricePackage } from "../../data/types/home-types";

interface PackageSectionProps {
    packageLabel: string;
    packages: PricePackage[];
    selectedPackage: string | null;
    setSelectedPackage: (pkgName: string | null) => void;
}

export default function PackageSection({ packageLabel, packages, selectedPackage, setSelectedPackage }: PackageSectionProps) {
    return (
        <div className="mt-1 pl-1 space-y-2.5">
            <label className="text-sm font-medium text-slate-400 ml-1 block">
                {packageLabel}
            </label>
            <div className="space-y-2">
                {packages.map((pkg) => (
                    <button
                        key={pkg.name}
                        type="button"
                        onClick={() => setSelectedPackage(pkg.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all duration-200 ${selectedPackage === pkg.name
                            ? "bg-blue-50 border-blue-400/40 text-slate-800"
                            : "bg-white/60 border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <span
                                className={`w-4 h-4 rounded-full flex items-center justify-center border-2 transition-colors shrink-0 ${selectedPackage === pkg.name
                                    ? "border-blue-500"
                                    : "border-slate-300"
                                    }`}
                            >
                                {selectedPackage === pkg.name && (
                                    <span className="w-2 h-2 rounded-full bg-blue-400 block" />
                                )}
                            </span>
                            <span className="font-medium">{pkg.name}</span>
                        </div>
                        <span
                            className={`text-xs font-medium tabular-nums ${selectedPackage === pkg.name
                                ? "text-blue-600"
                                : "text-slate-400"
                                }`}
                        >
                            {pkg.price}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}