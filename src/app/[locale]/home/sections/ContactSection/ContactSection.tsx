interface ContactSectionProps {
  title: string;
  description: string;
  btn_text: string;
}

export default function ContactSection({
  title,
  description,
  btn_text,
}: ContactSectionProps) {
  return (
    <footer id="contact" className="footer-cta">
      <div
        className="max-w-6xl mx-auto px-6"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span className="section-tag">[ INIT_SEQ ]</span>

        <h2
          className="text-display-1"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            marginBottom: "1rem",
            marginTop: "1rem",
            textAlign: "center",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--text-300)",
            marginBottom: "2.5rem",
            textAlign: "center",
            maxWidth: "500px",
          }}
        >
          {description}
        </p>

        <a
          href="mailto:office@vision-it.at"
          className="btn btn-primary"
          style={{ padding: "1rem 3rem", fontSize: "1.1rem" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ marginRight: "10px" }}
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          {btn_text}
        </a>

        <div
          className="label-mono"
          style={{ marginTop: "6rem", opacity: 0.5 }}
        >
          © 2026 LENA ZYADEH // ALL SYSTEMS NOMINAL
        </div>
      </div>
    </footer>
  );
}
