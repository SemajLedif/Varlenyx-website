# VARLENYX Website — Build Order

**Status:** 🔒 Locked
**Derived from:** `docs/MASTER_BUILD_ORDER.md` (MBO v2.1) — sitemap, audience journeys, page templates, design system, copy voice rules.

**Working agreement:** One MBO-governed build step per session. Verify, push, then move to the next step in a fresh session. Do not skip ahead or batch multiple phases in one pass.

---

## Phase A — Foundation

1. Finish `packages/ui` shared components (buttons, cards, section wrappers, breadcrumb, CTA blocks) per MBO Design System tokens
2. Verify clean build (`npm install && npm run build`) end-to-end, fix any breakage
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

12. Science & Innovation landing (domain grid: Medicine, Biotech, Med Engineering, Diagnostics, Pharma, Genomics, AI, Infrastructure)
13. Individual domain pages (batch: Medicine, Biotechnology, Medical Engineering)
14. Individual domain pages (batch: Diagnostics, Pharmaceuticals, Genomics)
15. Individual domain pages (batch: AI, Healthcare Infrastructure, Future Innovation)

## Phase E — Healthcare

16. Healthcare landing
17. Audience pages: Patients, Clinicians, Healthcare Organizations, Public Health

## Phase F — Research

18. Research landing (Research Areas, Programs, Collaborations)
19. Publications library page/template
20. Individual research program page template

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

## Open Items Needing Founder Input (blocking real content, not structure)

These don't block scaffolding/structure work but must be resolved before the affected pages carry real (non-placeholder) content:

1. **Leadership** — real founder/exec names, bios, titles, headshots vs. placeholder policy
2. **Locations/offices** — real addresses, or pre-launch with no physical presence (affects Contact & Global Presence)
3. **Research content** — real publications, or placeholder "illustrative" entries clearly marked as such
4. **Careers** — real open roles, or "join our talent network" holding state
5. **Photography** — real photos vs. stock (MBO discourages generic stock) vs. AI-generated imagery
6. **Legal specifics** — real company registration/jurisdiction info vs. generic boilerplate
7. **Domain/hosting** — live domain and hosting target for Phase M

Until answered, affected sections proceed with clearly labeled placeholder content so structure work isn't blocked.
