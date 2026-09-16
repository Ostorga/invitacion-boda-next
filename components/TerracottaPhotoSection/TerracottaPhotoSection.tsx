import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { wedding } from "@/data/wedding";
import ParallaxPhotoBackground from "@/components/ParallaxPhotoBackground/ParallaxPhotoBackground";

type TerracottaPhotoSectionProps = Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "className" | "id"
> & {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  id?: string;
  as?: "section" | "footer";
};

export default function TerracottaPhotoSection({
  children,
  className = "",
  contentClassName = "",
  backgroundImage = wedding.hero.image,
  backgroundPosition,
  id,
  as = "section",
  ...props
}: TerracottaPhotoSectionProps) {
  const Tag: ElementType = as;

  return (
    <Tag
      id={id}
      className={`relative z-10 isolate ${className}`}
      {...props}
      data-terracotta-photo-section=""
    >
      <ParallaxPhotoBackground
        image={backgroundImage}
        position={backgroundPosition ?? "center 38%"}
        fillSection
        overlay={
          <>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 bg-wedding-terracotta/[0.82]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 bg-black/20"
            />
          </>
        }
      />

      <div className={`relative z-30 ${contentClassName}`}>
        {children}
      </div>
    </Tag>
  );
}