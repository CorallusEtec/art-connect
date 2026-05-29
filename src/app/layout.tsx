import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Art Connect",
  description: "Conectando talentos à oportunidades reais",
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="pt-br">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
