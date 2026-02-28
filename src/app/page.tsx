import Image from "next/image";
import Link from "next/link";
import { getAllProjects, getStatusLabel } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      {/* Hero / Intro */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pt-48 md:pt-48 pb-60 md:pb-56">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light italic tracking-tight leading-tight font-display">
          Art, as Practice.
        </h1>
        <p className="mt-3 md:mt-4 text-sm md:text-base font-serif text-gray-500">
          アートを実践として。
        </p>
        <p className="mt-8 text-xs md:text-sm tracking-[0.3em] text-gray-400">
          SHANGHAI - TOKACHI - TOKYO
        </p>
      </section>

      {/* Project Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-20">
        <h2 className="text-xs tracking-widest text-gray-400 uppercase mb-12 md:mb-16">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group block ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden bg-gray-100 ${
                  index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title.ja}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 1280px"
                      : "(max-width: 768px) 100vw, 640px"
                  }
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              <div className="mt-4 md:mt-6">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-base md:text-lg tracking-wide font-light">
                    {project.title.ja}
                  </h3>
                  <span
                    className={`text-[10px] tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${
                      project.status === "ongoing"
                        ? "border-black text-black"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {getStatusLabel(project.status)}
                  </span>
                </div>
                <div className="mt-1 flex items-baseline gap-4 text-xs text-gray-400">
                  {project.period && <span>{project.period}</span>}
                  {project.role.ja && (
                    <span className="tracking-wider">{project.role.ja}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
