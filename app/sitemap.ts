import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://horizonvirtualcare.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/partners",
    "/services",
    "/what-we-do",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic team clinician profiles
  const teamIds = ["qalb-khan"];
  const dynamicRoutes = teamIds.map((id) => ({
    url: `${baseUrl}/about/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
