import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getAllProjects,
  getProjectBySlug,
  getAdjacentProjects,
  getStatusLabel,
} from "@/lib/projects";

import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found — office339" };
  return {
    title: `${project.title.ja} — office339`,
    description: project.description.ja,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="max-w-7xl mx-auto px-6 md:px-12">
      {/* Back link */}
      <div className="pt-8 md:pt-12">
        <Link
          href="/"
          className="text-xs tracking-wider text-gray-400 hover:text-black transition-colors"
        >
          &larr; Projects
        </Link>
      </div>

      {/* Title section */}
      <header className="pt-12 md:pt-20 pb-12 md:pb-16">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight">
          {project.title.ja}
        </h1>
        {project.title.en !== project.title.ja && (
          <p className="mt-2 text-sm text-gray-400">{project.title.en}</p>
        )}
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-xs text-gray-400 tracking-wider">
          {project.period && <span>{project.period}</span>}
          {project.role.ja && <span>{project.role.ja}</span>}
          <span
            className={`border px-2 py-0.5 rounded-full ${
              project.status === "ongoing"
                ? "border-black text-black"
                : "border-gray-300 text-gray-400"
            }`}
          >
            {getStatusLabel(project.status)}
          </span>
        </div>
      </header>

      {/* Hero image */}
      <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title.ja}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1280px"
          priority
        />
      </div>

      {/* Description */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-24">
        <div className="md:col-span-4">
          <h2 className="text-xs tracking-widest text-gray-400 uppercase">
            Overview
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-base md:text-lg leading-relaxed font-light">
            {project.description.ja}
          </p>
          {project.description.en && (
            <p className="text-sm leading-relaxed text-gray-400">
              {project.description.en}
            </p>
          )}
        </div>
      </div>

      {/* Photo gallery */}
      {project.images.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {project.images.slice(1).map((image, index) => (
            <div
              key={index}
              className={`relative bg-gray-100 overflow-hidden ${
                index === 0 && (project.images.length - 1) % 2 !== 0
                  ? "md:col-span-2 aspect-[16/9]"
                  : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image}
                alt={`${project.title.ja} - ${index + 2}`}
                fill
                className="object-cover"
                sizes={
                  index === 0 && (project.images.length - 1) % 2 !== 0
                    ? "(max-width: 768px) 100vw, 1280px"
                    : "(max-width: 768px) 100vw, 640px"
                }
              />
            </div>
          ))}
        </div>
      )}

      {/* Artists */}
      {project.artists.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-24">
          <div className="md:col-span-4">
            <h2 className="text-xs tracking-widest text-gray-400 uppercase">
              Artists
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-3">
              {project.artists.map((artist, index) => (
                <li key={index} className="flex items-baseline gap-4">
                  <span className="text-sm font-light">{artist.name}</span>
                  {artist.role && (
                    <span className="text-xs text-gray-400">{artist.role}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Project info */}
      <div className="border-t border-gray-200 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {project.period && (
          <div>
            <p className="text-xs text-gray-400 tracking-wider mb-1">Period</p>
            <p className="text-sm font-light">{project.period}</p>
          </div>
        )}
        <div>
          <p className="text-xs text-gray-400 tracking-wider mb-1">Status</p>
          <p className="text-sm font-light">
            {getStatusLabel(project.status)}
          </p>
        </div>
        {project.role.ja && (
          <div>
            <p className="text-xs text-gray-400 tracking-wider mb-1">Role</p>
            <p className="text-sm font-light">{project.role.ja}</p>
          </div>
        )}
        {project.externalUrl && (
          <div>
            <p className="text-xs text-gray-400 tracking-wider mb-1">
              Website
            </p>
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light underline underline-offset-4 hover:text-gray-600 transition-colors"
            >
              Visit site &rarr;
            </a>
          </div>
        )}
      </div>

      {/* Prev / Next navigation */}
      <nav className="border-t border-gray-200 py-12 md:py-16 grid grid-cols-2 gap-8">
        <div>
          {prev && (
            <Link
              href={`/projects/${prev.slug}`}
              className="group block"
            >
              <p className="text-xs text-gray-400 tracking-wider mb-2">
                &larr; Prev
              </p>
              <p className="text-sm font-light group-hover:text-gray-500 transition-colors">
                {prev.title.ja}
              </p>
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="group block"
            >
              <p className="text-xs text-gray-400 tracking-wider mb-2">
                Next &rarr;
              </p>
              <p className="text-sm font-light group-hover:text-gray-500 transition-colors">
                {next.title.ja}
              </p>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
