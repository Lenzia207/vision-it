import { Checkbox } from "@visionit/design-system";

export function Unchecked() {
  return (
    <div style={{ maxWidth: 340 }}>
      <Checkbox label="Ich akzeptiere die Datenschutzerklärung." />
    </div>
  );
}

export function Checked() {
  return (
    <div style={{ maxWidth: 340 }}>
      <Checkbox label="Ich möchte den Newsletter erhalten." defaultChecked />
    </div>
  );
}
