import Image from "next/image";
import Link from "next/link";
import { getAllProjects, getStatusLabel } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      {/* Hero / Intro */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pt-32 md:pt-48 pb-24 md:pb-56">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light italic tracking-tight leading-tight font-display">
          Art, as Practice.
        </h1>
        <p className="mt-5 md:mt-6 text-base md:text-lg font-serif text-gray-500">
          アートを、実践として
        </p>
        <p className="mt-8 text-xs md:text-sm tracking-[0.3em] text-gray-400">
          SHANGHAI - TOKACHI
        </p>
        <div className="mt-32 md:mt-48 max-w-2xl">
          <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
            office339 は、北海道・十勝を拠点に、アートを実践として展開するスタジオです。
            <br className="hidden md:block" />
            場所・都市・インターフェースという3つの実践領域を横断し、
            <br className="hidden md:block" />
            場が育つための構造そのものを設計しています。
          </p>
          <p className="mt-4 text-sm md:text-base font-light text-gray-500">
            2006年、上海で設立。
          </p>
        </div>
      </section>

      {/* SITE Practice */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16 md:pb-32">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-tight font-light font-display">
            SITE Practice
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-lg font-light leading-relaxed text-gray-700">
            土地や風景を見つめ直し、<br />場所に眠る可能性をひらく実践。
          </p>
          <p className="mt-2 text-sm font-light text-gray-400">
            Reading landscapes and activating the latent potential of place.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-24">
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
                    style={
                      project.slug === "ryuiki" ? { objectPosition: "55% 35%" } :
                      project.slug === "shintoku-atlas" ? { objectPosition: "left center" } :
                      undefined
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
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16 md:pb-32">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-tight font-light font-display">
            URBAN Practice
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-lg font-light leading-relaxed text-gray-700">
            都市をひとつのメディアとして捉え直し、<br />空間の体験を編み直す実践。
          </p>
          <p className="mt-2 text-sm font-light text-gray-400">
            Treating the city itself as a medium to redesign spatial experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-24">
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
                    style={
                      project.slug === "ryuiki" ? { objectPosition: "55% 35%" } :
                      project.slug === "shintoku-atlas" ? { objectPosition: "left center" } :
                      undefined
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
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-12 md:pb-20">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-tight font-light font-display">
            INTERFACE Practice
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-lg font-light leading-relaxed text-gray-700">
            世界の見え方や関係性を見つめ直すための、<br />視点や装置をかたちにする実践。
          </p>
          <p className="mt-2 text-sm font-light text-gray-400">
            Designing devices and perspectives that renew how we perceive the world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-24">
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
                    style={
                      project.slug === "ryuiki" ? { objectPosition: "55% 35%" } :
                      project.slug === "shintoku-atlas" ? { objectPosition: "left center" } :
                      undefined
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
