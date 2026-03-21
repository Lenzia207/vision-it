export default function TextareaInput({
    label,
    name,
    value,
    placeholder,
    onChange,
    rows = 3,
}: {
    label: string;
    name: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
}) {
    return (
        <div className="space-y-1.5">
            <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder ?? ""}
                rows={rows}
                className="w-full px-4 py-2.5 input-dark transition-all resize-none"
            />
        </div>
    );
}
