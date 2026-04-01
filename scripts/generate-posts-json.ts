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
  .map(({ id, title, excerpt, author, date, readTime, category, tags, featured, thumbnail }) => ({
    id,
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
