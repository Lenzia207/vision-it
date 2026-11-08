// Building blocks shared by the website, app and team project cards
export const cardClassName =
  "group flex-1 no-underline text-(--teal) border-2 transition-[border-color,transform] duration-300 hover:border-(--lime) hover:-translate-y-1";

export function GroupHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-t-2 border-(--teal) pt-[18px]">
      <span className="font-mono text-[0.8rem] font-bold text-(--text-400)">{index}</span>
      <span className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-(--teal)">{title}</span>
    </div>
  );
}

export function Tags({ tags, className }: { tags: string[]; className: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className={`font-semibold text-(--text-300) ${className}`}>
          {tag}
        </span>
      ))}
    </div>
  );
}

export function CaseStudyBadge({ label }: { label: string }) {
  return (
    <span className="font-mono text-[0.69rem] font-semibold uppercase tracking-[0.1em] bg-(--teal) text-white px-2.5 py-[5px]">
      {label}
    </span>
  );
}

export function CardCta({ label, arrow }: { label: string; arrow: string }) {
  return (
    <span className="mt-auto font-mono text-[0.94rem] font-semibold">
      {label}{" "}
      <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
        {arrow}
      </span>
    </span>
  );
}

/** Staggered scroll-reveal wrapper around each card. */
export function RevealCard({ index, children }: { index: number; children: React.ReactNode }) {
  return (
    <div className="reveal-on-scroll flex flex-col" style={{ transitionDelay: `${index * 100}ms` }}>
      {children}
    </div>
  );
}
