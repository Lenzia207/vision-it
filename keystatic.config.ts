import { config, fields, singleton } from "@keystatic/core";

// ---------------------------------------------------------------------------
// Reusable schema — identical structure for both DE and EN home.json files
// ---------------------------------------------------------------------------
const homeSchema = {
  // ── Navigation ─────────────────────────────────────────────────────────
  main_navigation: fields.array(
    fields.object({
      name: fields.text({ label: "Label" }),
      page: fields.text({ label: "Page Path" }),
      pageId: fields.text({ label: "Anchor ID (e.g. #contact)" }),
    }),
    {
      label: "Main Navigation",
      itemLabel: (props) => props.fields.name.value || "Nav Item",
    }
  ),

  // ── Hero ────────────────────────────────────────────────────────────────
  hero_section: fields.object(
    {
      title_line1: fields.text({ label: "Headline" }),
      description: fields.text({ label: "Description", multiline: true }),
      btn_text: fields.text({ label: "Button Text" }),
    },
    { label: "Hero Section" }
  ),

  // ── Services ────────────────────────────────────────────────────────────
  service_section: fields.object(
    {
      title: fields.text({ label: "Section Title" }),
      description: fields.text({ label: "Section Description", multiline: true }),
      btnText: fields.text({ label: "Card Button Text" }),
      services: fields.array(
        fields.object({
          title: fields.text({ label: "Service Title" }),
          description: fields.text({ label: "Description", multiline: true }),
          icon_images: fields.object(
            {
              icon: fields.text({ label: "Lucide Icon Name (e.g. Code2)" }),
              icon_color: fields.text({ label: "Tailwind Color (e.g. blue-400)" }),
              icon_animation: fields.text({
                label: "Animation JSON Path (e.g. /animations/code-anim.json)",
              }),
            },
            { label: "Icon Settings" }
          ),
        }),
        {
          label: "Services",
          itemLabel: (props) => props.fields.title.value || "Service",
        }
      ),
    },
    { label: "Services Section" }
  ),

  // ── Project Phases ───────────────────────────────────────────────────────
  project_phases_section: fields.object(
    {
      title: fields.text({ label: "Section Title" }),
      description: fields.text({ label: "Section Description", multiline: true }),
      btnText: fields.text({ label: "Button Text" }),
      phases: fields.array(
        fields.object({
          name: fields.text({ label: "Phase Name" }),
          description: fields.text({ label: "Description", multiline: true }),
          details: fields.array(
            fields.text({ label: "Detail Item" }),
            {
              label: "Detail Bullet Points",
              itemLabel: (props) => props.value || "Detail",
            }
          ),
        }),
        {
          label: "Phases",
          itemLabel: (props) => props.fields.name.value || "Phase",
        }
      ),
    },
    { label: "Project Phases Section" }
  ),

  // ── Portfolio ────────────────────────────────────────────────────────────
  portfolio_section: fields.object(
    {
      title: fields.text({ label: "Section Title" }),
      description: fields.text({ label: "Section Description", multiline: true }),
      categories: fields.array(
        fields.text({ label: "Category" }),
        {
          label: "Filter Categories",
          itemLabel: (props) => props.value || "Category",
        }
      ),
      projects: fields.array(
        fields.object({
          title: fields.text({ label: "Project Title" }),
          description: fields.text({ label: "Description", multiline: true }),
          category: fields.text({ label: "Category (must match a filter category)" }),
          image: fields.text({ label: "Image Path (e.g. /images/portfolio/…)" }),
          url: fields.text({ label: "Live URL" }),
          tags: fields.array(
            fields.text({ label: "Tag" }),
            {
              label: "Tags",
              itemLabel: (props) => props.value || "Tag",
            }
          ),
        }),
        {
          label: "Projects",
          itemLabel: (props) => props.fields.title.value || "Project",
        }
      ),
    },
    { label: "Portfolio Section" }
  ),

  // ── Tech Stack ───────────────────────────────────────────────────────────
  tech_stack_section: fields.object(
    {
      title: fields.text({ label: "Section Title" }),
      stacks: fields.array(
        fields.object({
          category: fields.text({ label: "Category (e.g. Web, App)" }),
          items: fields.array(
            fields.text({ label: "Technology" }),
            {
              label: "Technologies",
              itemLabel: (props) => props.value || "Tech",
            }
          ),
        }),
        {
          label: "Tech Stacks",
          itemLabel: (props) => props.fields.category.value || "Stack",
        }
      ),
    },
    { label: "Tech Stack Section" }
  ),

  // ── About Me ─────────────────────────────────────────────────────────────
  about_me_section: fields.object(
    {
      title: fields.text({ label: "Section Title" }),
      name: fields.text({ label: "Full Name" }),
      description: fields.text({ label: "Bio", multiline: true }),
      social_media: fields.array(
        fields.object({
          name: fields.text({ label: "Platform Name" }),
          icon: fields.text({ label: "Icon Path (e.g. /images/github.svg)" }),
          url: fields.text({ label: "Profile URL" }),
        }),
        {
          label: "Social Media Links",
          itemLabel: (props) => props.fields.name.value || "Platform",
        }
      ),
    },
    { label: "About Me Section" }
  ),

  // ── Contact ──────────────────────────────────────────────────────────────
  contact_section: fields.object(
    {
      title: fields.text({ label: "Section Title" }),
      description: fields.text({ label: "Section Description", multiline: true }),
      nameLabel: fields.text({ label: "Name Field Label" }),
      namePlaceholder: fields.text({ label: "Name Field Placeholder" }),
      companyLabel: fields.text({ label: "Company Field Label" }),
      companyPlaceholder: fields.text({ label: "Company Field Placeholder" }),
      emailLabel: fields.text({ label: "Email Field Label" }),
      emailPlaceholder: fields.text({ label: "Email Field Placeholder" }),
      messageLabel: fields.text({ label: "Message Field Label" }),
      messagePlaceholder: fields.text({ label: "Message Field Placeholder" }),
      btn_text: fields.text({ label: "Submit Button Text" }),
      interestLabel: fields.text({ label: "Interest Label" }),
      interestWebsite: fields.text({ label: "Interest Option: Website" }),
      interestMobileApp: fields.text({ label: "Interest Option: Mobile App" }),
      interestGeneral: fields.text({ label: "Interest Option: General" }),
      packageLabel: fields.text({ label: "Package Selection Label" }),
      serviceLabel: fields.text({ label: "Service Selection Label" }),
    },
    { label: "Contact Section" }
  ),

  // ── Price Packages ───────────────────────────────────────────────────────
  price_packages_section: fields.object(
    {
      title: fields.text({ label: "Section Title" }),
      btnText: fields.text({ label: "Package Button Text" }),
      packages: fields.array(
        fields.object({
          name: fields.text({ label: "Package Name" }),
          price: fields.text({ label: "Price (e.g. from 800 €)" }),
          for: fields.text({ label: "Target Audience" }),
          features: fields.array(
            fields.text({ label: "Feature" }),
            {
              label: "Included Features",
              itemLabel: (props) => props.value || "Feature",
            }
          ),
        }),
        {
          label: "Packages",
          itemLabel: (props) => props.fields.name.value || "Package",
        }
      ),
    },
    { label: "Price Packages Section" }
  ),
};

// ---------------------------------------------------------------------------
// Keystatic config
// ---------------------------------------------------------------------------
export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: { name: "VisionIT CMS" },
    navigation: {
      "🇩🇪 German": ["homeDE"],
      "🇬🇧 English": ["homeEN"],
    },
  },
  singletons: {
    homeDE: singleton({
      label: "🇩🇪 Home Page (Deutsch)",
      path: "messages/de/home",
      format: { data: "json" },
      schema: homeSchema,
    }),
    homeEN: singleton({
      label: "🇬🇧 Home Page (English)",
      path: "messages/en/home",
      format: { data: "json" },
      schema: homeSchema,
    }),
  },
});
