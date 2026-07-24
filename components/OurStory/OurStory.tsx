const story = [
  { year: "2008", title: "El encuentro", text: "Su historia comenzó en el 2008 cuando Oscar llegó a la iglesia y conoció a Damaris. Él tenía apenas ocho años y ella diez. Desde aquel momento, Oscar desarrolló un pequeño “amor platónico” por ella, mientras que Damaris, completamente ajena a sus sentimientos, nunca le prestó demasiada atención. Lo que parecía una historia de amor de niños o incluso imposible, se transformó con el tiempo en una amistad. No eran inseparables, pero siempre encontraban la manera de coincidir, conversar y permanecer presentes en la vida del otro…" },
  { year: "2017", title: "El inicio", text: "Los años pasaron y sus vidas continuaron entre conversaciones, recuerdos y una amistad que se fortalecía poco a poco por situaciones personales de ambas partes. Fue hasta el 2017 cuando se dieron cuenta de que algo había cambiado. Durante los meses anteriores habían sido un apoyo constante el uno para el otro, compartiendo desafíos y momentos cruciales en sus vidas. Sin buscarlo, aquella amistad que había acompañado su infancia comenzó a convertirse en algo más profundo, dando inicio a la historia de amor que se sigue escribiendo hasta el día de hoy…" },
  { year: "2026", title: "La propuesta", text: "Ocho años después, decidieron dar el siguiente paso. Como toda buena mujer, Damaris tenía sus sospechas, pero jamás imaginó que la propuesta sería tan perfecta. Cada detalle parecía salido de sus sueños y pensamientos: el lugar, la atmósfera y, sobre todo, la presencia de las personas más importantes en sus vidas. Rodeados de su núcleo familiar y de su mejor amiga en común, llegó la pregunta que ambos habían esperado durante tanto tiempo. Y hoy, ellos anhelan que seas parte del inicio de esta nueva aventura…" },
];

export default function OurStory() {
  return (
    <section id="historia" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto max-w-2xl text-center"><p className="eyebrow">El camino hasta aquí</p><h2 className="section-title">Nuestra historia</h2><p className="mt-4 text-wedding-muted">Cada momento nos trajo un paso más cerca del otro.</p></header>
        <div className="relative mt-14 space-y-8 before:absolute before:bottom-4 before:left-[1.15rem] before:top-4 before:w-px before:bg-wedding-secondary md:before:left-1/2">
          {story.map((chapter, index) => (
            <article key={chapter.year} className="relative grid pl-14 md:grid-cols-2 md:gap-16 md:pl-0">
              <span className="absolute left-0 top-7 z-10 grid h-10 w-10 place-items-center rounded-full border border-wedding-secondary bg-background text-xs font-semibold text-wedding-primary md:left-1/2 md:-translate-x-1/2">{chapter.year}</span>
              <div className={`rounded-[2rem] border border-wedding-secondary/60 bg-wedding-surface p-7 shadow-[0_18px_50px_rgba(117,22,45,0.07)] sm:p-9 ${index % 2 ? "md:col-start-2" : ""}`}>
                <h3 className="font-display text-3xl text-wedding-primary">{chapter.title}</h3><p className="mt-4 text-[0.96rem] leading-7 text-wedding-muted">{chapter.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
