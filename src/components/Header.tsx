import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 sticky top-0 bg-white z-40">
      <div className="max-w-[1094px] mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-[#012B55]">
          JUNICHI ISHIGAKI
        </Link>
        <nav className="flex gap-6 md:gap-8 text-sm md:text-base">
          <Link href="/" className="text-[#012B55] hover:opacity-60 transition-opacity">
            Portfolio
          </Link>
          <Link href="/about" className="text-[#012B55] hover:opacity-60 transition-opacity">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
