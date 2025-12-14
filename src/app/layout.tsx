import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kedevs",
  description: "Soluciones para la innovación y la transformación digital",
  openGraph: {
    title: "Kedevs",
    description: "En kedevs encontraras los mejores servicios",
    images: [
      {
        url: "/kedevs.jpg",
        width: 1200,
        height: 630,
        alt: "kedevs logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
