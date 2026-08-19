# VARLENYX Website — Build Order

**Status:** 🔒 Locked
**Derived from:** `docs/MASTER_BUILD_ORDER.md` (MBO v2.1) — sitemap, audience journeys, page templates, design system, copy voice rules.

**Working agreement:** One MBO-governed build step per session. Verify, push, then move to the next step in a fresh session. Do not skip ahead or batch multiple phases in one pass.

---

## Phase A — Foundation

1. Finish `packages/ui` shared components (buttons, cards, section wrappers, breadcrumb, CTA blocks) per MBO Design System tokens
2. ✅ Verify clean build (`npm install && npm run build`) end-to-end, fix any breakage — verified clean (`npm install`: 216 packages, no errors; `npm run build`: 0 errors via Eleventy). Workspace symlinks for `@varlenyx/design-tokens` and `@varlenyx/ui` resolve correctly; passthrough CSS/JS/images copy through from `packages/` with no duplication. No breakage found, no fixes required. Nav/footer links to ~30 not-yet-built section pages are expected at this stage (only homepage exists; those routes fill in through Phases B–K).
3. Global layout QA: nav, footer, logo, responsive behavior across all 10 layout templates

## Phase B — Homepage (done) → Company section

4. Company landing + About VARLENYX (Story, Vision & Mission)
5. Leadership & Governance page
6. Culture & Values page
7. Careers landing (culture/teams overview only — job listings come later in Phase K)

## Phase C — Ecosystems (NOVELA)

8. Ecosystems landing page
9. NOVELA overview page
10. NOVELA sub-pages: Patient Experience, Healthcare Experience, Technology Foundation
11. Future Ecosystems placeholder page

## Phase D — Science & Innovation

12. ✅ Science & Innovation landing (domain grid: Medicine, Biotech, Med Engineering, Diagnostics, Pharma, Genomics, AI, Infrastructure)
13. ✅ Individual domain pages (batch: Medicine, Biotechnology, Medical Engineering)
14. ✅ Individual domain pages (batch: Diagnostics, Pharmaceuticals, Genomics) — built together with step 13's commit
15. ✅ Individual domain pages (batch: AI, Healthcare Infrastructure) — built together with step 13's commit. "Future Innovation" dropped: it was never part of the locked 8-domain grid in MBO §12/this doc's own step 12, so there is no ninth domain page to build.

## Phase E — Healthcare

16. ✅ Healthcare landing
17. ✅ Audience pages: Patients, Clinicians, Healthcare Organizations, Public Health

## Phase F — Research

18. ✅ Research landing (Research Areas, Programs, Collaborations)
19. ✅ Publications library page/template
20. ✅ Individual research program page template

## Phase G — Trust Center

21. Trust Center landing (six-pillar overview)
22. Privacy, Security pages
23. Responsible AI, Governance, Compliance pages

## Phase H — Knowledge Center

24. Knowledge Center landing
25. Article/insight page template + sample content
26. Reports/technical resources page

## Phase I — Partnerships

27. Partnerships landing + category pages (Healthcare, Research, Technology, Strategic)

## Phase J — Careers (full build-out)

28. Open roles listing template + application pathway
29. Teams/engineering culture pages

## Phase K — Insights, Contact, Legal

30. Insights/Newsroom landing + article template
31. Contact page (routed inquiry types per MBO)
32. Legal pages: Terms, Cookie Policy, Accessibility statement

## Phase L — Cross-cutting systems

33. Sitewide search implementation
34. Full sitemap/internal linking audit (no dead ends, per MBO cross-linking rule)
35. Accessibility audit pass (WCAG AA per MBO standards)
36. Performance/SEO pass (meta tags, sitemap.xml, robots.txt, image optimization)

## Phase M — Launch prep

37. Final full-site QA (desktop/tablet/mobile), content proofread against locked copy voice rules
38. Deployment setup + go-live

---

## Canonical Content Source — 19 Website Content Documents

Resolved via the 19 "website content document" knowledge files (company identity, story/vision, founder, products/ecosystem, research, partnerships, careers, contact, trust/legal, About VARLENYX, media assets, NOVELA, technology, governance/ethics, future vision, FAQ, resources/knowledge center, website IA, SEO strategy). These are the approved canonical copy source and must be reviewed before any build step, not just referenced for structure.

**Rule:** Every phase below pulls its real copy directly from these 19 files rather than generating new content. Where a file explicitly states a placeholder policy, the placeholder is used as written (not invented further).

### Resolved from the 19 files

1. **Leadership** — Placeholder policy confirmed: `[Founder Name]`, generic bio/photo placeholder until public launch (doc 3 — Founder).
2. **Locations/offices** — No physical presence yet. Global-first positioning; offices "will be announced as the organization expands" (doc 8 — Contact). No address content needed now.
3. **Research content** — No real publications exist. Official stance is "Research Foundation Phase" — the page communicates direction and philosophy, not a publication archive (doc 5 — Research & Innovation).
4. **Careers** — No formal open roles yet. Private Beta stance is "join the talent network" — culture/mission content only, no job listings (doc 7 — Careers).
5. **Photography** — Avoid generic stock imagery. AI-generated imagery permitted only for clearly labeled concept/future illustrations; never implies real facilities, patients, or partnerships (doc 10 — Media Assets & Brand Resources).
6. **Legal specifics** — No invented registration/jurisdiction info. Use the placeholder statement: details "will be published as formal operational structures are established" (doc 9 — Trust & Legal).
7. **Core facts locked** — Tagline "The Technology of Life," founded 2025, Private Beta status banner language, placeholder contact routing (hello@ / partnerships@ / research@ / careers@ / media@ / support@varlenyx.com) (doc 1 — Company Identity).

### Still open

- **Domain/hosting** — live domain and hosting target, needed before Phase M (not addressed in the 19 files).
