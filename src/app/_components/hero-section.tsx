import Link from "next/link";

export const HeroSection = () => (
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
            Hi, I&apos;m Ritchi
          </h1>
          <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
            Senior Full-Stack Developer from Madagascar with 7 years of
            experience in building scalable, high-performance web and mobile
            applications. Expert in TypeScript, JavaScript, React, Next.js,
            Node.js, and React Native, with a strong focus on user-centric
            design and modern development practices. Proficient in RESTful API
            development, PostgreSQL database management, and implementing CI/CD
            pipelines using Docker and GitHub Actions. Passionate about
            delivering innovative solutions for startups, enterprises, and
            individuals.
          </h2>
        </div>
        <Link href="/chat">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#39e079] text-[#0e1a13] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#2dcc6a] transition-colors">
            <span className="truncate">Chat with my assistant</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
);
