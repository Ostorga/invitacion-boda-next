export type WeddingEvent = {
  title: string;
  place: string;
  address: string;
  time: string;
  dressCode: string;
};

export type StoryChapter = {
  year: string;
  title: string;
  text: string;
};

export const wedding = {
  couple: {
    firstName: "Oscar",
    secondName: "Damaris",
    displayName: "Oscar y Damaris",
  },
  date: {
    iso: "2026-12-19",
    dateTimeIso: "2026-12-19T16:00:00-06:00",
    display: "sábado 19 de diciembre de 2026",
    time: "4:00 p. m.",
    roman: "XIX · XII · MMXXVI",
    timeZone: "America/El_Salvador",
  },
  rsvp: {
    deadlineIso: "2026-11-15",
    deadlineDisplay: "15 de noviembre de 2026",
    futureEndpoint: "/api/rsvp",
  },
  hero: {
    image: "/images/hero.webp",
    invitation: "Tienen el honor de invitarles a la celebración de su matrimonio",
    quote: "Dos almas que se reconocen en la eternidad y deciden caminar juntas hacia ella.",
  },
  navigation: [
    { label: "Historia", href: "#historia" },
    { label: "Evento", href: "#evento" },
    { label: "Galería", href: "#galeria" },
    { label: "Confirmar", href: "#confirmar" },
  ],
  story: [
    {
      year: "2008",
      title: "El encuentro",
      text: "Su historia comenzó en el 2008 cuando Oscar llegó a la iglesia y conoció a Damaris. Él tenía apenas ocho años y ella diez. Desde aquel momento, Oscar desarrolló un pequeño “amor platónico” por ella, mientras que Damaris, completamente ajena a sus sentimientos, nunca le prestó demasiada atención. Lo que parecía una historia de amor de niños o incluso imposible, se transformó con el tiempo en una amistad. No eran inseparables, pero siempre encontraban la manera de coincidir, conversar y permanecer presentes en la vida del otro…",
    },
    {
      year: "2017",
      title: "El inicio",
      text: "Los años pasaron y sus vidas continuaron entre conversaciones, recuerdos y una amistad que se fortalecía poco a poco por situaciones personales de ambas partes. Fue hasta el 2017 cuando se dieron cuenta de que algo había cambiado. Durante los meses anteriores habían sido un apoyo constante el uno para el otro, compartiendo desafíos y momentos cruciales en sus vidas. Sin buscarlo, aquella amistad que había acompañado su infancia comenzó a convertirse en algo más profundo, dando inicio a la historia de amor que se sigue escribiendo hasta el día de hoy…",
    },
    {
      year: "2026",
      title: "La propuesta",
      text: "Ocho años después, decidieron dar el siguiente paso. Como toda buena mujer, Damaris tenía sus sospechas, pero jamás imaginó que la propuesta sería tan perfecta. Cada detalle parecía salido de sus sueños y pensamientos: el lugar, la atmósfera y, sobre todo, la presencia de las personas más importantes en sus vidas. Rodeados de su núcleo familiar y de su mejor amiga en común, llegó la pregunta que ambos habían esperado durante tanto tiempo. Y hoy, ellos anhelan que seas parte del inicio de esta nueva aventura…",
    },
  ] satisfies StoryChapter[],
  events: [
    {
      title: "Ceremonia",
      place: "La Casa del Campo",
      address: "Las Arenas",
      time: "4:00 p. m.",
      dressCode: "Vestimenta formal",
    },
    {
      title: "Celebración",
      place: "La Casa del Campo",
      address: "Las Arenas",
      time: "Por confirmar",
      dressCode: "Vestimenta formal",
    },
  ] satisfies WeddingEvent[],
  location: {
    name: "La Casa del Campo",
    address: "Las Arenas",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3871.9299058557385!2d-89.3328056!3d13.9627778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDU3JzQ2LjAiTiA4OcKwMTknNTguMSJX!5e0!3m2!1ses!2ssv!4v1781839798696!5m2!1ses!2ssv",
    mapUrl: "https://www.google.com/maps?q=13.9627778,-89.3328056",
  },
  dressPalette: [
    { name: "Beige", className: "bg-wedding-beige" },
    { name: "Terracota", className: "bg-wedding-terracotta" },
    { name: "Marrón", className: "bg-wedding-brown" },
  ],
  gallery: [
    { id: 1, text: "Momento 01", image: "/images/image1.JPG.webp" },
    { id: 2, text: "Momento 02", image: "/images/IMG2.JPG.webp" },
    { id: 3, text: "Momento 03", image: "/images/IMG3.JPG.webp" },
    { id: 4, text: "Momento 04", image: "/images/IMG4.JPG.webp" },
  ],
} as const;
