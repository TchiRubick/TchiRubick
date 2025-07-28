import { sendMessage } from "@/http/controller/openai-chat.controller";
import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _ = app.post("/chat", ...sendMessage);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof _;
