# Brantley Wyche — Portfolio

A recruiter-ready, single-page portfolio built with **React + TypeScript + Vite**
and styled with **Tailwind CSS v4**. Light/dark theming, responsive layout,
accessible markup, and content driven by small data files so it's easy to keep
current.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build locally
```

> On Windows, run these from **Command Prompt** (or Git Bash), not PowerShell, to
> avoid the npm execution-policy error.

## Editing content

All copy lives in `src/data/` — you usually won't need to touch the components.

| File                     | What it controls                                            |
| ------------------------ | ----------------------------------------------------------- |
| `src/data/site.ts`       | Name, role, email, location, résumé link, GitHub/LinkedIn   |
| `src/data/projects.ts`   | Featured projects (currently placeholders — swap in real ones) |
| `src/data/experience.ts` | Work history + education                                    |
| `src/data/skills.ts`     | Flat skill list with core/working/familiar levels — powers the searchable, filterable Skills section |
| `src/data/stats.ts`      | Headline stats shown in the hero (edit as numbers change)   |

**To add your social links:** set `github` and `linkedin` in `src/data/site.ts`.
They're hidden automatically while blank.

**To replace the résumé:** drop your file into `public/` and point
`resumeUrl` in `src/data/site.ts` at it (e.g. `/Brantley-Wyche-Resume.pdf`).

**To fill in projects:** edit `src/data/projects.ts`. Set `featured: true` on a
project to give it the wide, highlighted card. Add `liveUrl` / `repoUrl` to show
the link icons.

## Structure

```
src/
  components/   UI sections + small primitives (Container, Eyebrow, SectionHeading)
  data/         Editable content
  hooks/        useReveal — scroll-in animations
  index.css     Tailwind import + theme tokens (light/dark) mapped to utilities
```

**Styling** is Tailwind CSS v4 (utility classes in the components). The color
system lives in `src/index.css`: raw theme values are defined as CSS variables
under `:root` / `[data-theme="dark"]`, then mapped to Tailwind tokens via
`@theme inline` so utilities like `bg-bg`, `text-muted`, and `text-accent`
respond to theme switches automatically. **To rebrand, change the `--accent`
values** in `index.css` — everything else follows.

Theming is driven by a `data-theme` attribute on `<html>`, set before first
paint (see the inline script in `index.html`) so there's no flash. The toggle in
the nav persists the choice to `localStorage`.

## Deploying

The site is fully static. Build with `npm run build` and host the `/dist` folder
anywhere — Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc. Most will detect
Vite automatically; otherwise set the build command to `npm run build` and the
output directory to `dist`.
