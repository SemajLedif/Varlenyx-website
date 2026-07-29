# VARLENYX MASTER BUILD ORDER (MBO)
### Final Locked Specification — v2.0 (Complete Pass)
**Status: 🔒 LOCKED — Supersedes all prior phase documents in project knowledge, including MBO v1.0.**

---

## 0. PURPOSE & CHANGE NOTE

v1.0 of this document compressed too much away. v2.0 went back through all 17 source documents and carried forward every substantive, buildable decision. **v2.1 (this version) incorporates the actual VARLENYX logo asset**, which supersedes the invented placeholder palette from v2.0 — the real brand is a dark, cosmic/gradient identity, not the calm paper-and-teal system originally drafted. See Section 1a and the revised Section 7.

This remains the only source of truth going forward. Where this document is silent, the build defaults to the closest matching source-material decision; where source documents conflict, **Section 16 (Conflict Log)** records the resolution.

---

## 1a. LOCKED VISUAL BRAND ASSET (from uploaded logo)

**Logo description (locked, as provided):**
- Mark: a circular spiral/vortex composed of dots of varying size, radiating from a bright center outward, gradient from **violet/purple** (upper-left) through **blue** to **bright cyan** (lower-right/right)
- Wordmark: **"VARLENYX"** in white, geometric/angular sans-serif, wide tracking, sharp triangular cut on the "V" and "A"; the final **"X" is rendered in the same violet→cyan gradient** as the mark; a small violet dot sits beneath the "V" as a graphic accent
- Tagline: **"The technology of life"** set in a flowing script/cursive typeface, in the same violet→cyan gradient, flanked by thin horizontal rules on both sides
- Background: near-black deep navy (not pure black)

**Tagline (locked, supersedes prior short expressions as the primary tagline):**
> **"The technology of life"**

This now sits alongside (not replacing) the longer strategic tagline "Building Intelligent Health Infrastructure" — the script tagline is the emotional/brand mark used with the logo lockup; the strategic tagline is used in body copy and positioning statements.

**Logo usage rule (locked):** the full lockup (mark + wordmark + script tagline) is designed for dark backgrounds. On light backgrounds, use a wordmark-only lockup in `ink` with the gradient reserved for the "X" and iconography accents only — do not force the full-color lockup onto light surfaces.

---

## 1. LOCKED IDENTITY

**Company:** VARLENYX — **Flagship ecosystem:** NOVELA (first product, never the whole company)

**Category (locked):** A global health innovation company advancing human health through the convergence of medicine, biotechnology, medical engineering, diagnostics, pharmaceuticals, genomics, artificial intelligence, and healthcare infrastructure.

**Purpose (locked):** To advance human health by building intelligent systems that help people live healthier, longer, and more connected lives.

**Mission (locked):** To build intelligent health infrastructure that connects people, healthcare, data, and technology into continuous, trusted, and accessible healthcare experiences.

**Vision (locked):** A world where every person benefits from intelligent, continuous, and personalized healthcare throughout life.

**Strategic position (locked, two-layer):**
- Public-facing: **VARLENYX Healthtech Company**
- Strategic tagline: **"Building Intelligent Health Infrastructure"**

**Short brand expressions (locked, pick per context):**
- "Engineering the Future of Human Health" (primary homepage headline)
- "Where science, technology, and medicine converge to transform healthcare"
- "Building intelligent health infrastructure for a more connected future of healthcare"

**Core Values (locked, 7):** Humanity First · Intelligent Innovation · Scientific Integrity · Trust & Responsibility · Connected Thinking · Craftsmanship · Long-Term Stewardship

**Operating principles (locked):** Build trust before growth · Design for clarity before complexity · Evidence before assumptions · Systems before silos · Long-term impact before short-term attention · Responsible AI before rapid AI · Continuous improvement over perfection.

**Brand personality (locked):** Thoughtful, Intelligent, Human, Trustworthy, Precise, Curious, Optimistic. Brand archetype blend: **Builder** (primary) + **Sage** (secondary) + **Caregiver** (supporting).

**Never:** aggressive, sales-driven, buzzword-heavy, overpromising ("revolutionize," "cure," "guarantee," "miracle"), generic healthcare-blue-corporate, generic startup-hype.

**Identity boundaries (locked):** VARLENYX is **not** a hospital, a single healthcare app, an AI company that happens to touch healthcare, a medical device company, or a healthcare marketplace. It **is** a health innovation ecosystem builder, with NOVELA as its first flagship ecosystem.

