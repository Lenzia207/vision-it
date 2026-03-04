export default function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 md:p-8 space-y-5">
            <h3 className="text-lg font-semibold text-blue-400">{title}</h3>
            {children}
        </div>
    );
}