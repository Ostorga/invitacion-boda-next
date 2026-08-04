import { wedding } from "@/data/wedding";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="bg-wedding-beige px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
        <header className="text-center">
          <p className="eyebrow">Momentos nuestros</p>
          <h2 className="section-title">Galería</h2>
          <p className="mx-auto mt-4 max-w-xl text-wedding-brown/80">
            Muy pronto compartiremos aquí algunos de nuestros recuerdos
            favoritos.
          </p>
        </header>
        </RevealOnScroll>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {wedding.gallery.map((photo, index) => (
            <RevealOnScroll key={photo.id} delay={(index % 4) * 0.1}>
            <div
              className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-wedding-terracotta/50 bg-white"
            >
              <div className="absolute inset-4 grid place-items-center rounded-[1.3rem] border border-dashed border-wedding-brown/25 text-center">
                <div>
                  <span className="font-display text-4xl text-wedding-brown/35">
                    {String(photo.id).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-wedding-brown/80">
                    {photo.text}
                  </p>
                </div>
              </div>
            </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
