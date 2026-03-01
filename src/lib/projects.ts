import projectsData from "../../data/projects.json";

export type LocalizedText = {
  ja: string;
  en: string;
};

export type Artist = {
  name: string;
  role: string;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  period: string;
  status: "active" | "works" | "archive";
  practice: "Site" | "Urban" | "Interface";
  role: LocalizedText;
  description: LocalizedText;
  thumbnail: string;
  images: string[];
  externalUrl: string;
  externalUrlNote?: string;
  artists: Artist[];
  tagline?: string;
  videos?: { url: string; title?: string }[];
  exhibition?: {
    concept?: string;
    artists?: { name: string }[];
    programs?: { name: string; href?: string }[];
    credits?: { label: string; value: string }[];
    textSections?: { label: string; items: string[] }[];
  };
  tags: string[];
  order: number;
  hidden?: boolean;
};

export function getAllProjects(): Project[] {
  const projects = (projectsData as Project[]).filter((p) => !p.hidden);
  return projects.sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const project = getProjectBySlug(slug);
  if (!project) return { prev: null, next: null };

  const samePractice = getAllProjects().filter(
    (p) => p.practice === project.practice
  );
  const index = samePractice.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? samePractice[index - 1] : null,
    next: index < samePractice.length - 1 ? samePractice[index + 1] : null,
  };
}

export function getStatusLabel(status: Project["status"]): string {
  switch (status) {
    case "active":
      return "Active";
    case "works":
      return "Works";
    case "archive":
      return "Archive";
  }
}
