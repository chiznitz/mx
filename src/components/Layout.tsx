"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const goldSponsorImages = [
  { src: "/images/nest-logo.png", alt: "Nest Property Group Logo", name: "Nest Property Group" },
  { src: "/images/c-and-j-gravel-logo-footer-300x84.png", alt: "CJ Gravel & RediMix Logo", name: "CJ Gravel & RediMix" },
  { src: "/images/RRF Logo Cover.jpg", alt: "Rodgers Racing Logo", name: "Rodgers Racing" },
];

const sponsors = {
  gold: goldSponsorImages, // Will be mapped to images
  silver: ["Animas Auto Spa", "Diversified Roofing", "Aztec Motocross"],
  bronze: [
    "Format Moto",
    "Bank of the San Juans",
    "GrassBurger",
    "Williams Funeral Home and Crematorium",
    "Moriarty MX/HeartBar MX"
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-oswald">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 bg-[#6c757d]">
        <div className="w-32 h-auto">
          <Link href="/">
            <Image src="/images/d2xlogo.png" alt="D2X Logo" width={128} height={64} priority />
          </Link>
        </div>
        <div className="hidden md:flex gap-6 text-white text-lg">
          {[
            { label: 'Meet the Team', href: '/team' },
            { label: 'Sponsors', href: '/sponsors' },
            { label: 'Training', href: '/training' },
            { label: 'Contact', href: '/contact' }
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-kawasaki-green hover:underline transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* GREEN BORDER UNDER NAVBAR */}
      <div className="h-1 bg-[#28a745]"></div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-zinc-900 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-2 gap-3">
              {[
                { label: 'Meet the Team', href: '/team' },
                { label: 'Sponsors', href: '/sponsors' },
                { label: 'Training', href: '/training' },
                { label: 'Contact', href: '/contact' }
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-kawasaki-green hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PAGE CONTENT */}
      <main className="flex-1 p-6 bg-black text-black">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-zinc-800 py-4 text-center border-t border-zinc-700"> {/* Changed bg-zinc-900 to bg-zinc-800 */}
        <div className="text-lg font-bold mb-1 text-kawasaki-green">Our Sponsors</div>
        <div className="flex flex-col gap-4 px-4"> {/* Main wrapper for sponsor tiers */}
          {/* Gold Sponsors - Images */}
          <div className="flex gap-8 justify-center items-center flex-wrap text-yellow-400 text-xl">
            {sponsors.gold.map((sponsor) => (
              <div key={sponsor.name} className="h-16 flex items-center">
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: 'auto', height: '100%', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
          {/* Silver Sponsors - Text */}
          <div className="flex gap-6 justify-center flex-wrap text-silver text-base">
            {sponsors.silver.map((name) => (
              <div key={name}>{name}</div>
            ))}
          </div>
          {/* Bronze Sponsors - Text */}
          <div className="flex gap-4 justify-center flex-wrap text-bronze text-sm">
            {sponsors.bronze.map((name) => (
              <div key={name}>{name}</div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
