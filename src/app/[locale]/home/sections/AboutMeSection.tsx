"use client";
import { useState } from "react";
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
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("office@vision-it.at");
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <section
      id="about"
      className="relative section-padding"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-deep)" }}
    >
      <div className="max-w-6xl mx-auto px-6 reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column (Text & Contact) */}
          <div className="flex flex-col text-left h-full">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-serif uppercase tracking-widest mb-6" 
              style={{ color: "var(--text-primary)" }}
            >
              {fullname}
            </h2>
            
            <h3 
              className="text-2xl md:text-3xl font-serif mb-8 leading-snug" 
              style={{ color: "var(--text-primary)" }}
            >
              {title}
            </h3>

            <p 
              className="text-base md:text-lg leading-relaxed whitespace-pre-line mb-16" 
              style={{ color: "var(--text-secondary)" }}
            >
              {description}
            </p>

            <div className="mt-auto">
              {/* <p 
                className="text-xl font-serif mb-8" 
                style={{ color: "var(--text-primary)" }}
              >
                Stay connected and let the good work begin.
              </p> */}
              
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center bg-white font-medium px-8 py-4 mb-6 hover:bg-gray-200 transition-colors cursor-pointer rounded-lg"
                style={{ color: "#000" }}
              >
                {copied ? "Copied to clipboard!" : "office@vision-it.at"}
              </button>
              
              {/* Social links */}
              <div className="flex flex-row gap-6">
                {social_media.map(({ name, icon, url }, index) => (
                  <a
                    href={url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    title={name}
                  >
                    <Image 
                      src={icon} 
                      alt={name} 
                      width={24} 
                      height={24} 
                      className="brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-3/4 overflow-hidden">
              <Image
                src="/images/lena-zy-about-me.jpg"
                alt={fullname}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
