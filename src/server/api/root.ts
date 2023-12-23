import { postRouter } from "@/server/api/routers/post";
import { createTRPCRouter } from "@/server/api/trpc";
import { ProjectRouter } from "./routers/project";
import { technologyRouter } from "./routers/technology";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  technology: technologyRouter,
  project: ProjectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
