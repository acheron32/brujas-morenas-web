import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brujas Morenas - Cursos de Magia y Esoterismo",
  description: "Descubre el poder de la magia ancestral. Cursos, rituales y conocimiento místico para las brujas del siglo XXI.",
  keywords: "brujas, magia, cursos, esoterismo, hechizos, rituales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}