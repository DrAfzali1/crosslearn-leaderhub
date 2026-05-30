## What changes

Rebrand the site to **The Clinical Executives™** and rewrite every page using language pulled directly from your proposal. Replace the current "four disciplines" framework (Clinical/Strategic/Human/Systemic — invented, not in your doc) with the **four Integrations** from the proposal: Identity, Domain, Execution, Adaptive Systems. Strip the decorative photography and move to a minimal, typography-led layout modeled on the proposal's structure.

## Brand & metadata

- Site name everywhere: **The Clinical Executives** (™ on first mention per page)
- Tagline: *Strategy & Leadership*
- Founder credit: **Anita Afzali, MD, MPH, MHCM**
- All `<title>`, og:title, og:site_name, JSON-LD Organization name updated
- Header wordmark replaces current "ICE" mark

## Information architecture (mirrors the proposal flow)

Nav order: **Home · Framework · About · Insights · Services · Contact**

```text
/                  Home — hero premise, vision/mission, framework teaser, insights teaser, CTA
/framework         The Integrated Clinical Executive™ Framework (full 4-Integration model)
/about             Founder, philosophy, differentiation
/insights          Article index
/insights/$slug    Article detail
/services          Speaking, advisory, cohort/community
/contact           Contact form
/subscribe         Newsletter (kept)
/auth              Sign in / up (kept)
```

Framework gets **both** a top-nav tab AND a dedicated section on the home page (teaser → links to `/framework`).

## Content map (sourced verbatim/near-verbatim from proposal)

**Home `/`**
- Hero premise: *"Physicians should not have to choose between providing healthcare and leading healthcare."*
- Sub: integration-over-separation paragraph from p.1
- Vision block (p.4 Vision)
- Mission block (p.4 Mission)
- Framework teaser: 4 Integrations with one-line each → "Explore the framework"
- Strategic Rationale excerpt (the 4 transformation drivers as a list)
- Closing positioning statement (p.5)
- CTA: Subscribe + Contact

**`/framework`** — full Integrated Clinical Executive™ Framework
- Core Premise (p.7)
- Framework Overview — "four core integrations"
- Four sections, each with: Problem → Shift → Capabilities → Outcome (exact structure from p.7-10)
  1. Identity Integration — Role Conflict → Role Alignment
  2. Domain Integration — Silos → System Thinking
  3. Execution Integration — Strategy → Operational Reality
  4. Adaptive Systems Integration — cross-industry frameworks (aviation, Toyota, hospitality, tech, pharma, athletics)
- Closing line (p.11): *"Integration — not separation — is the future of physician leadership…"*

**`/about`**
- Founder bio (Anita Afzali, MD, MPH, MHCM — proposal p.1)
- "We have lost the integrated physician" reframing (p.3)
- The Consequence (two-bullet false dichotomy, p.3)
- The Clinical Executives Solution — 4 pillars (p.3-4)
- Differentiation block (p.4-5)
- Platform Philosophy pull-quote (p.4)

**`/services`**
- Speaking & keynotes
- Executive advisory / health-system engagements
- Cohorts & community for physician leaders
- "Bring the framework to your team" CTA

**`/contact`** — unchanged structurally; rewritten copy

**Insights** — keep existing route + Cloud-backed reads; reword empty/intro copy in proposal voice

## Visual direction — minimal, typography-led

Replace current image-heavy layout. Photos used only where they carry meaning:

- **Keep:** founder portrait on `/about`, article hero on each `/insights/$slug`
- **Remove:** abstract hero photo on `/`, decorative framework illustration, generic insight covers used as page chrome
- **Replace with:** large serif typography (Fraunces), generous whitespace, thin gold rules, eyebrow labels, numbered sections, restrained subtle fade-up on scroll
- Keep current Navy / Gold / Paper palette + Fraunces + Inter — proven good
- The framework page renders as a typographic spread (numbered 01–04 integrations, no diagram needed); the existing `framework.jpg` is removed from the page

## Files to edit / add

- **Edit:** `src/routes/index.tsx`, `src/routes/framework.tsx`, `src/routes/about.tsx`, `src/routes/services.tsx`, `src/routes/contact.tsx`, `src/routes/insights.tsx`, `src/routes/__root.tsx` (site name, JSON-LD, og:site_name), `src/components/site/Header.tsx` (wordmark + nav order), `src/components/site/Footer.tsx` (brand line + tagline), `src/routes/sitemap[.]xml.ts`
- **Add:** none required (no new routes); may add small `<Eyebrow>` / `<SectionRule>` presentational components in `src/components/site/` for consistency
- **Remove from rendered output (files stay on disk for now):** hero.jpg, framework.jpg, insight-*.jpg used as page decoration

## Out of scope

- No DB schema changes
- No new auth providers, no payments
- No new image generation (going minimal — we're removing photos, not adding more)
- Logo redesign — current monogram stays; only the wordmark text changes