**Three-second test (locked design rule):** Within 3 seconds on any page, a visitor must be able to answer: who is VARLENYX, why does it exist, why does it matter. If not, the page fails.

---

## 2. LOCKED CORPORATE / ECOSYSTEM ARCHITECTURE

```
                         VARLENYX
              Global Health Innovation Company
                              |
        --------------------------------------------------
        Medicine   Biotechnology   Medical Engineering
        Diagnostics   Pharmaceuticals   Genomics
        Artificial Intelligence   Healthcare Infrastructure
        Research & Scientific Discovery
                              |
                    Products & Ecosystems
                              |
                          NOVELA
                (first flagship ecosystem)
                              |
              Future Ecosystems (reserved, unbuilt)
```

**Expansion rule (locked):** any future product must nest under one of the nine domains above and under Ecosystems if user-facing (e.g., a future "VARLENYX BioSense" device → Ecosystems → Connected Health Technologies → BioSense). No new top-level nav category may be invented to accommodate it.

---

## 3. LOCKED SCOPE: WHAT IS ACTUALLY BEING BUILT

We are building **one real, responsive, multi-page marketing/informational website** — the digital front door described across Phases 1–7 of the source material. Concretely: static HTML/CSS/JS pages (or a single coherent front-end stack), real copy, real design tokens, real navigation, no placeholders.

**Not being built** (see Section 15 for the full list, so nothing is lost, just labeled): AI knowledge assistant, knowledge graph explorer, semantic search backend, CMS, user accounts/personalization, World Health Observatory dashboard, autonomous agents, data federation, global governance councils, multi-region localization infrastructure. Where the source material describes these, the built site may *reference them narratively* (e.g., a "Knowledge Center" page can say the organization publishes research and link to static article pages) but will not implement working software for them.

---

## 4. LOCKED SITEMAP & NAVIGATION

**Primary navigation (locked, 7 items + action):**
```
VARLENYX  |  Company  |  Ecosystems  |  Science & Technology  |  Healthcare  |  Research  |  Trust  |  Insights   [Contact]
```

**Audience shortcut bar (locked, secondary row under hero or in mobile menu):** "Explore VARLENYX for:" Patients & Individuals · Healthcare Professionals · Researchers · Technology Partners · Investors · Institutions.

**Full sitemap (locked):**
```
VARLENYX
├── Home
├── Company
│   ├── About VARLENYX
│   ├── Vision & Mission
│   ├── Leadership
│   ├── Values & Culture
│   └── Careers
├── Ecosystems
│   ├── NOVELA (flagship)
│   │    ├── Overview
│   │    ├── Patient Experience
│   │    ├── Healthcare Experience
│   │    └── Technology Foundation
│   └── Future Ecosystems (placeholder)
├── Science & Technology
│   ├── Medicine & Clinical Innovation
│   ├── Biotechnology
│   ├── Medical Engineering
│   ├── Diagnostics
│   ├── Pharmaceuticals
│   ├── Genomics & Precision Health
│   ├── Artificial Intelligence
│   └── Healthcare Infrastructure
├── Healthcare
│   ├── Patients
│   ├── Clinicians
│   ├── Healthcare Organizations
│   └── Public Health
├── Research
│   ├── Research Areas
│   ├── Publications
│   ├── Collaborations
│   └── Innovation Programs
├── Trust
│   ├── Privacy
│   ├── Security
│   ├── Responsible AI
│   ├── Governance
│   └── Compliance
├── Insights
│   ├── News
│   ├── Articles
│   └── Research Updates
├── Partnerships (footer-reachable)
├── Careers (also under Company)
└── Contact
```

**Footer (locked, full structure):**
```
VARLENYX
Company            Ecosystems         Science & Technology
- About            - NOVELA           - Medicine
- Leadership       - Future Platforms - Biotechnology
- Careers                             - AI
                                       - Genomics
Healthcare         Research           Trust
- Patients         - Publications     - Privacy
- Clinicians       - Collaborations   - Security
- Organizations                       - Responsible AI
                                       - Governance
Connect            Legal
- Contact          - Privacy Policy
- Partnerships     - Terms
- Media            - Accessibility
- Newsletter       - Cookie Policy
```

