import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <section className="pt-16 md:pt-24 pb-16 md:pb-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight">
          Page not found
        </h1>
        <p className="mt-6 text-sm text-gray-400">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm tracking-wider text-gray-400 hover:text-black transition-colors"
        >
          &larr; Practice
        </Link>
      </section>
    </div>
  );
}
