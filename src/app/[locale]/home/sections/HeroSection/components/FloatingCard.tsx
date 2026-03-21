
interface FloatingCardProps {
    type?: "card1" | "card2";
    title: string;
    description?: string;
}
export default function FloatingCard({ title, description, type }: FloatingCardProps) {

    if (!title) return null;

    if (type === "card1") {

        return (
            <div
                className="absolute rounded-2xl p-4 flex flex-col gap-2"
                style={{
                    top: "10%", right: "0",
                    background: "rgba(18, 20, 26, 0.85)",
                    border: "1px solid var(--border-light)",
                    backdropFilter: "blur(10px)",
                    transform: "rotate(5deg)",
                }}
            >
                <span className="label-mono">{description}</span>
                <span className="font-bold text-sm" style={{ color: "var(--accent-cyan)" }}>{title}</span>
            </div>
        )
    }

    if (type === "card2") {
        return (
            <div
                className="absolute rounded-2xl p-4 flex items-center gap-3"
                style={{
                    bottom: "15%", left: "5%",
                    background: "rgba(18, 20, 26, 0.85)",
                    border: "1px solid var(--border-light)",
                    backdropFilter: "blur(10px)",
                    transform: "rotate(-3deg)",
                }}
            >
                <span className="status-dot" style={{ margin: 0 }} />
                <span className="font-bold text-sm">{title}</span>
            </div>
        )
    }

    return null;
}   