// Balance scale from the splitn home screen: tips towards "you get" (positive balance)
export default function BalanceScale({ oweLabel, owedLabel, className }: { oweLabel: string; owedLabel: string; className?: string }) {
  return (
    <svg viewBox="370 325 510 430" className={className}>
      <line x1="475" y1="347" x2="777" y2="457" stroke="#E5E7EB" strokeWidth="22" strokeLinecap="round" />
      <g stroke="#C8CCD2" strokeWidth="3">
        <line x1="472" y1="358" x2="448" y2="505" />
        <line x1="510" y1="372" x2="533" y2="505" />
        <line x1="743" y1="472" x2="718" y2="622" />
        <line x1="777" y1="472" x2="802" y2="622" />
      </g>
      <path d="M435 502 Q490 562 545 502 Z" fill="#FDD9AE" stroke="#EFAC39" strokeWidth="6" strokeLinejoin="round" />
      <rect x="737" y="585" width="46" height="58" fill="#E9B10C" />
      <g stroke="#B7860A" strokeWidth="3">
        {[600, 614, 628].map((y) => (
          <line key={y} x1="737" y1={y} x2="783" y2={y} />
        ))}
      </g>
      <ellipse cx="760" cy="585" rx="23" ry="8" fill="#FFD43B" />
      <path d="M705 620 Q760 680 815 620 Z" fill="#FDD9AE" stroke="#EFAC39" strokeWidth="6" strokeLinejoin="round" />
      <rect x="617" y="401" width="16" height="330" fill="#353B48" />
      <rect x="515" y="720" width="220" height="28" rx="14" fill="#4A5160" />
      <circle cx="625" cy="401" r="22" fill="#EFAC39" />
      <circle cx="625" cy="401" r="9" fill="#fff" />
      <g fontSize="28" fontWeight="600" fill="#181411" textAnchor="middle" fontFamily="inherit">
        <text x="490" y="582">{oweLabel}</text>
        <text x="760" y="700">{owedLabel}</text>
      </g>
    </svg>
  );
}
