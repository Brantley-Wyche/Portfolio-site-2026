# Brantley Wyche — Portfolio

A concise frontend engineering portfolio built with React, TypeScript, Vite, and Tailwind CSS v4. The light notebook design uses warm paper, graph diagrams, taped notes, and restrained teal. Experience and résumé access lead the page.

## Development

Use the npm lockfile and an active Node.js LTS version compatible with Vite 8.

```powershell
npm.cmd ci
npm.cmd run dev
npm.cmd test
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

On other platforms, use `npm` in place of `npm.cmd`. The build includes strict TypeScript and unchecked-index checking. Tests use Node’s runner, Vite’s module loader, and real React server rendering; no test dependency is required.

## Source map

```text
src/
  App.tsx                 Page composition and skip link
  main.tsx                React entry
  index.css               Tokens, shared materials, responsive section styles
  components/
    layout/               Container, navigation, footer
    ui/                   ButtonLink, editorial surfaces, icons, section heading
  sections/
    Hero.tsx
    Experience.tsx
    Approach.tsx
    Skills.tsx
    Contact.tsx
    projects/             Project list, card, and illustrative SVGs
  data/                   Editable portfolio content
build/
  site-metadata.ts        Static identity and sharing metadata
tests/
  content.test.mjs        Rendering and metadata regressions
public/                   Résumé and brand assets
```

Sections appear as introduction → experience → selected work → approach → toolkit → contact. The old `#now` anchor remains on the location/contact note.

## Editing content

| File | Content |
| --- | --- |
| `src/data/site.ts` | Identity, short bio, availability, contact, résumé, and metadata description |
| `src/data/experience.ts` | Career highlights and education |
| `src/data/projects.ts` | Projects and optional case-study fields |
| `src/data/approach.ts` | Working principles |
| `src/data/skills.ts` | Typed groups and each skill’s proficiency |
| `src/data/stats.ts` | Complete evidence values and labels |

Keep dates and metrics current and grounded in the résumé. GitHub and LinkedIn remain hidden while their values are blank.

Projects are intentionally unfinished. Add `description`, `role`, `tags`, `liveUrl`, and `repoUrl` when ready. Use unique IDs and at most one `featured: true`; that project appears first and gains a Featured project label when it has details. An empty collection retains a useful Work destination. Optional fields never require blank decorative rows.

## Design

[DESIGN.md](DESIGN.md) records the notebook system, actual tokens, and responsive rules. `.impeccable/design.json` provides matching component previews and supplemental shadow/motion information. Keep both synchronized with the CSS.

Use container queries for layouts that need to respond to enlarged text. Reserve motion for the single hero entrance and short control feedback. Passive cards remain still; the full page is visible without an observer.

The SVG files in `public/` are the editable brand sources. `favicon-32.png` and `apple-touch-icon.png` are 32px and 180px raster exports of `favicon.svg`; `og-image.png` is the 1200×630 export of `og-image.svg`. Export them again if their SVG sources change.

## Deployment

The app is configured for the root of a static website. Copy `.env.example` to `.env.local` and set `VITE_SITE_URL` to the actual public origin (for example, `https://example.com`) before building. Do not put credentials, a path, a query, or a hash in that value.

Vite generates the page title, description, and Person metadata from `src/data/site.ts`. When an origin is configured, it also emits canonical, Open Graph page, and absolute share-image URLs. With no origin, those deployment-specific URLs are omitted. No production domain is assumed.

Build and deploy the generated `dist/` directory through the chosen static host. Publishing is separate from local development.
