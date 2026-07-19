# Brantley Wyche — Portfolio

A single-page frontend engineering portfolio built with React, TypeScript,
Vite, and Tailwind CSS v4.

The current light visual direction treats the page like a working engineer's
desk: warm paper surfaces, graph-paper system diagrams, taped notes, field
labels, and a restrained teal accent. It is designed to present broad frontend
strengths rather than frame React as the sole focus.

## Getting started

```bash
npm install
npm run dev
npm run build
npm run lint
```

On Windows systems that block PowerShell scripts, run the commands through
Command Prompt or use `npm.cmd` in PowerShell.

## Editing content

Most portfolio content lives in `src/data/`:

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Name, role, email, location, résumé, and social links |
| `src/data/projects.ts` | Project titles, details, links, and featured state |
| `src/data/experience.ts` | Work history and education |
| `src/data/skills.ts` | Skills grouped by frontend capability |
| `src/data/stats.ts` | Hero evidence and outcome metrics |

GitHub and LinkedIn links remain hidden while their values are blank.

Project cards intentionally support the current placeholder state. Add
`description`, `role`, `tags`, `liveUrl`, and `repoUrl` as work becomes ready.
Set `featured: true` on the flagship project to keep the larger card treatment.

## Page structure

```text
Centered hero and evidence metrics
Selected work
Approach
Experience
Toolkit
Beyond the résumé
Contact
```

Reusable paper, graph, note, tape, and field-label primitives are in
`src/components/Editorial.tsx`. Global visual tokens, graph-paper textures,
type roles, and reveal motion live in `src/index.css`.

## Deployment

The site builds to static assets in `dist/`. Use `npm run build`, then deploy
that directory through a static host such as Vercel, Netlify, GitHub Pages, or
Cloudflare Pages.
