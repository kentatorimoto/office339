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
  categories: string[];
  role: LocalizedText;
  description: LocalizedText;
  thumbnail: string;
  thumbnailPosition?: string;
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
  parent?: string;
  listed?: boolean;
};

export function getAllProjects(): Project[] {
  const projects = (projectsData as Project[]).filter((p) => !p.hidden);
  return projects.sort((a, b) => a.order - b.order);
}

export function getListedProjects(): Project[] {
  return getAllProjects().filter((p) => p.listed !== false);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const listed = getListedProjects();
  const index = listed.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? listed[index - 1] : null,
    next: index < listed.length - 1 ? listed[index + 1] : null,
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
