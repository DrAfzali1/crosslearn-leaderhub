import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export type InsightSummary = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image_url: string | null;
  author: string | null;
  tags: string[];
  published_at: string | null;
};

export type Insight = InsightSummary & { body: string };

export const listInsights = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("insights")
    .select("id, slug, title, excerpt, cover_image_url, author, tags, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(50);
  if (error) {
    console.error("listInsights", error);
    return { insights: [] as InsightSummary[] };
  }
  return { insights: (data ?? []) as InsightSummary[] };
});

export const getInsight = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => z.object({ slug: z.string().min(1).max(160) }).parse(data))
  .handler(async ({ data }) => {
    const { data: row, error } = await supabaseAdmin
      .from("insights")
      .select("id, slug, title, excerpt, body, cover_image_url, author, tags, published_at")
      .eq("status", "published")
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) {
      console.error("getInsight", error);
      return { insight: null as Insight | null };
    }
    return { insight: (row as Insight | null) ?? null };
  });