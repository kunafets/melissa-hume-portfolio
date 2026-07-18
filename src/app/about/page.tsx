import { longBio } from "@/content/about";

export const metadata = {
  title: "About | Melissa Hume",
  description:
    "Learn about Melissa Hume, a Vancouver-based ceramic artist creating functional and sculptural work.",
};

export default function AboutPage() {
  return (
    <div className="px-6 md:px-12 py-20 max-w-3xl mx-auto">
      <h1 className="text-sm tracking-widest uppercase text-stone-500 mb-10 text-center">
        About
      </h1>
      <div className="space-y-6 text-lg leading-relaxed text-stone-600">
        {longBio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-16 aspect-video">
        <iframe
          src="https://player.vimeo.com/video/70832838"
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Melissa Hume Pottery"
        />
      </div>
    </div>
  );
}