import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 sticky top-0 bg-white/90 backdrop-blur-sm z-40">
      <div className="max-w-[960px] mx-auto px-8 md:px-12 py-6 flex justify-between items-center">
        <Link href="/" className="text-sm font-normal tracking-[0.08em] uppercase">
          Junichi Ishigaki
        </Link>
        <nav className="flex gap-8 text-sm">
          <Link href="/" className="hover:opacity-50 transition-opacity">
            Portfolio
          </Link>
          <Link href="/about" className="hover:opacity-50 transition-opacity">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
