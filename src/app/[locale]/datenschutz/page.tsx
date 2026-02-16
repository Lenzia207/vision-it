import PageWrapper from "@/components/PageWrapper";
import PrivacyDE from "./PrivacyDE";
import PrivacyEN from "./PrivacyEN";
import { LocaleParams } from "@/app/i18n/local-params";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}
export default async function Imprint(props: LocaleParams) {
  const { locale } = await props.params;

    return (

      <PageWrapper
      locale={locale}
      pageContent={locale === "de" ? <PrivacyDE /> : <PrivacyEN />}
      />
    )
}
