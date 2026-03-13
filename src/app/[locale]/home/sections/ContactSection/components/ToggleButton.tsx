interface ToggleButtonProps {
    onClick: () => void;
    isActive: boolean;
    label: string;
}
export default function ToggleButton({ onClick, isActive, label }: ToggleButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${isActive
                ? "bg-blue-500/15 border-blue-500/50 text-blue-300"
                : "bg-zinc-800/60 border-white/10 text-zinc-400 hover:border-white/20 hover:text-zinc-300"
                }`}
        >
            <span
                className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-all shrink-0 ${isActive
                    ? "bg-blue-500 border-blue-500"
                    : "border-zinc-600"
                    }`}
            >
                {isActive && (
                    <svg
                        className="w-2.5 h-2.5 text-white"
                        viewBox="0 0 10 8"
                        fill="none"
                    >
                        <path
                            d="M1 4L4 7L9 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </span>
            {label}
        </button>
    )
}