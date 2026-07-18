import Link from "next/link";
import Image from "next/image";
import { getAllWorks } from "@/lib/works";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | Melissa Hume",
  description:
    "Selected ceramic works by Melissa Hume, including functional and sculptural pieces.",
};

export default function WorksPage() {
  const works = getAllWorks();

  return (
    <div className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <h1 className="text-sm tracking-widest uppercase text-stone-500 mb-12">
        Works
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {works.map((work) => (
          <Link key={work.slug} href={`/works/${work.slug}`} className="group">
            <div className="aspect-square relative overflow-hidden bg-stone-100">
              {work.images[0] && (
              <Image
                src={`/images/works/${work.slug}/${work.images[0]}`}
                alt={work.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              )}
            </div>
            <div className="mt-4">
              <h2 className="text-base text-stone-800">{work.title}</h2>
              {work.year && (
                <p className="text-sm text-stone-400 mt-1">{work.year}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}