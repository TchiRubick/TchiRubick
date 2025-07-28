import OpenAI from "openai";

export const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getAssistantStream = async (content: string, id?: string) => {
  let threadId = id;

  if (!threadId) {
    const threadResult = await client.beta.threads.create();
    threadId = threadResult.id;
  }

  await client.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });

  const stream = client.beta.threads.runs.stream(threadId, {
    assistant_id: process.env.OPENAI_ASSISTANT!,
  });

  return stream.toReadableStream();
};
