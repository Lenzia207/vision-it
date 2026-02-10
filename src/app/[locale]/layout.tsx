import type { Metadata } from "next";
import { Urbanist, Playfair_Display } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beyond Code - Digital Reality",
  description: "Turn your abstract ideas into visual reality.",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${urbanist.variable} ${playfair.variable} font-sans antialiased bg-[#050505] text-zinc-200 selection:bg-blue-500/30 selection:text-blue-200`}
      ><NextIntlClientProvider> 

        {children}
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
