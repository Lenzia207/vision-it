import FloatingCard from "./FloatingCard";

export default function HeroCoreSymbol() {
    return (

        <div className="hidden lg:flex items-center justify-center relative" style={{ aspectRatio: "1" }}>
            {/* Orbiting rings */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "80%",
                    height: "80%",
                    border: "1px solid rgba(66, 245, 233, 0.2)",
                    borderLeftColor: "var(--accent-cyan)",
                    animation: "spin 20s linear infinite",
                }}
            />
            <div
                className="absolute rounded-full"
                style={{
                    width: "60%",
                    height: "60%",
                    border: "1px dashed rgba(139, 92, 246, 0.3)",
                    animation: "spin 15s linear infinite reverse",
                }}
            />
            {/* Core */}
            <div
                className="relative rounded-full"
                style={{
                    width: "40%",
                    height: "40%",
                    background: "radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.8), rgba(66, 245, 233, 0.2))",
                    boxShadow: "0 0 60px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(255,255,255,0.2)",
                }}
            />
            {/* Floating card 1 */}
            <FloatingCard type="card1" title="Optimized" description="System Load" />


            {/* Floating card 2 */}
            <FloatingCard type="card2" title="Zero Downtime" />

        </div>

    )

}