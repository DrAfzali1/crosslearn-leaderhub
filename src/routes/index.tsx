import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import framework from "@/assets/framework.jpg";
import { NewsletterForm } from "@/components/site/NewsletterForm";

const TITLE = "Integrated Clinical Executive — Leadership for Healthcare";
const DESC =
  "A resource and platform for clinical executives, physician leaders, and healthcare administrators learning across industries to lead with clarity.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  { eyebrow: "01 — Clinical", title: "Patient-centered judgment", body: "Operational decisions anchored in clinical reality — not abstracted away from it." },
  { eyebrow: "02 — Strategic", title: "Cross-industry pattern recognition", body: "Borrow what works from aviation, finance, defense, design, and the arts." },
  { eyebrow: "03 — Human", title: "Adaptive leadership", body: "Lead complex teams through ambiguity with empathy, rigor, and courage." },
  { eyebrow: "04 — Systemic", title: "Whole-system thinking", body: "See the interactions, not just the parts. Design for emergent outcomes." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-prose grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="eyebrow">For clinical executives & healthcare leaders</p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-primary md:text-6xl">
            Lead healthcare with ideas borrowed from every industry.
          </h1>
          <span className="rule-gold my-8" />
          <p className="max-w-prose text-lg text-muted-foreground">
            A resource and learning platform for physician executives, administrators, and clinical leaders who refuse to look only inward. Cross-disciplinary frameworks for the hardest decisions in modern medicine.
          </p>
          <div className="mt-10 max-w-md">
            <NewsletterForm source="home-hero" />
            <p className="mt-3 text-xs text-muted-foreground">
              Monthly essay. One idea. No noise.
            </p>
          </div>
          <div className="mt-6">
            <Link to="/framework" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold">
              Explore the framework <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full border border-gold/40" aria-hidden />
          <img src={hero} alt="A modern executive desk with notebook and olive branch" width={1600} height={1100} className="relative aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      {/* Framework teaser */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-prose grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">The Framework</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-primary md:text-4xl">
              Four disciplines, integrated.
            </h2>
            <span className="rule-gold my-6" />
            <p className="text-muted-foreground">
              The Integrated Clinical Executive Framework synthesizes clinical rigor, strategic foresight, human leadership, and systemic design into a single operating model for healthcare leaders.
            </p>
            <Link to="/framework" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold">
              See the model <ArrowRight size={16} />
            </Link>
          </div>
          <div className="md:col-span-7">
            <img src={framework} alt="Concentric circles diagram representing the framework" width={1400} height={1000} loading="lazy" className="w-full" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-prose py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Why this exists</p>
          <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">
            Healthcare can't be led with healthcare ideas alone.
          </h2>
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {pillars.map((p) => (
            <article key={p.eyebrow} className="bg-background p-8">
              <p className="eyebrow">{p.eyebrow}</p>
              <h3 className="mt-3 font-serif text-2xl text-primary">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="container-prose grid gap-8 py-16 md:grid-cols-2 md:items-center">
          <h2 className="font-serif text-3xl md:text-4xl">Bring the framework to your team.</h2>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/services" className="inline-flex h-11 items-center justify-center rounded-sm bg-gold px-6 text-sm font-medium text-gold-foreground hover:opacity-90">
              Advisory & speaking
            </Link>
            <Link to="/contact" className="inline-flex h-11 items-center justify-center rounded-sm border border-primary-foreground/40 px-6 text-sm font-medium hover:bg-primary-foreground/10">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
