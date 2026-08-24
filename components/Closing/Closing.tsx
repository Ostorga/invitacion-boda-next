import { wedding } from "@/data/wedding";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";

export default function Closing() {
  return (
    <section className="closing-texture relative overflow-hidden px-6 py-24 text-center sm:py-32">
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-wedding-terracotta/50"
        aria-hidden="true"
      />
      <RevealOnScroll>
      <p className="font-display text-6xl text-wedding-brown sm:text-7xl">
        {wedding.couple.displayName}
      </p>
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
      <p className="mt-4 text-xs uppercase tracking-[0.35em] text-wedding-brown/80">
        {wedding.date.roman}
      </p>
      </RevealOnScroll>
      <RevealOnScroll delay={0.2}>
      <blockquote className="mx-auto mt-9 max-w-xl font-serif text-xl italic leading-8 text-wedding-brown/80">
        «Gracias por ser parte de esta historia.
        <br />
        Su presencia es el regalo más grande que podríamos recibir.»
      </blockquote>
      </RevealOnScroll>
      <RevealOnScroll delay={0.3}>
      <span
        className="mt-8 inline-block text-wedding-terracotta"
        aria-hidden="true"
      >
        ◆
      </span>
      </RevealOnScroll>
    </section>
  );
}
