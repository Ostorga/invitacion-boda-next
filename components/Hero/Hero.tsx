import Image from "next/image";
import { wedding } from "@/data/wedding";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-wedding-brown text-white sm:items-center">
      <Image
        src={wedding.hero.image}
        alt={`${wedding.couple.displayName} durante su sesión de compromiso`}
        fill
        priority
        unoptimized
        quality={90}
        sizes="100vw"
        className="object-cover object-[52%_35%] sm:object-[center_38%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-wedding-brown/30 to-black/10 sm:bg-gradient-to-r sm:from-black/80 sm:via-wedding-brown/30 sm:to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-36 sm:px-10 sm:py-28 lg:px-16">
        <div className="max-w-md text-center sm:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-wedding-beige sm:text-sm">
            {wedding.hero.invitation}
          </p>
          <h1 className="font-display mt-5 text-6xl leading-[0.82] sm:text-7xl lg:text-8xl">
            {wedding.couple.firstName}
            <span className="block py-2 text-4xl italic text-wedding-terracotta sm:text-5xl">
              &amp;
            </span>
            {wedding.couple.secondName}
          </h1>
          <p className="mt-7 text-sm uppercase tracking-[0.22em] text-white/90 sm:text-base">
            {wedding.date.display} · {wedding.date.time}
          </p>
          <p className="mx-auto mt-5 max-w-md font-serif text-lg italic leading-7 text-white/80 sm:mx-0">
            “{wedding.hero.quote}”
          </p>
          <a
            href="#confirmar"
            className="mt-8 inline-flex rounded-full bg-wedding-terracotta px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:bg-wedding-beige hover:text-wedding-brown focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wedding-beige motion-reduce:transform-none"
          >
            Confirmar asistencia
          </a>
        </div>
      </div>
    </section>
  );
}
