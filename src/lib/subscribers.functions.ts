import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const SubscribeSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(255),
  name: z.string().trim().max(120).optional(),
  source: z.string().trim().max(60).optional(),
});

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => SubscribeSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("subscribers")
      .upsert(
        {
          email: data.email,
          name: data.name ?? null,
          source: data.source ?? "site",
          status: "active",
        },
        { onConflict: "email" },
      );
    if (error) {
      console.error("subscribe error", error);
      throw new Error("Could not subscribe right now. Please try again.");
    }
    return { ok: true };
  });