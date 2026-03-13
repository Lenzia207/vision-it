// This layout intentionally has no locale wrapping so Keystatic admin
// is served at /keystatic without any i18n middleware interference.
export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
