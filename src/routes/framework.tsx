import { createFileRoute, Link } from "@tanstack/react-router";
import framework from "@/assets/framework.jpg";

const TITLE = "The Integrated Clinical Executive Framework";
const DESC = "A four-discipline model — clinical, strategic, human, systemic — for leaders working at the intersection of medicine and management.";

export const Route = createFileRoute("/framework")({
  head: () => ({
    meta: [
      { title: TITLE + " — ICE" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/framework" },
    ],
    links: [{ rel: "canonical", href: "/framework" }],
  }),
  component: FrameworkPage,
});

const disciplines = [
  { n: "01", t: "Clinical", b: "Decisions stay anchored in the bedside reality of patients and care teams. Operational metrics never replace clinical judgment — they support it." },
  { n: "02", t: "Strategic", b: "Borrow rigorously from outside healthcare: aviation's safety culture, finance's risk discipline, design's user obsession, defense's logistics, the arts' narrative craft." },
  { n: "03", t: "Human", b: "Lead with empathy and candor. Build psychological safety that produces dissent, not silence. Develop the next generation deliberately." },
  { n: "04", t: "Systemic", b: "See the whole. Map the interactions, incentives, and feedback loops that produce the outcomes you actually get — not the ones you hoped for." },
];

function FrameworkPage() {
  return (
    <>
      <section className="container-prose py-20 md:py-28">
        <p className="eyebrow">The Framework</p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-primary md:text-6xl">
          The Integrated Clinical Executive Framework.
        </h1>
        <span className="rule-gold my-8" />
        <p className="max-w-3xl text-lg text-muted-foreground">
          A model for healthcare leaders who refuse the false choice between clinical depth and executive breadth. Four disciplines, practiced together, that produce better decisions under uncertainty.
        </p>
      </section>
      <section className="border-y border-border bg-secondary/30">
        <div className="container-prose py-16">
          <img src={framework} alt="The Integrated Clinical Executive Framework diagram" width={1400} height={1000} loading="lazy" className="mx-auto w-full max-w-3xl" />
        </div>
      </section>
      <section className="container-prose py-24">
        <div className="grid gap-12 md:grid-cols-2">
          {disciplines.map((d) => (
            <article key={d.n}>
              <p className="eyebrow">Discipline {d.n}</p>
              <h2 className="mt-3 font-serif text-3xl text-primary">{d.t}</h2>
              <span className="rule-gold my-4" />
              <p className="text-muted-foreground">{d.b}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 border-t border-border pt-10">
          <Link to="/contact" className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Bring the framework to your team
          </Link>
        </div>
      </section>
    </>
  );
}