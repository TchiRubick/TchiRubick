import { promises as fs } from "node:fs";
import path from "node:path";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");
const PROJECTS_ROOT = path.join(CONTENT_ROOT, "projects");
const ARTICLES_ROOT = path.join(CONTENT_ROOT, "articles");

type ContentKind = "project" | "article";
type ContentStatus = "published" | "draft";

type RawContentEntry = {
  title: string;
  category: string;
  summary: string;
  techs: string;
  image: string;
  status: string;
  publishedAt: string;
  externalUrl?: string;
};

export type ContentEntry = {
  kind: ContentKind;
  slug: string;
  title: string;
  category: string;
  summary: string;
  techs: string[];
  image: string;
  status: ContentStatus;
  publishedAt: string;
  content: string;
  externalUrl?: string;
};

export type ProjectArticle = ContentEntry & { kind: "project" };
export type PersonalArticle = ContentEntry & { kind: "article" };

const REQUIRED_FIELDS: Array<keyof RawContentEntry> = [
  "title",
  "category",
  "summary",
  "techs",
  "image",
  "status",
  "publishedAt",
];

const parseStatus = (value: string): ContentStatus => {
  const normalized = value.trim().toLowerCase();
  if (normalized === "published" || normalized === "draft") {
    return normalized;
  }
  throw new Error(
    `Invalid frontmatter field "status": "${value}". Expected "published" or "draft".`,
  );
};

const parseArticleFile = (
  fileContent: string,
): { meta: RawContentEntry; content: string } => {
  const sections = fileContent.split("---");
  if (sections.length < 3) {
    throw new Error("Invalid article format: frontmatter block is missing.");
  }

  const frontmatterBlock = sections[1].trim();
  const content = sections.slice(2).join("---").trim();
  const entries = frontmatterBlock
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex === -1) {
        throw new Error(`Invalid frontmatter line: "${line}"`);
      }
      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1).trim();
      return [key, value] as const;
    });

  const frontmatter = Object.fromEntries(entries) as Partial<RawContentEntry>;

  for (const field of REQUIRED_FIELDS) {
    if (!frontmatter[field]) {
      throw new Error(`Missing required frontmatter field "${field}".`);
    }
  }

  return {
    meta: frontmatter as RawContentEntry,
    content,
  };
};

const toPublicImagePath = (
  kind: ContentKind,
  slug: string,
  imageValue: string,
) => {
  if (imageValue.startsWith("/")) {
    return imageValue;
  }
  const root = kind === "project" ? "projects" : "articles";
  return `/${root}/${slug}/${imageValue}`;
};

const sortByDateDesc = (a: ContentEntry, b: ContentEntry) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();

const getEntriesByKind = async (kind: ContentKind): Promise<ContentEntry[]> => {
  const root = kind === "project" ? PROJECTS_ROOT : ARTICLES_ROOT;
  const dirEntries = await fs.readdir(root, { withFileTypes: true });
  const slugs = dirEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const articlePath = path.join(root, slug, "article.md");
      const fileContent = await fs.readFile(articlePath, "utf-8");
      const parsed = parseArticleFile(fileContent);

      return {
        kind,
        slug,
        title: parsed.meta.title,
        category: parsed.meta.category,
        summary: parsed.meta.summary,
        techs: parsed.meta.techs
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean),
        image: toPublicImagePath(kind, slug, parsed.meta.image),
        status: parseStatus(parsed.meta.status),
        publishedAt: parsed.meta.publishedAt,
        content: parsed.content,
        externalUrl: parsed.meta.externalUrl,
      } satisfies ContentEntry;
    }),
  );

  return entries
    .filter((entry) => entry.status === "published")
    .sort(sortByDateDesc);
};

const getEntryByKindAndSlug = async (
  kind: ContentKind,
  slug: string,
): Promise<ContentEntry | null> => {
  const root = kind === "project" ? PROJECTS_ROOT : ARTICLES_ROOT;
  const articlePath = path.join(root, slug, "article.md");

  try {
    const fileContent = await fs.readFile(articlePath, "utf-8");
    const parsed = parseArticleFile(fileContent);

    return {
      kind,
      slug,
      title: parsed.meta.title,
      category: parsed.meta.category,
      summary: parsed.meta.summary,
      techs: parsed.meta.techs
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),
      image: toPublicImagePath(kind, slug, parsed.meta.image),
      status: parseStatus(parsed.meta.status),
      publishedAt: parsed.meta.publishedAt,
      content: parsed.content,
      externalUrl: parsed.meta.externalUrl,
    };
  } catch {
    return null;
  }
};

export const getAllProjectArticles = async (): Promise<ProjectArticle[]> => {
  const projects = await getEntriesByKind("project");
  return projects as ProjectArticle[];
};

export const getProjectArticleBySlug = async (
  slug: string,
): Promise<ProjectArticle | null> => {
  const project = await getEntryByKindAndSlug("project", slug);
  if (project?.status !== "published") {
    return null;
  }
  return project as ProjectArticle | null;
};

export const getAllPersonalArticles = async (): Promise<PersonalArticle[]> => {
  const articles = await getEntriesByKind("article");
  return articles as PersonalArticle[];
};

export const getPersonalArticleBySlug = async (
  slug: string,
): Promise<PersonalArticle | null> => {
  const article = await getEntryByKindAndSlug("article", slug);
  if (article?.status !== "published") {
    return null;
  }
  return article as PersonalArticle | null;
};

export const getAllEntries = async (): Promise<ContentEntry[]> => {
  const [projects, articles] = await Promise.all([
    getAllProjectArticles(),
    getAllPersonalArticles(),
  ]);

  return [...projects, ...articles].sort(sortByDateDesc);
};

export const getLatestEntries = async (limit = 3): Promise<ContentEntry[]> => {
  const entries = await getAllEntries();
  return entries.slice(0, limit);
};