**Breadcrumb rule (locked):** every interior page shows `VARLENYX > Section > Subsection` so users always know where they are.

**Rule confirmed:** Careers appears both under Company and is footer-linked; Partnerships is footer + Contact-routed rather than top-nav, to keep the primary nav at 7 items (this is a deliberate simplification versus the source material's drift toward 9–11 top-level nav items across phases).

---

## 5. LOCKED AUDIENCE ARCHITECTURE & JOURNEYS

The site must serve distinct audiences without fragmenting into separate sites. Locked audience list and what each one needs to find, per the source material's persona work:

| Audience | Core question | Primary entry point | Desired action |
|---|---|---|---|
| **Patients / public** | "Can this help me? Can I trust it?" | Home → NOVELA | Explore NOVELA, learn more |
| **Clinicians** | "Does this improve care? Can I trust the evidence?" | Healthcare → Clinicians | Request info, explore integration |
| **Healthcare organizations** | "Can this scale, integrate, and stay secure?" | Healthcare → Organizations | Start partnership conversation |
| **Researchers/scientists** | "What is VARLENYX discovering? Can I collaborate?" | Research | Collaborate, view publications |
| **Engineers/technical** | "What are they building? What's the culture?" | Science & Technology → Careers | Explore careers |
| **Investors/strategic partners** | "What's the vision and scale?" | Company → Contact (investor routing) | Investor contact |
| **Partners (institutions, govts, NGOs)** | "How do we work together?" | Partnerships (footer) | Start conversation |
| **Media** | "Accurate info, experts, updates" | Insights → Media contact | Press contact |
| **Future employees** | "Why work here? What's the mission?" | Careers | Apply |

**Universal journey (locked, applies to all audiences):** Discover → Understand → Trust → Explore → Engage → Collaborate. Every page should be trying to move a visitor one step along this chain, never skip straight to a hard sell.

**CTA language rule (locked):** trust-oriented, never aggressive. Approved primary CTAs: "Explore VARLENYX," "Explore NOVELA," "Partner With VARLENYX," "Collaborate With Us," "Build The Future Of Health." Approved secondary CTAs: "Learn More," "Read Research," "Contact Team." Avoid pop-ups, forced registration, countdown urgency.

---

## 6. LOCKED CONTENT TAXONOMY (for internal consistency, not a literal search backend)

Even without a real search/AI backend, every content page should be authored as if it belonged to one of these seven domains, and should carry consistent "metadata" fields inline as bylines/tags for future-proofing:

1. **Organization** — company identity, leadership, culture, mission
2. **Ecosystems** — NOVELA, future platforms
3. **Science & Technology** — AI, data, hardware, biotech, engineering
4. **Healthcare** — patients, clinicians, hospitals, systems
5. **Research** — programs, publications, collaborations
6. **Trust** — privacy, security, ethics, governance
7. **Insights/Engagement** — news, articles, careers, partnerships

**Card content model (locked fields, used consistently across the site for any "card" component):**
- Research/Program card → Title, one-line summary, domain tag, status
- Publication card → Title, authors, date, one-line abstract
- Technology card → Name, one-line purpose, domain tag
- Ecosystem card → Name, tagline, "Explore →" link

---

## 7. LOCKED DESIGN SYSTEM

> **Superseded note:** the palette below replaces the v2.0 "paper/teal/clay" system, which was invented before the real logo existed. The design system is now derived directly from the uploaded logo asset (Section 1a) so the built site matches the brand mark exactly rather than approximating it.

**Color tokens (locked, derived from logo):**
| Token | Hex (approx.) | Use |
|---|---|---|
| `void` | `#080B14` | Primary dark background (hero, nav, footer, dark sections) — matches logo background |
| `ink` | `#0F1420` | Secondary dark surface (cards/panels on dark) |
| `paper` | `#F7F8FA` | Light-mode background for content-heavy interior pages (Research, Trust, articles) |
| `text-light` | `#F5F6F8` | Primary text on dark backgrounds |
| `text-dark` | `#10131C` | Primary text on light backgrounds |
| `gradient-violet` | `#7B5CFA` | Gradient start — accents, the "X," icon starts, active states |
| `gradient-cyan` | `#2FD8E8` | Gradient end — accents, icon ends, links, hover states |
| `mist` | `#232838` | Borders/dividers on dark surfaces |
| `hairline` | `#E4E7ED` | Borders/dividers on light surfaces |

**Signature gradient (locked):** `linear-gradient(135deg, #7B5CFA 0%, #2FD8E8 100%)` — used for: the logo's "X," primary button fills or button-text on hover, section-divider accents, data-highlight numbers, and the spiral/constellation motif. Never used as a full-page background wash — it stays an accent, per the logo's own restraint (gradient only touches the "X" and the mark, not the whole wordmark).

**Theme model (locked):** VARLENYX is primarily a **dark-mode-first brand** (hero, nav, footer, homepage always dark/`void`), with light (`paper`) surfaces used deliberately for dense reading contexts (long-form Research articles, Trust/Legal pages) so they stay easy to read at length. This is a deliberate light/dark split, not two competing systems.

**Typography (locked, revised):**
- Display/headlines: a **geometric, wide-tracked sans-serif** in the spirit of the wordmark (e.g., **Space Grotesk** or **Sora**) — used for H1/H2, all-caps or wide letter-spacing on hero headlines
- Body/UI: **Inter** or **General Sans** — body copy, nav, buttons, cards
- Script/accent (rare, brand-moment only): a flowing script face matching the tagline treatment (e.g., **Playfair Display Italic** or a true script like **Pacifico** used sparingly) — reserved *only* for the tagline "The technology of life" wherever the full lockup appears; never used for body or UI text
- Data/tags/eyebrows: **IBM Plex Mono**

**Iconography motif (locked, revised):** the dot-spiral/vortex from the logo becomes the site's one recurring signature graphic — used as a subtle animated or static background element behind the homepage hero and section dividers, rendered in the violet→cyan gradient at low opacity on dark backgrounds. This replaces the earlier generic "constellation" placeholder motif.

**Spacing scale (locked):** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 (px).

**Grid (locked):** Desktop 12-column · Tablet 8-column · Mobile 4-column. Mobile-first build order.

**Corner radius (locked):** small (4px, inputs) / medium (8px, cards) / large (16px, hero panels) — never fully pill-shaped except pills/badges.

**Elevation (locked, used sparingly):** surface → raised (card hover) → overlay (modal/menu). No heavy drop shadows.

**Motion principle (locked):** "Organic Precision" — calm entrance transitions (300–500ms, ease-out), no bounce, no parallax gimmicks, reduced-motion respected everywhere. Motion only ever explains a relationship or reveals content — never decorative-only.

**Imagery direction (locked):** no generic stock-healthcare imagery (no "doctor smiling at camera"), no empty futuristic AI clichés layered on top of the brand's own mark. Prefer authentic-feeling photography direction (real-looking people/environments) on light-mode content pages; on dark-mode brand moments (hero, section dividers, CTA banners), let the logo's dot-spiral motif and gradient do the work instead of photography.

**Component inventory (locked, build these once, reuse everywhere):**
- Buttons: primary / secondary / ghost / text
- Nav bar (sticky, transparent-over-hero → solid-on-scroll) + mega-menu for Science & Technology and Ecosystems
- Footer (per Section 4)
- Hero (3 variants: Corporate / Scientific / Product-Ecosystem)
- Content card (per Section 6 field model)
- Stat/metric panel
- Quote/testimonial block
- Timeline (for Company > Vision/History and Research > Milestones)
- Accordion (FAQ use)
- Two-column content block (text + image/diagram)
- CTA banner (full-width, closing section)

---

## 8. LOCKED PAGE TEMPLATES BY TYPE

Every page is assembled from the universal skeleton, but the *emphasis* differs by page type (locked, from source material's most consistent version):

- **Corporate page** (About, Leadership, Culture): Hero → Introduction → Mission/Values → Leadership/Governance → Contact
- **Ecosystem page** (NOVELA): Hero → Vision → Capabilities → Technology Foundation → Human Impact → Roadmap → Related Platforms
- **Science & Technology domain page**: Hero → Challenge → Approach/Solution → Architecture (plain-language) → Applications → Impact
- **Healthcare audience page** (Patients/Clinicians/Orgs/Public Health): Hero → Challenge → Understanding → Innovation → Evidence → Next step (tailored CTA per audience)
- **Research landing/program page**: Hero → Research Question → Approach → Findings-to-date (or "current focus" if none) → Publications → Collaboration CTA
- **Trust sub-page** (Privacy/Security/Responsible AI/Governance/Compliance): Hero → Principle statement → How we apply it → Related trust pages
- **Knowledge/Insights article**: Hero → Article body → Related articles → Newsletter CTA
- **Partnership page**: Hero → Why partner → Partnership categories → Collaboration model → Contact CTA
- **Contact page**: Hero → Routing selector ("I want to...") → Category-specific contact info → Global presence note

**Universal page skeleton (locked):**
```
Nav → Hero (title + one-line summary) → Context/Why it matters →
Approach (what VARLENYX does here) → Evidence/Trust → Human impact →
Related/cross-links → Next step (CTA) → Footer
```

---

## 9. LOCKED HOMEPAGE (full structure + drafted copy)

**Section order (locked, 9 sections max):**
1. Hero
2. Mission ("A New Architecture for Healthcare")
3. Healthcare Challenge
4. Scientific/Ecosystem Overview (the 8 domains, visually connected, not a plain list)
5. NOVELA Introduction
6. Trust preview (3-4 trust pillars, links to Trust Center)
7. Insights preview (2–3 latest articles)
8. Careers/Partnerships closing invitation
9. Final CTA banner + Footer

**Locked hero copy:**
- Headline: **"Engineering the Future of Human Health"**
- Subhead: "VARLENYX brings together medicine, biotechnology, medical engineering, artificial intelligence, genomics, diagnostics, and healthcare innovation to build the systems that will define the next era of healthcare."
- Primary CTA: "Explore Our Science" — Secondary CTA: "Discover NOVELA"

**Locked mission section copy:**
- Heading: "A New Architecture for Healthcare"
- Body: "The complexity of human health requires more than isolated solutions. VARLENYX connects diverse disciplines into an integrated ecosystem where discovery, intelligence, engineering, and healthcare converge."

**Locked scientific foundation section:**
- Heading: "Advancing Knowledge Through Discovery"
- Body: "Every healthcare breakthrough begins with understanding. VARLENYX explores the fundamental mechanisms of life through research spanning biology, medicine, genomics, computation, and emerging scientific fields."
- CTA: "Explore Science & Research"

**Locked healthcare impact section:**
- Heading: "Transforming Discovery Into Healthcare Solutions"
- Body: "Scientific knowledge becomes meaningful when it improves human lives. VARLENYX develops healthcare innovations that support earlier understanding, better decisions, improved treatments, and more connected healthcare systems."
- Four domain callouts: Precision Medicine · Advanced Diagnostics · Therapeutic Innovation · Intelligent Healthcare Systems
- CTA: "Explore Healthcare Innovation"

**Locked closing statement:**
- Heading: "The Future Of Healthcare Begins With Understanding"
- Body: "By connecting science, technology, and human purpose, VARLENYX is building the foundations for a healthier future."
- CTAs: "Explore VARLENYX" · "Partner With Us" · "Discover Our Work"

---

## 10. LOCKED ABOUT PAGE (structure + copy direction)

**Order (locked):** Hero → Who We Are → Why VARLENYX Exists → Vision → Mission → Our Philosophy (5 principles) → What We Do (9 domains) → Culture & Values → Leadership → Governance → Global Outlook → Join Us (multi-audience CTA)

**Locked hero copy:** Headline "Building the Future of Human Health" / Subhead "VARLENYX is a health technology company dedicated to advancing healthcare by bringing together multiple scientific and engineering disciplines into one integrated innovation ecosystem."

**Locked "Our Philosophy" (5 principles, use verbatim):**
1. Evidence before assumptions.
2. Systems thinking over isolated solutions.
3. Human outcomes over technological novelty.
4. Responsible innovation.
5. Continuous learning.

**"What We Don't Do" callout (locked, include on About page — distinctive and useful for credibility):** VARLENYX does not pursue innovation for its own sake, does not position technology to replace healthcare professionals, and does not compromise scientific integrity for speed.

---

## 11. LOCKED SECTION COPY DIRECTION (condensed per section, real headings to use)

**Science & Technology landing:** Heading "Advancing Knowledge Through Science and Engineering" — intro: "VARLENYX explores the fundamental mechanisms of health through research spanning biology, medicine, genomics, computation, AI, and medical engineering." Each of the 8 domain sub-pages uses the *Science & Technology domain page* template (Section 8) with domain-specific challenge/approach copy drafted from source Phase 7.4/7.6 (Biotechnology, Genomics, AI, Medical Engineering, Diagnostics, Pharmaceuticals headings/copy already drafted there — reuse verbatim, adapting only the "Section" framing to "Science & Technology" per the locked nav in Section 4).

**Healthcare landing:** Heading "Transforming Discovery Into Healthcare Solutions" — four audience sub-pages (Patients/Clinicians/Organizations/Public Health), each using the Healthcare audience page template, tailored CTA per audience per Section 5.

**Research landing:** Heading "Advancing Knowledge Through Discovery" — sections: Research Areas, Publications, Collaborations, Innovation Programs. Tone: "exploring," "investigating," "developing" — never "guaranteed," "will cure," "will eliminate."

**Trust landing:** Heading "Trust Is Designed, Not Claimed" — six pillars (Section 12) each get a one-paragraph statement + link to its own sub-page.

**Insights landing:** Heading "Knowledge Enables Progress" — simple reverse-chronological article list (News / Articles / Research Updates), no personalization engine, no AI assistant — see Section 15.

**NOVELA (Ecosystems) page:** Heading "NOVELA — VARLENYX's First Ecosystem" — explicit line locked from source material: "NOVELA is the first ecosystem bringing intelligent health experiences to people," never "NOVELA is VARLENYX." Sub-sections: Overview, Patient Experience, Healthcare Experience, Technology Foundation.

**Careers page (structure, locked):** Hero → Why VARLENYX → Culture → Teams (Scientific / Engineering / Clinical / Innovation) → Open Roles (static placeholder list is fine) → Join The Mission CTA.

**Partnerships page (structure, locked):** Hero → Why Partner With VARLENYX → Partnership Categories (Healthcare / Research / Technology / Government & Public Health / Investment & Strategic) → Contact CTA.

**Contact page (structure, locked):** Hero → "I want to..." routing selector with these categories (locked): General inquiries · Research collaboration · Healthcare partnerships · Media · Careers · Investor relations. Each routes to a labeled email/contact block — no backend logic required, just clear labeled sections.

---

## 12. LOCKED TRUST CENTER ARCHITECTURE (6 pillars)

1. **Scientific Credibility** — research philosophy, approach, collaborations
2. **Safety & Healthcare Responsibility** — patient safety principles, validation approach
3. **Security & Privacy** — data principles, user rights (Privacy Center sub-page)
4. **Transparency** — how systems work, how decisions are made, limitations stated plainly
5. **Responsible AI** — human oversight, explainability, no autonomous claims (ties to Section 15 — we are *describing* principles, not shipping an actual AI system)
6. **Accountability** — governance, leadership responsibility, compliance posture

**Scientific maturity labeling rule (locked, use wherever discussing anything not yet shipped):** Research Concept → Experimental → Prototype → Clinical Evaluation → Validated Technology → Available Solution. Always state which stage something is at; never imply "Available Solution" for anything that is really still a concept.

---

## 13. LOCKED ACCESSIBILITY & RESPONSIVE STANDARDS

- **WCAG 2.1 AA baseline** across all pages (contrast ratios, focus states, semantic HTML, alt text, keyboard navigation).
- Never convey meaning by color alone.
- Respect `prefers-reduced-motion`.
- Touch targets ≥ 44px on mobile; no hover-only interactions.
- Mobile nav: full-screen overlay menu, not a cramped dropdown.
- Performance: optimize images, lazy-load below-the-fold media, no render-blocking heavy animation libraries for simple transitions.

---

## 14. LOCKED CONTENT VOICE RULES

- Explain before persuading: problem → why it matters → approach → evidence → next step.
- Use: *advance, build, connect, discover, improve, enable, accelerate*. Avoid: *revolutionize, disrupt, cure, guarantee, miracle*.
- Every healthcare claim states evidence/limitations; no treatment promises.
- Progressive disclosure: plain-language first, technical depth available but not forced.
- NOVELA is always introduced as "VARLENYX's first ecosystem," never as the company itself.
- Audience-adapted phrasing example (locked pattern): general public → "NOVELA helps connect health information over time"; clinicians → "NOVELA provides longitudinal health information to support informed clinical decisions"; technical → "NOVELA maintains a continuously evolving longitudinal health model integrating data across connected systems." Same fact, three depths.

---

## 15. DEFERRED SCOPE — NOT BUILT, BUT NAMED SO NOTHING IS LOST

Everything below appears in the source material (mainly Phases 3, 4, 8, 9, 10, 11, 12) and is **explicitly deferred**, not forgotten. If any of these is wanted as a real feature later, it's a separate, scoped request:

- AI knowledge assistant / conversational search ("Ask VARLENYX")
- Knowledge Graph Explorer / "Living Knowledge Graph" interactive visualization
- "Innovation Constellation" / "Health Innovation Constellation" interactive ecosystem map
- World Health Observatory dashboard (global health data visualization)
- Semantic/AI-powered search backend
- User accounts, saved topics, personalization engine
- CMS / editorial workflow tooling
- Multi-language / regional localization infrastructure
- Data federation, data sovereignty, and cross-institution data-sharing systems
- Autonomous AI agents (research agents, clinical agents, governance agents)
- Global governance councils, AI safety review boards, regulatory-intelligence automation
- Developer portal / public APIs / SDKs
- Any literal "digital twin," "future health simulator," or biological simulation experience
- Investor/partner authenticated portals

The built site **may reference these narratively** (e.g., "the Knowledge Center will grow to include research updates and articles") but will not implement functioning software for them without a separate, explicit build request.

---

## 16. CONFLICT LOG

| Conflict | Versions found | Resolution |
|---|---|---|
| Company positioning | "Healthtech company" vs "Global health innovation company" vs "civilization builder" | Locked to global health innovation company, Section 1 |
| Primary nav | 4+ different navs across phases | Locked 7-item nav, Section 4 |
| Homepage section count | 9, then 12, then 15, then 20 sections across versions | Locked to 9, Section 9 |
| Design tokens | Never concretely specified, only philosophy | Concrete hex/type locked, Section 7 |
| Backend/AI/governance scope (Phases 8–12) | Treated as literal buildable infrastructure | Locked as deferred/editorial only, Section 15 |
| Careers placement | Sometimes top-level nav, sometimes under Company | Locked under Company + footer, Section 4 |
| "Science" vs "Technology" as separate top-nav items | Some phases split these into two nav items | Merged into one "Science & Technology" nav item with 8 domain sub-pages, Section 4 |
| Trust Center pillar count | 4, 5, then 6 pillars across phases | Locked to 6, Section 12 |
| Page module count per page | Ranged from 6 to 20 modules per page across phases | Locked to universal skeleton, max ~8 modules, Section 8 |

---

## 17. LOCKED TECH STACK & MONOREPO STRUCTURE

**Tooling decision (locked):** given the number of templated, repeating page types locked in Section 8 (8 science domains, 4 healthcare audiences, 5 trust pages, etc.), hand-duplicated HTML is rejected as unmaintainable. The build uses:

- **npm workspaces monorepo** — one repo, multiple packages, no publishing required
- **Eleventy (11ty) + Nunjucks** as the static site generator/templating layer for `apps/web` — chosen because it compiles to plain static HTML at build time (no client-side framework runtime shipped), which matches the Section 3 scope lock ("no backend, no CMS, no framework overhead") while still letting shared nav/footer/layouts live in one place instead of being copy-pasted across ~35 pages
- **Plain CSS with custom properties** for the design tokens (Section 7) — no CSS-in-JS, no Tailwind, to keep the system legible and directly traceable to the locked token table
- **Vanilla JS** for the small amount of interactivity needed (mobile nav toggle, sticky-nav scroll state, reduced-motion checks) — no framework runtime

**Monorepo structure (locked):**
```
varlenyx/
├── README.md
├── package.json                 (npm workspaces root)
├── docs/
│   └── MASTER_BUILD_ORDER.md    (this document, committed as source of truth)
├── packages/
│   ├── design-tokens/           (Section 7 tokens — CSS + JSON, framework-agnostic)
│   └── ui/                      (shared Nunjucks partials: nav, footer, hero variants,
│                                  card, button, cta-banner + their component CSS)
└── apps/
    └── web/                     (the actual Eleventy site — the one thing that ships)
        ├── src/
        │   ├── _data/site.json  (nav + footer + sitemap, single source — Section 4)
        │   ├── _includes/layouts/   (one layout per page type — Section 8)
        │   ├── assets/(images|css|js)
        │   └── [full page tree matching Section 4 sitemap]
        └── .eleventy.js
```

**Rule:** every page file in `apps/web/src` must declare a `layout` from `_includes/layouts/` matching its page type per Section 8 — no page invents its own one-off structure.

---
