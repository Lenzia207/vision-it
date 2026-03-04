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
            <label className="text-sm font-medium text-zinc-400">{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder ?? ""}
                required={required}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-800/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
        </div>
    );
}