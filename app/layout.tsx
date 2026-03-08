import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Logic Memory Game",
  description:
    "Un juego de memoria interactivo para encontrar pares de cartas. Ideal para demostrar habilidades en Next.js, TypeScript, Zustand y Framer Motion.",
  keywords: ["memory game", "juego memoria", "logic game", "next.js", "react"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
