import { wedding } from "@/data/wedding";

export default function Directions() {
  return (
    <section
      className="px-6 py-20 sm:py-24"
      aria-labelledby="directions-title"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-wedding-brown text-white shadow-[0_24px_70px_rgba(150,51,26,0.16)]">
        <div className="px-7 py-12 text-center sm:px-12">
          <p className="eyebrow !text-wedding-beige">Ubicación</p>
          <h2 id="directions-title" className="section-title !text-white">
            Cómo llegar
          </h2>
          <p className="mt-6 font-display text-3xl">
            {wedding.location.name}
          </p>
          <address className="mt-2 not-italic text-white/75">
            {wedding.location.address}
          </address>
        </div>
        <div className="aspect-[4/3] w-full bg-wedding-beige sm:aspect-[16/7]">
          <iframe
            title={`Mapa de ${wedding.location.name}`}
            src={wedding.location.mapEmbedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="px-7 py-8 text-center">
          <a
            href={wedding.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-wedding-terracotta px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-wedding-beige hover:text-wedding-brown focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wedding-beige"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
