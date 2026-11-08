import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import { LocaleParams } from "@/app/i18n/local-params";
import { baseUrl, splitnDeleteAccountUrl } from "@/app/configs/configs";
import fetchSplitnDeleteAccountData from "./data/delete-account-data";
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

  const data = await fetchSplitnDeleteAccountData(locale);

  return { ...shared, title: data.meta.title, description: data.meta.description };
}

export default async function SplitnDeleteAccountPage(props: LocaleParams) {
  const { locale } = await props.params;
  const data = await fetchSplitnDeleteAccountData(locale);

  return <PageWrapper locale={locale} pageContent={<SplitnDeleteAccount data={data} locale={locale === "en" ? "en" : "de"} />} />;
}
