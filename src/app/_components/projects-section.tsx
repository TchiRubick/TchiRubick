import { PROJECTS } from "@/ressources/projects";
import { Project } from "./project";

export const ProjectsSection = () => (
  <section id="projects">
    <h2 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
      Projects
    </h2>
    <p className="text-sm text-gray-600 px-4 pb-3">
      Only the 3 latest non-whitelisted projects that I&apos;ve finished are
      shown here.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      {PROJECTS.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  </section>
);
