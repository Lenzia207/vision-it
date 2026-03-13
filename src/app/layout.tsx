import type { Metadata } from "next";
import { Urbanist, Playfair_Display, Prompt } from "next/font/google";
import "./globals.css";

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

const prompt = Prompt({
  subsets: ["latin"],
  variable: "--font-prompt",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VisionIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${urbanist.variable} ${playfair.variable} ${prompt.variable} font-sans antialiased bg-[#050505] text-zinc-200 selection:bg-blue-500/30 selection:text-blue-200`}
      >
        {children}
      </body>
    </html>
  );
}
