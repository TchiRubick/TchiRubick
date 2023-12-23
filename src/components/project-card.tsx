"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Project, ProjectState } from "@/types";
import { Clock4, Flag, PersonStanding, Skull, Speech, Star, Syringe, TrendingDown, UserCheck, Users, Wrench } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";


type IconProps = React.HTMLAttributes<SVGElement>;

type Props = {
  project: Project
}

const IconTooltip: FC<{ icon: JSX.Element, value: string }> = ({ icon, value }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>{icon}</TooltipTrigger>
      <TooltipContent>
        <p>{value}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

const ICON_MAPPING: Record<ProjectState, JSX.Element> = {
  collaborator: <IconTooltip key='collaborator' icon={<Users size={14} />} value='Collaborator (Team members > 1)' />,
  contractor: <IconTooltip key='contractor' icon={<UserCheck size={14} />} value='Contractor' />,
  lead: <IconTooltip key='lead' icon={<Speech size={14} />} value='Team lead' />,
  ongoing: <IconTooltip key='ongoing' icon={<Clock4 size={14} />} value='On going' />,
  maintenance: <IconTooltip key='maintenance' icon={<Wrench size={14} />} value='Project still maintained' />,
  lowcost: <IconTooltip key='lowcost' icon={<TrendingDown size={14} />} value='Low cost | Free' />,
  mercenary: <IconTooltip key='mercenary' icon={<Syringe size={14} />} value='Mercenary | Very short time intervention' />,
  droped: <IconTooltip key='droped' icon={<Skull size={14} />} value='Unfinished | Contract terminated unexpectedly' />,
  partenariat: <IconTooltip key='partenariat' icon={<Flag size={14} />} value='Partnership | Long term partner/client in the market' />,
  personal: <IconTooltip key='personal' icon={<PersonStanding size={14} />} value='Personal' />,
  best: <IconTooltip key='best' icon={<Star size={14} />} value='Best' />,
};

const GithubLink: FC<{ link: string | null }> = ({ link }) => {
  if (!link) return (
    <Button variant="outline" disabled>
      <GithubIcon className="w-4 h-4 mr-2" />
      GitHub
    </Button>
  );

  return (
    <Link href={link} target='_blank'>
      <Button variant="outline">
        <GithubIcon className="w-4 h-4 mr-2" />
        GitHub
      </Button>
    </Link>
  )
}

const GoToLink: FC<{ link: string | null }> = ({ link }) => {
  if (!link) return (
    <Button className="w-full" disabled>
      <ArrowRightIcon className="w-4 h-4 mr-2" />
      Visit
    </Button>
  );

  return (
    <Link href={link} target='_blank' className="w-full">
      <Button className="w-full">
        <ArrowRightIcon className="w-4 h-4 mr-2" />
        Visit
      </Button>
    </Link>
  )
}

const getIcons = (states: ProjectState[]) => states.map((state) => ICON_MAPPING[state]);

export const ProjectCard: FC<Props> = ({ project }) => {
  const { title, preview, github, url, description, technologies, states } = project;

  return (
    <Card className="border rounded-lg shadow-lg overflow-hidden w-full" data-aos="fade-right" data-aos-duration='1000'>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            alt="Project preview"
            className="w-full h-64 object-cover"
            height="400"
            src={preview}
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="400"
          />
        </div>
        <CardContent className="w-full md:w-1/2 p-4 space-y-4">
          <div className="flex justify-between flex-col h-56">
            <div>
              <CardTitle className="text-xl font-bold flex gap-2 items-center">{title} {getIcons(states)}</CardTitle>
              <CardDescription className="text-gray-500">
                {description}
              </CardDescription>
            </div>
            <div>
              <div className="flex gap-2 flex-wrap mb-5">
                {technologies.map((tech) => <Badge key={tech} variant='secondary'>{tech}</Badge>)}
              </div>
              <div className="flex space-x-4">
                <GithubLink link={github} />
                <GoToLink link={url} />
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

const GithubIcon = (props: IconProps) => (
  <svg viewBox='0 0 438.549 438.549' {...props}>
    <path
      fill='currentColor'
      d='M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z'
    ></path>
  </svg>
)

const ArrowRightIcon = (props: IconProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
