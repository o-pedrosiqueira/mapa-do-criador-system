import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mapa do Criador — Área de Membros",
  description: "Trilha guiada de instalação, configuração e primeiros passos do Mapa do Criador.",
  icons: {
    icon: "/sinete.svg",
    apple: "/apple-touch-icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
