import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";
import "../globals.css";
import { organizationJsonLd } from "../configs/structured-data";
import { manrope, spaceGrotesk } from "./site-fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://vision-it.at"),
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

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} className={`${manrope.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
