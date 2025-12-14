import { redirect } from "next/navigation";
import { Metadata } from "next";
import LandingPage from "./(public)/landing/page";

export const metadata: Metadata = {
  title: "Kedevs",
  description: "En Kedevs es donde encontraras los mejores servicios",
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

export default function Home() {
  return <LandingPage />;
}
