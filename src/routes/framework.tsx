import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "The Integrated Clinical Executive™ Framework — The Clinical Executives";
const DESC =
  "Redefining physician leadership through integration, not separation. Four core integrations — Identity, Domain, Execution, and Adaptive Systems — that move physicians from clinician or administrator to integrated physician executive.";

export const Route = createFileRoute("/framework")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/framework" },
    ],
    links: [{ rel: "canonical", href: "/framework" }],
  }),
  component: FrameworkPage,
});

type Integration = {
  n: string;
  t: string;
  s: string;
  problem: string[];
  shift: string;
  capabilities: string[];
  outcome: string;
};

const integrations: Integration[] = [
  {
    n: "01",
    t: "Identity Integration",
    s: "From Role Conflict → Role Alignment",
    problem: [
      "Physicians are forced into identity fragmentation.",
      "“Am I a doctor or a leader?”",
      "“Do I need to step away from clinical work to lead?”",
    ],
    shift: "Develop a unified identity: Clinician + Executive + Academic.",
    capabilities: [
      "Comfort with dual accountability (patient + system)",
      "Leading while maintaining clinical credibility",
      "Navigating ambiguity without identity loss",
    ],
    outcome: "Leaders who are trusted by clinicians and effective in the boardroom.",
  },
  {
    n: "02",
    t: "Domain Integration",
    s: "From Silos → System Thinking",
    problem: [
      "Healthcare separates clinical care, operations, finance, research, and education.",
    ],
    shift: "Reintegration of the academic medicine model: Care + Education + Research + Operations.",
    capabilities: [
      "Systems thinking across domains",
      "Understanding financial and operational drivers",
      "Aligning incentives across missions",
    ],
    outcome: "Leaders who can connect strategy to bedside impact.",
  },
  {
    n: "03",
    t: "Execution Integration",
    s: "From Strategy → Operational Reality",
    problem: [
      "Many leaders understand strategy but cannot operationalize it across complex systems.",
    ],
    shift: "Bridging vision → execution → measurable outcomes → improving lives and communities.",
    capabilities: [
      "Translating strategy into workflows",
      "Driving alignment across teams",
      "Managing performance, access, and growth",
    ],
    outcome: "Leaders who deliver results, not just ideas.",
  },
  {
    n: "04",
    t: "Adaptive Systems Integration",
    s: "From Internal Solving → Cross-Industry Learning",
    problem: [
      "Healthcare often attempts to solve systemic operational challenges internally despite similar complexity already being addressed successfully in other industries.",
    ],
    shift:
      "Apply proven frameworks from aviation safety systems, the Toyota Production System, hospitality customer experience, technology-enabled scalability, pharmaceutical innovation ecosystems, and high-performance athletic organizations.",
    capabilities: [
      "Reliability science",
      "Lean operational thinking",
      "Organizational alignment",
      "Scalable systems design",
      "Continuous improvement methodology",
      "Human-centered operational leadership",
    ],
    outcome:
      "Leaders who modernize healthcare systems while preserving clinical integrity, workforce sustainability, and patient-centered care.",
  },
];

function FrameworkPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-prose py-24 md:py-32">
        <p className="eyebrow">The Framework</p>
        <h1 className="mt-8 max-w-5xl font-serif text-4xl leading-[1.05] tracking-tight text-primary md:text-7xl">
          The Integrated Clinical Executive Framework.
        </h1>
        <p className="mt-6 max-w-3xl font-serif text-xl italic text-gold md:text-2xl">
          Redefining physician leadership through integration, not separation.
        </p>
        <span className="rule-gold my-10" />
        <p className="max-w-3xl text-lg text-muted-foreground">
          Physicians should not have to choose between delivering clinical care and leading healthcare systems. The future of healthcare depends on leaders who can integrate clinical excellence, strategy, and academic medicine — simultaneously.
        </p>
      </section>

      {/* Overview */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-prose py-20">
          <p className="eyebrow">Framework Overview</p>
          <h2 className="mt-6 max-w-4xl font-serif text-3xl leading-tight text-primary md:text-5xl">
            Four core integrations that move a physician from clinician <em className="not-italic text-muted-foreground">or</em> administrator to integrated physician executive.
          </h2>
          <span className="rule-gold my-8" />
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {integrations.map((i) => (
              <a key={i.n} href={`#integration-${i.n}`} className="group block border-t-2 border-gold pt-4">
                <p className="eyebrow">{i.n}</p>
                <h3 className="mt-2 font-serif text-xl text-primary group-hover:text-gold">{i.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{i.s}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Four integrations in detail */}
      <section className="container-prose py-24">
        <div className="space-y-24">
          {integrations.map((i) => (
            <article id={`integration-${i.n}`} key={i.n} className="grid scroll-mt-24 gap-10 md:grid-cols-12">
              <header className="md:col-span-4">
                <p className="font-serif text-6xl text-gold md:text-7xl">{i.n}</p>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-primary md:text-4xl">{i.t}</h2>
                <p className="mt-2 font-serif text-lg italic text-muted-foreground">{i.s}</p>
                <span className="rule-gold my-6" />
              </header>
              <div className="space-y-8 md:col-span-8">
                <Block label="Problem">
                  <ul className="space-y-2 text-muted-foreground">
                    {i.problem.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </Block>
                <Block label="Shift">
                  <p className="font-serif text-xl text-primary md:text-2xl">{i.shift}</p>
                </Block>
                <Block label="Capabilities">
                  <ul className="grid gap-2 text-muted-foreground sm:grid-cols-2">
                    {i.capabilities.map((c) => (
                      <li key={c} className="flex gap-3">
                        <span aria-hidden className="mt-2 inline-block h-px w-3 flex-none bg-gold" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </Block>
                <Block label="Outcome">
                  <p className="font-serif text-xl leading-snug text-primary md:text-2xl">{i.outcome}</p>
                </Block>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="container-prose py-20 md:py-24">
          <p className="eyebrow" style={{ color: "var(--gold)" }}>The Integrated Clinical Executive Model</p>
          <p className="mt-8 max-w-4xl font-serif text-2xl leading-snug md:text-4xl">
            Integration — not separation — is the future of physician leadership, healthcare transformation, and sustainable care delivery.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/services" className="inline-flex h-11 items-center justify-center rounded-sm bg-gold px-6 text-sm font-medium text-gold-foreground hover:opacity-90">
              Bring the framework to your team
            </Link>
            <Link to="/about" className="inline-flex h-11 items-center justify-center rounded-sm border border-primary-foreground/40 px-6 text-sm font-medium hover:bg-primary-foreground/10">
              About the founder
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-border pl-6">
      <p className="eyebrow">{label}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}