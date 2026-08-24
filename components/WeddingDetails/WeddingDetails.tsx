import { wedding } from "@/data/wedding";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";

export default function WeddingDetails() {
  return (
    <section
      id="evento"
      className="bg-wedding-beige px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll>
        <header className="text-center">
          <p className="eyebrow">Los esperamos</p>
          <h2 className="section-title">El gran día</h2>
          <p className="mt-4 text-wedding-brown/80">
            Un momento único para celebrar juntos.
          </p>
        </header>
        </RevealOnScroll>
        <div className="mt-12 flex justify-center">
          {wedding.events.slice(0, 1).map((event) => (
            <RevealOnScroll key={event.title}>
            <article
              className="w-full max-w-2xl rounded-[2rem] border border-wedding-terracotta/60 bg-white p-8 text-center shadow-[0_18px_60px_rgba(150,51,26,0.08)] sm:p-10"
            >
              <span
                className="mx-auto block h-10 w-px bg-wedding-terracotta"
                aria-hidden="true"
              />
              <h3 className="font-display mt-5 text-4xl text-wedding-brown">
                {event.title}
              </h3>
              <dl className="mt-7 divide-y divide-wedding-terracotta/30 text-sm">
                {[
                  ["Lugar", event.place],
                  ["Fecha", wedding.date.display],
                  ["Hora", event.time],
                  ["Dirección", event.address],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[5.5rem_1fr] gap-4 py-3 text-left"
                  >
                    <dt className="font-semibold uppercase tracking-wider text-wedding-brown">
                      {label}
                    </dt>
                    <dd className="text-wedding-brown/80">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-7 rounded-full bg-wedding-beige px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-wedding-brown">
                {event.dressCode}
              </p>
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-wedding-brown/80">
                  Paleta sugerida
                </p>
                <ul
                  className="mt-3 flex items-center justify-center gap-4"
                  aria-label="Paleta de vestimenta sugerida"
                >
                  {wedding.dressPalette.map((color) => (
                    <li key={color.name}>
                      <span
                        className={`block h-9 w-9 rounded-full border border-wedding-brown/35 ${color.className}`}
                        title={color.name}
                        aria-label={color.name}
                        role="img"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
