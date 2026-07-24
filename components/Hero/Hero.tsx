export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-wedding-primary px-6 py-20 text-center text-white">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-wedding-secondary">
          Nos casamos
        </p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
          Nombre &amp; Nombre
        </h1>
        <p className="mt-6 text-lg text-white/80">
          Sábado, 20 de diciembre de 2026
        </p>
        <a
          href="#confirmar"
          className="mt-10 inline-flex rounded-full bg-wedding-secondary px-7 py-3 font-semibold text-wedding-primary transition hover:scale-105"
        >
          Confirmar asistencia
        </a>
      </div>
    </section>
  );
}
