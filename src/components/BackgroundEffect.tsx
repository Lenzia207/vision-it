export default function BackgroundEffect() {
  return (
    <>
      <div className="glow-purple" style={{ position: "absolute", top: "-5%", left: "10%" }} />
      <div className="glow-cyan" style={{ position: "absolute", bottom: "10%", right: "-5%" }} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "35vw",
          fontWeight: 800,
          color: "rgba(255, 255, 255, 0.012)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
          zIndex: 0,
        }}
      >
        VISIONIT
      </div>
    </>
  );
}

