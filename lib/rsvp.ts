import { z } from "zod";

export const MAX_RSVP_BODY_BYTES = 8_192;

export const RSVP_CODES: Record<string, number> = {
  "73942": 1,
  "28615": 2,
  "59374": 3,
  "16820": 4,
  "84297": 5,
  "37561": 6,
  "92148": 7,
  "64730": 8,
  "15963": 9,
  "48276": 10,
};

export function getGuestsForCode(code: string): number | null {
  return RSVP_CODES[code] ?? null;
}

export const codeSchema = z
  .string()
  .trim()
  .regex(/^\d{5}$/, "Código inválido")
  .refine((value) => getGuestsForCode(value) !== null, "Código inválido");

const commonFields = {
  name: z
    .string()
    .trim()
    .min(2)
    .max(100)
    .regex(/^[\p{L}\p{M}][\p{L}\p{M}\s.'’\-–]*$/u),
  message: z.string().trim().max(500).optional().default(""),
  website: z.string().max(200).optional().default(""),
  code: codeSchema,
};

export const rsvpSchema = z
  .object({
    ...commonFields,
    attendance: z.enum(["yes", "no"]),
  })
  .strict();

export type Rsvp = z.infer<typeof rsvpSchema>;

export function guestCountContent(attendance: "yes" | "no", guests: number) {
  const value = attendance === "no" ? "No aplica" : String(guests);

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