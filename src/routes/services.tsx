import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Services & Speaking — Integrated Clinical Executive";
const DESC = "Advisory, executive cohorts, workshops, and keynote speaking for healthcare leadership teams.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { t: "Executive Advisory", b: "Standing thought-partnership for CMOs, CNOs, and COOs navigating transformation, M&A, or quality turnarounds." },
  { t: "Leadership Cohorts", b: "Small, curated groups of clinical executives working through the framework together over 12 weeks." },
  { t: "Workshops & Retreats", b: "On-site sessions for leadership teams. Cross-disciplinary case studies, applied to your context." },
  { t: "Keynote Speaking", b: "Talks at health-system summits, association meetings, and academic medical centers." },
];

function ServicesPage() {
  return (
    <>
      <section className="container-prose py-20 md:py-28">
        <p className="eyebrow">Services & Speaking</p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-primary md:text-6xl">
          Work together.
        </h1>
        <span className="rule-gold my-8" />
        <p className="max-w-2xl text-lg text-muted-foreground">
          Four ways to bring the Integrated Clinical Executive framework to your organization.
        </p>
      </section>
      <section className="container-prose pb-24">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {services.map((s, i) => (
            <article key={s.t} className="bg-background p-8">
              <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-serif text-2xl text-primary">{s.t}</h2>
              <p className="mt-3 text-muted-foreground">{s.b}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Book a consult
          </Link>
          <Link to="/subscribe" className="inline-flex h-11 items-center justify-center rounded-sm border border-primary px-6 text-sm font-medium text-primary hover:bg-primary/5">
            Get the newsletter
          </Link>
        </div>
      </section>
    </>
  );
}