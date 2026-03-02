import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {
  getAllProjectArticles,
  getProjectArticleBySlug,
} from "@/ressources/project-articles";

export const revalidate = 60;

type ProjectArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const projects = await getAllProjectArticles();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectArticlePageProps) {
  const { slug } = await params;
  const project = await getProjectArticleBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Ritchi Andria`,
    description: project.summary,
  };
}

export default async function ProjectArticlePage({
  params,
}: ProjectArticlePageProps) {
  const { slug } = await params;
  const project = await getProjectArticleBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="project-article-page">
      <header className="project-article-header">
        <Link href="/">tchi.xyz</Link>
        <Link href="/work">Back to archive</Link>
      </header>

      <main className="project-article-main">
        <p className="project-article-category">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="project-article-summary">{project.summary}</p>
        <div className="project-article-techs">
          {project.techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-article-image">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={720}
            priority
          />
        </div>

        <article className="project-article-content">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </article>

        {project.externalUrl ? (
          <Link href={project.externalUrl} target="_blank">
            Visit live project
          </Link>
        ) : null}
      </main>
    </div>
  );
}
