import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "About — Integrated Clinical Executive";
const DESC = "Why this platform exists, who it serves, and the conviction behind cross-disciplinary leadership for healthcare.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="container-prose max-w-3xl py-20 md:py-28">
      <p className="eyebrow">About</p>
      <h1 className="mt-6 font-serif text-4xl leading-tight text-primary md:text-5xl">
        Built for the leaders medicine asks too much of.
      </h1>
      <span className="rule-gold my-8" />
      <div className="prose-lg space-y-6 text-foreground/90">
        <p className="text-lg text-muted-foreground">
          Clinical executives, physician leaders, CMOs, CNOs, COOs, and administrators sit at the hinge between two worlds — and are often given the language of only one.
        </p>
        <p>
          The Integrated Clinical Executive is a resource and learning platform for the leaders who refuse that limitation. It exists to import the best ideas from outside healthcare — operations, design, finance, defense, behavioral science, the arts — and translate them into models that hold up at the bedside, in the boardroom, and on the floor.
        </p>
        <h2 className="mt-12 font-serif text-2xl text-primary">Who it's for</h2>
        <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
          <li>Chief Medical, Nursing, Quality, and Operating Officers</li>
          <li>Physician executives and clinical department chairs</li>
          <li>Healthcare administrators and service-line leaders</li>
          <li>Emerging leaders preparing for executive roles</li>
        </ul>
        <h2 className="mt-12 font-serif text-2xl text-primary">What you'll find here</h2>
        <p>
          A framework, a body of essays and case studies, peer cohorts, and direct advisory and speaking engagements. Together they form a working library for the modern clinical executive.
        </p>
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link to="/framework" className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          The Framework
        </Link>
        <Link to="/services" className="inline-flex h-11 items-center justify-center rounded-sm border border-primary px-6 text-sm font-medium text-primary hover:bg-primary/5">
          Join a cohort
        </Link>
      </div>
    </section>
  );
}