import ProjectCard from "@/components/ProjectCard";
import { getListedProjects } from "@/lib/projects";

export default function Home() {
  const projects = getListedProjects();
  const activeProjects = projects.filter((p) => p.status === "active");

  return (
    <>
      {/* Hero / Intro */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pt-14 md:pt-48 pb-24 md:pb-56">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light italic tracking-tight leading-tight font-display">
          Art, as Practice.
        </h1>
        <p className="mt-5 md:mt-6 text-base md:text-lg font-serif text-gray-500">
          アートを、実践として
        </p>
        <p className="mt-8 text-[11px] md:text-sm tracking-[0.3em] text-gray-500">
          SHANGHAI - TOKACHI - TOKYO
        </p>
        <div className="mt-32 md:mt-48 max-w-2xl">
          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700 lining-nums">
            office339 は、アートを実践として展開するスタジオです。
            <br className="hidden md:block" />
            土地や風景、都市、人の技——すでにそこにある素材を読み、
            <br className="hidden md:block" />
            場が育つための構造そのものを設計しています。
          </p>
          <p className="mt-4 text-sm md:text-base font-light text-gray-500 lining-nums">
            2006年、上海で設立。
          </p>
        </div>
      </section>

      {/* Active */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16 md:pb-32">
        <h2 className="mb-10 md:mb-16 text-2xl md:text-4xl lg:text-5xl tracking-tight font-light font-display">
          Active
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-24">
          {activeProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* All projects */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-12 md:pb-20">
        <h2 className="mb-10 md:mb-16 text-2xl md:text-4xl lg:text-5xl tracking-tight font-light font-display">
          Practice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-24">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Studio */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pt-16 md:pt-32 pb-20 md:pb-40 border-t border-gray-100">
        <div className="max-w-2xl">
          <h2 className="text-xl md:text-2xl tracking-tight font-light font-display">
            Studio
          </h2>
          <p className="mt-6 md:mt-8 text-base md:text-lg font-light leading-relaxed text-gray-700">
            地域・文化・技術の現場に伴走し、
            <br className="hidden md:block" />
            場が育つための構造を、共に設計する仕事を、
            <br className="hidden md:block" />
            限られた数だけお受けしています。
          </p>
          <p className="mt-4 text-base md:text-lg font-light leading-relaxed text-gray-700">
            長期的な対話を前提とした協働を、丁寧に重ねていきたいと考えています。
          </p>
        </div>
      </section>
    </>
  );
}
