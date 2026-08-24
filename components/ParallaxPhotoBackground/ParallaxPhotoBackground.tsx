type ParallaxPhotoBackgroundProps = {
  image: string;
  position?: string;
  className?: string;
  ariaLabel?: string;
};

export default function ParallaxPhotoBackground({
  image,
  position = "center 38%",
  className = "",
  ariaLabel,
}: ParallaxPhotoBackgroundProps) {
  return (
    <div
      aria-hidden={ariaLabel ? undefined : true}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      className={`pointer-events-none absolute inset-0 -z-30 bg-cover bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: position,
      }}
    />
  );
}