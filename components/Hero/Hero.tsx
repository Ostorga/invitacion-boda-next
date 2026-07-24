import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-wedding-primary text-white sm:items-center">
      <Image src="/images/DSC08310.jpg" alt="Oscar y Damaris el día de su sesión de compromiso" fill priority sizes="100vw" className="object-cover object-[52%_35%] sm:object-[center_38%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#310812]/95 via-[#4f1020]/35 to-black/15 sm:bg-gradient-to-r sm:from-[#310812]/90 sm:via-[#4f1020]/45 sm:to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-36 sm:px-10 sm:py-28 lg:px-16">
        <div className="max-w-xl text-center sm:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-wedding-secondary sm:text-sm">Tienen el honor de invitarles a la celebración de su matrimonio</p>
          <h1 className="font-display mt-5 text-6xl leading-[0.82] sm:text-7xl lg:text-8xl">Oscar <span className="block py-2 text-4xl italic text-wedding-secondary sm:text-5xl">&amp;</span> Damaris</h1>
          <p className="mt-7 text-sm uppercase tracking-[0.22em] text-white/90 sm:text-base">Sábado, 19 de diciembre de 2026</p>
          <p className="mx-auto mt-5 max-w-md font-serif text-lg italic leading-7 text-white/80 sm:mx-0">“Dos almas que se reconocen en la eternidad y deciden caminar juntas hacia ella.”</p>
          <a href="#confirmar" className="mt-8 inline-flex rounded-full bg-wedding-secondary px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-wedding-primary transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wedding-secondary motion-reduce:transform-none">Confirmar asistencia</a>
        </div>
      </div>
    </section>
  );
}
