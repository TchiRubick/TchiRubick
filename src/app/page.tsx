import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CONTACTINFO } from "../ressources/contact";
import { PARTNERS } from "../ressources/patners";
import { PROJECTS } from "../ressources/projects";
import { TECHSTACK } from "../ressources/techs";

export const metadata: Metadata = {
  title: "Ritchi Andria - Fullstack developer",
  description:
    "Senior Full-Stack Developer with 7 years of experience. Passionate about delivering innovative solutions for startups, enterprises, and individuals.",
  keywords: [
    "Typescript",
    "React",
    "Nextjs",
    "Nodejs",
    "PostgreSQL",
    "IA",
    "Blockchain",
  ],
  authors: [{ name: "Ritchi Andria" }],
  openGraph: {
    title: "Ritchi Andria - Fullstack developer",
    description:
      "Senior Full-Stack Developer with 7 years of experience. Passionate about delivering innovative solutions for startups, enterprises, and individuals.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f8fbfa] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f2ec] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e1a13]">
            <div className="w-10 h-10">
              <Image
                src="/me.jpeg"
                width={40}
                height={40}
                alt="Ritchi"
                className="rounded-full w-10 h-10 object-cover border-2 border-[#e8f2ec] shadow"
              />
            </div>
            <h2 className="text-[#0e1a13] text-lg font-bold leading-tight tracking-[-0.015em]">
              Ritchi
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
              <Link
                href="#about"
                className="text-[#0e1a13] text-sm font-medium leading-normal hover:text-[#51946b] transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-[#0e1a13] text-sm font-medium leading-normal hover:text-[#51946b] transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-[#0e1a13] text-sm font-medium leading-normal hover:text-[#51946b] transition-colors"
              >
                Contact
              </Link>
            </nav>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 bg-[#e8f2ec] text-[#0e1a13] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#d1e6d9] transition-colors">
              <span className="truncate">Resume</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-20">
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("/image.png")`,
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Hi, I'm Ritchi
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Senior Full-Stack Developer with 7 years of experience in
                      building scalable, high-performance web and mobile
                      applications. Expert in TypeScript, JavaScript, React,
                      Next.js, Node.js, and React Native, with a strong focus on
                      user-centric design and modern development practices.
                      Proficient in RESTful API development, PostgreSQL database
                      management, and implementing CI/CD pipelines using Docker
                      and GitHub Actions. Passionate about delivering innovative
                      solutions for startups, enterprises, and individuals.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#39e079] text-[#0e1a13] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#2dcc6a] transition-colors">
                    <span className="truncate">View Projects</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Tech Stack Section */}
            <section id="tech-stack">
              <h2 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Tech Stack
              </h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {TECHSTACK.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-1 gap-3 rounded border border-[#d1e6d9] bg-[#f8fbfa] p-4 items-center hover:border-[#39e079] transition-colors"
                  >
                    <div className="text-[#0e1a13]">{tech.icon}</div>
                    <h3 className="text-[#0e1a13] text-base font-bold leading-tight">
                      {tech.name}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Partners Section */}
            <section>
              <h2 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                They trusted me
              </h2>
              <div className="flex flex-wrap gap-3">
                {PARTNERS.map((partner) => (
                  <Link href={partner.url} target="_blank" key={partner.url}>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={200}
                      height={200}
                      className=" aspect-square rounded hover:scale-105 transition-transform object-contain w-40 h-40  p-6"
                    />
                  </Link>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
              <h2 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pt-5">
                Recent Projects
              </h2>
              <p className="text-gray-400 text-xs font-normal leading-normal pb-3 pt-1 px-4">
                Below are the 3 of my non-whitelisted latest realisation.
              </p>
              {PROJECTS.map((project, index) => (
                <div key={index} className="p-4">
                  <div className="flex items-stretch justify-between gap-4 rounded">
                    <div className="flex flex-[2_2_0px] flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#51946b] text-sm font-normal leading-normal">
                          {project.category}
                        </p>
                        <p className="text-[#0e1a13] text-base font-bold leading-tight">
                          {project.title}
                        </p>
                        <p className="text-[#51946b] text-sm font-normal leading-normal">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techs.map((tech, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#e8f2ec] text-[#0e1a13] border border-[#d1e6d9] hover:border-[#39e079] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.url && (
                        <Link href={project.url ?? "#"} target="_blank">
                          <button
                            disabled={!project.url}
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-8 px-4 flex-row-reverse bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-fit hover:bg-[#d1e6d9] transition-colors"
                          >
                            <span className="truncate">View Project</span>
                          </button>
                        </Link>
                      )}
                    </div>
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded flex-1 hover:scale-105 transition-transform"
                      style={{ backgroundImage: `url("${project.imageUrl}")` }}
                    />
                  </div>
                </div>
              ))}
            </section>

            {/* Contact Section */}
            <section id="contact">
              <h2 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Contact
              </h2>
              <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
                {CONTACTINFO.map((contact, index) => (
                  <div
                    key={index}
                    className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d1e6d9] py-5"
                  >
                    <p className="text-[#51946b] text-sm font-normal leading-normal">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-[#0e1a13] text-sm font-normal leading-normal hover:text-[#51946b] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-[#0e1a13] text-sm font-normal leading-normal">
                        {contact.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
