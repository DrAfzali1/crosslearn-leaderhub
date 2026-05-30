import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContactMessage } from "@/lib/contact.functions";
import { toast } from "sonner";

const TITLE = "Contact — The Clinical Executives";
const DESC = "Get in touch about executive advisory, keynote speaking, leadership cohorts, or strategic engagements with The Clinical Executives.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const send = useServerFn(submitContactMessage);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setPending(true);
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          organization: String(fd.get("organization") ?? "") || undefined,
          subject: String(fd.get("subject") ?? "") || undefined,
          message: String(fd.get("message") ?? ""),
        },
      });
      toast.success("Message sent. We'll be in touch.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not send");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="container-prose max-w-3xl py-24 md:py-32">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-8 font-serif text-4xl leading-tight text-primary md:text-6xl">
        Let's talk.
      </h1>
      <span className="rule-gold my-10" />
      <p className="max-w-2xl text-lg text-muted-foreground">
        Whether you're exploring an executive advisory engagement, planning a keynote, or considering a leadership cohort — share what your organization is working on.
      </p>
      <form onSubmit={onSubmit} className="mt-12 grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field name="name" label="Name" required />
          <Field name="email" label="Email" type="email" required />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field name="organization" label="Organization" />
          <Field name="subject" label="Subject" />
        </div>
        <label className="text-sm">
          <span className="mb-2 block font-medium text-foreground">Message</span>
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={4000}
            rows={6}
            className="w-full rounded-sm border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </label>
        <div>
          <button
            type="submit"
            disabled={pending}
            className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
          >
            {pending ? "Sending…" : "Send message"}
          </button>
        </div>
      </form>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="text-sm">
      <span className="mb-2 block font-medium text-foreground">
        {label}{required && <span className="text-gold"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="h-10 w-full rounded-sm border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}