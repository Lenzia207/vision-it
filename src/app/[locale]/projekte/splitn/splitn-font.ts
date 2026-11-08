import localFont from "next/font/local";

export const plusJakartaSans = localFont({
  src: [
    { path: "../../../../fonts/plus-jakarta-sans.woff2", weight: "200 800", style: "normal" },
    { path: "../../../../fonts/plus-jakarta-sans-italic.woff2", weight: "200 800", style: "italic" },
  ],
  variable: "--cs-body",
  display: "swap",
});
