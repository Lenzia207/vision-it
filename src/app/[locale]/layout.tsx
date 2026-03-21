import { NextIntlClientProvider } from "next-intl";
import { Urbanist, Playfair_Display, Prompt } from "next/font/google";
import Script from "next/script";

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
        className={`${
          urbanist.variable
        } ${playfair.variable} ${prompt.variable} font-sans antialiased grain-overlay`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
