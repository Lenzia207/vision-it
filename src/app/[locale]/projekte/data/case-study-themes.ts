/** Client brand colours for the website previews on the home and offer pages. */
export const websiteThemes: Record<
  string,
  { panel: string; glow: string; shadow: string; bar: string; dot: string; domain: string; image: string }
> = {
  elektrochemie: {
    panel: "bg-[#0E2340]",
    glow: "shadow-[0_-8px_40px_rgba(112,195,216,.25)]",
    shadow: "shadow-[0_20px_50px_rgba(0,0,0,.35)]",
    bar: "bg-[#EEF1F5]",
    dot: "bg-[#C9D0DA]",
    domain: "text-[#6A7686]",
    image: "object-center",
  },
  herzhirnhumor: {
    panel: "bg-[#E6ECE8]",
    glow: "shadow-[0_-8px_40px_rgba(76,93,83,.18)]",
    shadow: "shadow-[0_20px_50px_rgba(55,55,47,.18)]",
    bar: "bg-[#F6F3EC]",
    dot: "bg-[#D9D4C7]",
    domain: "text-[#807D73]",
    image: "object-top",
  },
  "camp-currie": {
    panel: "bg-[#5D735F]",
    glow: "shadow-[0_-8px_40px_rgba(229,161,48,.25)]",
    shadow: "shadow-[0_20px_50px_rgba(0,0,0,.25)]",
    bar: "bg-[#F8F7F3]",
    dot: "bg-[#D3CFC4]",
    domain: "text-[#5A5A5A]",
    image: "object-center",
  },
};
