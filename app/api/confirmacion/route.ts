import { Resend } from "resend";
import {
  MAX_RSVP_BODY_BYTES,
  escapeHtml,
  guestCountContent,
  rsvpSchema,
} from "../../../lib/rsvp.ts";

export const runtime = "nodejs";

function json(message: string, status: number) {
  return Response.json({ message }, { status });
}

function formatReceivedAt(date: Date) {
  return new Intl.DateTimeFormat("es-SV", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "America/El_Salvador",
  }).format(date);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_RSVP_BODY_BYTES) {
    return json("Los datos enviados no son válidos.", 400);
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_RSVP_BODY_BYTES) {
      return json("Los datos enviados no son válidos.", 400);
    }
    body = JSON.parse(rawBody);
  } catch {
    return json("Los datos enviados no son válidos.", 400);
  }

  const result = rsvpSchema.safeParse(body);
  if (!result.success) {
    return json("Revisa los datos del formulario e inténtalo nuevamente.", 400);
  }

  const confirmation = result.data;
  if (confirmation.website.trim()) {
    return json("Confirmación recibida correctamente.", 200);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RSVP_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("RSVP email configuration is incomplete.");
    return json("No pudimos enviar tu confirmación. Inténtalo nuevamente.", 503);
  }

  const attendanceLabel =
    confirmation.attendance === "yes" ? "Asistirá" : "No asistirá";
  const receivedAt = formatReceivedAt(new Date());
  const safeName = escapeHtml(confirmation.name);
  const safeMessage = escapeHtml(confirmation.message || "Sin mensaje").replace(
    /\r?\n/g,
    "<br>",
  );
  const guestCount = guestCountContent(confirmation);

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject: `Confirmación de boda: ${confirmation.name} — ${attendanceLabel}`,
      html: `<!doctype html>
<html lang="es">
  <body style="margin:0;background:#f9f2ec;color:#96331a;font-family:Arial,Helvetica,sans-serif">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f9f2ec;padding:32px 16px">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#fff;border:1px solid #ead7ca;border-radius:20px;overflow:hidden">
          <tr><td style="background:#d1663c;padding:28px;color:#fff;text-align:center">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:2px;text-transform:uppercase">Nueva confirmación</p>
            <h1 style="margin:0;font-family:Georgia,serif;font-size:30px;font-weight:400">${attendanceLabel}</h1>
          </td></tr>
          <tr><td style="padding:30px">
            <p style="margin:0 0 18px"><strong>Invitado:</strong> ${safeName}</p>
            <p style="margin:0 0 18px"><strong>Asistencia:</strong> ${attendanceLabel}</p>
            ${guestCount.html}
            <p style="margin:0 0 8px"><strong>Mensaje:</strong></p>
            <p style="margin:0 0 24px;line-height:1.6;color:#5f3025">${safeMessage}</p>
            <p style="margin:0;font-size:12px;color:#7d625b">Recibida el ${escapeHtml(receivedAt)} (America/El_Salvador)</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`,
      text: [
        "Nueva confirmación de boda",
        `Invitado: ${confirmation.name}`,
        `Asistencia: ${attendanceLabel}`,
        guestCount.text,
        `Mensaje: ${confirmation.message || "Sin mensaje"}`,
        `Recibida el ${receivedAt} (America/El_Salvador)`,
      ].join("\n"),
    });

    if (error || !data?.id) {
      console.error("Resend rejected an RSVP email.", {
        code: error?.name ?? "missing_email_id",
      });
      return json("No pudimos enviar tu confirmación. Inténtalo nuevamente.", 503);
    }

    return json("Confirmación enviada correctamente.", 200);
  } catch (error) {
    console.error("Unexpected RSVP email failure.", {
      type: error instanceof Error ? error.name : "unknown",
    });
    return json("No pudimos enviar tu confirmación. Inténtalo nuevamente.", 503);
  }
}
