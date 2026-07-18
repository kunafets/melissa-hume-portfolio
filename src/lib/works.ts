import fs from "fs";
import path from "path";
import matter from "gray-matter";

const worksDirectory = path.join(process.cwd(), "content/works");

export type Work = {
  slug: string;
  title: string;
  year?: string;
  medium?: string;
  dimensions?: string;
  description?: string;
  images: string[];
};

export function getAllWorks(): Work[] {
  const filenames = fs.readdirSync(worksDirectory);

  return filenames
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const filePath = path.join(worksDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { content } = matter(fileContents);

      const titleMatch = content.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1].trim() : slug;

      const images = extractImages(content);
      const description = extractSection(content, "Description");
      const year = extractSection(content, "Year");
      const medium = extractSection(content, "Medium");
      const dimensions = extractSection(content, "Dimensions");

      return {
        slug,
        title,
        year,
        medium,
        dimensions,
        description,
        images,
      };
    });
}

export function getWorkBySlug(slug: string): Work | undefined {
  const filePath = path.join(worksDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);

  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : slug;

  const images = extractImages(content);
  const description = extractSection(content, "Description");
  const year = extractSection(content, "Year");
  const medium = extractSection(content, "Medium");
  const dimensions = extractSection(content, "Dimensions");

  return {
    slug,
    title,
    year,
    medium,
    dimensions,
    description,
    images,
  };
}

function extractSection(content: string, section: string): string | undefined {
  const regex = new RegExp(
    `##\\s+${section}\\s*\\n([\\s\\S]*?)(?=\\n##|$)`,
    "i"
  );
  const match = content.match(regex);
  return match ? match[1].trim() : undefined;
}

function extractImages(content: string): string[] {
  const section = extractSection(content, "Images");
  if (!section) return [];
  return section
    .split("\n")
    .map((line) => line.replace(/^-\s*/, "").trim())
    .filter(Boolean);
}