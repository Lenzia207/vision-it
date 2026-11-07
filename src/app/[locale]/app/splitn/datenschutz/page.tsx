import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import { LocaleParams } from "@/app/i18n/local-params";
import { baseUrl, splitnPrivacyUrl } from "@/app/configs/configs";
import SplitnPrivacyDE from "./SplitnPrivacyDE";
import SplitnPrivacyEN from "./SplitnPrivacyEN";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const canonical = `${baseUrl}/${locale}${splitnPrivacyUrl}`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${baseUrl}/de${splitnPrivacyUrl}`,
        en: `${baseUrl}/en${splitnPrivacyUrl}`,
        "x-default": `${baseUrl}/de${splitnPrivacyUrl}`,
      },
    },
  };

  if (locale === "en") {
    return {
      ...shared,
      title: "Splitn – Privacy Policy",
      description: "Privacy policy of the Splitn app: what data is processed, why, and what rights you have.",
    };
  }

  return {
    ...shared,
    title: "Splitn – Datenschutzerklärung",
    description: "Datenschutzerklärung der App Splitn: welche Daten verarbeitet werden, wofür und welche Rechte Sie haben.",
  };
}

export default async function SplitnPrivacyPage(props: LocaleParams) {
  const { locale } = await props.params;

  return (
    <PageWrapper locale={locale} pageContent={locale === "de" ? <SplitnPrivacyDE /> : <SplitnPrivacyEN />} />
  );
}
