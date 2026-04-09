/**
 * Generates a public JSON file with blog post summaries
 * for the embeddable widget. Run with: bun scripts/generate-posts-json.ts
 */
import { blogPosts } from "../src/data/blogPosts.ts";
import { mkdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";

const outputPath = resolve(import.meta.dirname!, "../public/api/posts.json");

mkdirSync(dirname(outputPath), { recursive: true });

const postsForWidget = blogPosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map(({ id, slug, title, excerpt, author, date, readTime, category, tags, featured, thumbnail }) => ({
    id,
    slug,
    title,
    excerpt,
    author,
    date,
    readTime,
    category,
    tags,
    featured,
    thumbnail,
  }));

const output = {
  generated: new Date().toISOString(),
  baseUrl: "https://edvaldojeronimo.com.br",
  posts: postsForWidget,
};

writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf-8");

console.log(`✅ Generated ${postsForWidget.length} posts → ${outputPath}`);

// --- Generate sitemap.xml with blog post URLs ---
const siteUrl = "https://edvaldojeronimo.com";
const today = new Date().toISOString().split("T")[0];

const staticPages = [
  { loc: `${siteUrl}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${siteUrl}/blog`, changefreq: "weekly", priority: "0.9" },
  { loc: `${siteUrl}/#sobre`, changefreq: "monthly", priority: "0.8" },
  { loc: `${siteUrl}/#modalidades`, changefreq: "monthly", priority: "0.8" },
  { loc: `${siteUrl}/#atuacao`, changefreq: "monthly", priority: "0.8" },
  { loc: `${siteUrl}/#contato`, changefreq: "monthly", priority: "0.8" },
];

const blogPostEntries = blogPosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((post) => ({
    loc: `${siteUrl}/blog/${post.slug}`,
    lastmod: post.date,
    changefreq: "monthly",
    priority: "0.7",
  }));

const allEntries = [
  ...staticPages.map((p) => ({ ...p, lastmod: today })),
  ...blogPostEntries,
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const sitemapPath = resolve(import.meta.dirname!, "../public/sitemap.xml");
writeFileSync(sitemapPath, sitemapXml, "utf-8");

console.log(`✅ Generated sitemap with ${allEntries.length} URLs → ${sitemapPath}`);
