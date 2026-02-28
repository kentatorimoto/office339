import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-sm tracking-widest font-light">office339</p>
            <p className="text-xs text-gray-400 mt-2">
              Art Direction / Curation / Production
            </p>
          </div>
          <nav className="flex gap-8">
            <Link
              href="/"
              className="text-xs tracking-wider text-gray-500 hover:text-black transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-xs tracking-wider text-gray-500 hover:text-black transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
        <p className="text-xs text-gray-400 mt-12">
          &copy; {new Date().getFullYear()} office339. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
