import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import { LocaleParams } from "@/app/i18n/local-params";
import { baseUrl, splitnDeleteAccountUrl } from "@/app/configs/configs";
import SplitnDeleteAccount from "./SplitnDeleteAccount";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const canonical = `${baseUrl}/${locale}${splitnDeleteAccountUrl}`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${baseUrl}/de${splitnDeleteAccountUrl}`,
        en: `${baseUrl}/en${splitnDeleteAccountUrl}`,
        "x-default": `${baseUrl}/de${splitnDeleteAccountUrl}`,
      },
    },
  };

  if (locale === "en") {
    return {
      ...shared,
      title: "Splitn – Delete your account",
      description: "How to delete your Splitn account and which data is deleted or kept.",
    };
  }

  return {
    ...shared,
    title: "Splitn – Konto löschen",
    description: "So löschen Sie Ihr Splitn-Konto und welche Daten dabei gelöscht oder aufbewahrt werden.",
  };
}

export default async function SplitnDeleteAccountPage(props: LocaleParams) {
  const { locale } = await props.params;

  return <PageWrapper locale={locale} pageContent={<SplitnDeleteAccount locale={locale === "en" ? "en" : "de"} />} />;
}
