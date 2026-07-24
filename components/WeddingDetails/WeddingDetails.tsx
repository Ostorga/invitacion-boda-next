const events = [
  { title: "Ceremonia", place: "La Casa del Campo", date: "19 de diciembre de 2026", time: "17:00 hrs", address: "Las Arenas" },
  { title: "Banquete & Celebración", place: "La Casa del Campo", date: "19 de diciembre de 2026", time: "20:00 hrs", address: "Las Arenas" },
];

export default function WeddingDetails() {
  return (
    <section id="evento" className="bg-wedding-surface px-6 py-20 sm:py-28"><div className="mx-auto max-w-5xl">
      <header className="text-center"><p className="eyebrow">Los esperamos</p><h2 className="section-title">El gran día</h2><p className="mt-4 text-wedding-muted">Dos momentos únicos para celebrar juntos.</p></header>
      <div className="mt-12 grid gap-6 md:grid-cols-2">{events.map((event) => (
        <article key={event.title} className="rounded-[2rem] border border-wedding-secondary bg-white p-8 text-center shadow-[0_18px_60px_rgba(117,22,45,0.08)] sm:p-10">
          <span className="mx-auto block h-10 w-px bg-wedding-secondary" aria-hidden="true" /><h3 className="font-display mt-5 text-4xl text-wedding-primary">{event.title}</h3>
          <dl className="mt-7 divide-y divide-wedding-secondary/40 text-sm">{[["Lugar", event.place], ["Fecha", event.date], ["Hora", event.time], ["Dirección", event.address]].map(([label, value]) => <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-4 py-3 text-left"><dt className="font-semibold uppercase tracking-wider text-wedding-primary">{label}</dt><dd className="text-wedding-muted">{value}</dd></div>)}</dl>
          <p className="mt-7 rounded-full bg-background px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-wedding-primary">Etiqueta formal</p>
        </article>
      ))}</div>
    </div></section>
  );
}
