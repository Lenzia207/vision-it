import TitleHeader from "@/components/TitleHeader";

const PHASE_LABELS = ["PHASE_01", "PHASE_02", "PHASE_03", "PHASE_04", "PHASE_05"];
const PHASE_SUBTITLES = [
  "Initial Consultation",
  "Wireframes & Architecture",
  "Figma Mockups",
  "Component-based Coding",
  "Deployment & Support",
];

interface Phase {
  name: string;
  description: string;
  details: string[];
}

interface ProjectPhasesProps {
  title: string;
  description?: string;
  phases: Phase[];
  btnText: string;
}

export default function ProjectPhases({ title, phases }: ProjectPhasesProps) {
  return (
    <section id="projectPhases" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <TitleHeader title={title} tag="[ PIPELINE_FLOW ]" />

        <div style={{ overflowX: "auto", scrollbarWidth: "none" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              padding: "2rem 0",
              minWidth: "900px",
            }}
          >
            {/* Connecting line */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: "100%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, var(--border-light) 10%, var(--border-light) 90%, transparent)",
                zIndex: 1,
              }}
            />

            {phases.map((phase, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection:  "column",
                  alignItems: "center",
                  gap: "1rem",
                  width: "200px",
                  flexShrink: 0,
                  zIndex: 2,
                }}
              >
                {/* Node content */}
                <div
                  style={{
                    background: "var(--bg-surface-1)",
                    border:
                      index === 3
                        ? "1px solid var(--accent-purple)"
                        : "1px solid var(--border-light)",
                    borderRadius: "16px",
                    padding: "1.5rem",
                    textAlign: "center",
                    width: "100%",
                    boxShadow:
                      index === 3
                        ? "inset 0 0 20px rgba(139, 92, 246, 0.1)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      color: "var(--accent-cyan)",
                      fontSize: "0.8rem",
                      marginBottom: "0.5rem",
                      display: "block",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {PHASE_LABELS[index]}
                  </span>
                  <h4
                    style={{
                      marginBottom: "0.5rem",
                      color: "var(--text-100)",
                      fontSize: "1rem",
                    }}
                  >
                    {phase.name}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.7rem",
                      color: "var(--text-400)",
                      fontWeight: 400,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {PHASE_SUBTITLES[index]}
                  </p>
                </div>

                {/* Node dot */}
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "var(--bg-base)",
                    border:
                      index === phases.length - 1
                        ? "2px solid var(--accent-cyan)"
                        : "2px solid var(--accent-purple)",
                    boxShadow:
                      index === phases.length - 1
                        ? "0 0 20px var(--accent-cyan)"
                        : "0 0 15px rgba(139, 92, 246, 0.5)",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--accent-cyan)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
