import type { Metadata } from "next";
import "./globals.css";

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
  // html/body/lang are rendered in src/app/[locale]/layout.tsx
  // so Google gets the correct language per locale
  return <>{children}</>;
}
