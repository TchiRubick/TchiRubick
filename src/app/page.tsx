import { Metadata } from "next";
import { ContactSection } from "./_components/contact-section";
import { HeroSection } from "./_components/hero-section";
import { PartnersSection } from "./_components/partners-section";
import { ProjectsSection } from "./_components/projects-section";
import { TechStackSection } from "./_components/tech-stack-section";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.tchi.xyz",
  },
};

export default function HomePage() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-20">
        <HeroSection />
        <TechStackSection />
        <PartnersSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}
