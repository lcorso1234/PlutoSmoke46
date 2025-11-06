import type { Metadata } from "next";
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: "Connect with Lawrence Corso | Palos Park Development & Design",
  description:
    "Email Lawrence “Larry” Corso in Palos Park, IL to discuss bespoke development, design systems, Earth home storytelling, and crowdfunding strategy for the Chicago Southland.",
  keywords: [
    "contact Lawrence Corso",
    "connect with Larry Corso",
    "Palos Park web development contact",
    "Palos Park design studio inquiry",
    "Pluto Smoke contact",
    "Earth homes collaborations",
    "support the outcasts",
    "crowdfunding strategist",
  ],
  openGraph: {
    title: "Connect with Lawrence Corso | Palos Park Development & Design",
    description:
      "Reach Lawrence “Pluto Smoke” Corso for Palos Park development & design, Earth home visions, and underdog alliances.",
    url: "https://geniusanonymous.org/connect",
    type: "website",
  },
  twitter: {
    title: "Connect with Lawrence Corso | Palos Park Development & Design",
    description:
      "Open a direct channel to Lawrence “Pluto Smoke” Corso in Palos Park for visionary development, design, and support for the outcasts.",
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://geniusanonymous.org/connect",
  },
};

export default function Connect() {
  const emailLink = 'mailto:lawrence@rumidesign.tech?subject=Digital Vision Project&body=Hello Lawrence,%0A%0AI have a project vision I\'d like to discuss.%0A%0ABest regards';

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto px-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8">
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]">
                LET&apos;S CONNECT
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
              JOIN THE DIGITAL REVOLUTION
            </p>
          </div>
        </section>

        <section className="flex-1 flex items-center justify-center px-8 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl font-black text-cyan-400 mb-6">
                TRANSMIT YOUR VISION
              </h2>
              <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
                Ready to build something extraordinary? Click the transmission button below to open your email client and send your vision directly.
              </p>
              <p className="text-base text-gray-400 mb-8 max-w-3xl mx-auto">
                I monitor this channel for Palos Park development, Chicago Southland design, bespoke product builds,
                and Earth home storytelling partnerships.
              </p>
            </div>

            <div className="mb-12">
              <a 
                href={emailLink}
                className="inline-block px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black text-2xl border-2 border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-all duration-300 transform hover:scale-105 animate-pulse"
              >
                📡 SEND TRANSMISSION
              </a>
            </div>

            <div className="bg-gray-900/50 border border-cyan-400/30 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                DIRECT CONTACT CHANNEL
              </h3>
              <div className="space-y-3">
                <p className="text-lg">
                  <span className="text-gray-400">Email:</span> 
                  <span className="text-white font-mono ml-2">lawrence@rumidesign.tech</span>
                </p>
                <p className="text-sm text-gray-400">
                  🛰️ Palos Park • Chicago Southland • Remote collaborators worldwide
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-200 mt-4">
                  {[
                    "Palos Park Development",
                    "Design Systems",
                    "Crowdfunding Strategy",
                    "Night-Mode Builds",
                  ].map((tag) => (
                    <span key={tag} className="border border-cyan-400/40 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <Navigation theme="blue" leftIcon="LOGO" />
    </div>
  );
}
