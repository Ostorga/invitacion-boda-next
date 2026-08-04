import assert from "node:assert/strict";
import test from "node:test";
import { POST } from "../app/api/confirmacion/route.ts";
import { escapeHtml, guestCountContent, rsvpSchema } from "../lib/rsvp.ts";

const validConfirmation = {
  attendance: "yes",
  name: "  María José O'Connor  ",
  guests: "2",
  message: "¡Nos vemos!",
  website: "",
};

const confirmationWithoutGuests = {
  attendance: validConfirmation.attendance,
  name: validConfirmation.name,
  message: validConfirmation.message,
  website: validConfirmation.website,
};

test("acepta asistencia con cantidades enteras entre 1 y 20", () => {
  for (const guests of [1, "2", 20]) {
    const result = rsvpSchema.parse({ ...validConfirmation, guests });
    assert.equal(result.name, "María José O'Connor");
    assert.equal(result.guests, Number(guests));
  }
});

test("exige cantidad cuando sí asistirá", () => {
  assert.equal(rsvpSchema.safeParse(confirmationWithoutGuests).success, false);
});

test("rechaza cantidades inválidas cuando sí asistirá", () => {
  for (const value of [0, -1, 1.5, 21, "muchas", true, null, ""]) {
    assert.equal(
      rsvpSchema.safeParse({ ...validConfirmation, guests: value }).success,
      false,
    );
  }
});

test("normaliza a cero cuando no asistirá con o sin cantidad", () => {
  const withoutCount = rsvpSchema.parse({
    ...confirmationWithoutGuests,
    attendance: "no",
    message: "",
  });
  const manipulatedCount = rsvpSchema.parse({
    ...validConfirmation,
    attendance: "no",
    guests: 19,
  });

  assert.equal(withoutCount.guests, 0);
  assert.equal(manipulatedCount.guests, 0);
});

test("muestra No aplica en el HTML y texto cuando no asistirá", () => {
  const confirmation = rsvpSchema.parse({
    ...validConfirmation,
    attendance: "no",
    guests: 3,
  });
  const content = guestCountContent(confirmation);

  assert.match(content.html, /Número de personas:<\/strong> No aplica/);
  assert.equal(content.text, "Número de personas: No aplica");
  assert.doesNotMatch(content.html, />3<| 3<\/p>/);
});

test("rechaza asistencia y propiedades manipuladas", () => {
  assert.equal(
    rsvpSchema.safeParse({ ...validConfirmation, attendance: "maybe" }).success,
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
    if (previous.apiKey) process.env.RESEND_API_KEY = previous.apiKey;
    if (previous.to) process.env.RSVP_TO_EMAIL = previous.to;
    if (previous.from) process.env.RESEND_FROM_EMAIL = previous.from;
  }
});
