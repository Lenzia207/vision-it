import type { Metadata } from "next";
import BackgroundEffect from "@/components/BackgroundEffect";
import HeaderSimple from "@/components/HeaderSimple";

export const metadata: Metadata = {
  title: "Imprint — VisionIT",
  description: "Legal notice and contact details for VisionIT.",
};

export default function ImprintDE() {
  return (
    <main className="relative min-h-screen">
      {/* Background Effect */}
      <BackgroundEffect />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 max-w-4xl">
        {/* Header */}
        <HeaderSimple title="Imprint" />

        {/* Imprint Details */}
        <div className="space-y-8 text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          <div className="space-y-1">
            <p className="text-xl font-medium" style={{ color: "var(--text-primary)" }}>Lena Zyadeh, BSc.</p>
            <p>Software development for websites and applications</p>
          </div>

          <div className="space-y-1">
            <p>Zuckerkandlgasse 48/2</p>
            <p>1190 Vienna</p>
            <p>Austria</p>
          </div>

          <div className="space-y-1">
            {/* <p>
              <span className="text-zinc-500">Tel:</span> +43 6765700757
            </p> */}
            <p>
              <span style={{ color: "var(--text-muted)" }}>E-Mail:</span>{" "}
              <a
                href="mailto:office@vision-it.at"
                className="text-blue-600 hover:text-blue-500 transition-colors"
              >
                office@vision-it.at
              </a>
            </p>
          </div>

          <div className="pt-4 space-y-4">
            {/* <p>
              <span className="block text-sm text-zinc-500 uppercase tracking-wider mb-1">
                UID-Nummer
              </span>
              k.A.
            </p> */}

            {/* <p>
              <span className="block text-sm text-slate-400 uppercase tracking-wider mb-1">
                Memberships
              </span>
              Member of the WKÖ
            </p> */}

            <p>
              <span className="block text-sm uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
                Trade Regulations
              </span>
              EPU
            </p>

            <p>
              <span className="block text-sm uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
                Supervisory Authority
              </span>
              Bezirkshauptmannschaft Vienna
            </p>

            {/* <p>
                            <span className="block text-sm text-zinc-500 uppercase tracking-wider mb-1">Master Craftsman</span>
                            Master craftsman examination completed in Austria
                        </p> */}
          </div>
        </div>
      </div>
    </main>
  );
}
