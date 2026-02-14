import { NextIntlClientProvider } from "next-intl";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
