import TitleHeader from "@/components/TitleHeader";
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
  title,
  description,
  fullname,
  social_media,
}: AboutMeSectionProps) {
  return (
    <section
      id="about"
      className="relative section-padding"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center reveal-on-scroll">
        <TitleHeader title={title} />

        <div className="flex flex-col items-center gap-10">
          {/* Avatar with dark glow */}
          <div className="relative flex flex-col items-center mb-8 group cursor-pointer">
            <div className="absolute -inset-1 rounded-full blur-3xl opacity-30 transition duration-500 group-hover:opacity-50" style={{ background: "linear-gradient(to right, var(--accent), rgba(99,102,241,0.6))" }}></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl flex items-center justify-center" style={{ border: "2px solid var(--border-hover)", background: "var(--bg-card)" }}>
              <Image
                src="/images/about-me.jpg"
                alt="Profile Image"
                width={160}
                height={160}
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="text-2xl lg:text-4xl mt-4" style={{ color: "var(--text-primary)" }}>{fullname}</div>
          </div>

          <p className="text-lg lg:text-xl whitespace-pre-line max-w-3xl" style={{ color: "var(--text-secondary)" }}>{description}</p>

          {/* Social links */}
          <div className="flex flex-row gap-4 mt-4">
            {social_media.map(({ name, icon, url }, index) => (
              <a
                href={url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
              >
                {name}
                <Image src={icon} alt={name} width={16} height={16} className="invert opacity-70" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
