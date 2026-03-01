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
        <p className="mt-5 md:mt-6 text-base md:text-lg font-serif text-gray-500">
          アートを、実践として
        </p>
        <p className="mt-8 text-xs md:text-sm tracking-[0.3em] text-gray-400">
          SHANGHAI - TOKACHI
        </p>
      </section>

      {/* SITE Practice */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24 md:pb-32">
        <div className="mb-10 md:mb-14">
          <h2 className="text-sm tracking-widest text-gray-700 uppercase">
            SITE Practice
          </h2>
          <p className="mt-3 text-base font-light text-gray-600">
            Reading landscapes and activating the latent potential of place.
          </p>
          <p className="mt-1 text-sm font-light text-gray-500">
            土地や風景を見つめ直し、<br />場所に眠る可能性をひらく実践。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {projects
            .filter((p) => p.practice === "Site")
            .map((project, index) => (
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
                  <h3 className="text-base md:text-lg tracking-wide font-light">
                    {project.title.ja}
                  </h3>
                  {project.status === "active" && (
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-[10px] tracking-wider px-2 py-0.5 rounded-full border border-black/30 text-gray-400">
                        {getStatusLabel(project.status)}
                      </span>
                    </div>
                  )}
                  <div className="mt-1 text-sm text-gray-600 tracking-wider">
                    {project.period && <span>{project.period}</span>}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* URBAN Practice */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24 md:pb-32">
        <div className="mb-10 md:mb-14">
          <h2 className="text-sm tracking-widest text-gray-700 uppercase">
            URBAN Practice
          </h2>
          <p className="mt-3 text-base font-light text-gray-600">
            Treating the city itself as a medium to redesign spatial experience.
          </p>
          <p className="mt-1 text-sm font-light text-gray-500">
            都市をひとつのメディアとして捉え直し、<br />空間の体験を編み直す実践。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {projects
            .filter((p) => p.practice === "Urban")
            .map((project, index) => (
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
                  <h3 className="text-base md:text-lg tracking-wide font-light">
                    {project.title.ja}
                  </h3>
                  {project.status === "active" && (
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-[10px] tracking-wider px-2 py-0.5 rounded-full border border-black/30 text-gray-400">
                        {getStatusLabel(project.status)}
                      </span>
                    </div>
                  )}
                  <div className="mt-1 text-sm text-gray-600 tracking-wider">
                    {project.period && <span>{project.period}</span>}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* INTERFACE Practice */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-20">
        <div className="mb-10 md:mb-14">
          <h2 className="text-sm tracking-widest text-gray-700 uppercase">
            INTERFACE Practice
          </h2>
          <p className="mt-3 text-base font-light text-gray-600">
            Designing devices and perspectives that renew how we perceive the world.
          </p>
          <p className="mt-1 text-sm font-light text-gray-500">
            世界の見え方や関係性を見つめ直すための、<br />視点や装置をかたちにする実践。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {projects
            .filter((p) => p.practice === "Interface")
            .map((project, index) => (
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
                  <h3 className="text-base md:text-lg tracking-wide font-light">
                    {project.title.ja}
                  </h3>
                  {project.status === "active" && (
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-[10px] tracking-wider px-2 py-0.5 rounded-full border border-black/30 text-gray-400">
                        {getStatusLabel(project.status)}
                      </span>
                    </div>
                  )}
                  <div className="mt-1 text-sm text-gray-600 tracking-wider">
                    {project.period && <span>{project.period}</span>}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
