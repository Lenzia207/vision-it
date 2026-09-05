import { useState } from "react";
import { RadioGroup } from "@visionit/design-system";

const options = [
  { label: "Starter", value: "starter" },
  { label: "Business", value: "business" },
  { label: "Premium", value: "premium" },
];

export function Default() {
  const [value, setValue] = useState("business");
  return <RadioGroup name="Paket" options={options} value={value} onChange={setValue} />;
}
