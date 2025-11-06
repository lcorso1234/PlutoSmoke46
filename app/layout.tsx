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

const siteName = "Lawrence Corso • Pluto Smoke";
const siteUrl = "https://geniusanonymous.org";
const siteTitle =
  "Larry (Lawrence) Corso | Palos Park Development & Design Visionary";
const siteDescription =
  "Lawrence “Larry” Corso is a Palos Park, Illinois development and design lead crafting night-mode product strategy, Earth home ecosystems, and crowdfunding campaigns that champion outcasts, rebels, and future-focused communities.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Pluto Smoke",
  },
  description: siteDescription,
  keywords: [
    "Lawrence Corso",
    "Larry Corso",
    "Pluto Smoke",
    "night-mode strategist",
    "night developer",
    "creative technologist",
    "digital product visionary",
    "Earth homes innovation",
    "supporting the outcasts",
    "crowdfunding strategist",
    "brand storytelling",
    "Palos Park development",
    "Palos Park web design",
    "Palos Park creative director",
    "Chicago Southland developer",
    "Chicago Southland designer",
    "custom product design Palos Park",
    "portfolio",
    "Pluto Smoke portfolio",
  ],
  authors: [{ name: "Lawrence Corso", url: siteUrl }],
  creator: "Lawrence Corso",
  publisher: "Lawrence Corso",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/marketing-logo.png",
        width: 1200,
        height: 630,
        alt: "Pluto Smoke neon crest over a retro gradient background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@rumidesign",
    images: ["/marketing-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: ["/favicon.ico"],
  },
  category: "Creative Portfolio",
  alternates: {
    canonical: siteUrl,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-06WHFTGY49"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-06WHFTGY49');
            `,
          }}
        />
        {/* JSON-LD Person schema for SEO. Update contact channels as needed. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Lawrence Corso",
              "alternateName": ["Larry Corso", "Pluto Smoke"],
              "url": siteUrl,
              "description": siteDescription,
              "jobTitle":
                "Palos Park Development & Design Lead, Creative Technologist & Night-Mode Product Visionary",
              "brand": {
                "@type": "Brand",
                "name": "Pluto Smoke",
                "slogan":
                  "Night-mode product visionary supporting the outcasts.",
                "url": siteUrl,
                "logo": `${siteUrl}/logo.svg`,
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Palos Park",
                "addressRegion": "IL",
                "postalCode": "60464",
                "addressCountry": "US",
              },
              "sameAs": [
                "https://twitter.com/rumidesign",
                "https://www.linkedin.com/in/larrycorso",
              ],
              "knowsAbout": [
                "Earth homes",
                "crowdfunding campaigns",
                "supporting the outcasts",
                "digital brand strategy",
                "creative technology",
                "Palos Park development",
                "Palos Park design",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "partnership inquiries",
                "email": "mailto:lawrence@rumidesign.tech",
                "areaServed": [
                  "Palos Park IL",
                  "Chicago Southland",
                  "United States",
                  "Global",
                ],
                "availableLanguage": ["English"],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Pluto Smoke Development & Design Studio",
              "image": `${siteUrl}/marketing-logo.png`,
              "url": siteUrl,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Palos Park",
                "addressRegion": "IL",
                "postalCode": "60464",
                "addressCountry": "US",
              },
              "areaServed": [
                "Palos Park",
                "Chicago Southland",
                "Southwest Suburbs",
              ],
              "priceRange": "$$$",
              "serviceType": [
                "Web development",
                "Brand and product design",
                "Crowdfunding strategy",
                "Creative direction",
              ],
              "email": "lawrence@rumidesign.tech",
              "founder": "Lawrence Corso",
              "sameAs": [
                "https://twitter.com/rumidesign",
                "https://www.linkedin.com/in/larrycorso",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
