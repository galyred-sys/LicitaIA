import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LicitaIA — Análisis de licitaciones con IA",
  description:
    "Analiza pliegos y anuncios de contratación pública con inteligencia artificial: criterios, plazos, requisitos y riesgos en segundos.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
