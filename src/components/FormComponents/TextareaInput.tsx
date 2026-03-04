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
            <label className="text-sm font-medium text-zinc-400">{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder ?? ""}
                rows={rows}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-800/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
            />
        </div>
    );
}
