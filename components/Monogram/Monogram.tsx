export default function Monogram() {
  return (
    <section className="overflow-hidden px-6 py-20 text-center" aria-label="Oscar y Damaris">
      <div className="monogram-orbit mx-auto grid h-64 w-64 place-items-center rounded-full border border-wedding-secondary/70 sm:h-72 sm:w-72">
        <div className="grid h-52 w-52 place-items-center rounded-full border border-wedding-primary/15"><p className="font-display text-7xl text-wedding-primary" aria-label="O y D">O <span className="text-4xl italic text-[#b58a45]">&amp;</span> D</p></div>
      </div>
      <p className="mt-8 text-xs uppercase tracking-[0.35em] text-wedding-muted">Dos caminos · una historia</p>
    </section>
  );
}
