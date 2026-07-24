const details = [
  { title: "Ceremonia", description: "Hora y ubicación de la ceremonia" },
  { title: "Recepción", description: "Hora y ubicación de la recepción" },
  { title: "Vestimenta", description: "Código de vestimenta de la celebración" },
];

export default function WeddingDetails() {
  return (
    <section className="bg-wedding-surface px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">
          Detalles de la boda
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {details.map((detail) => (
            <article
              key={detail.title}
              className="rounded-3xl border border-wedding-secondary bg-white p-8 text-center shadow-sm"
            >
              <h3 className="text-xl font-semibold text-wedding-primary">
                {detail.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-wedding-muted">
                {detail.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
