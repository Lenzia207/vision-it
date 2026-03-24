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
    <div className="glass-panel p-12">
      {/* Avatar */}
      <div className="relative w-20 h-20 rounded-full bg-(--bg-surface-3) mb-6 overflow-hidden shrink-0">
        <Image
          src="/images/lena-zy-about-me.jpg"
          alt={fullname}
          fill
          className="object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="text-2xl font-bold mb-0.5 text-(--text-100)">
        {name}{" "}
        {credential && (
          <span className="label-mono text-[0.8rem] align-middle">
            {credential}
          </span>
        )}
      </h3>

      {/* Role */}
      <p className="label-mono text-(--accent-cyan) mb-6">
        SYS.ADMIN / DEV
      </p>

      {/* Bio */}
      <div className="flex flex-col gap-3">
        {paragraphs.map((para, i) => (
            <p key={i} className="text-md text-(--text-300) leading-[1.65]">
            {para}
          </p>
        ))}
      </div>

      {/* Social links */}
      {social_media.length > 0 && (
        <div className="mt-6 flex gap-3 flex-wrap">
          {social_media.map(({ name: sName, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary px-5 py-2 text-sm"
            >
              {sName}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
