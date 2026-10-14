
"use client";

import { useEffect, useRef, useState } from "react";
import { wedding } from "@/data/wedding";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import TerracottaPhotoSection from "@/components/TerracottaPhotoSection/TerracottaPhotoSection";

const fieldClass =
  "mt-2 w-full rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-wedding-beige/70 focus:border-wedding-beige focus:ring-2 focus:ring-wedding-terracotta/70";

type SubmissionStatus = "initial" | "sending" | "success" | "error";
type Attendance = "" | "yes" | "no";

function sanitizeName(value: string) {
  // Solo letras (incluye acentos/ñ), espacios y algunos signos típicos de nombres.
  return value.replace(/[^\p{L}\p{M}\s.'’\-–]/gu, "");
}

export default function RSVPForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const submissionInProgress = useRef(false);
  const attendanceMenuRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<SubmissionStatus>("initial");
  const [attendance, setAttendance] = useState<Attendance>("");
  const [attendanceMenuOpen, setAttendanceMenuOpen] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    function closeAttendanceMenu(event: MouseEvent) {
      if (!attendanceMenuRef.current?.contains(event.target as Node)) {
        setAttendanceMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", closeAttendanceMenu);
    return () => document.removeEventListener("mousedown", closeAttendanceMenu);
  }, []);

  function handleAttendanceChange(
    event: React.ChangeEvent<HTMLSelectElement>,
  ) {
    setAttendance(event.target.value as Attendance);
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(sanitizeName(event.target.value));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionInProgress.current) return;

    submissionInProgress.current = true;
    setStatus("sending");
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/confirmacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attendance,
          name: formData.get("name"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      if (!response.ok) throw new Error("RSVP request failed");

      formRef.current?.reset();
      setAttendance("");
      setName("");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submissionInProgress.current = false;
    }
  }

  const statusMessage = {
    initial: "Completa el formulario para confirmar tu asistencia.",
    sending: "Enviando confirmación…",
    success: "Gracias por confirmar tu asistencia.",
    error:
      "No pudimos enviar tu confirmación. Conservamos tus datos para que puedas intentarlo nuevamente.",
  }[status];

  return (
      <TerracottaPhotoSection
        id="confirmar"
        backgroundImage="/images/6.JPG.webp"
        backgroundPosition="center 60%"
        className="text-white"
        contentClassName="px-6 pt-20 pb-12 sm:pt-28 sm:pb-16"
      >
      <div className="mx-auto max-w-2xl">
        <RevealOnScroll>
          <header className="text-center">
            <p className="eyebrow !text-wedding-beige">Confirma tu lugar</p>
            <h2 className="section-title !text-white">Asistencia</h2>
            <p className="mt-4 text-white/75">
              Confirma tu asistencia antes del{" "}
              <time dateTime={wedding.rsvp.deadlineIso}>
                {wedding.rsvp.deadlineDisplay}
              </time>
              .
            </p>
          </header>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 space-y-6 rounded-[2rem] border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-10"
            aria-label="Formulario de confirmación de asistencia"
          >
            {status === "success" ? (
              <div className="py-8 text-center">
                <p className="text-2xl font-semibold text-wedding-beige sm:text-3xl">
                  Gracias por confirmar tu asistencia.
                </p>
              </div>
            ) : (
              <>
                <div
                  className="absolute left-[-10000px] h-px w-px overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="website">No completar este campo</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="guestName"
                      className="text-sm font-medium"
                    >
                      Nombre completo
                    </label>

                    <input
                      id="guestName"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      minLength={2}
                      maxLength={100}
                      placeholder="Tu nombre completo"
                      value={name}
                      onChange={handleNameChange}
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="attendance"
                      className="text-sm font-medium"
                    >
                      ¿Asistirás?
                    </label>

                    <div ref={attendanceMenuRef} className="relative mt-2">
                      <select
                        name="attendance"
                        value={attendance}
                        onChange={handleAttendanceChange}
                        required
                        tabIndex={-1}
                        aria-hidden="true"
                        className="sr-only"
                      >
                        <option value="">Selecciona una respuesta</option>
                        <option value="yes">Sí, asistiré</option>
                        <option value="no">No podré asistir</option>
                      </select>

                      <button
                        id="attendance"
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded={attendanceMenuOpen}
                        onClick={() =>
                          setAttendanceMenuOpen((isOpen) => !isOpen)
                        }
                        onKeyDown={(event) => {
                          if (event.key === "Escape") {
                            setAttendanceMenuOpen(false);
                          }

                          if (
                            event.key === "ArrowDown" ||
                            event.key === "ArrowUp"
                          ) {
                            event.preventDefault();
                            setAttendanceMenuOpen(true);
                          }
                        }}
                        className={`${fieldClass} flex cursor-pointer items-center justify-between text-left`}
                      >
                        <span>
                          {attendance === "yes"
                            ? "Sí, asistiré"
                            : attendance === "no"
                              ? "No podré asistir"
                              : "Selecciona una respuesta"}
                        </span>
                        <span
                          aria-hidden="true"
                          className="ml-3 text-lg leading-none"
                        >
                          ⌄
                        </span>
                      </button>

                      {attendanceMenuOpen && (
                        <div
                          role="listbox"
                          aria-labelledby="attendance"
                          className="absolute z-10 mt-1 w-full overflow-hidden rounded-xl border border-wedding-beige/60 bg-wedding-beige/95 py-1 text-wedding-brown shadow-xl backdrop-blur-sm"
                        >
                          {[
                            ["yes", "Sí, asistiré"],
                            ["no", "No podré asistir"],
                          ].map(([value, label]) => (
                            <button
                              key={value}
                              type="button"
                              role="option"
                              aria-selected={attendance === value}
                              onClick={() => {
                                handleAttendanceChange({
                                  target: { value },
                                } as React.ChangeEvent<HTMLSelectElement>);
                                setAttendanceMenuOpen(false);
                              }}
                              className="block w-full px-4 py-3 text-left transition-colors hover:bg-wedding-terracotta hover:text-wedding-beige focus:bg-wedding-terracotta focus:text-wedding-beige focus:outline-none"
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium"
                    >
                      Mensaje para los novios
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={500}
                      placeholder={`Escribe unas palabras para ${wedding.couple.displayName}`}
                      className={`${fieldClass} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-full bg-wedding-terracotta px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-wedding-beige hover:text-wedding-brown focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wedding-beige disabled:opacity-60"
                    aria-describedby="form-status"
                  >
                    {status === "sending"
                      ? "Enviando confirmación…"
                      : "Confirmar asistencia"}
                  </button>

                  <p
                    id="form-status"
                    className="text-center text-xs text-white/55"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {statusMessage}
                  </p>
                </div>
              </>
            )}
          </form>
        </RevealOnScroll>
      </div>
    </TerracottaPhotoSection>
  );
}
