"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image"; // Import Next.js Image component

export default function HomePage() {
  return (
    <main className="flex-1 p-6 space-y-8 text-center font-oswald text-black bg-black">
      <section className="bg-zinc-800 p-6 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-kawasaki-green">Welcome to MX Training</h1>
        <p className="mt-2 text-lg text-white">Motocross coaching, sponsor promotion, and elite rider development</p>
        <p className="mt-4 text-xl font-semibold text-yellow-400">
          Proudly Sponsored by Nest Property Group
        </p>
      </section>

      {/* SPONSOR CARD */}
      <section className="bg-zinc-800 p-6 rounded-xl shadow-md max-w-xl mx-auto">
        <Card className="text-white bg-zinc-800"> {/* Ensure card has a contrasting background */}
          <h2 className="text-2xl font-bold mb-2">Become a Sponsor</h2>
          <p className="mb-4">
            Support the next generation of motocross talent and grow your brand with us!
          </p>
          <button className="bg-kawasaki-green px-4 py-2 rounded text-black font-semibold">
            Contact Us
          </button>
        </Card>
      </section>

      {/* SYNDYT IMAGE SECTION */}
      <section className="p-6 rounded-xl shadow-md max-w-2xl mx-auto"> {/* Adjust max-width as needed */}
        <Card className="overflow-hidden bg-zinc-800"> {/* Card to frame the image, overflow-hidden for rounded corners on image */}
          <Image
            src="/images/Syndyt.jpeg"
            alt="Syndyt Action Photo"
            width={800} // Adjust width as needed, or use layout="responsive"
            height={600} // Adjust height as needed
            className="rounded-md" // Apply rounding to the image itself if card padding is 0
            priority // Optional: if it's an important image for LCP
          />
        </Card>
      </section>
    </main>
  );
}
