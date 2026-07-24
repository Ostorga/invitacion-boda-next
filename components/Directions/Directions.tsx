const mapUrl = "https://www.google.com/maps?q=13.9627778,-89.3328056";

export default function Directions() {
  return (
    <section className="px-6 py-20 sm:py-24" aria-labelledby="directions-title"><div className="mx-auto max-w-5xl rounded-[2.5rem] bg-wedding-primary px-7 py-12 text-center text-white sm:px-12">
      <p className="eyebrow !text-wedding-secondary">Ubicación</p><h2 id="directions-title" className="section-title !text-white">Cómo llegar</h2><p className="mt-6 font-display text-3xl">La Casa del Campo</p><address className="mt-2 not-italic text-white/75">Las Arenas</address>
      <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-wedding-secondary px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-wedding-primary transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Abrir ubicación</a>
    </div></section>
  );
}
