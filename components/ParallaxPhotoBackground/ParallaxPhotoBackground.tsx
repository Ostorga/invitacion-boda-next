import type { ReactNode } from "react";

type ParallaxPhotoBackgroundProps = {
  image: string;
  position?: string;
  className?: string;
  ariaLabel?: string;
  overlay?: ReactNode;
  fillSection?: boolean;
};

export default function ParallaxPhotoBackground({
  image,
  position = "center 38%",
  className = "",
  ariaLabel,
  overlay,
  fillSection = false,
}: ParallaxPhotoBackgroundProps) {
  return (
    <div
      className={
        fillSection
          ? "absolute inset-0 overflow-hidden pointer-events-none"
          : "parallax-photo-sticky pointer-events-none"
      }
      aria-hidden={ariaLabel ? undefined : true}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={ariaLabel ?? ""}
        aria-hidden={ariaLabel ? undefined : true}
        className={
          fillSection
            ? `absolute inset-0 h-full w-full object-cover ${className}`
            : `parallax-photo-background ${className}`
        }
        style={{ objectPosition: position }}
      />

      {overlay}
    </div>
  );
}