

import { LocaleParams } from "@/app/i18n/local-params";
import PageWrapper from "@/components/PageWrapper";
import { fetchBriefingFormData } from "./data/home-page-data";
import BriefingFormularScreen from "./BriefingFormularScreen";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}
export default async function BriefingFormular(props: LocaleParams) {
  const { locale } = await props.params;
  console.log(locale);

  const data = await fetchBriefingFormData(locale);

  if (!data) return <div>Loading...</div>;

  return (
    <PageWrapper
      locale={locale}
      pageContent={
      
      <div className="flex flex-col gap-4">
        <BriefingFormularScreen data={data} locale={locale} />
      </div>
       } />
  );
}
