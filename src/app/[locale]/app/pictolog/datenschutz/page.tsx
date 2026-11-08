import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import { LocaleParams } from "@/app/i18n/local-params";
import { baseUrl, pictologPrivacyUrl } from "@/app/configs/configs";
import PictologPrivacyDE from "./PictologPrivacyDE";
import PictologPrivacyEN from "./PictologPrivacyEN";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const canonical = `${baseUrl}/${locale}${pictologPrivacyUrl}`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${baseUrl}/de${pictologPrivacyUrl}`,
        en: `${baseUrl}/en${pictologPrivacyUrl}`,
        "x-default": `${baseUrl}/de${pictologPrivacyUrl}`,
      },
    },
  };

  if (locale === "en") {
    return {
      ...shared,
      title: "Pictolog – Privacy Policy",
      description: "Privacy policy of the Pictolog app: all data stays on your device, no account, no tracking.",
    };
  }

  return {
    ...shared,
    title: "Pictolog – Datenschutzerklärung",
    description: "Datenschutzerklärung der App Pictolog: alle Daten bleiben auf Ihrem Gerät, kein Konto, kein Tracking.",
  };
}

export default async function PictologPrivacyPage(props: LocaleParams) {
  const { locale } = await props.params;

  return (
    <PageWrapper locale={locale} pageContent={locale === "de" ? <PictologPrivacyDE /> : <PictologPrivacyEN />} />
  );
}
