import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Services & Speaking — The Clinical Executives";
const DESC = "Executive advisory, leadership cohorts, workshops, and keynote speaking on integrated physician leadership and cross-industry operational excellence for healthcare.";

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
  { t: "Executive Advisory", b: "Strategic thought-partnership for health system executives, physician leaders, and boards navigating transformation, operational redesign, and enterprise strategy — informed by active leadership inside complex academic medical centers." },
  { t: "Leadership Cohorts & Community", b: "Curated cohorts for physician executives working through the Integrated Clinical Executive™ Framework together — building the identity, domain, execution, and adaptive systems capabilities required to lead modern healthcare." },
  { t: "Workshops & Strategic Retreats", b: "On-site sessions for leadership teams. Cross-industry frameworks from aviation, Toyota, hospitality, technology, and pharma — translated into the operational realities of your organization." },
  { t: "Keynote Speaking", b: "Talks for health system summits, association meetings, academic medical centers, and boards — on integrated physician leadership, reclaiming academic medicine, and cross-industry operational excellence." },
];

function ServicesPage() {
  return (
    <>
      <section className="container-prose py-24 md:py-32">
        <p className="eyebrow">Services &amp; Speaking</p>
        <h1 className="mt-8 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-primary md:text-6xl">
          Bring integrated physician leadership to your organization.
        </h1>
        <span className="rule-gold my-10" />
        <p className="max-w-3xl text-lg text-muted-foreground">
          Four ways to engage The Clinical Executives — designed to help healthcare organizations strengthen leadership, operational performance, and care delivery models, with the ultimate goal of improving outcomes and experiences for patients, clinicians, and communities.
        </p>
      </section>
      <section className="container-prose pb-24">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {services.map((s, i) => (
            <article key={s.t} className="bg-background p-8 md:p-10">
              <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-serif text-2xl text-primary">{s.t}</h2>
              <p className="mt-4 text-muted-foreground">{s.b}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Inquire about an engagement
          </Link>
          <Link to="/subscribe" className="inline-flex h-11 items-center justify-center rounded-sm border border-primary px-6 text-sm font-medium text-primary hover:bg-primary/5">
            Get the newsletter
          </Link>
        </div>
      </section>
    </>
  );
}