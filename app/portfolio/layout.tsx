import type { Metadata } from "next";
import type { ReactNode } from "react";

const portfolioUrl = "https://geniusanonymous.org/portfolio";

export const metadata: Metadata = {
  title: "Palos Park Development & Design Portfolio | Lawrence Corso",
  description:
    "Dive into Lawrence “Pluto Smoke” Corso's Palos Park portfolio of development, design, Earth home concepts, crowdfunding campaigns, and digital strategies for rebels.",
  keywords: [
    "Lawrence Corso portfolio",
    "Larry Corso work",
    "Palos Park development portfolio",
    "Palos Park design showcase",
    "Pluto Smoke projects",
    "Earth homes case studies",
    "supporting the outcasts",
    "creative technology",
    "crowdfunding strategy",
  ],
  openGraph: {
    title: "Palos Park Development & Design Portfolio | Lawrence Corso",
    description:
      "Explore Pluto Smoke's Palos Park showcase of visionary development and design powering Earth homes, underdog movements, and immersive digital brands.",
    url: portfolioUrl,
    type: "website",
  },
  twitter: {
    title: "Palos Park Development & Design Portfolio | Lawrence Corso",
    description:
      "Lawrence “Pluto Smoke” Corso engineers Palos Park-rooted, neon-powered experiences for Earth homes, outcasts, and bold founders.",
    card: "summary_large_image",
  },
  alternates: {
    canonical: portfolioUrl,
  },
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
