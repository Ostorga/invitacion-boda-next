import { z } from "zod";

export const MAX_RSVP_BODY_BYTES = 8_192;

const commonFields = {
  name: z
    .string()
    .trim()
    .min(2)
    .max(100)
    .regex(/^[\p{L}\p{M}][\p{L}\p{M}\s.'’\-–]*$/u),
  message: z.string().trim().max(500).optional().default(""),
  website: z.string().max(200).optional().default(""),
};

const attendingSchema = z
  .object({
    ...commonFields,
    attendance: z.literal("yes"),
    guests: z
      .union([z.number(), z.string().regex(/^\d+$/)])
      .transform(Number)
      .pipe(z.number().int().min(1).max(20)),
  })
  .strict();

const notAttendingSchema = z
  .object({
    ...commonFields,
    attendance: z.literal("no"),
    guests: z.unknown().optional().transform(() => 0 as const),
  })
  .strict();

export const rsvpSchema = z.discriminatedUnion("attendance", [
  attendingSchema,
  notAttendingSchema,
]);

export type Rsvp = z.infer<typeof rsvpSchema>;

export function guestCountContent(
  confirmation: Pick<Rsvp, "attendance" | "guests">,
) {
  const value =
    confirmation.attendance === "no" ? "No aplica" : String(confirmation.guests);

  return {
    html: `<p style="margin:0 0 18px"><strong>Número de personas:</strong> ${value}</p>`,
    text: `Número de personas: ${value}`,
  };
}

export function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}
