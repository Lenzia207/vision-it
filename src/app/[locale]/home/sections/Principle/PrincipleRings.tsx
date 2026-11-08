import { PrincipleSection as PrincipleData } from "../data/types/home-types";

const LIME = "#BEE600";
// Ring label positions, innermost (Fundament) to outermost.
const LABEL_TOPS = ["50%", "31%", "22%", "13%", "4%"];
// Concentric rings 1–3, outside-in: [inset %, size %]
const RINGS: [number, number][] = [
  [13, 74],
  [22, 56],
  [31, 38],
];

interface PrincipleRingsProps {
  items: PrincipleData["items"];
  active: number;
}

/** Concentric ring diagram: rings light up from the core outwards as steps become active. */
export default function PrincipleRings({ items, active }: PrincipleRingsProps) {
  const complete = active >= items.length - 1;
  const ringBorder = (i: number) =>
    i > active ? "1px dashed rgba(255,255,255,0.2)" : i === active ? `2px solid ${LIME}` : "1.5px solid rgba(255,255,255,0.6)";

  return (
    <div aria-hidden="true" className="relative w-full max-w-[540px] aspect-square lg:block hidden">
      <div
        className="slow-spin absolute left-[4%] top-[4%] w-[92%] h-[92%] rounded-full"
        style={{
          border: complete ? `2px dashed ${LIME}` : "1px dashed rgba(255,255,255,0.2)",
          transition: "border-color 0.6s ease",
        }}
      />
      {RINGS.map(([inset, size], k) => (
        <div
          key={inset}
          className="absolute rounded-full"
          style={{
            left: `${inset}%`,
            top: `${inset}%`,
            width: `${size}%`,
            height: `${size}%`,
            border: ringBorder(3 - k),
            transition: "border 0.6s ease",
          }}
        />
      ))}
      <div className="absolute left-[40%] top-[40%] w-[20%] h-[20%] rounded-full bg-(--lime) flex items-center justify-center">
        <span className="w-[34%] aspect-square rounded-full bg-(--teal)" />
      </div>
      {items.map((item, i) => (
        <span
          key={item.ringLabel}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-[9px] py-[3px] whitespace-nowrap bg-(--teal) border font-mono text-[clamp(0.6rem,1.4vw,0.72rem)] font-semibold uppercase tracking-[0.12em] transition-colors duration-400"
          style={{
            top: LABEL_TOPS[i],
            color: i === active ? LIME : i < active ? "#FFFFFF" : "#7E9694",
            borderColor: i === active ? LIME : "rgba(255,255,255,0.14)",
          }}
        >
          {String(i + 1).padStart(2, "0")} {item.ringLabel}
        </span>
      ))}
    </div>
  );
}
