const fieldClass = "mt-2 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45 focus:border-wedding-secondary focus:ring-2 focus:ring-wedding-secondary/35";

export default function RSVPForm() {
  return (
    <section id="confirmar" className="bg-wedding-primary px-6 py-20 text-white sm:py-28"><div className="mx-auto max-w-2xl">
      <header className="text-center"><p className="eyebrow !text-wedding-secondary">Confirma tu lugar</p><h2 className="section-title !text-white">Asistencia</h2><p className="mt-4 text-white/70">Nos encantará saber si podremos celebrar contigo.</p></header>
      <form className="mt-10 space-y-6 rounded-[2rem] border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-10" aria-label="Formulario de confirmación de asistencia">
        <div><label htmlFor="attendance" className="text-sm font-medium">¿Asistirás?</label><select id="attendance" name="attendance" defaultValue="" className={fieldClass}><option value="" disabled className="text-foreground">Selecciona una respuesta</option><option value="yes" className="text-foreground">Sí, asistiré</option><option value="no" className="text-foreground">No podré asistir</option></select></div>
        <div><label htmlFor="guestName" className="text-sm font-medium">Nombre de la persona</label><input id="guestName" name="guestName" type="text" autoComplete="name" placeholder="Tu nombre completo" className={fieldClass} /></div>
        <div><label htmlFor="guestCount" className="text-sm font-medium">Cantidad de asistentes</label><input id="guestCount" name="guestCount" type="number" min={1} max={10} inputMode="numeric" placeholder="1" className={fieldClass} /></div>
        <div><label htmlFor="message" className="text-sm font-medium">Mensaje para los novios</label><textarea id="message" name="message" rows={4} maxLength={500} placeholder="Escribe unas palabras para Oscar y Damaris" className={`${fieldClass} resize-y`} /></div>
        <button type="button" className="w-full rounded-full bg-wedding-secondary px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-wedding-primary transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Confirmar asistencia</button><p className="text-center text-xs text-white/55">El envío se habilitará en la siguiente fase.</p>
      </form>
    </div></section>
  );
}
