"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const sponsors = {
  gold: [
    "Nest Property Group",
    "CJ Gravel & RediMix",
    "Rodgers Racing"
  ],
  silver: [
    "Animas Auto Spa",
    "Diversified Roofing",
    "Aztec Motocross"
  ],
  bronze: [
    "Format Moto",
    "Bank of the San Juans",
    "GrassBurger",
    "Williams Funeral Home and Crematorium",
    "Moriarty MX/HeartBar MX"
  ]
};

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-oswald">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 bg-[#6c757d]">
        <div className="w-32 h-auto">
          <Image src="/images/d2xlogo.png" alt="D2X Logo" width={128} height={64} priority />
        </div>
        <div className="hidden md:flex gap-6 text-white text-lg">
          {['Training', 'Sponsors', 'Rider', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-kawasaki-green hover:underline transition"
            >
              {item}
            </a>
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
              {['Training', 'Sponsors', 'Rider', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-kawasaki-green hover:underline"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN SECTION */}
      <main className="flex-1 p-6 space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-kawasaki-green">Welcome to MX Training</h1>
          <p className="mt-2 text-lg">Motocross coaching, sponsor promotion, and elite rider development</p>
          <p className="mt-4 text-xl font-semibold text-yellow-400">
            Proudly Sponsored by Nest Property Group
          </p>
        </section>

        {/* SPONSOR CARD */}
        <Card className="p-6 bg-zinc-800 text-white shadow-xl max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Become a Sponsor</h2>
          <p className="mb-4">Support the next generation of motocross talent and grow your brand with us!</p>
          <button className="bg-kawasaki-green px-4 py-2 rounded text-black font-semibold">
            Contact Us
          </button>
        </Card>
      </main>

      {/* FOOTER */}
      <footer className="bg-zinc-900 py-4 text-center overflow-hidden relative border-t border-zinc-700">
        <div className="text-lg font-bold mb-1 text-kawasaki-green">Our Sponsors</div>
        <div className="animate-scroll whitespace-nowrap flex flex-col gap-2">
          <div className="flex gap-8 justify-center text-yellow-400 text-xl">
            {sponsors.gold.map((name) => (
              <div key={name} className="min-w-max">{name}</div>
            ))}
          </div>
          <div className="flex gap-6 justify-center text-silver text-base">
            {sponsors.silver.map((name) => (
              <div key={name} className="min-w-max">{name}</div>
            ))}
          </div>
          <div className="flex gap-4 justify-center text-bronze text-sm">
            {sponsors.bronze.map((name) => (
              <div key={name} className="min-w-max">{name}</div>
            ))}
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap');

        .text-kawasaki-green { color: #8cc63f; }
        .bg-kawasaki-green { background-color: #8cc63f; }
        .text-silver { color: #c0c0c0; }
        .text-bronze { color: #cd7f32; }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .font-oswald {
          font-family: 'Oswald', sans-serif;
        }
      `}</style>
    </div>
  );
}