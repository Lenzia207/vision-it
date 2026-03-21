export default function BackgroundEffect() {
  return (
    <>
      <div className="glow-blue" style={{ position: "absolute", top: "-10%", right: "-5%" }} />
      <div className="glow-cyan" style={{ position: "absolute", bottom: "10%", left: "-10%" }} />
      <div className="glow-purple" style={{ position: "absolute", top: "50%", left: "40%" }} />
    </>
  );
}
