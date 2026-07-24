import { wedding } from "@/data/wedding";

export default function Footer() {
  return (
    <footer className="bg-wedding-brown px-6 py-7 text-center text-xs tracking-wide text-white/75">
      Diseñado con amor para {wedding.couple.displayName} · 2026
    </footer>
  );
}
