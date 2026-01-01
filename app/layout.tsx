import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nathanael-fotie-fotie.work.gd"),
  title: "Nathanael Fotie Fotie | Développeur Web & Mobile Full-Stack",
  description: "Portfolio de Nathanael Fotie Fotie. Expert React, Node.js, TypeScript. Création d'applications web et mobiles performantes, scalables et centrées sur l'utilisateur.",
  keywords: [
    "Nathanael Fotie Fotie",
    "Développeur Web",
    "Développeur Mobile",
    "Full-Stack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Cameroun",
    "Douala",
    "Portfolio Développeur",
    "Freelance Informatique",
  ],
  authors: [{ name: "Nathanael Fotie Fotie", url: "https://nathanael-fotie-fotie.work.gd" }],
  creator: "Nathanael Fotie Fotie",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nathanael-fotie-fotie.work.gd",
    title: "Nathanael Fotie Fotie | Développeur Web & Mobile Full-Stack",
    description: "Découvrez mes projets et compétences en développement web et mobile. Expert React, Node.js, et solutions sur mesure.",
    siteName: "Nathanael Fotie Portfolio",
    images: [
      {
        url: "/img/about.webp",
        width: 1200,
        height: 630,
        alt: "Nathanael Fotie - Développeur Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathanael Fotie Fotie | Développeur Web & Mobile Full-Stack",
    description: "Expert React, Node.js, TypeScript. Création d'applications web et mobiles performantes.",
    images: ["/img/about.webp"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
