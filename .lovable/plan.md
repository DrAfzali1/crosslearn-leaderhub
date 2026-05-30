
# Integrated Clinical Executive — Site Build Plan

## Goal
A sleek, modern, SEO-optimized resource & platform site for clinical executives, healthcare leaders, administrators, and physician execs to engage in cross-disciplinary leadership learning. Built on TanStack Start with Lovable Cloud backend. App code stays portable; only Lovable preview wrapper remains Lovable-specific.

## Design Direction — Light Editorial (Navy & Gold)
- Background: warm off-white / paper (`oklch(0.985 0.005 85)`)
- Primary: deep navy (`oklch(0.25 0.05 250)`)
- Accent: muted gold (`oklch(0.72 0.12 80)`)
- Foreground: rich charcoal (`oklch(0.18 0.01 250)`)
- Muted surfaces: soft warm gray
- Typography: serif display (Instrument Serif / Fraunces) for headings + clean sans (Inter) for body — editorial feel like HBR / The Atlantic
- Generous whitespace, thin gold rules as dividers, restrained motion (subtle fade-ups on scroll)
- All tokens defined in `src/styles.css` via `oklch` + semantic Tailwind v4 `@theme`

## Information Architecture (separate routes, each with own SEO `head()`)

```
/                    Home — hero, framework teaser, value pillars, featured insight, multi-CTA
/about               Founder/vision, mission, who it's for
/framework           The Integrated Clinical Executive Framework (deep dive + diagram)
/insights            Articles/blog index (cross-disciplinary leadership content)
/insights/$slug      Article detail (Article JSON-LD, og:image from cover)
/services            Advisory, speaking, cohorts, workshops
/contact             Contact form + booking CTA
/auth                Sign in / sign up (email+password + Google)
/subscribe           Newsletter subscribe (also embedded on home + footer)
```

Shared header nav + footer (newsletter signup, contact, social, legal).

## Multi-CTA Strategy
Three CTAs surfaced contextually across the site:
1. **Subscribe to newsletter** (primary on home hero secondary slot, footer, end-of-article)
2. **Book a consult / speaking** (services page, contact page, sticky in-page)
3. **Join the community/cohort** (framework page, about page)

Home hero = single primary CTA ("Subscribe — get the framework") + one secondary ("Explore the framework"). Avoids two-CTA slop while still serving all goals through page-appropriate placement.

## Lovable Cloud Backend
Enable Lovable Cloud. Tables (all with RLS + GRANTs):
- `profiles` — id (auth.users fk), full_name, role_title, organization, created_at
- `subscribers` — id, email (unique), name, source, subscribed_at, status
- `contact_messages` — id, name, email, organization, subject, message, created_at
- `insights` — id, slug (unique), title, excerpt, body (markdown), cover_image_url, author, published_at, tags[], status
- `user_roles` — id, user_id, role (enum: admin, editor, member) + `has_role()` security definer function (separate table per security rules)

Auth: email/password + Google (via Lovable broker + `configure_social_auth`).
Server functions (`createServerFn`) for: subscribe, submit-contact, list-insights, get-insight, admin upserts.
Insights list/detail are public reads via `supabaseAdmin`-scoped server fn (so SSR/loaders work without auth token).

## SEO
- Root `__root.tsx`: charset, viewport, sitewide og:site_name, theme-color, Organization JSON-LD, favicon, fonts preconnect
- Each leaf route: unique title, description, og:title, og:description, og:url, canonical (leaf only), and Article/BreadcrumbList/FAQPage JSON-LD where applicable
- `public/robots.txt` (allow all) and `public/sitemap.xml` (relative until domain set)
- Semantic HTML (h1 per page, nav/main/article/footer), alt text on all images, lazy loading
- Fix any existing SEO findings as part of the build

## Portability Boundary
**Stays (Lovable-only, untouched):** `vite.config.ts` wrapper, `src/server.ts` worker entry, `bunfig.toml`, error-overlay files.
**Portable (everything else):** all routes, components, styles, Supabase client usage (standard `@supabase/supabase-js`), env vars use both `VITE_*` and `process.env.*` conventions, README documents the 4-file swap to leave Lovable.

## Assets
- Provided logo (image 2) → save to `src/assets/logo.png`, use in header + favicon
- Framework diagram (image 1) → save to `src/assets/framework-diagram.png`, hero of `/framework`
- Generate: editorial hero image, founder portrait placeholder, 3 article cover images, og:image per major route

## Build Order
1. Enable Lovable Cloud + create migrations (tables, RLS, GRANTs, roles, has_role fn)
2. Configure auth providers (email + Google)
3. Establish design system in `src/styles.css` (tokens, fonts, semantic classes)
4. Build `__root.tsx` (header, footer, sitewide SEO, auth listener, query invalidation)
5. Build routes in order: `/`, `/framework`, `/about`, `/services`, `/insights`, `/insights/$slug`, `/contact`, `/auth`, `/subscribe`
6. Server functions: subscribe, contact, insights CRUD, auth helpers
7. Seed 3 starter insight articles drawn from the vision document content
8. Wire `head()` per route, JSON-LD, sitemap, robots
9. Generate images, replace placeholders
10. Verify build + check SEO findings + sweep AI-slop patterns

## Technical Details
- Stack: TanStack Start v1, React 19, Vite 7, Tailwind v4, shadcn/ui, TanStack Query
- Routing: file-based under `src/routes/` (no `src/pages/`)
- Data: `createServerFn` everywhere; loaders use `queryOptions` + `ensureQueryData` + `useSuspenseQuery`
- Auth-gated admin routes under `src/routes/_authenticated/` layout
- Forms: Zod validation client + server, react-hook-form
- All `head()` titles ≤60 chars, descriptions ≤160 chars
- Single H1 per page, semantic landmarks

## Out of Scope (can add later)
- Payments/paid cohorts (would add Stripe)
- Email sending (auth emails use Lovable defaults; transactional contact-form notifications can be added)
- Full CMS UI for insights (initial admin uses Supabase table editor; lightweight admin route can come later)
- Multi-language

---

Ready to implement on approval.
