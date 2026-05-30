import { createFileRoute } from "@tanstack/react-router";
import { NewsletterForm } from "@/components/site/NewsletterForm";

const TITLE = "Subscribe — Integrated Clinical Executive";
const DESC = "Monthly essays on cross-disciplinary leadership for healthcare executives.";

export const Route = createFileRoute("/subscribe")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/subscribe" },
    ],
    links: [{ rel: "canonical", href: "/subscribe" }],
  }),
  component: SubscribePage,
});

function SubscribePage() {
  return (
    <section className="container-prose max-w-2xl py-24 md:py-32">
      <p className="eyebrow">Subscribe</p>
      <h1 className="mt-6 font-serif text-4xl leading-tight text-primary md:text-5xl">
        One essay. Once a month. No noise.
      </h1>
      <span className="rule-gold my-8" />
      <p className="text-lg text-muted-foreground">
        Cross-disciplinary leadership ideas for clinical executives, physician leaders, and healthcare administrators — delivered to your inbox.
      </p>
      <div className="mt-10">
        <NewsletterForm source="subscribe-page" />
      </div>
    </section>
  );
}