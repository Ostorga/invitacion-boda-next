"use client";

import { useEffect } from "react";
import { motion, useAnimate, useInView, useReducedMotion } from "framer-motion";
import { wedding } from "@/data/wedding";

const floatingDetails = [
  { className: "left-[9%] top-[24%] h-1.5 w-1.5", delay: 0.1, duration: 5.8 },
  { className: "right-[11%] top-[29%] h-2 w-2", delay: 1.4, duration: 6.4 },
  { className: "bottom-[21%] left-[19%] h-1 w-1", delay: 2.2, duration: 5.2 },
  { className: "bottom-[17%] right-[18%] h-1.5 w-1.5", delay: 0.8, duration: 6 },
] as const;

export default function Monogram() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.35 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    async function playEntrance() {
      animate(".botanical-stem", { opacity: 0, pathLength: 0 }, { duration: 0 });
      animate(".botanical-detail", { opacity: 0, scale: 0.75 }, { duration: 0 });
      animate(".monogram-o", { opacity: 0, x: -18 }, { duration: 0 });
      animate(".monogram-d", { opacity: 0, x: 18 }, { duration: 0 });
      animate(".monogram-and", { opacity: 0, scale: 0.82 }, { duration: 0 });
      animate(".monogram-tagline", { opacity: 0, y: 8 }, { duration: 0 });

      await animate(
        ".botanical-stem",
        { opacity: 1, pathLength: 1 },
        { duration: 2, delay: (index) => index * 0.12, ease: "easeInOut" },
      );
      animate(
        ".botanical-detail",
        { opacity: 1, scale: 1 },
        { duration: 0.9, delay: (index) => index * 0.09, ease: [0.22, 1, 0.36, 1] },
      );
      await Promise.all([
        animate(".monogram-o", { opacity: 1, x: 0 }, { duration: 1.15, delay: 0.75, ease: [0.22, 1, 0.36, 1] }),
        animate(".monogram-d", { opacity: 1, x: 0 }, { duration: 1.15, delay: 0.95, ease: [0.22, 1, 0.36, 1] }),
        animate(".monogram-and", { opacity: 1, scale: 1 }, { duration: 1, delay: 1.25, ease: "easeOut" }),
      ]);
      await animate(
        ".monogram-tagline",
        { opacity: 1, y: 0 },
        { duration: 1.1, ease: "easeOut" },
      );
    }

    playEntrance();
  }, [animate, isInView, reduceMotion]);

  return (
    <section
      ref={scope}
      className="relative overflow-hidden b-wedding-beige px-4 py-20 text-center sm:px-6 sm:py-24"
      aria-label={wedding.couple.displayName}
    >
      <div className="pointer-events-none relative mx-auto w-full max-w-3xl" aria-hidden="true">
        <svg
          className="mx-auto h-auto w-full max-w-2xl overflow-visible"
          viewBox="0 0 680 390"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="var(--wedding-brown)" strokeLinecap="round" strokeLinejoin="round">
            <path className="botanical-stem" d="M72 304C111 290 127 252 132 211C136 174 155 140 194 113" strokeWidth="1.7" />
            <path className="botanical-stem" d="M113 270C93 247 83 223 87 194" strokeWidth="1.2" />
            <path className="botanical-stem" d="M134 211C164 204 183 186 195 163" strokeWidth="1.2" />
            <path className="botanical-stem" d="M608 82C574 99 558 131 553 170C548 213 525 246 485 270" strokeWidth="1.7" />
            <path className="botanical-stem" d="M558 139C582 147 598 166 604 190" strokeWidth="1.2" />
            <path className="botanical-stem" d="M548 202C520 196 500 179 488 156" strokeWidth="1.2" />
          </g>

          <g className="botanical-detail" fill="var(--wedding-terracotta)">
            <ellipse cx="108" cy="269" rx="5" ry="13" transform="rotate(-48 108 269)" />
            <ellipse cx="91" cy="232" rx="5" ry="12" transform="rotate(-24 91 232)" />
            <ellipse cx="133" cy="222" rx="5" ry="13" transform="rotate(48 133 222)" />
            <ellipse cx="151" cy="197" rx="4.5" ry="12" transform="rotate(65 151 197)" />
            <ellipse cx="155" cy="156" rx="4.5" ry="12" transform="rotate(-38 155 156)" />
            <ellipse cx="178" cy="132" rx="5" ry="13" transform="rotate(49 178 132)" />
          </g>
          <g className="botanical-detail" fill="var(--wedding-brown)" opacity="0.78">
            <ellipse cx="579" cy="112" rx="5" ry="13" transform="rotate(51 579 112)" />
            <ellipse cx="557" cy="151" rx="5" ry="13" transform="rotate(-55 557 151)" />
            <ellipse cx="599" cy="175" rx="4.5" ry="12" transform="rotate(-31 599 175)" />
            <ellipse cx="543" cy="211" rx="5" ry="13" transform="rotate(48 543 211)" />
            <ellipse cx="520" cy="237" rx="4.5" ry="12" transform="rotate(-50 520 237)" />
            <ellipse cx="493" cy="260" rx="5" ry="13" transform="rotate(57 493 260)" />
          </g>

          <g className="botanical-detail" fill="var(--wedding-terracotta)" stroke="var(--wedding-beige)" strokeWidth="1">
            <path d="M82 194c-10-14 8-24 10-8 10-13 23 2 8 10 14 8 2 24-9 11-3 16-21 7-11-6-17-1-14-19 2-7Z" />
            <circle cx="91" cy="197" r="3.2" fill="#C7A45D" stroke="none" />
            <path d="M597 79c-8-12 7-21 9-7 9-11 20 2 7 9 12 7 1 20-8 9-3 13-18 6-9-5-15-1-12-16 2-6Z" />
            <circle cx="604" cy="81" r="2.8" fill="#C7A45D" stroke="none" />
          </g>

          <g className="botanical-detail" fill="#C7A45D">
            <circle cx="119" cy="181" r="3" />
            <circle cx="170" cy="177" r="2.2" />
            <circle cx="526" cy="184" r="2.5" />
            <circle cx="580" cy="211" r="3" />
          </g>
        </svg>

        {floatingDetails.map((detail, index) => (
          <motion.div
            key={detail.className}
            className={`absolute rounded-full bg-[#C7A45D]/75 ${detail.className}`}
            animate={reduceMotion ? undefined : { y: [0, -5, 0], opacity: [0.42, 0.78, 0.42] }}
            transition={{ duration: detail.duration, delay: detail.delay + 3, repeat: Infinity, ease: "easeInOut" }}
            data-floating-detail={index}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[7.9rem] mx-auto flex items-baseline justify-center font-display leading-none sm:top-36" aria-label="O y D">
        <motion.span className="monogram-o text-[clamp(4.6rem,15vw,7.6rem)] text-wedding-brown">O</motion.span>
        <motion.span className="monogram-and mx-2 text-[clamp(2rem,6vw,3.25rem)] italic text-wedding-terracotta sm:mx-4">&amp;</motion.span>
        <motion.span className="monogram-d text-[clamp(4.6rem,15vw,7.6rem)] text-wedding-brown">D</motion.span>
      </div>

      <motion.p className="monogram-tagline -mt-8 text-[0.65rem] uppercase tracking-[0.28em] text-wedding-brown/80 sm:-mt-10 sm:text-xs sm:tracking-[0.4em]">
        Dos caminos · una historia
      </motion.p>
    </section>
  );
}
