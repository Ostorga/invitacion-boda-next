export default function Countdown() {
  return (
    <section className="px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-wedding-primary">
        Falta muy poco
      </p>
      <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
        Contador regresivo
      </h2>
      <p className="mx-auto mt-5 max-w-xl leading-7 text-wedding-muted">
        Aquí migraremos el contador de la invitación original utilizando estado
        y efectos de React.
      </p>
    </section>
  );
}
