import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "VisionIT",
    template: "%s | VisionIT",
  },
  description:
    "Individuelles Webdesign und moderne Webentwicklung für kleine Unternehmen und Freelancer. Portfolio, Preise & Kontakt.",
  applicationName: "VisionIT",
  openGraph: {
    title: "VisionIT",
    description:
      "Individuelles Webdesign und moderne Webentwicklung für kleine Unternehmen und Freelancer.",
    siteName: "VisionIT",
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "VisionIT – Webdesign & Webentwicklung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the locale layout sets lang via a client
    // component after hydration; suppress the mismatch warning on <html>.
    <html className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${spaceMono.variable} font-sans antialiased grain-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
