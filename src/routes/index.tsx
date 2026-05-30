import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import atriumImg from "@/assets/exec-atrium.jpg";
import logoFull from "@/assets/logo-full.png";

const TITLE = "The Clinical Executives — Strategy & Leadership";
const DESC =
  "A physician-led leadership platform advancing the integrated physician executive — uniting clinical excellence, executive strategy, academic medicine, and cross-industry operational learning.";

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

const integrations = [
  { n: "01", t: "Identity Integration", s: "Role Conflict → Role Alignment", b: "A unified identity — clinician, executive, and academic — trusted by clinicians and effective in the boardroom." },
  { n: "02", t: "Domain Integration", s: "Silos → System Thinking", b: "Reintegrating care, education, research, and operations so leaders can connect strategy to bedside impact." },
  { n: "03", t: "Execution Integration", s: "Strategy → Operational Reality", b: "Translating vision into workflows, alignment, and measurable outcomes that improve lives and communities." },
  { n: "04", t: "Adaptive Systems Integration", s: "Healthcare ↔ Cross-Industry Learning", b: "Applying proven frameworks from aviation, Toyota, hospitality, technology, pharma, and athletics to healthcare." },
];

const drivers = [
  "Financial pressures and value-based care models",
  "Workforce challenges and physician burnout",
  "Increasing complexity of clinical operations and care delivery",
  "Rapid integration of digital health and innovation",
];

function Home() {
  return (
    <>
      {/* Hero — premise */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <p className="eyebrow">The Clinical Executives™ · Strategy &amp; Leadership</p>
            <h1 className="mt-8 font-serif text-4xl leading-[1.05] tracking-tight text-primary md:text-6xl">
              Physicians should not have to choose between providing healthcare and leading healthcare.
            </h1>
            <span className="rule-gold my-10" />
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              A physician-led leadership platform advancing a new paradigm — <em className="text-foreground/90 not-italic">integration over separation</em> — where physicians are equipped to lead systems while remaining deeply connected to clinical practice, education, research, and discovery.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link to="/framework" className="inline-flex h-11 items-center gap-2 rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Explore the Framework <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="inline-flex h-11 items-center justify-center rounded-sm border border-primary px-6 text-sm font-medium text-primary hover:bg-primary/5">
                About the platform
              </Link>
            </div>
          </div>
          <figure className="md:col-span-5 flex items-center justify-center">
            <img
              src={logoFull}
              alt="The Clinical Executives — Strategy & Leadership"
              width={1240}
              height={1240}
              className="h-auto w-full max-w-md object-contain"
            />
          </figure>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-prose grid gap-16 py-20 md:grid-cols-2">
          <div>
            <p className="eyebrow">Vision</p>
            <span className="rule-gold my-5" />
            <p className="font-serif text-2xl leading-snug text-primary md:text-3xl">
              To become the leading national platform redefining physician leadership by integrating clinical excellence, executive strategy, academic medicine, operational innovation, and cross-industry systems learning to advance sustainable, high-performing healthcare organizations.
            </p>
          </div>
          <div>
            <p className="eyebrow">Mission</p>
            <span className="rule-gold my-5" />
            <p className="font-serif text-2xl leading-snug text-primary md:text-3xl">
              To equip physicians and healthcare organizations with the strategic, operational, and leadership capabilities required to lead complex healthcare systems — ultimately improving care delivery, workforce sustainability, and patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Framework teaser — typography-led */}
      <section className="container-prose py-24 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">The Integrated Clinical Executive™ Framework</p>
          <h2 className="mt-6 font-serif text-3xl leading-tight text-primary md:text-5xl">
            Four integrations that move a physician from clinician <em className="not-italic text-muted-foreground">or</em> administrator to integrated physician executive.
          </h2>
          <span className="rule-gold my-8" />
        </div>
        <ol className="mt-12 divide-y divide-border border-y border-border">
          {integrations.map((i) => (
            <li key={i.n} className="grid gap-6 py-8 md:grid-cols-12 md:items-baseline">
              <p className="eyebrow md:col-span-2">{i.n}</p>
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-primary md:text-3xl">{i.t}</h3>
                <p className="mt-2 text-sm italic text-gold">{i.s}</p>
              </div>
              <p className="text-muted-foreground md:col-span-6">{i.b}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Link to="/framework" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold">
            Read the full framework <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Strategic rationale */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container-prose grid gap-16 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Strategic Rationale</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-primary md:text-4xl">
              Healthcare systems are undergoing unprecedented transformation.
            </h2>
            <span className="rule-gold my-6" />
            <p className="text-muted-foreground">
              Healthcare continues to lag many industries in operational design, reliability science, and performance optimization. The imperative is not simply to digitize, but to thoughtfully adapt proven operational principles — while preserving clinical integrity and patient-centered care.
            </p>
            <figure className="mt-10 overflow-hidden rounded-sm border border-border/60">
              <img
                src={atriumImg}
                alt="Sunlit modern hospital atrium with clean architectural lines"
                width={1600}
                height={1100}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
          <ul className="md:col-span-7 md:pl-8">
            {drivers.map((d, idx) => (
              <li key={d} className="grid grid-cols-[3rem_1fr] gap-6 border-b border-border py-5 last:border-b-0">
                <span className="eyebrow pt-1">{String(idx + 1).padStart(2, "0")}</span>
                <p className="font-serif text-lg text-primary md:text-xl">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing positioning + CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-24 md:py-28">
          <p className="eyebrow" style={{ color: "var(--gold)" }}>A call to redefine the role of the physician in modern healthcare</p>
          <p className="mt-8 max-w-4xl font-serif text-2xl leading-snug md:text-4xl">
            The Clinical Executives cultivates physician leaders capable not only of navigating healthcare systems, but of redesigning and advancing them — with both strategic rigor and clinical integrity.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <div className="max-w-md">
              <p className="text-sm text-primary-foreground/70">Subscribe for monthly insights on integrated physician leadership.</p>
              <div className="mt-4">
                <NewsletterForm source="home-closing" />
              </div>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/services" className="inline-flex h-11 items-center justify-center rounded-sm bg-gold px-6 text-sm font-medium text-gold-foreground hover:opacity-90">
                Speaking &amp; advisory
              </Link>
              <Link to="/contact" className="inline-flex h-11 items-center justify-center rounded-sm border border-primary-foreground/40 px-6 text-sm font-medium hover:bg-primary-foreground/10">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
