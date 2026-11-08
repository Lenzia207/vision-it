interface MenuToggleButtonProps {
  open: boolean;
  controls: string;
  label: string;
  text: string;
  onToggle: () => void;
}

/** Compact-layout toggle for the fullscreen menu; the two bars morph into an X when open. */
export default function MenuToggleButton({ open, controls, label, text, onToggle }: MenuToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controls}
      aria-label={label}
      className="min-[1060px]:hidden flex items-center gap-3 min-h-11 px-1 py-2 bg-transparent border-0 cursor-pointer text-white font-mono text-[11px] font-semibold uppercase tracking-[0.16em]"
    >
      <span>{text}</span>
      <span aria-hidden="true" className="relative block w-[26px] h-3.5">
        <span className={`absolute left-0 top-0.5 w-[26px] h-0.5 bg-white transition-transform duration-300 ${open ? "translate-y-1 rotate-45" : ""}`} />
        <span
          className={`absolute right-0 top-2.5 h-0.5 bg-(--lime) transition-[transform,width] duration-300 ${
            open ? "w-[26px] -translate-y-1 -rotate-45" : "w-[18px]"
          }`}
        />
      </span>
    </button>
  );
}
