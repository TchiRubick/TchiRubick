import { TECHSTACK } from "@/ressources/techs";

export const TechStackSection = () => (
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
);
