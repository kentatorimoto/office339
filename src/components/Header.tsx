import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm group-has-[[data-home-hero]]/body:absolute group-has-[[data-home-hero]]/body:bg-transparent group-has-[[data-home-hero]]/body:backdrop-blur-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-18 md:h-24">
          <Link href="/" className="inline-flex items-center shrink-0">
            <Image
              src="/images/logo/logo.png"
              alt="office339"
              width={149}
              height={52}
              className="block shrink-0 h-11 md:h-13 w-auto -ml-3 md:-ml-4 group-has-[[data-home-hero]]/body:brightness-0 group-has-[[data-home-hero]]/body:invert"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
              priority
            />
          </Link>

          <nav className="flex items-baseline gap-3 md:gap-10 text-xs md:text-sm font-light text-gray-600 whitespace-nowrap group-has-[[data-home-hero]]/body:text-white">
            <Link
              href="/"
              className="tracking-[0.1em] md:tracking-[0.15em] hover:text-black group-has-[[data-home-hero]]/body:hover:text-white/70 transition-colors"
            >
              Practice
            </Link>
            <Link
              href="/ryuiki-editorial"
              className="text-[0.9em] tracking-[0.05em] hover:text-black group-has-[[data-home-hero]]/body:hover:text-white/70 transition-colors"
            >
              流域編集
            </Link>
            <Link
              href="/about"
              className="tracking-[0.1em] md:tracking-[0.15em] hover:text-black group-has-[[data-home-hero]]/body:hover:text-white/70 transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
