"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-18 md:h-24">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="office339"
              width={240}
              height={52}
              className="h-[44px] md:h-[52px] w-auto -ml-3 md:-ml-4"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-sm tracking-wider text-gray-600 hover:text-black transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-wider text-gray-600 hover:text-black transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-black transition-transform ${
                isOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-black transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-black transition-transform ${
                isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-8 flex flex-col gap-6">
            <Link
              href="/"
              className="text-sm tracking-wider text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-wider text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
