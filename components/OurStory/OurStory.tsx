"use client";

import { useState } from "react";
import type { StoryChapter } from "@/data/wedding";
import { wedding } from "@/data/wedding";

function StoryCard({
  chapter,
  index,
}: {
  chapter: StoryChapter;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = `story-${chapter.year}-content`;

  return (
    <article className="relative grid pl-14 md:grid-cols-2 md:gap-16 md:pl-0">
      <span className="absolute left-0 top-7 z-10 grid h-10 w-10 place-items-center rounded-full border border-wedding-terracotta bg-background text-xs font-semibold text-wedding-brown md:left-1/2 md:-translate-x-1/2">
        {chapter.year}
      </span>
      <div
        className={`rounded-[2rem] border border-wedding-terracotta/50 bg-white p-7 shadow-[0_18px_50px_rgba(150,51,26,0.08)] sm:p-9 ${index % 2 ? "md:col-start-2" : ""}`}
      >
        <h3 className="font-display text-3xl text-wedding-brown">
          {chapter.title}
        </h3>
        <div
          id={contentId}
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out md:max-h-none md:overflow-visible ${
            isExpanded ? "max-h-[80rem]" : "max-h-28"
          }`}
        >
          <p className="mt-4 text-[0.96rem] leading-7 text-wedding-brown/80">
            {chapter.text}
          </p>
        </div>
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={contentId}
          onClick={() => setIsExpanded((expanded) => !expanded)}
          className="mt-4 rounded-full border border-wedding-terracotta px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-wedding-brown transition hover:bg-wedding-terracotta hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wedding-brown md:hidden"
        >
          {isExpanded ? "Leer menos" : "Leer más"}
        </button>
      </div>
    </article>
  );
}

export default function OurStory() {
  return (
    <section id="historia" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">El camino hasta aquí</p>
          <h2 className="section-title">Nuestra historia</h2>
          <p className="mt-4 text-wedding-brown/80">
            Cada momento nos trajo un paso más cerca del otro.
          </p>
        </header>
        <div className="relative mt-14 space-y-8 before:absolute before:bottom-4 before:left-[1.15rem] before:top-4 before:w-px before:bg-wedding-terracotta md:before:left-1/2">
          {wedding.story.map((chapter, index) => (
            <StoryCard key={chapter.year} chapter={chapter} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
