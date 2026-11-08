/** Abstract geometric mark in the card header, one per service area. */
export default function ServiceGlyph({ kind }: { kind: string }) {
  if (kind === "seo") {
    return (
      <>
        <span className="absolute inset-0 rounded-full border border-dashed border-white/35" />
        <span className="absolute inset-2 rounded-full border-[1.5px] border-white/55" />
        <span className="absolute inset-[15px] rounded-full border-4 border-(--lime)" />
      </>
    );
  }
  if (kind === "mobile") {
    return (
      <>
        <span className="absolute left-[9px] top-0 w-6 h-[42px] rounded-[5px] border-[1.5px] border-white/55" />
        <span className="absolute left-[15px] top-[7px] w-3 h-[22px] bg-(--lime)" />
        <span className="absolute left-[18px] top-[34px] w-1.5 h-[1.5px] bg-white" />
      </>
    );
  }
  if (kind === "agency") {
    return (
      <>
        <span className="absolute left-0 top-0.5 w-[26px] h-[26px] border-[1.5px] border-white/55" />
        <span className="absolute left-4 top-4 w-[26px] h-[26px] bg-(--lime)" />
        <span className="absolute left-4 top-4 w-[11.5px] h-[13.5px] bg-(--teal)" />
      </>
    );
  }
  return (
    <>
      <span className="absolute inset-x-0 top-1 bottom-1.5 border-[1.5px] border-white/45" />
      <span className="absolute inset-x-0 top-1 h-[9px] border-b-[1.5px] border-white/45" />
      <span className="absolute left-1.5 top-[18px] w-3 h-3 bg-(--lime)" />
      <span className="absolute left-[23px] top-5 w-[15px] h-[1.5px] bg-white" />
      <span className="absolute left-[23px] top-[26px] w-2.5 h-[1.5px] bg-white/45" />
    </>
  );
}
