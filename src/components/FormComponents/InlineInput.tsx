export default function InlineInput({
    name,
    value,
    placeholder,
    onChange,
}: {
    name: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder ?? ""}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800/80 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
        />
    );
}