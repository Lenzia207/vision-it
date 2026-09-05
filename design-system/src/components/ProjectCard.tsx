export interface ProjectCardProps {
  /** Project screenshot/cover image URL. */
  imageSrc: string;
  /** Alt text for the cover image. */
  imageAlt: string;
  /** Project name. */
  title: string;
  /** Short one-line subtitle or role description. */
  subtitle: string;
  /** Tech-stack / category tags shown at the bottom of the card. */
  tags?: string[];
  /** Link to the project's detail page or live site. */
  href: string;
}

/** Portfolio project card: cover image, title, subtitle, and tag chips. */
export function ProjectCard({ imageSrc, imageAlt, title, subtitle, tags = [], href }: ProjectCardProps) {
  return (
    <a className="vids-project-card" href={href}>
      <div className="vids-project-img-wrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="vids-project-content">
        <h3 className="vids-project-title">{title}</h3>
        <p className="vids-project-subtitle">{subtitle}</p>
        {tags.length > 0 ? (
          <div className="vids-project-footer">
            {tags.map((tag) => (
              <span key={tag} className="vids-tag-micro">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  );
}
