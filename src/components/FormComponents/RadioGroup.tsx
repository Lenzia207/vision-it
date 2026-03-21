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
            {label && <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{label}</p>}
            <div className="flex flex-wrap gap-2">
                {options.map(opt => (
                    <button
                        key={opt.value}
                        type="button"
                        onClick={() => onChange(opt.value)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
                            value === opt.value
                                ? "bg-[rgba(59,130,246,0.1)] border-[rgba(59,130,246,0.3)] text-[var(--accent-light)]"
                                : "bg-[var(--bg-surface)] border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                        }`}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
