import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {
  getAllPersonalArticles,
  getPersonalArticleBySlug,
} from "@/ressources/project-articles";

export const revalidate = 60;

type PersonalArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const articles = await getAllPersonalArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PersonalArticlePageProps) {
  const { slug } = await params;
  const article = await getPersonalArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: `${article.title} | Ritchi Andria`,
    description: article.summary,
  };
}

export default async function PersonalArticlePage({
  params,
}: PersonalArticlePageProps) {
  const { slug } = await params;
  const article = await getPersonalArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="project-article-page">
      <header className="project-article-header">
        <Link href="/">tchi.xyz</Link>
        <Link href="/work">Back to archive</Link>
      </header>

      <main className="project-article-main">
        <p className="project-article-category">{article.category}</p>
        <h1>{article.title}</h1>
        <p className="project-article-summary">{article.summary}</p>
        <div className="project-article-techs">
          {article.techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-article-image">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={720}
            priority
          />
        </div>

        <article className="project-article-content">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </article>
      </main>
    </div>
  );
}
