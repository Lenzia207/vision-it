export interface SectionHeadingProps {
  /** Small uppercase eyebrow label above the title, e.g. "OUR SERVICES". */
  tag?: string;
  /** Section title. */
  title: string;
  /** Optional supporting paragraph below the title. */
  description?: string;
}

/** Reusable section heading: eyebrow tag, title, and supporting description. */
export function SectionHeading({ tag, title, description }: SectionHeadingProps) {
  return (
    <div>
      {tag ? <div className="vids-section-heading-tag">{tag}</div> : null}
      <h2 className="vids-section-heading-title">{title}</h2>
      {description ? <p className="vids-section-heading-desc">{description}</p> : null}
    </div>
  );
}
