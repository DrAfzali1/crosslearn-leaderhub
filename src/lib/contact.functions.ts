import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().toLowerCase().email().max(255),
  organization: z.string().trim().max(160).optional(),
  subject: z.string().trim().max(160).optional(),
  message: z.string().trim().min(10).max(4000),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      organization: data.organization ?? null,
      subject: data.subject ?? null,
      message: data.message,
    });
    if (error) {
      console.error("contact error", error);
      throw new Error("Could not send your message. Please try again.");
    }
    return { ok: true };
  });