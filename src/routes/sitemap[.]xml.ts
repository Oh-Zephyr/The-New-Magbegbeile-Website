import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://magbagbeile.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const STATIC_ROUTES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/community", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/journal", changefreq: "weekly", priority: "0.9" },
  { path: "/stories", changefreq: "weekly", priority: "0.9" },
];

const JOURNAL_SLUGS = [
  "why-african-traditions-matter",
  "digital-age",
  "storytelling",
  "roots",
  "diaspora",
  "oral-traditions",
  "timbuktu",
  "ubuntu",
];

const STORY_IDS = [
  "voices-of-the-elders",
  "the-land-remembers",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...STATIC_ROUTES,
          ...JOURNAL_SLUGS.map((slug) => ({
            path: `/journal/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...STORY_IDS.map((id) => ({
            path: `/stories/${id}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
