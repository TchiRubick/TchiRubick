import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CONTACTINFO } from "@/ressources/contact";
import { getLatestEntries } from "@/ressources/project-articles";
import { PARTNERS } from "@/ressources/patners";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.tchi.xyz",
  },
};

export default async function HomePage() {
  const latestEntries = await getLatestEntries(3);
  const socialLinks = CONTACTINFO.filter((item) =>
    ["GitHub", "LinkedIn", "WhatsApp"].includes(item.label),
  );
  const email = CONTACTINFO.find((item) => item.label === "Email");

  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <Link href="/" className="brand">
          tchi.xyz
        </Link>
        <nav className="portfolio-nav">
          <Link href="/">Home</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#partners">Partners</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>

      <main>
        <section id="about" className="hero">
          <h1>Ritchi Andria - Full-Stack Developer</h1>
          <p className="lead">
            I build scalable web applications, developer tools, and intelligent
            systems.
          </p>
          <p>
            I focus on high-performance architecture and clean, maintainable
            code. My philosophy is rooted in simplicity, reliability, and the
            pursuit of engineering excellence.
          </p>
          <div className="hero-actions">
            <Link href="#projects">View Projects</Link>
            <Link href="/chat">Chat With Me</Link>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="section-headline">
            <p className="section-label">Latest Projects and Articles</p>
            <Link href="/work">See more</Link>
          </div>
          <div className="project-list">
            {latestEntries.map((entry) => (
              <article key={`${entry.kind}-${entry.slug}`} className="project-item">
                <div className="project-title-block">
                  <h2>{entry.title}</h2>
                  <p>
                    {entry.kind} - {entry.category} -{" "}
                    {entry.techs.slice(0, 2).join(" - ")}
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

        <section id="partners" className="partners">
          <p className="section-label">Partners</p>
          <div className="partners-list">
            {PARTNERS.map((partner) => (
              <Link
                key={partner.url}
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="partner-item"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={72}
                />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="portfolio-footer">
        {email ? <Link href={email.href}>{email.value}</Link> : null}
        {socialLinks.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </footer>
    </div>
  );
}
