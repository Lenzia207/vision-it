import localFont from "next/font/local";

export const funnelDisplay = localFont({
  src: "../../../../fonts/funnel-display.woff2",
  weight: "300 800",
  variable: "--cs-display",
  display: "swap",
});

export const funnelSans = localFont({
  src: "../../../../fonts/funnel-sans.woff2",
  weight: "300 800",
  variable: "--cs-body",
  display: "swap",
});

export const jetBrainsMono = localFont({
  src: "../../../../fonts/jetbrains-mono.woff2",
  weight: "100 800",
  variable: "--cs-mono",
  display: "swap",
});
