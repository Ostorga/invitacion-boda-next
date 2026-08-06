"use client";

import { useLayoutEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function RevealOnScroll({
  children,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    let hasRevealed = false;
    let observer: IntersectionObserver | undefined;

    try {
      if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      element.classList.add("reveal-on-scroll-pending");

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting || hasRevealed) return;

          hasRevealed = true;
          element.classList.add("reveal-on-scroll-active");
          observer?.unobserve(element);
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );

      observer.observe(element);
    } catch {
      element.classList.remove(
        "reveal-on-scroll-pending",
        "reveal-on-scroll-active",
      );
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
