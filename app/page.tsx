import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ScrollAnimation from "@/components/ScrollAnimation";
import EnhancedButton from "@/components/EnhancedButton";

export const metadata: Metadata = {
  title: "Palos Park Development & Design Studio | Lawrence Corso",
  description:
    "Lawrence “Larry” Corso (Pluto Smoke) leads a Palos Park, IL development and design studio delivering night-mode web builds, brand systems, and crowdfunding strategy for rebels and real estate visionaries.",
  keywords: [
    "Palos Park development",
    "Palos Park design",
    "Palos Park web developer",
    "Lawrence Corso",
    "Larry Corso",
    "Pluto Smoke",
    "night-mode strategist",
    "Earth homes visionary",
    "crowdfunding strategist",
    "creative technologist portfolio",
    "Chicago Southland product designer",
  ],
  openGraph: {
    title: "Palos Park Development & Design Studio | Lawrence Corso",
    description:
      "Discover how Lawrence “Pluto Smoke” Corso powers Palos Park development projects, Earth home ecosystems, underdog movements, and visionary crowdfunding campaigns from his nocturnal HQ.",
    url: "https://geniusanonymous.org/",
    type: "website",
  },
  twitter: {
    title: "Palos Park Development & Design Studio | Lawrence Corso",
    description:
      "Lawrence “Pluto Smoke” Corso builds Palos Park-focused development and design systems for Earth homes, outcasts, and bold founders.",
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://geniusanonymous.org/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10">
        <section className="min-h-screen flex flex-col justify-center items-center px-8 text-center pb-32 mt-20">
          <div className="max-w-6xl mx-auto">
            {/* Main Title */}
            <ScrollAnimation animation="slideInDown" delay={0.2}>
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black mb-12 gpu-accelerated">
                <span className="bg-gradient-to-r from-yellow-400 via-gray-300 to-black bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,0,0.8)]">
                  I DON&apos;T WORK FOR YOU
                </span>
              </h1>
              <p className="text-gray-200 text-lg sm:text-xl font-semibold tracking-[0.2em] uppercase">
                Palos Park • Development &amp; Design • Lawrence &quot;Larry&quot; Corso
              </p>
            </ScrollAnimation>

            {/* Night Work Declaration */}
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <div className="mb-16">
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8">
                  <span className="bg-gradient-to-r from-yellow-400 to-gray-600 bg-clip-text text-transparent pulse-slow drop-shadow-[0_0_15px_rgba(255,255,0,0.6)]">
                    I WORK AT NIGHT
                  </span>
                </h2>
                <p className="text-2xl sm:text-3xl font-bold text-gray-300 drop-shadow-[0_0_10px_rgba(255,255,0,0.3)]">
                  🦇 WHEN THE CITY SLEEPS, THE VISIONARY AWAKENS 🦇
                </p>
              </div>
            </ScrollAnimation>

            {/* Manifesto */}
            <div className="space-y-6 mb-20 text-xl sm:text-2xl lg:text-3xl font-bold">
              <ScrollAnimation animation="fadeInLeft" delay={0.6}>
                <p className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] pulse-fast">
                  I WORK FOR ME.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInRight" delay={0.8}>
                <p className="text-orange-400 drop-shadow-[0_0_10px_rgba(255,165,0,0.5)] pulse-fast">
                  I EXPRESS MYSELF THROUGH YOUR WORK.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInLeft" delay={1.0}>
                <p className="text-purple-400 drop-shadow-[0_0_10px_rgba(147,51,234,0.5)] pulse-fast">
                  I AM A MAN WITH A PLAN.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInRight" delay={1.2}>
                <p className="text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] pulse-fast">
                  I TAKE CARE OF PEOPLE I LOVE.
                </p>
              </ScrollAnimation>
            </div>

            {/* Business Value Proposition */}
            <ScrollAnimation animation="scaleIn" delay={1.4}>
              <div className="mb-24 p-8 sm:p-10 lg:p-12 border-2 border-gradient-to-r from-yellow-400 to-orange-500 rounded-lg bg-gradient-to-r from-yellow-400/10 to-orange-500/10 backdrop-blur-sm">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,165,0,0.8)]">
                    EVERY PROJECT IS A MASTERPIECE
                  </span>
                </h3>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-gray-100 leading-relaxed">
                  When you engage us for implementing your business and brand strategies, 
                  <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.6)]"> you&apos;re not just getting a service</span> — 
                  <span className="text-orange-400 drop-shadow-[0_0_10px_rgba(255,165,0,0.6)]"> you&apos;re acquiring a work of art</span>.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-300 mb-8">
                  Each strategy we craft is <span className="text-red-400 font-black">PRICELESS</span>{' '}
                  and engineered to <span className="text-green-400 font-black">GUARANTEE SUCCESS</span>.
                </p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl animate-pulse">💎</span>
                  <span className="mx-4 text-yellow-400 font-mono text-lg">PRECISION • ARTISTRY • RESULTS</span>
                  <span className="text-4xl animate-pulse">💎</span>
                </div>
              </div>
            </ScrollAnimation>

            {/* Palos Park Local SEO Section */}
            <ScrollAnimation animation="fadeInUp" delay={1.6}>
              <div className="mb-24 bg-black/60 border border-yellow-400/40 rounded-[28px] p-8 sm:p-12 text-left">
                <p className="text-base uppercase tracking-[0.4em] text-yellow-200 mb-6">
                  Palos Park • Chicago Southland
                </p>
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">
                  Palos Park Development &amp; Design for Builders, Dreamers, and Rebels
                </h3>
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-6">
                  From a studio hidden in Palos Park, IL, I craft bespoke web development, experience design,
                  and storytelling systems for custom homebuilders, nonprofits, hospitality brands, and anyone
                  determined to protect the outcasts. Search for Palos Park development, Palos Park design, or
                  Chicago Southland creative direction—you&apos;ll land right here.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Palos Park web development & SEO",
                    "High-touch brand + product design",
                    "Real estate & Earth home storytelling",
                    "Crowdfunding campaigns that convert",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-yellow-100 font-semibold"
                    >
                      <span className="text-green-400">✦</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Guardian Declaration */}
            <ScrollAnimation animation="scaleIn" delay={0.3}>
              <div className="relative mb-20">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                  <span className="bg-gradient-to-r from-yellow-400 via-gray-300 to-yellow-500 bg-clip-text text-transparent">
                    GUARDIAN OF THE NIGHT
                  </span>
                </h3>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-gray-300 via-yellow-400 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,0,0.5)]">
                    I PROTECT WHAT MATTERS MOST
                  </span>
                </p>
                <p className="text-lg sm:text-xl text-gray-400 font-medium">
                  💛 While others sleep, I craft digital justice 💛
                </p>
              </div>
            </ScrollAnimation>

            {/* Call to Action */}
            <ScrollAnimation animation="fadeInUp" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
                <EnhancedButton 
                  href="/portfolio" 
                  variant="primary"
                  className="bounce-subtle transform hover:scale-105"
                >
                  WITNESS THE DARKNESS
                </EnhancedButton>
                <EnhancedButton 
                  href="/connect" 
                  variant="secondary"
                  className="transform hover:scale-105"
                >
                  SIGNAL THE BAT
                </EnhancedButton>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <Navigation theme="pink" />
    </div>
  );
}
