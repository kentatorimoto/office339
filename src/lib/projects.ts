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
  role: LocalizedText;
  description: LocalizedText;
  thumbnail: string;
  images: string[];
  externalUrl: string;
  artists: Artist[];
  tagline?: string;
  videos?: { url: string; title?: string }[];
  exhibition?: {
    concept?: string;
    artists?: { name: string }[];
    credits?: { label: string; value: string }[];
  };
  tags: string[];
  order: number;
  hidden?: boolean;
};

export function getAllProjects(): Project[] {
  const projects = (projectsData as Project[]).filter((p) => !p.hidden);
  // active を上に、あとは order 順
  return projects.sort((a, b) => {
    if (a.status === "active" && b.status !== "active") return -1;
    if (a.status !== "active" && b.status === "active") return 1;
    return a.order - b.order;
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const projects = getAllProjects();
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
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
