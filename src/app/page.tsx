import Image from "next/image";
import Link from "next/link";
import { shortBio } from "@/content/about";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative w-full h-[85vh] min-h-[500px]">
        <Image
          src="/images/site/hero.jpg"
          alt="Ceramic sculptures by Melissa Hume"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-12 left-6 md:left-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-white">
            Melissa Hume
          </h1>
          <p className="mt-2 text-lg text-white/90">Ceramic Artist</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 md:px-12 py-20 max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl leading-relaxed text-stone-600">
          {shortBio}
        </p>
      </section>

{/* Featured Works
      <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-stone-500 mb-8">
          Selected Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <p className="text-stone-400 italic">
            Featured works will appear here once added.
          </p>
        </div>
        <Link
          href="/works"
          className="inline-block mt-10 text-sm tracking-wide text-stone-700 border-b border-stone-300 hover:border-stone-700 transition-colors"
        >
          View all works
        </Link>
      </section>
  Exhibition
      <section className="px-6 md:px-12 py-20 bg-stone-100 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm tracking-widest uppercase text-stone-500 mb-4">
            Current Exhibition
          </h2>
          <p className="text-stone-400 italic">
            Exhibition details will appear here once added.
          </p>
        </div>
      </section>
      */}

      {/* Instagram CTA */}
      <section className="px-6 md:px-12 py-20 text-center">
        <p className="text-stone-600 mb-4">
          Follow along in the studio on Instagram
        </p>
        <a 
          href="https://www.instagram.com/melissahumeceramics/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm tracking-widest uppercase text-stone-800 border-b border-stone-300 hover:border-stone-800 transition-colors"
        >
          @melissahumeceramics
        </a>
      </section>
    </div>
  );
}