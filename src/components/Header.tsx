import Link from "next/link";

const navLinks = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/exhibitions", label: "Exhibitions" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="w-full px-6 py-5 md:px-12">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-sm tracking-widest uppercase text-stone-800 hover:text-stone-500 transition-colors"
        >
          Melissa Hume
        </Link>
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm tracking-wide text-stone-600 hover:text-stone-800 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}