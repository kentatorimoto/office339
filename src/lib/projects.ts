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
  status: "ongoing" | "completed" | "archive";
  role: LocalizedText;
  description: LocalizedText;
  thumbnail: string;
  images: string[];
  externalUrl: string;
  artists: Artist[];
  tagline?: string;
  videos?: { url: string; title?: string }[];
  tags: string[];
  order: number;
};

export function getAllProjects(): Project[] {
  const projects = projectsData as Project[];
  // ongoing を上に、あとは order 順
  return projects.sort((a, b) => {
    if (a.status === "ongoing" && b.status !== "ongoing") return -1;
    if (a.status !== "ongoing" && b.status === "ongoing") return 1;
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
    case "ongoing":
      return "Ongoing";
    case "completed":
      return "Completed";
    case "archive":
      return "Archive";
  }
}
