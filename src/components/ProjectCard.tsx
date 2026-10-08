import Image from "next/image";
import Link from "next/link";
import { getStatusLabel } from "@/lib/projects";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
        <Image
          src={project.thumbnail}
          alt={project.title.ja}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 640px"
          style={{ objectPosition: project.thumbnailPosition }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>
      <div className="mt-4 md:mt-6">
        <h3 className="text-base md:text-lg tracking-wide font-light lining-nums">
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
        {project.categories.length > 0 && (
          <p className="mt-1 text-xs text-gray-500 tracking-wider">
            {project.categories.join(" / ")}
          </p>
        )}
      </div>
    </Link>
  );
}
