import { wedding } from "@/data/wedding";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";

export default function Directions() {
  return (
    <section
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="directions-title"
    >
      <h2 id="directions-title" className="sr-only">
        Cómo llegar
      </h2>

      <RevealOnScroll>
      <div className="overflow-hidden rounded-2xl border border-wedding-terracotta/40 bg-wedding-beige shadow-[0_14px_40px_rgba(150,51,26,0.12)]">
        <header className="relative bg-wedding-terracotta px-4 py-3">
          <span
            className="absolute inset-0 bg-black/25"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-0.5 text-wedding-beige sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <p className="font-display text-lg leading-tight sm:text-xl">
              {wedding.location.name}
            </p>
            <address className="text-sm not-italic text-wedding-beige/90">
              {wedding.location.address}
            </address>
          </div>
        </header>

        <div className="relative h-64 w-full sm:h-72 lg:h-80">
          <iframe
            title={`Mapa de ${wedding.location.name}`}
            src={wedding.location.mapEmbedUrl}
            width="100%"
            height="100%"
            className="block h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={wedding.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 inline-flex min-h-10 items-center rounded-lg border border-wedding-brown/35 bg-wedding-beige px-3 py-2 text-xs font-semibold text-wedding-brown shadow-lg transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wedding-brown sm:px-4 sm:text-sm"
          >
            <span className="sm:hidden">Abrir mapa</span>
            <span className="hidden sm:inline">Abrir en Google Maps</span>
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}
