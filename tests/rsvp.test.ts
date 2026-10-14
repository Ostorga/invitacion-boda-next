import assert from "node:assert/strict";
import test from "node:test";
import { POST } from "../app/api/confirmacion/route.ts";
import { escapeHtml, rsvpSchema } from "../lib/rsvp.ts";

const validConfirmation = {
  attendance: "yes",
  name: "  María José O'Connor  ",
  message: "¡Nos vemos!",
  website: "",
};

test("acepta confirmaciones sin código y normaliza el nombre", () => {
  const result = rsvpSchema.parse(validConfirmation);

  assert.equal(result.name, "María José O'Connor");
  assert.equal(result.attendance, "yes");
  assert.equal(result.message, "¡Nos vemos!");
});

test("el mensaje es opcional y se normaliza a texto vacío", () => {
  const result = rsvpSchema.parse({
    attendance: "no",
    name: "Ana María",
  });

  assert.equal(result.message, "");
});

test("rechaza asistencia, nombre y propiedades no permitidas", () => {
  assert.equal(
    rsvpSchema.safeParse({ ...validConfirmation, attendance: "maybe" }).success,
    false,
  );
  assert.equal(
    rsvpSchema.safeParse({ ...validConfirmation, name: "A" }).success,
    false,
  );
  assert.equal(
    rsvpSchema.safeParse({ ...validConfirmation, code: "73942" }).success,
    false,
  );
  assert.equal(
    rsvpSchema.safeParse({ ...validConfirmation, admin: true }).success,
    false,
  );
});

test("escapa contenido antes de insertarlo en HTML", () => {
  assert.equal(
    escapeHtml(`<img src=x onerror="alert('x')">`),
    "&lt;img src=x onerror=&quot;alert(&#39;x&#39;)&quot;&gt;",
  );
});

test("el honeypot responde sin intentar configurar Resend", async () => {
  const response = await POST(
    new Request("http://localhost/api/confirmacion", {
      method: "POST",
      body: JSON.stringify({ ...validConfirmation, website: "spam" }),
    }),
  );
  assert.equal(response.status, 200);
});

test("rechaza JSON inválido y cuerpos demasiado grandes", async () => {
  const invalidJson = await POST(
    new Request("http://localhost/api/confirmacion", {
      method: "POST",
      body: "{",
    }),
  );
  assert.equal(invalidJson.status, 400);

  const oversized = await POST(
    new Request("http://localhost/api/confirmacion", {
      method: "POST",
      headers: { "content-length": "9000" },
      body: "{}",
    }),
  );
  assert.equal(oversized.status, 400);
});

test("devuelve 503 si falta cualquier variable del servidor", async () => {
  const previous = {
    apiKey: process.env.RESEND_API_KEY,
    to: process.env.RSVP_TO_EMAIL,
    from: process.env.RESEND_FROM_EMAIL,
  };
  const originalError = console.error;
  console.error = () => undefined;

  try {
    for (const missing of [
      "RESEND_API_KEY",
      "RSVP_TO_EMAIL",
      "RESEND_FROM_EMAIL",
    ]) {
      process.env.RESEND_API_KEY = "test_key";
      process.env.RSVP_TO_EMAIL = "destination@example.com";
      process.env.RESEND_FROM_EMAIL = "Sender <sender@example.com>";
      delete process.env[missing];

      const response = await POST(
        new Request("http://localhost/api/confirmacion", {
          method: "POST",
          body: JSON.stringify(validConfirmation),
        }),
      );
      assert.equal(response.status, 503);
    }
  } finally {
    console.error = originalError;
    if (previous.apiKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = previous.apiKey;
    if (previous.to === undefined) delete process.env.RSVP_TO_EMAIL;
    else process.env.RSVP_TO_EMAIL = previous.to;
    if (previous.from === undefined) delete process.env.RESEND_FROM_EMAIL;
    else process.env.RESEND_FROM_EMAIL = previous.from;
  }
});
