import { wedding } from "@/data/wedding";

export default function Closing() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-center sm:py-32">
      <div
        className="closing-heart absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-wedding-terracotta/50"
        aria-hidden="true"
      />
      <p className="font-display text-6xl text-wedding-brown sm:text-7xl">
        {wedding.couple.displayName}
      </p>
      <p className="mt-4 text-xs uppercase tracking-[0.35em] text-wedding-brown/80">
        {wedding.date.roman}
      </p>
      <blockquote className="mx-auto mt-9 max-w-xl font-serif text-xl italic leading-8 text-wedding-brown/80">
        «Gracias por ser parte de esta historia.
        <br />
        Su presencia es el regalo más grande que podríamos recibir.»
      </blockquote>
      <span
        className="mt-8 inline-block text-wedding-terracotta"
        aria-hidden="true"
      >
        ◆
      </span>
    </section>
  );
}
