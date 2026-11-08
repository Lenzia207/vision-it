import { ReactNode } from "react";

/** Line drawing above the hero title: brain, smile and heart on a wavy line. */
export function HeroIllustration({ label }: { label: string }) {
  return (
    <svg role="img" aria-label={label} viewBox="0 0 220 80" className="w-[200px] h-[72px]">
      <path d="M20 60 C 40 70, 60 40, 75 52 C 85 60, 95 66, 110 58 C 125 50, 140 66, 160 56 C 175 48, 190 64, 205 58" fill="none" stroke="#37372F" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="48" cy="30" r="20" fill="none" stroke="#37372F" strokeWidth="1.6" />
      <path d="M36 26 q6 -8 12 0 q6 8 12 0 M38 36 q8 -6 16 2" fill="none" stroke="#37372F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M102 42 q8 8 16 0" fill="none" stroke="#37372F" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M172 44 C 150 28, 158 10, 172 22 C 186 10, 194 28, 172 44 Z" fill="none" stroke="#37372F" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

/** Decorative background curves behind the hero. */
export function HeroWaves() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1440 400" preserveAspectRatio="none" className="absolute left-0 top-10 w-full h-[400px]">
      <path d="M0 220 C 240 120, 480 320, 720 220 S 1200 120, 1440 220" fill="none" stroke="#D9D4C7" strokeWidth="1.2" />
      <path d="M0 300 C 300 200, 560 380, 860 280 S 1260 220, 1440 300" fill="none" stroke="#E2DED2" strokeWidth="1" />
    </svg>
  );
}

/** 24×24 line-icon paths for the work cards, one per item in order. */
export const workIcons: ReactNode[] = [
  <path key="heart" d="M12 21c-4-3-8-6-8-11a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 5-4 8-8 11z" />,
  <>
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
    <path d="M7 12h3M14 12h3" />
  </>,
  <>
    <rect x="4" y="3" width="16" height="18" rx="3" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </>,
  <>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4" />
  </>,
  <path key="phone" d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </>,
];
