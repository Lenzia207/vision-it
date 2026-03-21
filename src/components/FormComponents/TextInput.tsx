export default function TextInput({
    label,
    name,
    value,
    placeholder,
    onChange,
    required,
}: {
    label: string;
    name: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}) {
    return (
        <div className="space-y-1.5">
            <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder ?? ""}
                required={required}
                className="w-full px-4 py-2.5 input-dark transition-all"
            />
        </div>
    );
}