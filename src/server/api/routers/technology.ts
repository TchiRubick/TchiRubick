import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const LIST = [
  "React JS",
  "Next JS",
  "Typescript",
  "Node JS",
  "Express Js",
  "Inertia JS",
  "jQuery",
  "React Native",
  "Zustand",
  "Jotai",
  "React Query",
  "React Hook form",
  "Jest",
  "Tailwind Css",
  "SCSS",
  "Shadcn",
  "Material UI",
  "Ant Design",
  "Figma",
  "PHP",
  "Laravel",
  "Codeigniter",
  "Docker",
  "Linux",
  "AWS",
  "Vercel",
  "Drizzle ORM",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "RabbitMQ",
  "Elasticsearch",
  "Talend Open Studio",
  "TRPC",
  "API Rest",
  "Blockchain",
  "Web 3",
];

export const technologyRouter = createTRPCRouter({
  list: publicProcedure.query(() => LIST),
});
