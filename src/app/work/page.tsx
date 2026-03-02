import type { Metadata } from "next";
import Link from "next/link";
import { getAllEntries } from "@/ressources/project-articles";

export const metadata: Metadata = {
  title: "All Projects and Articles | Ritchi Andria",
  description:
    "A complete list of project case studies and technical or career articles by Ritchi Andria.",
};

export default async function WorkPage() {
  const entries = await getAllEntries();

  return (
    <div className="project-article-page">
      <header className="project-article-header">
        <Link href="/">tchi.xyz</Link>
        <Link href="/">Back home</Link>
      </header>

      <main className="project-article-main">
        <p className="project-article-category">Archive</p>
        <h1>Projects and Articles</h1>
        <p className="project-article-summary">
          A complete archive of client projects, product case studies, and
          writing about engineering and AI workflow.
        </p>

        <section className="projects work-list">
          <div className="project-list">
            {entries.map((entry) => (
              <article key={`${entry.kind}-${entry.slug}`} className="project-item">
                <div className="project-title-block">
                  <h2>{entry.title}</h2>
                  <p>
                    {entry.kind} - {entry.category} - {entry.publishedAt}
                  </p>
                </div>
                <div className="project-description-block">
                  <p>{entry.summary}</p>
                  <Link
                    href={
                      entry.kind === "project"
                        ? `/projects/${entry.slug}`
                        : `/articles/${entry.slug}`
                    }
                  >
                    {entry.kind === "project"
                      ? "Read case study"
                      : "Read article"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
