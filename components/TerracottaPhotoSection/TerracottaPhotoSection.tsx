import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { wedding } from "@/data/wedding";

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
      className={`terracotta-photo-section relative z-10 isolate overflow-hidden ${className}`}
      {...props}
      data-terracotta-photo-section=""
    >
      <div
        aria-hidden="true"
        className="terracotta-photo-background pointer-events-none absolute inset-0 -z-30 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          ...(backgroundPosition ? { backgroundPosition } : {}),
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-wedding-terracotta/[0.82]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-black/20"
      />
      <div className={`relative z-10 ${contentClassName}`}>{children}</div>
    </Tag>
  );
}
