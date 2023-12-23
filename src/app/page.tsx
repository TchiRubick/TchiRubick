import * as HomeCard from '@/components/home-card';
import { ProjectCard } from '@/components/project-card';
import { Badge } from "@/components/ui/badge";
import { api } from '@/trpc/server';
import Link from 'next/link';

const IndexPage = async () => {
  const technologies = await api.technology.list.query();
  const projects = await api.project.list.query();

  return (
    <>
      <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
        <div className='container flex max-w-[70rem] flex-col items-center gap-4 text-center'>
          <Link
            href='https://twitter.com/MoonlightLykos'
            className='mb-5 rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium'
            target='_blank'
          >
            Follow along on Twitter
          </Link>
          <div data-aos='zoom-out' data-aos-duration='3000'>
            <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
              <b>Hi I'm Ritchi</b>
              <br />Experienced Full-Stack Typescript Developer
            </h1>
            <p className='mx-auto mt-10 max-w-[55rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
              Self-taught developer hailing from Madagascar.
              <br />My extensive experience spans a diverse spectrum of projects, catering to both large-scale enterprises and individual clients.
            </p>
          </div>
        </div>
      </section>
      <section
        className='container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24'
        data-aos='zoom-out'
        data-aos-duration='1000'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            Main stack
          </h2>
          <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            My projects are primarily developed using the cutting-edge t3 stack, leveraging the
            exceptional features of Next.js and Vercel for a superior web development environment.
          </p>
        </div>
        <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
          <HomeCard.NextCard />
          <HomeCard.ReactCard />
          <HomeCard.DatabaseCard />
          <HomeCard.ComponentsCard />
          <HomeCard.AuthCard />
          <HomeCard.VercelCard />
          <HomeCard.ReduxCard />
          <HomeCard.GithubCard />
          <HomeCard.DiscordCard />
        </div>
      </section>
      <section
        className='container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24'
        data-aos='zoom-out'
        data-aos-duration='1000'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            Projects
          </h2>
        </div>
        <div className='flex gap-3 max-w-[80%] mx-auto flex-wrap justify-stretch'>
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>
      <section
        className='container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24'
        data-aos='zoom-out'
        data-aos-duration='1000'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            Technologies and languages
          </h2>
        </div>
        <div className='flex gap-3 max-w-[80%] mx-auto flex-wrap justify-stretch'>
          {technologies.map((tech) => <Badge key={tech} variant='secondary'>{tech}</Badge>)}
        </div>
      </section>
    </>
  );
}

export default IndexPage;
