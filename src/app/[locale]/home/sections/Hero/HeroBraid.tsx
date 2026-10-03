"use client";

import { useEffect, useId, useRef, useState } from "react";
import { HeroNode } from "../data/types/home-types";

interface HeroBraidProps {
  nodes: HeroNode[];
  label: string;
  braidDelay: string;
  captionDelay: string;
}

const LIME = "#BEE600";
const TEAL = "#02464B";
const VERTICAL_BELOW = 760;
const CYCLE_MS = 4200;

// Lime packets travelling along the strands: [strand index, start offset 0–1].
const PACKETS: [number, number][] = [[0, 0], [0, 0.5], [1, 0.25], [1, 0.75]];

// Satellite fan angles (deg) above a node, by satellite count (horizontal layout).
const SAT_ANGLES: Record<number, number[]> = {
  3: [215, 270, 325],
  4: [200, 243, 297, 340],
};

interface Layout {
  W: number;
  H: number;
  points: { x: number; y: number }[];
  /** Strand bulge — perpendicular to the direction the strands run. */
  amp: number;
  nodeR: number;
  coreR: number;
  labelOffset: number;
  labelSize: number;
  satSize: number;
}

// Desktop: nodes in a row, satellites fan out above the active node.
const HORIZONTAL: Layout = {
  W: 1200,
  H: 340,
  points: [0.14, 0.5, 0.86].map((f) => ({ x: f * 1200, y: 200 })),
  amp: 86,
  nodeR: 46,
  coreR: 11,
  labelOffset: 76,
  labelSize: 14,
  satSize: 12.5,
};

