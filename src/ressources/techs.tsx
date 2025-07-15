import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaDocker, FaLinux } from "react-icons/fa";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { SiDrizzle, SiHono, SiTailwindcss, SiVercel } from "react-icons/si";

export const TECHSTACK = [
  {
    name: "Reactjs",
    icon: <RiReactjsFill />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript />,
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql />,
    information: "Learning",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
  {
    name: "Hono",
    icon: <SiHono />,
  },
  {
    name: "Drizzle ORM",
    icon: <SiDrizzle />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
  },
];
