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

export const rsvpSchema = z
  .object({
    ...commonFields,
    attendance: z.enum(["yes", "no"]),
  })
  .strict();

export type Rsvp = z.infer<typeof rsvpSchema>;

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