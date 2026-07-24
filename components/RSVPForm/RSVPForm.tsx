import { wedding } from "@/data/wedding";

const fieldClass =
  "mt-2 w-full rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-wedding-beige/70 focus:border-wedding-beige focus:ring-2 focus:ring-wedding-terracotta/70";

export default function RSVPForm() {
  return (
    <section
      id="confirmar"
      className="bg-wedding-brown px-6 py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-2xl">
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
        <form
          className="mt-10 space-y-6 rounded-[2rem] border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-10"
          aria-label="Formulario de confirmación de asistencia"
          data-future-endpoint={wedding.rsvp.futureEndpoint}
        >
          <div>
            <label htmlFor="attendance" className="text-sm font-medium">
              ¿Asistirás?
            </label>
            <select
              id="attendance"
              name="attendance"
              defaultValue=""
              required
              className={fieldClass}
            >
              <option value="" disabled className="text-foreground">
                Selecciona una respuesta
              </option>
              <option value="yes" className="text-foreground">
                Sí, asistiré
              </option>
              <option value="no" className="text-foreground">
                No podré asistir
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="guestName" className="text-sm font-medium">
              Nombre completo
            </label>
            <input
              id="guestName"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Tu nombre completo"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="guestCount" className="text-sm font-medium">
              Número de personas
            </label>
            <input
              id="guestCount"
              name="guests"
              type="number"
              min={1}
              required
              inputMode="numeric"
              placeholder="1"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">
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
            type="button"
            className="w-full rounded-full bg-wedding-terracotta px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-wedding-beige hover:text-wedding-brown focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wedding-beige"
            aria-describedby="form-status"
          >
            Confirmar asistencia
          </button>
          <p id="form-status" className="text-center text-xs text-white/55">
            El envío se habilitará en la fase del servidor.
          </p>
        </form>
      </div>
    </section>
  );
}
