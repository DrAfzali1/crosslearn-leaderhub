import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { listInsights } from "@/lib/insights.functions";

const TITLE = "Insights — Integrated Clinical Executive";
const DESC = "Essays and case studies on cross-disciplinary leadership for healthcare.";

const insightsQO = queryOptions({
  queryKey: ["insights", "list"],
  queryFn: () => listInsights(),
});

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(insightsQO),
  component: InsightsPage,
  errorComponent: ({ error }) => <div role="alert" className="container-prose py-20">Couldn't load insights: {error.message}</div>,
  notFoundComponent: () => <div className="container-prose py-20">Not found.</div>,
});

function InsightsPage() {
  const { data } = useSuspenseQuery(insightsQO);
  return (
    <section className="container-prose py-20 md:py-28">
      <p className="eyebrow">Insights</p>
      <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-primary md:text-6xl">
        Essays for the modern clinical executive.
      </h1>
      <span className="rule-gold my-8" />
      {data.insights.length === 0 ? (
        <p className="text-muted-foreground">New essays publishing soon. Subscribe to be notified.</p>
      ) : (
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {data.insights.map((i) => (
            <Link key={i.id} to="/insights/$slug" params={{ slug: i.slug }} className="group block bg-background p-8 transition-colors hover:bg-secondary/40">
              {i.cover_image_url && (
                <img src={i.cover_image_url} alt="" loading="lazy" className="mb-6 aspect-[3/2] w-full object-cover" />
              )}
              <p className="eyebrow">{i.tags?.[0] ?? "Essay"}</p>
              <h2 className="mt-3 font-serif text-2xl leading-tight text-primary group-hover:text-gold">{i.title}</h2>
              {i.excerpt && <p className="mt-3 text-sm text-muted-foreground">{i.excerpt}</p>}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}