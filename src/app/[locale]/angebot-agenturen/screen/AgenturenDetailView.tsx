import { AngebotAgenturenData } from "../data/agenturen-types";
import AgenturenDetailUI from "./AgenturenDetailUI";

interface AgenturenDetailViewProps {
  agenturenPage: AngebotAgenturenData;
}

export default function AgenturenDetailView({ agenturenPage }: AgenturenDetailViewProps) {
  return <AgenturenDetailUI {...agenturenPage} />;
}
