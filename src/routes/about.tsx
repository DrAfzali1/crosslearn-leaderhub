import { createFileRoute, Link } from "@tanstack/react-router";
import deskImg from "@/assets/exec-desk.jpg";

const TITLE = "About — The Clinical Executives";
const DESC =
  "The Clinical Executives is a physician-led platform founded by Anita Afzali, MD, MPH, MHCM — challenging the false divide between clinician and executive and reclaiming the integrated foundation of academic medicine.";

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

const solutions = [
  { t: "Integration, Not Separation", b: "Physicians as both doctors and system leaders — leadership grounded in clinical credibility and real-time experience." },
  { t: "Reclaiming Academic Medicine", b: "Re-centering the tripartite mission of patient care, education, and research — and positioning leadership as the bridge that reconnects these domains." },
  { t: "Executive Capability Building", b: "Translating strategy into practical, actionable insight, and providing access to decision-making frameworks used at the highest levels." },
  { t: "Cross-Industry Leadership & Operational Learning", b: "Applying proven operational and leadership frameworks from aviation, manufacturing, hospitality, athletics, technology, and pharmaceuticals to healthcare transformation." },
];

const differentiators = [
  { t: "Integration-Centered Leadership Model", b: "Not leadership as a departure from medicine, but as an extension of it." },
  { t: "Reclaiming the Academic Mission", b: "Re-establishing the connection between clinical care, education, research, and system leadership." },
  { t: "Active Executive Leadership", b: "Content informed by real-time leadership, grounded in active health system operations." },
  { t: "Cross-Industry Operational Learning", b: "Healthcare can no longer evolve in isolation. The world's most advanced systems in safety, reliability, logistics, and customer experience were developed outside healthcare." },
  { t: "System-Level Perspective", b: "Focus on enterprise strategy, governance, and transformation — not isolated leadership tactics." },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-prose py-24 md:py-32">
        <p className="eyebrow">About The Clinical Executives</p>
        <h1 className="mt-8 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-primary md:text-6xl">
          More than a leadership platform — a call to redefine the role of the physician in modern healthcare.
        </h1>
        <span className="rule-gold my-10" />
        <p className="max-w-3xl text-lg text-muted-foreground">
          The Clinical Executives™ is a physician-led thought leadership platform designed to advance the role of physicians as executive leaders in healthcare systems — positioned at the intersection of clinical excellence, operational strategy, and organizational leadership.
        </p>
      </section>

      {/* Founder */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-prose grid items-stretch gap-12 py-20 md:grid-cols-12">
          <div className="flex flex-col md:col-span-4">
            <p className="eyebrow">Founder</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-primary md:text-4xl">
              Anita Afzali, MD, MPH, MHCM
            </h2>
            <span className="rule-gold my-6" />
            <figure className="mt-8 flex-1 overflow-hidden rounded-sm border border-border/60 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
              <img
                src={deskImg}
                alt="Executive hands resting on a leather portfolio with a fountain pen"
                width={1400}
                height={1600}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
          <div className="space-y-5 text-muted-foreground md:col-span-8">
            <p className="text-lg">
              A physician executive, operational strategist, academic leader, entrepreneur, and global healthcare leader, Dr. Afzali delivers high-level insights grounded in real-time leadership across complex health systems, clinical operations, enterprise strategy, academic medicine, and healthcare transformation.
            </p>
            <p>
              Informed by active experience leading within a major academic medical center, the platform bridges clinical credibility with operational excellence — integrating lessons from healthcare, aviation, the Toyota production system, athletics, hospitality, technology, and the pharmaceutical industry to advance sustainable, high-performing care delivery models.
            </p>
            <div className="pt-6">
              <p className="eyebrow">Reframing the Problem</p>
              <h2 className="mt-4 font-serif text-2xl leading-tight text-primary md:text-3xl">
                We have lost the integrated physician.
              </h2>
              <span className="rule-gold my-5" />
              <p className="text-lg">
                The traditional model of academic medicine — where physicians simultaneously advanced patient care, education, research, and discovery — has eroded under modern pressures of productivity, silos, and administrative complexity.
              </p>
              <p className="mt-4">
                This is not simply a leadership gap. It is a <em className="text-foreground/90 not-italic">structural and philosophical gap</em>. Healthcare has created a generation of leaders who are either clinically excellent but not empowered to lead systems, or administratively positioned but distanced from clinical realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution — 4 pillars */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-prose py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">The Clinical Executives Solution</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-primary md:text-5xl">
              A new leadership model — built on integration.
            </h2>
            <span className="rule-gold my-8" />
          </div>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-2">
            {solutions.map((s, i) => (
              <article key={s.t} className="bg-background p-8 md:p-10">
                <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-serif text-2xl text-primary">{s.t}</h3>
                <p className="mt-3 text-muted-foreground">{s.b}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm italic text-muted-foreground">
            The objective is not to corporatize medicine, but to strengthen healthcare delivery through disciplined operational thinking while preserving clinical integrity, physician leadership, and patient-centered care.
          </p>
        </div>
      </section>

      {/* Differentiation */}
      <section className="container-prose py-24">
        <p className="eyebrow">Differentiation</p>
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-primary md:text-5xl">
          What makes this platform uniquely positioned.
        </h2>
        <span className="rule-gold my-8" />
        <ol className="mt-10 divide-y divide-border border-y border-border">
          {differentiators.map((d, i) => (
            <li key={d.t} className="grid gap-6 py-7 md:grid-cols-12 md:items-baseline">
              <p className="eyebrow md:col-span-2">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-serif text-xl text-primary md:col-span-4 md:text-2xl">{d.t}</h3>
              <p className="text-muted-foreground md:col-span-6">{d.b}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Philosophy pull-quote */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-24 md:py-28">
          <p className="eyebrow" style={{ color: "var(--gold)" }}>Platform Philosophy</p>
          <p className="mt-8 max-w-4xl font-serif text-3xl leading-snug md:text-5xl">
            Physicians should not have to choose between being doctors and being leaders. The future of healthcare depends on those who can do both — and integrate them well.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/framework" className="inline-flex h-11 items-center justify-center rounded-sm bg-gold px-6 text-sm font-medium text-gold-foreground hover:opacity-90">
              The Framework
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