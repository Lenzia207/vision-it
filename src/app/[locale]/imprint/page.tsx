import PageWrapper from "@/components/PageWrapper";
import ImprintDE from "../impressum/ImprintDE";
import ImprintEN from "../impressum/ImprintEN";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function Imprint(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  
  return (
    <PageWrapper
      locale={locale}
      pageContent={locale === "de" ? <ImprintDE /> : <ImprintEN />}
    />
  );
}
