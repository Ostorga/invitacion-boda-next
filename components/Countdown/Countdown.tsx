"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const units: Array<{ key: keyof TimeRemaining; label: string }> = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
];

function getTimeRemaining(): TimeRemaining {
  const difference = Math.max(
    0,
    Date.parse(wedding.date.dateTimeIso) - Date.now(),
  );

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

export default function Countdown() {
  const [remaining, setRemaining] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    const updateCountdown = () => setRemaining(getTimeRemaining());
    updateCountdown();
    const intervalId = window.setInterval(updateCountdown, 1_000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      className="bg-wedding-brown px-5 py-20 text-center text-white sm:py-24"
      aria-labelledby="countdown-title"
    >
      <p className="eyebrow !text-wedding-beige">El gran día se acerca</p>
      <h2 id="countdown-title" className="section-title !text-white">
        Faltan...
      </h2>
      <div
        className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5"
        role="timer"
        aria-live="off"
        aria-label={`Tiempo restante para la boda de ${wedding.couple.displayName}`}
      >
        {units.map(({ key, label }) => (
          <div
            key={key}
            className="rounded-2xl border border-wedding-terracotta/70 bg-white/5 px-3 py-7 backdrop-blur-sm"
          >
            <span className="font-display block text-5xl tabular-nums text-wedding-beige sm:text-6xl">
              {remaining ? String(remaining[key]).padStart(2, "0") : "--"}
            </span>
            <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-white/70">
              {label}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-9 font-serif text-xl italic text-white/80">
        «Pronto seremos uno»
      </p>
    </section>
  );
}
