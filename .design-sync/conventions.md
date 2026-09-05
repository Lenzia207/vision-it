# VisionIT Design System - conventions

Palette: white base + deep teal (`--vids-teal: #02464B`) + lime accent (`--vids-lime: #BEE600`). Fonts: **Manrope** for body text (`--vids-font-sans`), **Space Grotesk** for headings, labels, and buttons (`--vids-font-mono`) - both loaded via a remote Google Fonts `@import` in `styles.css`, no wrapper or provider needed to enable them.

## No wrapper required

Every component is self-contained CSS + plain props - there is no ThemeProvider, context, or root wrapper to add. Just import from `@visionit/design-system` and render.

## Styling idiom: fixed component classes, not utility classes

This system does **not** use Tailwind-style utility classes or a props-based style API. Each component applies its own fixed CSS class(es) internally (e.g. `Button` renders `vids-btn vids-btn-primary`) - you style by choosing the component's `variant` prop, never by passing arbitrary class names or inline styles for brand colors. Do not invent new `vids-*` classes; only the ones the shipped components already use exist.

Design tokens available as CSS custom properties, for any custom layout glue you add around these components:

| Token | Value | Use |
|---|---|---|
| `--vids-teal` | `#02464B` | primary text / brand ink |
| `--vids-lime` | `#BEE600` | accent / CTA fill |
| `--vids-bg-base` / `--vids-bg-surface-1` | `#FFFFFF` / `#F2F6F5` | page background / panel background |
| `--vids-text-100..400` | teal -> muted gray-teal | text hierarchy, darkest to lightest |
| `--vids-border-faint` / `--vids-border-light` / `--vids-border-accent` | translucent teal / translucent teal / lime | dividers, card borders |
| `--vids-font-sans` / `--vids-font-mono` | Manrope / Space Grotesk | body / headings-labels-buttons |

`.vids-section-dark` and `.vids-section-lime` are local scopes: wrapping any content in a `<div className="vids-section-dark">` (teal background) or `<div className="vids-section-lime">` (lime background) re-maps `--vids-text-*`/`--vids-bg-*`/`--vids-border-*` to on-dark/on-lime tones automatically - every component inside adapts with no per-component dark-mode logic.

## Component library

- **Button** (`variant: "primary" | "secondary"`) - primary is a solid lime CTA; secondary is a teal-outlined button.
- **Badge** (`variant: "solid" | "outline"`) and **Pill** (`variant: "default" | "accent"`) - short status/tag labels; Pill is fully rounded, Badge is a small rectangular tag.
- **Card** (`variant: "glass" | "dark"`) - generic content container; glass is a soft light panel, dark is bordered with a hover lift.
- **ServiceCard** - icon + title + description + optional CTA link, for service/offering grids.
- **ProjectCard** - image + title + subtitle + tag chips, for portfolio/case-study grids.
- **TextInput**, **Textarea** - labeled form fields (`label` prop is required; both render a `<div class="vids-field">` wrapper with a mono-uppercase label above the field).
- **Checkbox** - labeled checkbox row, used for consent/opt-in rows.
- **RadioGroup** - pill-style single-select (`options`, `value`, `onChange`), an alternative to native radio buttons.
- **SectionHeading** - `tag` (eyebrow) + `title` + `description`, for section intros.

## Where the truth lives

Read `styles.css` (and its `@import` closure: `tokens.css` -> component-class rules) before styling anything custom - it's the complete, real stylesheet, not a summary. Per-component API is in each `<Name>.d.ts`.

## Example composition

```tsx
import { SectionHeading, ServiceCard, Button } from "@visionit/design-system";

function Services() {
  return (
    <section>
      <SectionHeading
        tag="Unsere Leistungen"
        title="Was wir für Sie umsetzen"
        description="Von der individuellen Website bis zur SEO- und GEO-Optimierung."
      />
      <ServiceCard
        icon={<GlobeIcon />}
        title="Website-Entwicklung"
        description="Schnelle, moderne Webseiten mit Next.js."
        ctaLabel="Mehr erfahren"
        ctaHref="/leistungen/websites"
      />
      <Button variant="primary">Jetzt anfragen</Button>
    </section>
  );
}
```
