import { Button } from "@visionit/design-system";

export function Primary() {
  return <Button variant="primary">Jetzt anfragen</Button>;
}

export function Secondary() {
  return <Button variant="secondary">Mehr erfahren</Button>;
}

export function Disabled() {
  return (
    <Button variant="primary" disabled>
      Nicht verfügbar
    </Button>
  );
}
