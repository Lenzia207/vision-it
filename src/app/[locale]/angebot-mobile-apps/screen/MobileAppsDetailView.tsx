import { AngebotMobileAppsData } from "../data/mobile-apps-types";
import MobileAppsDetailUI from "./MobileAppsDetailUI";

interface MobileAppsDetailViewProps {
  mobileAppsPage: AngebotMobileAppsData;
}

export default function MobileAppsDetailView({ mobileAppsPage }: MobileAppsDetailViewProps) {
  return <MobileAppsDetailUI {...mobileAppsPage} />;
}
