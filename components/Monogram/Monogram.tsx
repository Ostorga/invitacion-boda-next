import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";

export default function Monogram() {
  return (
    <section className="bg-wedding-beige px-4 py-8 sm:py-12">
      <RevealOnScroll className="monogram-image-frame mx-auto w-full max-w-[826px]">
        <Image
          src="/images/monograma-oscar-damaris.png"
          alt="Monograma O y D en terracota, rodeado de ramas"
          width={826}
          height={511}
          sizes="(min-width: 858px) 826px, calc(100vw - 32px)"
          className="h-auto w-full"
        />
      </RevealOnScroll>
    </section>
  );
}
