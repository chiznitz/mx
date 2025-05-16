"use client";

import Image from "next/image";

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-black text-black font-oswald p-6 space-y-8 max-w-5xl mx-auto">
      <section className="bg-zinc-800 p-6 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-kawasaki-green text-center">Tyler Lock</h1>
      </section>

      <section className="bg-zinc-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-white">About Me</h2>
        <p className="text-white">Racing motocross has been my passion since I was 4 years old. In 2010, I began chasing my dream of professional racing, earning my pro license in 2013. I stepped away in 2015 to pursue cycling including mountain, road and gravel racing. Now based in Durango, the itch is back, and I am ready to continue the motocross racing dream.</p>
      </section>

      <section className="bg-zinc-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-white">Mission</h2>
        <p className="text-white">Coaching for Durango DevoCross and racing local and national races, I hope to bring more attention to the sport and inspire a passion for motocross in our youth. I am looking to partner with sponsors, with a focus on local southwest businesses, and build strong relationships within the community. The ultimate goal is achieve a podium finish at Loretta Lynn’s National Motocross Championship in the Vet 30+ and Vet 25+ classes.</p>
      </section>

      <section className="bg-zinc-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-white">What Can I Do for You</h2>
        <p className="text-white">As a seasoned athlete, I will represent your business and brand with professionalism and respect. As a sponsor partner, your brand will come with us on our journey to every race and every practice. Through our marketing strategy of bike graphic logos, banners, event structures, vehicles and social media advertising, we plan to recognize and promote your business.</p>
      </section>

      <section className="bg-zinc-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-white">2025 Highlights</h2>
        <table className="w-full text-left table-auto text-white">
          <thead>
            <tr className="text-kawasaki-green border-b border-zinc-600">
              <th className="pb-2">Event</th>
              <th className="pb-2">Class / Result</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Texas Underground MX Winter Series Rd 1</td><td>Open Pro Sport 2nd & 25+A 1st</td></tr>
            <tr><td>Aztec Motocross Championship Rd 1</td><td>450 Pro 1st & Vet 30 1st</td></tr>
            <tr><td>Thunder Valley Loretta Lynn Qualifier</td><td>JR 25+ 3rd & Vet 30 1st</td></tr>
            <tr><td>Aztec Motocross Championship Rd 2</td><td>450 Pro 1st & Vet 30 1st</td></tr>
            <tr><td>Mesquite MX World Mini GP</td><td>Vet 25 4th & Vet 30 2nd</td></tr>
          </tbody>
        </table>
      </section>

      <section className="bg-zinc-800 p-6 rounded-xl shadow-md">
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Image src="/images/tyler1.png" alt="Tyler Racing" width={300} height={200} className="rounded" />
          <Image src="/images/tyler2.png" alt="Podium" width={300} height={200} className="rounded" />
          <Image src="/images/tyler3.png" alt="Mid Air" width={300} height={200} className="rounded" />
        </div>
      </section>
    </main>
  );
}
