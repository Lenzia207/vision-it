import localFont from "next/font/local";

export const istokWeb = localFont({
  src: [
    { path: "../../../../fonts/istok-web-400.woff2", weight: "400" },
    { path: "../../../../fonts/istok-web-700.woff2", weight: "700" },
  ],
  variable: "--cs-body",
  display: "swap",
});
