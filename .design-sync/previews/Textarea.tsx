import { Textarea } from "@visionit/design-system";

export function Default() {
  return (
    <div style={{ maxWidth: 400 }}>
      <Textarea
        label="Projektbeschreibung"
        placeholder="Erzählen Sie uns von Ihrem Projekt..."
        required
      />
    </div>
  );
}
