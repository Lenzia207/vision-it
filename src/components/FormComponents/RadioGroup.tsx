export default function RadioGroup<T extends string>({
    label,
    name,
    options,
    value,
    onChange,
}: {
    label: string;
    name: string;
    options: { value: T; label: string }[];
    value: T | "";
    onChange: (value: T) => void;
}) {
    return (
        <div className="space-y-2">
            {label && <p className="text-sm font-medium text-zinc-400">{label}</p>}
            <div className="flex flex-wrap gap-2">
                {options.map(opt => (
                    <button
                        key={opt.value}
                        type="button"
                        onClick={() => onChange(opt.value)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
                            value === opt.value
                                ? "bg-blue-500/20 border-blue-500/50 text-blue-300"
                                : "bg-zinc-800/60 border-white/10 text-zinc-400 hover:border-white/25 hover:text-zinc-200"
                        }`}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