// Mobile: nodes stacked in a column, satellites listed to the right.
const VERTICAL: Layout = {
  W: 400,
  H: 610,
  points: [80, 300, 520].map((y) => ({ x: 80, y })),
  amp: 54,
  nodeR: 40,
  coreR: 10,
  labelOffset: 68,
  labelSize: 16,
  satSize: 15,
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Connected ecosystem: two strands braided between the three service nodes,
 * with data packets travelling along them. The active node fans out its
 * satellites and drives the caption below. Stacks vertically on narrow widths.
 */
export default function HeroBraid({ nodes, label, braidDelay, captionDelay }: HeroBraidProps) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const strandRefs = useRef<(SVGPathElement | null)[]>([]);
  const dashRef = useRef<SVGPathElement>(null);
  const packetRefs = useRef<(SVGRectElement | null)[]>([]);
  const hoverRef = useRef(false);

  const [vertical, setVertical] = useState(false);
  const [active, setActive] = useState(0);
  const [userPicked, setUserPicked] = useState(false);

  // Switch layout based on the rendered width, not the viewport.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setVertical(entry.contentRect.width < VERTICAL_BELOW));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Animate the dashed strand and packets; eases to a crawl while hovered.
  useEffect(() => {
    let raf = 0;
    let phase = 0;

    const frame = () => {
      dashRef.current?.setAttribute("stroke-dashoffset", String(-phase * 0.02));
      packetRefs.current.forEach((rect, i) => {
        const path = strandRefs.current[PACKETS[i][0]];
        if (!rect || !path) return;
        const f = (phase * 0.00008 + PACKETS[i][1]) % 1;
        const pt = path.getPointAtLength(f * path.getTotalLength());
        rect.setAttribute("transform", `translate(${pt.x - 4} ${pt.y - 4})`);
      });
    };

    if (prefersReducedMotion()) {
      frame();
      return;
    }

    let last = performance.now();
    let speed = 1;
    const step = (t: number) => {
      const dt = Math.min(250, t - last);
      last = t;
      if (dt > 0) {
        speed += ((hoverRef.current ? 0.2 : 1) - speed) * 0.05;
        phase += dt * speed;
        frame();
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [vertical]);

  // Auto-advance the highlighted node until the user picks one.
  useEffect(() => {
    if (userPicked || prefersReducedMotion()) return;
    const id = setInterval(() => setActive((a) => (a + 1) % nodes.length), CYCLE_MS);
    return () => clearInterval(id);
  }, [userPicked, nodes.length]);

  const pick = (i: number) => {
    setActive(i);
    setUserPicked(true);
  };

  // ─── Geometry ───
  const L = vertical ? VERTICAL : HORIZONTAL;
  const { W, H, points: pts, amp } = L;

  // Cubic segment between two nodes, bulging sideways by s·amp.
  const seg = (a: { x: number; y: number }, b: { x: number; y: number }, s: number) => {
    const off = s * amp * 1.333;
    if (vertical) {
      const d = b.y - a.y;
      const x = a.x + off;
      return ` C ${x} ${a.y + d * 0.3} ${x} ${b.y - d * 0.3} ${b.x} ${b.y}`;
    }
    const d = b.x - a.x;
    const y = a.y + off;
    return ` C ${a.x + d * 0.3} ${y} ${b.x - d * 0.3} ${y} ${b.x} ${b.y}`;
  };
  const strand = (sg: number) =>
    `M ${pts[0].x} ${pts[0].y}` + seg(pts[0], pts[1], sg) + seg(pts[1], pts[2], -sg);

  // Satellite chips relative to their node: chip box plus connector line.
  const satellites = (node: HeroNode, i: number) =>
    node.satellites.map((text, k) => {
      const w = text.length * L.satSize * 0.62 + 34;
      const h = vertical ? 28 : 26;

      if (vertical) {
        const left = L.nodeR + 26;
        const cy = (k - (node.satellites.length - 1) / 2) * 36;
        const ang = Math.atan2(cy, left);
        return {
          text, w, h, left, cy,
          x1: Math.cos(ang) * (L.nodeR + 4), y1: Math.sin(ang) * (L.nodeR + 4),
          x2: left, y2: cy,
        };
      }

      const angles = SAT_ANGLES[node.satellites.length] ?? SAT_ANGLES[3];
      const ang = ((angles[k] ?? 270) * Math.PI) / 180;
      let cx = Math.cos(ang) * 132;
      const cy = Math.sin(ang) * 104;
      // Keep chips inside the viewBox.
      const absX = pts[i].x + cx;
      if (absX - w / 2 < 4) cx += 4 - (absX - w / 2);
      if (absX + w / 2 > W - 4) cx -= absX + w / 2 - (W - 4);
      return {
        text, w, h, left: cx - w / 2, cy,
        x1: Math.cos(ang) * 50, y1: Math.sin(ang) * 50,
        x2: cx, y2: cy + h / 2,
      };
    });

  const labelWidth = (node: HeroNode) => node.label.length * L.labelSize * 0.66 + 30;

  // Vertical: fit the viewBox tightly around strands, labels and the widest
  // satellite list so the drawing can be centred as a whole.
  let viewBox = `0 0 ${W} ${H}`;
  if (vertical) {
    const pad = 8;
    const minX = Math.min(...pts.map((p, i) => Math.min(p.x - amp, p.x - labelWidth(nodes[i]) / 2)));
    const maxX = Math.max(
      ...pts.map((p, i) => Math.max(p.x + amp, ...satellites(nodes[i], i).map((s) => p.x + s.left + s.w))),
    );
    viewBox = `${minX - pad} 0 ${maxX - minX + pad * 2} ${H}`;
  }

  const mono = { fontFamily: "var(--font-mono)" };
  const current = nodes[active];

  return (
    <>
      <div ref={wrapperRef} className="hero-enter w-full" style={{ animationDelay: braidDelay }}>
        <svg
          viewBox={viewBox}
          role="group"
          aria-label={label}
          className={`block w-full h-auto overflow-visible ${vertical ? "max-w-[420px] mx-auto" : ""}`}
        >
          <path
            id={`${uid}-s1`}
            ref={(el) => { strandRefs.current[0] = el; }}
            d={strand(1)}
            fill="none"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth={2}
          />
          <path
            id={`${uid}-s2`}
            ref={(el) => { strandRefs.current[1] = el; dashRef.current = el; }}
            d={strand(-1)}
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth={2}
            strokeDasharray="7 9"
          />

          {PACKETS.map((_, i) => (
            <rect
              key={i}
              ref={(el) => { packetRefs.current[i] = el; }}
              width={8}
              height={8}
              fill={LIME}
            />
          ))}

          {nodes.map((node, i) => {
            const on = active === i;
            const text = node.label.toUpperCase();
            const lw = labelWidth(node);
            return (
              <g
                key={node.title}
                transform={`translate(${pts[i].x} ${pts[i].y})`}
                tabIndex={0}
                role="button"
                aria-label={`${node.title}: ${node.text}`}
                aria-pressed={on}
                className="cursor-pointer outline-none"
                onMouseEnter={() => { hoverRef.current = true; pick(i); }}
                onMouseLeave={() => { hoverRef.current = false; }}
                onFocus={() => { hoverRef.current = true; pick(i); }}
                onBlur={() => { hoverRef.current = false; }}
                onClick={() => pick(i)}
              >
                <circle
                  r={L.nodeR}
                  fill="#0A5257"
                  stroke={on ? LIME : "rgba(255,255,255,0.14)"}
                  strokeWidth={on ? 2 : 1}
                  style={{ transition: "stroke .3s ease" }}
                />
                <circle
                  r={L.coreR}
                  fill={on ? LIME : "#FFFFFF"}
                  style={{ transition: "fill .3s ease" }}
                />
                <g transform={`translate(0 ${L.labelOffset})`}>
                  <rect
                    x={-lw / 2}
                    y={-(L.labelSize + 12) / 2 - 2}
                    width={lw}
                    height={L.labelSize + 16}
                    fill={TEAL}
                    stroke={on ? LIME : "rgba(255,255,255,0.18)"}
                    strokeWidth={1}
                  />
                  <text
                    x={0}
                    y={1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={on ? LIME : "#FFFFFF"}
                    fontSize={L.labelSize}
                    fontWeight={600}
                    letterSpacing="0.1em"
                    style={mono}
                  >
                    {text}
                  </text>
                </g>
              </g>
            );
          })}

          {/* Satellites sit in their own top layer so no node circle can cover them;
              pointer-events off so chips never block hovering a node. Desktop shows
              only the active node's chips; vertical shows all, dimmed when inactive. */}
          <g aria-hidden="true" pointerEvents="none">
            {nodes.map((node, i) => {
              const on = active === i;
              const delay = on ? 0.07 : 0;
              return (
                <g key={node.title} transform={`translate(${pts[i].x} ${pts[i].y})`}>
                  {satellites(node, i).map((s, k) => (
                    <g
                      key={s.text}
                      style={{
                        opacity: on || vertical ? 1 : 0,
                        transition: `opacity .5s ease ${k * delay}s`,
                      }}
                    >
                      <line
                        x1={s.x1}
                        y1={s.y1}
                        x2={s.x2}
                        y2={s.y2}
                        stroke={on ? "rgba(190,230,0,0.55)" : "rgba(255,255,255,0.18)"}
                        strokeWidth={1}
                        style={{ transition: `stroke .4s ease ${k * delay}s` }}
                      />
                      <rect
                        x={s.left}
                        y={s.cy - s.h / 2}
                        width={s.w}
                        height={s.h}
                        fill={TEAL}
                        stroke={on ? "rgba(190,230,0,0.6)" : "rgba(255,255,255,0.18)"}
                        strokeWidth={1}
                        style={{ transition: `stroke .4s ease ${k * delay}s` }}
                      />
                      <circle
                        cx={s.left + 13}
                        cy={s.cy}
                        r={3.5}
                        fill="none"
                        stroke={LIME}
                        strokeWidth={1.5}
                        style={{ opacity: on ? 1 : 0, transition: `opacity .4s ease ${k * delay}s` }}
                      />
                      <text
                        x={s.left + 24}
                        y={s.cy + 0.5}
                        fill={on ? "#EAF3F2" : "#C7D9D8"}
                        style={{ ...mono, transition: `fill .4s ease ${k * delay}s` }}
                        fontSize={L.satSize}
                        fontWeight={500}
                        dominantBaseline="middle"
                      >
                        {s.text}
                      </text>
                    </g>
                  ))}
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      <div
        aria-live="polite"
        className="hero-enter grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-1 items-baseline min-h-[3.4em]"
        style={{ animationDelay: captionDelay }}
      >
        <span className="font-mono text-[0.8rem] font-bold tracking-widest text-(--lime)">
          {String(active + 1).padStart(2, "0")} / {String(nodes.length).padStart(2, "0")}
        </span>
        <p className="m-0 text-base leading-relaxed text-(--text-300) text-pretty">
          <strong className="font-mono font-semibold text-white">{current.label}</strong> — {current.text}
        </p>
      </div>
    </>
  );
}
