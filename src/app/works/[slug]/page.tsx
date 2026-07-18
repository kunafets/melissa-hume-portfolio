import Image from "next/image";
import Link from "next/link";
import { getWorkBySlug, getAllWorks } from "@/lib/works";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const works = getAllWorks();
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  return {
    title: `${work.title} | Melissa Hume`,
    description: work.description,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <div className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <Link
        href="/works"
        className="text-sm text-stone-400 hover:text-stone-700 transition-colors"
      >
        Back to Works
      </Link>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="aspect-square relative bg-stone-100">
          {work.images[0] && (
            <Image
              src={`/images/works/${work.slug}/${work.images[0]}`}
              alt={work.title}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-light text-stone-800">{work.title}</h1>

          <div className="mt-6 space-y-2 text-sm text-stone-500">
            {work.year && <p>{work.year}</p>}
            {work.medium && <p>{work.medium}</p>}
            {work.dimensions && <p>{work.dimensions}</p>}
          </div>

          {work.description && (
            <p className="mt-8 text-stone-600 leading-relaxed">
              {work.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}