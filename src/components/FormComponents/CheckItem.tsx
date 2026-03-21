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
                    className="mt-0.5 w-4 h-4 rounded shrink-0 focus:ring-2 focus:ring-(--ring)"
                    style={{ background: "var(--bg-surface)", borderColor: "var(--border)", accentColor: "var(--accent)" }}
                />
                <span className="text-sm text-(--text-secondary) group-hover:text-(--text-primary) transition-colors leading-snug">{label}</span>
            </label>
            {checked && children && <div className="ml-7">{children}</div>}
        </div>
    );
}
