import localFont from "next/font/local";

export const anton = localFont({
  src: "../../../../fonts/anton.woff2",
  weight: "400",
  variable: "--cs-display",
  display: "swap",
});

export const annie = localFont({
  src: "../../../../fonts/annie-use-your-telescope.woff2",
  weight: "400",
  variable: "--cs-hand",
  display: "swap",
});

export const robotoFlex = localFont({
  src: "../../../../fonts/roboto-flex.woff2",
  weight: "100 1000",
  variable: "--cs-body",
  display: "swap",
});
