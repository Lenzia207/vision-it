export default function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
            <h3 className="text-lg font-semibold" style={{ color: "var(--accent)" }}>{title}</h3>
            {children}
        </div>
    );
}