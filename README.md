# VARLENYX Monorepo

This repository is governed entirely by **[docs/MASTER_BUILD_ORDER.md](docs/MASTER_BUILD_ORDER.md)** (the "MBO"). If anything in code contradicts that document, the MBO wins — update the MBO first, then the code.

> Note: this repo previously had an earlier project-brief README with a different (pre-MBO) structure and nav. It's preserved for reference at [docs/legacy/ORIGINAL_PROJECT_README.md](docs/legacy/ORIGINAL_PROJECT_README.md) — it has been superseded by the MBO, not deleted.

## Structure

```
varlenyx/
├── docs/MASTER_BUILD_ORDER.md   Locked source of truth (identity, sitemap, design system, copy, scope)
├── packages/
│   ├── design-tokens/           MBO §7 — colors, type, spacing as CSS custom properties + JSON
│   └── ui/                      MBO §7–8 — shared Nunjucks partials (nav, footer, hero, card, cta, button)
└── apps/
    └── web/                     The actual site (Eleventy). This is the only thing that gets deployed.
```

## Why these tools (MBO §17)

- **npm workspaces** — one repo, no publishing overhead
- **Eleventy + Nunjucks** — compiles to plain static HTML at build time; no client framework runtime. This matches the MBO §3 scope lock (marketing/informational site only — no backend, no CMS, no AI assistant, no knowledge graph).
- **Plain CSS custom properties** for tokens — directly traceable to the MBO §7 token table, no build-step abstraction between "what's locked" and "what's shipped."
- **Vanilla JS** — only for mobile nav toggle, sticky-nav scroll state, and reduced-motion checks.

## Getting started

```bash
npm install
npm run dev      # starts apps/web on a local dev server with hot reload
npm run build     # builds static output to apps/web/_site
```

## Adding a page

1. Find its entry in the MBO §4 sitemap and §8 page-template table to see which **layout** it must use.
2. Create the `.njk` file in `apps/web/src/<section>/` with frontmatter declaring that `layout`.
3. Do not invent new layout structures — extend `packages/ui` and `_includes/layouts` instead, and update the MBO if the template itself needs to change.

## Current status

Scaffold stage: folder structure, config, design tokens, shared nav/footer/layout partials, and the full page tree (as routable stub files) are in place per the MBO §17 structure. Page-by-page content is filled in following the MBO §8 build-phase order (Phase A ✅ scaffold → Phase B Home → Phase C Company → … ).
