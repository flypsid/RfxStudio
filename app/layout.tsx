import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ma’a Suh LLC | Leader de l'Innovation Numérique B2B",
  description:
    "Ma’a Suh LLC propose des solutions numériques innovantes : Fintech, SaaS, Retail, et Marketing Digital pour accompagner la croissance des entreprises.",
  icons: {
    icon: "/images/Logo1000x1000.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
