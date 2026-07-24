const units = ["Días", "Horas", "Minutos", "Segundos"];

export default function Countdown() {
  return (
    <section className="bg-wedding-primary px-5 py-20 text-center text-white sm:py-24" aria-labelledby="countdown-title">
      <p className="eyebrow !text-wedding-secondary">El gran día se acerca</p><h2 id="countdown-title" className="section-title !text-white">Faltan...</h2>
      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5" role="timer" aria-label="Cuenta regresiva pendiente de activación">
        {units.map((unit) => <div key={unit} className="rounded-2xl border border-wedding-secondary/40 bg-white/5 px-3 py-7 backdrop-blur-sm"><span className="font-display block text-5xl tabular-nums text-wedding-secondary sm:text-6xl">00</span><span className="mt-2 block text-xs uppercase tracking-[0.2em] text-white/70">{unit}</span></div>)}
      </div>
      <p className="mt-9 font-serif text-xl italic text-white/80">«Pronto seremos uno»</p>
    </section>
  );
}
