import { getAssistantStream } from "@/packages/openai";
import { zValidator } from "@hono/zod-validator";
import { createFactory } from "hono/factory";
import { stream } from "hono/streaming";
import { z } from "zod";

const factory = createFactory();

export const sendMessage = factory.createHandlers(
  zValidator(
    "json",
    z.object({
      content: z.string().min(1).max(2000),
      id: z.string().optional(),
    }),
  ),
  async (c) => {
    const { content, id } = c.req.valid("json");

    return stream(c, async (stream) => {
      const streamAI = await getAssistantStream(content, id);

      await stream.pipe(streamAI);
    });
  },
);
