"use client";

import { useEffect, useRef, useState } from "react";
import { wedding } from "@/data/wedding";

export default function Monogram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="overflow-hidden px-6 py-20 text-center"
      aria-label={wedding.couple.displayName}
    >
      <div
        ref={containerRef}
        className={`relative mx-auto grid h-64 w-64 place-items-center sm:h-72 sm:w-72 ${isVisible ? "monogram-visible" : ""}`}
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
      <p className="mt-8 text-xs uppercase tracking-[0.35em] text-wedding-brown/80">
        Dos caminos · una historia
      </p>
    </section>
  );
}
