import { wedding } from "@/data/wedding";
import TerracottaPhotoSection from "@/components/TerracottaPhotoSection/TerracottaPhotoSection";

export default function Footer() {
  return (
    <TerracottaPhotoSection
      as="footer"
      id="pie-de-pagina"
      backgroundImage="/images/6.JPG.webp"
      backgroundPosition="center 60%"
      className="px-6 py-7 text-center text-xs tracking-wide text-white/75"
    >
      <div>
        <p>Hecho con cariño para {wedding.couple.displayName} · 2026</p>
        <p className="mt-2 text-white/60">Desarrollado por: Ostorga</p>
      </div>
    </TerracottaPhotoSection>
  );
}
