import { z } from "zod";
import { codeSchema, getGuestsForCode } from "../../../lib/rsvp.ts";

export const runtime = "nodejs";

const verifySchema = z.object({ code: codeSchema }).strict();

function json(
  message: string,
  status: number,
  extra?: Record<string, unknown>,
) {
  return Response.json({ message, ...extra }, { status });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 200) {
    return json("Código inválido.", 400);
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > 200) {
      return json("Código inválido.", 400);
    }
    body = JSON.parse(rawBody);
  } catch {
    return json("Código inválido.", 400);
  }

  const result = verifySchema.safeParse(body);
  if (!result.success) {
    return json("Código inválido.", 400);
  }

  const guests = getGuestsForCode(result.data.code);
  if (guests === null) {
    return json("Código inválido.", 400);
  }

  return json("Código verificado.", 200, { guests });
}
