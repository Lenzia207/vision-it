import { NextIntlClientProvider } from "next-intl";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import Script from "next/script";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.vision-it.at/#organization",
      name: "VisionIT",
      url: "https://www.vision-it.at",
      email: "office@vision-it.at",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Zuckerkandlgasse 48/2",
        addressLocality: "Wien",
        postalCode: "1190",
        addressCountry: "AT",
      },
      founder: {
        "@type": "Person",
        name: "Lena Zyadeh",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.vision-it.at/#website",
      url: "https://www.vision-it.at",
      name: "VisionIT",
      publisher: { "@id": "https://www.vision-it.at/#organization" },
      inLanguage: ["de", "en"],
    },
  ],
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
    <html lang={locale} className="scroll-smooth">
      <head>
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${jakarta.variable} ${spaceMono.variable} font-sans antialiased grain-overlay`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
