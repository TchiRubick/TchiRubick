import { Contacts } from '@/components/contacts';
import * as HomeCard from '@/components/home-card';
import { ProjectCard } from '@/components/project-card';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { api } from '@/trpc/server';
import Image from 'next/image';
import Link from 'next/link';

const IndexPage = async () => {
  const technologies = await api.technology.list.query();
  const projects = await api.project.list.query();

  return (
    <>
      <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
        <div className='container flex max-w-[70rem] flex-col items-center gap-4 text-center'>
          <Contacts />
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
        id='main-stack'
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
        id='projects'
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
        id='technologies'
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
      <section
        className='container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24'
        data-aos='zoom-out'
        data-aos-duration='1000'
        id='personality'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            Personality
          </h2>
        </div>
        <div className='flex flex-col items-center md:items-start gap-3 max-w-[80%] mx-auto'>
          <div className='flex gap-3 items-center'>
            <Image
              src='/intj.svg'
              height='100'
              width='100'
              alt='Personality'
            />
            <div>
              <div className='text-lg font-bold'>INTJ-A</div>
              <div className='text-slate-500 underline text-xs md:text-base'>
                <Link
                  href='https://www.16personalities.com/articles/roles-analysts'
                  target='_blank'>Analyst</Link>
              </div>
              <div className='text-slate-500 underline text-xs md:text-base'>
                <Link
                  href='https://www.16personalities.com/articles/strategies-confident-individualism'
                  target='_blank'>Confident individualism</Link>
              </div>
            </div>
          </div>
          <div className='mx-auto'>
            <div className='flex flex-row gap-5 md:gap-10 items-center justify-between mx-auto'>
              <div className='text-xs md:text-base w-10 md:w-20'>INTROVERTED</div>
              <div>
                <Progress value={80} className='w-20 md:w-96' />
              </div>
            </div>
            <div className='flex gap-10 items-center'>
              <div className='text-xs md:text-base w-10 md:w-20'>INTUITIVE</div>
              <Progress value={69} className='w-20 md:w-96' />
            </div>
            <div className='flex gap-10 items-center'>
              <div className='text-xs md:text-base w-10 md:w-20'>THINKING</div>
              <Progress value={64} className='w-20 md:w-96' />
            </div>
            <div className='flex gap-10 items-center'>
              <div className='text-xs md:text-base w-10 md:w-20'>JUDGING</div>
              <Progress value={72} className='w-20 md:w-96' />
            </div>
            <div className='flex gap-10 items-center'>
              <div className='text-xs md:text-base w-10 md:w-20'>ASSERTIVE</div>
              <Progress value={60} className='w-20 md:w-96' />
            </div>
          </div>
        </div>
      </section>
      <section
        className='container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24'
        data-aos='zoom-out'
        data-aos-duration='1000'
        id='contact'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            Contact
          </h2>
        </div>
        <Contacts />
      </section>
    </>
  );
}

export default IndexPage;
