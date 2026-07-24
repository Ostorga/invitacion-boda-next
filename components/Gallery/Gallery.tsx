const photoSlots = [1, 2, 3, 4];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-wedding-surface px-6 py-20 sm:py-28"><div className="mx-auto max-w-6xl">
      <header className="text-center"><p className="eyebrow">Momentos nuestros</p><h2 className="section-title">Galería</h2><p className="mx-auto mt-4 max-w-xl text-wedding-muted">Muy pronto compartiremos aquí algunos de nuestros recuerdos favoritos.</p></header>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{photoSlots.map((slot) => <div key={slot} className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-wedding-secondary/70 bg-[linear-gradient(145deg,#f2e9e2,#fffaf6)]"><div className="absolute inset-4 grid place-items-center rounded-[1.3rem] border border-dashed border-wedding-primary/20 text-center"><div><span className="font-display text-4xl text-wedding-primary/35">{String(slot).padStart(2, "0")}</span><p className="mt-2 text-xs uppercase tracking-[0.2em] text-wedding-muted/70">Fotografía pendiente</p></div></div></div>)}</div>
    </div></section>
  );
}
