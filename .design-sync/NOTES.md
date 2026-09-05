# design-sync notes - VisionIT Design System

## What this syncs

`design-system/` is a NEW package extracted from this app's `src/app/globals.css` and
`src/components/`, purpose-built for `/design-sync` - the main Next.js app does not
consume it (yet). It ships 11 core primitives (Button, Badge, Pill, Card, ServiceCard,
ProjectCard, TextInput, Textarea, Checkbox, RadioGroup, SectionHeading) with a
consolidated token layer (see `design-system/src/styles/tokens.css`).

## Gotchas found during the first sync

- **A CSS comment can silently eat a whole rule.** `design-system/src/styles/tokens.css`
  originally had a header comment containing the literal substring `--vids-bg-*/--vids-text-*`
  - the `-*/` there is a premature comment terminator (`*/`), which closed the `/* ... */`
    block early. Chromium's CSS parser then desynced and silently dropped the very next
    rule (`:root { ... }`) with **no console error, no validate warning** - the render
    check still passed because text rendered, just unstyled (no lime/teal colors, no fonts).
    Confirmed by inspecting `document.styleSheets[].cssRules` directly in a headless
    Chromium session - the rule count was exactly 1 short of the source file's rule count.
  - **Lesson: never write `word-*/word` (asterisk immediately followed by slash) inside a
    CSS comment.** Use commas or full words instead of a shorthand pattern like `--a-*/--b-*`.
- Playwright/chromium version matching for the render check: the machine had a cached
  `chromium-1217` build under `~/.cache/ms-playwright/`, but the repo's own `playwright`
  (1.62.1, pinning build 1234) didn't match it. Found a matching `playwright@1.59.1`
  (pins 1217) already installed elsewhere on the machine and installed that exact version
  into `.ds-sync/node_modules` instead of downloading a new ~200MB chromium build.
  On a fresh machine/clone, just run `npx playwright install chromium` normally instead.
- Fonts (Manrope, Space Grotesk) are NOT shipped as files - `tokens.css` loads them via a
  remote Google Fonts `@import`. This is intentional (`[FONT_REMOTE]` in validate output,
  informational only) and matches how the main app currently serves them via `next/font`
  at a different layer - there was no font package to harvest from.

## Design decisions (not upstream bugs, deliberate simplifications)

- `ServiceCard`'s CTA link is always visible in the design-system version. The original
  app's `.service-card-cta` in `src/app/globals.css` is hidden until hover (`max-height:0;
  opacity:0`) - dropped intentionally here since a hover-only element would render blank
  in every static preview/screenshot and give the design agent nothing to compose with.
- Card/Button/etc. class names are prefixed `vids-` (not the original `.btn`/`.card-dark`
  names) to avoid colliding with the host app's own global classes if this package is ever
  actually adopted into `vision-it`.

## Re-sync risks

- The `design-system` package is NOT yet wired into the actual Next.js app (`src/`) - it's
  a parallel extraction for `/design-sync` only. If the app's `globals.css` palette or
  component styling changes later, this package will silently drift out of sync unless
  someone re-derives it by hand; there's no shared source of truth between the two.
- Icon composition in `ServiceCard`'s authored preview (`.design-sync/previews/ServiceCard.tsx`)
  hand-rolls a small inline SVG globe icon - the DS itself ships no icon component/package.
  A future re-sync that adds an icon dependency should update the preview to use it.
- Grades in `.design-sync/.cache/review/*.grade.json` are gitignored working state; they
  are NOT committed. A fresh clone/machine will re-verify everything from scratch on first
  run here (expected, not a bug) until this project has been uploaded once and its
  `_ds_sync.json` anchor exists to carry forward against.
- No `list_files`/upload has happened yet - this session lacked design-system authorization
  (`/design-login` required). `projectId` is not yet recorded in `.design-sync/config.json`.
  The next sync must still create/pick a target project (base SKILL.md §1) before uploading.
