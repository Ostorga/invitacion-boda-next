"use client";

import { useLayoutEffect, useRef } from "react";
import { wedding } from "@/data/wedding";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";

export default function Monogram() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let hasRevealed = false;
    element.classList.add("monogram-animation-pending");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRevealed) return;

        hasRevealed = true;
        element.classList.add("monogram-visible");
        observer.unobserve(element);
      },
      { threshold: 0.01, rootMargin: "0px 0px 12% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="overflow-hidden px-6 py-20 text-center"
      aria-label={wedding.couple.displayName}
    >
      <RevealOnScroll>
        <div
          ref={containerRef}
          className="relative mx-auto grid h-64 w-64 place-items-center sm:h-72 sm:w-72"
        >
          <span
            className="monogram-frame absolute inset-0 rounded-full border border-wedding-terracotta/70"
            aria-hidden="true"
          />
          <p
            className="font-display flex items-center gap-4 text-7xl text-wedding-brown"
            aria-label="O y D"
          >
            <span className="monogram-letter-left">O</span>
            <span className="monogram-ampersand text-4xl italic text-wedding-terracotta">
              &amp;
            </span>
            <span className="monogram-letter-right">D</span>
          </p>
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <p className="mt-8 text-xs uppercase tracking-[0.35em] text-wedding-brown/80">
          Dos caminos · una historia
        </p>
      </RevealOnScroll>
    </section>
  );
}
