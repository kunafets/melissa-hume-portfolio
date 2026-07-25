import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-6 py-10 md:px-12 mt-auto border-t border-stone-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs tracking-wide text-stone-400 uppercase">
          &copy; {year} Melissa Hume
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/melissahumeceramics/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wide text-stone-400 hover:text-stone-700 uppercase transition-colors"
          >
            Instagram
          </a>
          <Link
            href="/contact"
            className="text-xs tracking-wide text-stone-400 hover:text-stone-700 uppercase transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
