# Deater Foundation Website

This repository contains the Eleventy-powered static site for the Deater Foundation. The project is optimized for Netlify hosting with Decap CMS so staff can manage content with a GitHub-backed editorial workflow.

## Tech stack

- [Eleventy](https://www.11ty.dev/) for static site generation
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Decap CMS](https://decapcms.org/) for content editing
- [Netlify](https://www.netlify.com/) for builds, hosting, and Identity authentication

## Prerequisites

- Node.js 18.18+ (Netlify uses Node 20 LTS)
- npm 9+

## Getting started

```bash
npm install
npm run dev
```

The development server runs Eleventy with hot reload at `http://localhost:8080` and a Tailwind watcher that rebuilds CSS when files change.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Run Eleventy in watch mode and rebuild Tailwind CSS on change. |
| `npm run build` | Generate production assets (Tailwind CSS + Eleventy output + JS bundle). |
| `npm run build:css` | Compile Tailwind CSS once. |
| `npm run build:site` | Build Eleventy output into `_site/`. |
| `npm run build:js` | Bundle `/src/assets/js/main.js` into `_site/assets/js`. |
| `npm run clean` | Remove the generated `_site/` directory. |
| `npm run format` | Format templates and content with Prettier. |

> **Note:** Package installation requires access to the npm registry. If you're developing in a restricted environment, configure the appropriate proxy or registry mirror before running `npm install`.

## Project structure

```
├── admin/              # Decap CMS app and configuration
├── docs/               # Contributor and editor documentation
├── src/                # Eleventy source files
│   ├── _data/          # Global data (site metadata, navigation)
│   ├── _includes/      # Layouts, partials, and Nunjucks components
│   ├── assets/         # Tailwind source, images, JS modules
│   ├── news/           # News & impact stories (Markdown)
│   ├── people/         # Staff & board bios (Markdown)
│   ├── programs/       # Program detail pages (Markdown)
│   └── pages/          # Stand-alone pages (Markdown)
└── netlify.toml        # Netlify build configuration
```

## Netlify configuration

The included `netlify.toml` sets the build command to `npm run build` and publishes from `_site/`. Enable Netlify Identity and Git Gateway (GitHub) to allow CMS logins. Invite editors from the Netlify dashboard under **Identity → Invite users**.

Environment variables to set in Netlify:

- `NODE_VERSION=20` (or your preferred LTS release)
- `DECAP_CMS_BACKEND=github` (optional, for clarity)

## Content editing workflow

1. Visit `/admin` and log in via Netlify Identity.
2. Create or edit entries. Saved changes open pull requests automatically via the editorial workflow.
3. Publish entries to trigger a Netlify build and deploy.

See [`docs/editor-guide.md`](docs/editor-guide.md) for detailed instructions for non-technical editors.

## Accessibility & testing

- Tailwind base styles prioritize accessible color contrast.
- Run automated checks with tools like [Lighthouse](https://developers.google.com/web/tools/lighthouse/) or [axe](https://www.deque.com/axe/) on local and preview builds.

## License

MIT © Deater Foundation
