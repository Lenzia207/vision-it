import { AngebotMobileAppsData } from "../data/mobile-apps-types";
import MobileAppsDetailUI from "./MobileAppsDetailUI";

interface MobileAppsDetailViewProps {
  mobileAppsPage: AngebotMobileAppsData;
  locale: string;
}

export default function MobileAppsDetailView({ mobileAppsPage, locale }: MobileAppsDetailViewProps) {
  return <MobileAppsDetailUI {...mobileAppsPage} locale={locale} />;
}
