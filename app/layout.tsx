import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { wedding } from "@/data/wedding";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: `${wedding.couple.displayName} — Nuestra boda`,
  description: `Acompáñanos a celebrar la boda de ${wedding.couple.displayName} el ${wedding.date.display} a las ${wedding.date.time}.`,
  applicationName: "Invitación de boda",
  keywords: [
    wedding.couple.displayName,
    "boda",
    "invitación de boda",
    wedding.date.display,
  ],
  openGraph: {
    type: "website",
    locale: "es_SV",
    title: `${wedding.couple.displayName} — Nuestra boda`,
    description: `Nos casamos el ${wedding.date.display} a las ${wedding.date.time}.`,
    siteName: `Boda de ${wedding.couple.displayName}`,
    images: [
      {
        url: wedding.hero.image,
        width: 1200,
        height: 1800,
        alt: wedding.couple.displayName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${wedding.couple.displayName} — Nuestra boda`,
    description: `Nos casamos el ${wedding.date.display} a las ${wedding.date.time}.`,
    images: [wedding.hero.image],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="preload"
          as="image"
          href={wedding.hero.image}
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
