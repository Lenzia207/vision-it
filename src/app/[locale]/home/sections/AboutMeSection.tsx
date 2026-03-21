import Image from "next/image";

interface AboutMeSectionProps {
  title: string;
  description: string;
  fullname: string;
  social_media: {
    name: string;
    icon: string;
    url: string;
  }[];
}

export default function AboutMeSection({
  description,
  fullname,
  social_media,
}: AboutMeSectionProps) {
  const nameParts = fullname.split(", ");
  const name = nameParts[0];
  const credential = nameParts[1];

  const paragraphs = description.split("\n\n");

  return (
    <div className="glass-panel" style={{ padding: "3rem" }}>
      {/* Avatar */}
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "var(--bg-surface-3)",
          border: "2px solid var(--border-accent)",
          marginBottom: "1.5rem",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/lena-zy-about-me.jpg"
          alt={fullname}
          width={80}
          height={80}
          style={{
            objectFit: "cover",
            filter: "grayscale(100%)",
            mixBlendMode: "luminosity",
          }}
        />
      </div>

      {/* Name */}
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "0.2rem",
          color: "var(--text-100)",
        }}
      >
        {name}{" "}
        {credential && (
          <span
            className="label-mono"
            style={{ fontSize: "0.8rem", verticalAlign: "middle" }}
          >
            {credential}
          </span>
        )}
      </h3>

      {/* Role */}
      <p
        className="label-mono"
        style={{ color: "var(--accent-cyan)", marginBottom: "1.5rem" }}
      >
        SYS.ADMIN / DEV
      </p>

      {/* Bio */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {paragraphs.map((para, i) => (
          <p
            key={i}
            style={{
              fontSize: "0.9rem",
              color: "var(--text-300)",
              lineHeight: 1.65,
            }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* Social links */}
      {social_media.length > 0 && (
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          {social_media.map(({ name: sName, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}
            >
              {sName}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
