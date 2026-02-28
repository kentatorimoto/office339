import Image from "next/image";
import type { Metadata } from "next";
import aboutData from "../../../data/about.json";

export const metadata: Metadata = {
  title: "About — office339",
  description: aboutData.office.ja,
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {/* Title */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight">
          About
        </h1>
      </section>

      {/* About office339 */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pb-16 md:pb-24">
        <div className="md:col-span-4">
          <h2 className="text-xs tracking-widest text-gray-400 uppercase">
            About
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-base md:text-lg leading-relaxed font-light">
            {aboutData.office.ja}
          </p>
          <p className="text-sm leading-relaxed text-gray-400">
            {aboutData.office.en}
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="border-t border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-24">
        <div className="md:col-span-4">
          <h2 className="text-xs tracking-widest text-gray-400 uppercase">
            Profile
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <div>
            <p className="text-2xl md:text-3xl font-light tracking-tight">
              {aboutData.name.ja}
            </p>
            <p className="mt-1 text-sm text-gray-400">{aboutData.name.en}</p>
            <p className="mt-3 text-sm text-gray-500">{aboutData.title.ja}</p>
          </div>
          <div>
            <Image
              src="/images/about/profile.jpg"
              alt={aboutData.name.ja}
              width={800}
              height={533}
              className="max-w-xs w-full h-auto"
              sizes="(max-width: 768px) 70vw, 320px"
            />
            <p className="mt-2 text-[11px] text-gray-400 tracking-wider">
              photo by Yukinori Tokoro
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-24">
        <div className="md:col-span-4">
          <h2 className="text-xs tracking-widest text-gray-400 uppercase">
            Contact
          </h2>
        </div>
        <div className="md:col-span-8">
          <div>
            <p className="text-xs text-gray-400 tracking-wider mb-2">Email</p>
            <a
              href={`mailto:${aboutData.links.email}`}
              className="text-base md:text-lg font-light underline underline-offset-4 hover:text-gray-500 transition-colors"
            >
              {aboutData.links.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
