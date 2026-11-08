import BackgroundEffect from "@/components/BackgroundEffect";
import TitleHeader from "@/components/TitleHeader";
import { splitnPrivacyUrl } from "@/app/configs/configs";
import { privacyH2ClassName as H2 } from "../datenschutz/PrivacyTable";
import { SplitnDeleteAccountData } from "./data/delete-account-types";
import { fillTokens } from "./fill-tokens";

const mail = "developer@vision-it.at";

const MailLink = () => (
  <a href={`mailto:${mail}`} className="underline">
    {mail}
  </a>
);

interface SplitnDeleteAccountProps {
  data: SplitnDeleteAccountData;
  locale: "de" | "en";
}

export default function SplitnDeleteAccount({ data, locale }: SplitnDeleteAccountProps) {
  const tokens = {
    app: <strong>Splitn</strong>,
    mail: <MailLink />,
    privacyLink: (
      <a href={`/${locale}${splitnPrivacyUrl}`} className="underline">
        {data.more.privacyLinkText}
      </a>
    ),
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundEffect />

      {/* Teal strip behind the fixed header, whose links are white */}
      <div aria-hidden="true" className="relative z-10 bg-(--teal) h-[73px] min-[1060px]:h-[69px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-16 max-w-4xl">
        <TitleHeader as="h1" title={data.title} />

        <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-(--text-300)">
          <p>{fillTokens(data.intro, tokens)}</p>

          <h2 className={H2}>{data.inApp.title}</h2>
          <ol className="list-decimal pl-6 space-y-2">
            {data.inApp.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p>{data.inApp.note}</p>

          <h2 className={H2}>{data.byEmail.title}</h2>
          <p>{fillTokens(data.byEmail.text, tokens)}</p>

          <h2 className={H2}>{data.deleted.title}</h2>
          <ul className="list-disc pl-6 space-y-2">
            {data.deleted.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{data.deleted.note}</p>

          <h2 className={H2}>{data.kept.title}</h2>
          <p>{data.kept.text}</p>

          <h2 className={H2}>{data.more.title}</h2>
          <p>{fillTokens(data.more.text, tokens)}</p>
        </div>
      </div>
    </div>
  );
}
