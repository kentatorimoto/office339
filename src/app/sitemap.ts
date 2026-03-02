import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

const BASE_URL = "https://office339.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects().map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/about`, lastModified: new Date() },
    ...projects,
  ];
}
