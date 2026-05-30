import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getInsight } from "@/lib/insights.functions";
import { NewsletterForm } from "@/components/site/NewsletterForm";

const qo = (slug: string) =>
  queryOptions({
    queryKey: ["insight", slug],
    queryFn: () => getInsight({ data: { slug } }),
  });

export const Route = createFileRoute("/insights/$slug")({
  loader: async ({ params, context }) => {
    const res = await context.queryClient.ensureQueryData(qo(params.slug));
    if (!res.insight) throw notFound();
    return res;
  },
  head: ({ loaderData, params }) => {
    const i = loaderData?.insight;
    const title = i ? `${i.title} — ICE` : "Insight";
    const desc = i?.excerpt ?? "An essay from Integrated Clinical Executive.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: i?.title ?? title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/insights/${params.slug}` },
        ...(i?.cover_image_url ? [{ property: "og:image", content: i.cover_image_url }] : []),
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
      scripts: i
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: i.title,
                description: i.excerpt,
                image: i.cover_image_url ?? undefined,
                datePublished: i.published_at,
                author: { "@type": "Person", name: i.author ?? "ICE" },
              }),
            },
          ]
        : [],
    };
  },
  component: InsightPage,
  errorComponent: ({ error }) => <div role="alert" className="container-prose py-20">Couldn't load: {error.message}</div>,
  notFoundComponent: () => (
    <div className="container-prose py-20">
      <h1 className="font-serif text-3xl text-primary">Essay not found</h1>
      <Link to="/insights" className="mt-4 inline-block text-primary hover:text-gold">Back to insights →</Link>
    </div>
  ),
});

function InsightPage() {
  const { slug } = Route.useParams();
  const { data } = useSuspenseQuery(qo(slug));
  const i = data.insight!;
  return (
    <article className="container-prose max-w-3xl py-20 md:py-28">
      <Link to="/insights" className="text-sm text-muted-foreground hover:text-primary">← All insights</Link>
      <p className="eyebrow mt-8">{i.tags?.[0] ?? "Essay"}</p>
      <h1 className="mt-4 font-serif text-4xl leading-tight text-primary md:text-5xl">{i.title}</h1>
      {i.published_at && (
        <p className="mt-4 text-sm text-muted-foreground">
          {new Date(i.published_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          {i.author && ` · ${i.author}`}
        </p>
      )}
      <span className="rule-gold my-8" />
      {i.cover_image_url && (
        <img src={i.cover_image_url} alt="" loading="lazy" className="my-8 w-full" />
      )}
      <div className="prose-lg space-y-6 whitespace-pre-wrap text-foreground/90 leading-relaxed">
        {i.body}
      </div>
      <div className="mt-16 border-t border-border pt-10">
        <p className="eyebrow">Subscribe</p>
        <h2 className="mt-3 font-serif text-2xl text-primary">More essays like this, monthly.</h2>
        <div className="mt-4 max-w-md">
          <NewsletterForm source={`article-${slug}`} />
        </div>
      </div>
    </article>
  );
}