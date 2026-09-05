import { TextInput } from "@visionit/design-system";

export function Default() {
  return (
    <div style={{ maxWidth: 320 }}>
      <TextInput label="E-Mail" type="email" placeholder="name@firma.de" required />
    </div>
  );
}

export function Filled() {
  return (
    <div style={{ maxWidth: 320 }}>
      <TextInput label="Firma" defaultValue="Musterfirma GmbH" />
    </div>
  );
}
