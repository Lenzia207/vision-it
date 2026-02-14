import PageWrapper from "@/components/PageWrapper";
import ImprintDE from "./ImprintDE";
import ImprintEN from "./ImprintEN";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}
export default async function Imprint(props: LocaleParams) {
  const { locale } = await props.params;
  
  console.log(locale);
    return (

      <PageWrapper
      locale={locale}
      pageContent={locale === "de" ? <ImprintDE /> : <ImprintEN />}
      />
    )
}
