export default function CheckItem({
    label,
    checked,
    onChange,
    children,
}: {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    children?: React.ReactNode;
}) {
    return (
        <div className="space-y-2">
            <label className="flex items-start gap-3 cursor-pointer group">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={e => onChange(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded bg-zinc-800 border-zinc-600 text-blue-500 focus:ring-blue-500/50 focus:ring-2 shrink-0"
                />
                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors leading-snug">{label}</span>
            </label>
            {checked && children && <div className="ml-7">{children}</div>}
        </div>
    );
}
