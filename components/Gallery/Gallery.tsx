import { wedding } from "@/data/wedding";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";
import Image from "next/image";

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
              <Image
                src={photo.image}
                alt={`${photo.text} de Oscar y Damaris`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
