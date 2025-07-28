"use client";

import Image from "next/image";
import { AssistantStream } from "openai/lib/AssistantStream";
import { useCallback, useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
// @ts-expect-error - no types for this yet
import { AssistantStreamEvent } from "openai/resources/beta/assistants/assistants";

enum Role {
  User = "user",
  Assistant = "assistant",
  Code = "code",
}

type MessageType = {
  role: Role;
  text: string;
};

const Avatar = ({ color }: { color: "primary" | "gray" }) => (
  <div
    className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center shadow-md ${
      color === "primary"
        ? "bg-gradient-to-br from-[#39e079] to-[#2dcc6a]" // Using your custom color
        : "bg-gradient-to-br from-gray-600 to-gray-800"
    }`}
  >
    {/* Remember to replace "/me.jpeg" with your actual image path */}
    <Image
      src="/me.jpeg"
      width={40}
      height={40}
      alt="Ritchi"
      className="rounded-full w-full h-full object-cover border-2 border-white/80"
    />
  </div>
);

const UserMessage = ({ text }: { text: string }) => (
  <div className="flex justify-end mb-6 ml-12">
    <div className="bg-[#39e079] text-white rounded-t-2xl rounded-l-2xl px-5 py-3 max-w-lg shadow-md font-medium">
      {text}
    </div>
  </div>
);

const AssistantMessage = ({ text }: { text: string }) => (
  <div className="flex justify-start mb-6 mr-12">
    <div className="flex items-start space-x-4">
      <Avatar color="primary" />
      <div className="bg-white rounded-t-2xl rounded-r-2xl px-5 py-3 max-w-lg shadow-md text-gray-800">
        <Markdown
          components={{
            a: ({ ...props }) => (
              <a
                className="text-[#39e079] font-medium hover:underline"
                {...props}
              />
            ),
            p: ({ ...props }) => <p className="mb-2 last:mb-0" {...props} />,
          }}
        >
          {text}
        </Markdown>
      </div>
    </div>
  </div>
);

const CodeMessage = ({ text }: { text: string }) => (
  <div className="flex justify-start mb-6 mr-12">
    <div className="flex items-start space-x-4">
      <Avatar color="gray" />
      <div className="bg-gray-900 text-gray-200 rounded-2xl p-4 max-w-lg w-full shadow-lg overflow-x-auto">
        <pre className="font-mono text-sm">
          {text.split("\n").map((line, i) => (
            <div key={i} className="flex">
              <span className="text-gray-600 mr-4 w-[2ch] flex-shrink-0 select-none text-right">
                {i + 1}
              </span>
              <span className="break-all">{line}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  </div>
);

const TypingIndicator = () => (
  <div className="flex justify-start mb-6 mr-12">
    <div className="flex items-start space-x-4">
      <Avatar color="primary" />
      <div className="bg-white rounded-t-2xl rounded-r-2xl px-5 py-4 max-w-lg shadow-md">
        <div className="flex space-x-1.5">
          <div
            className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  </div>
);

const Message = ({ role, text }: MessageType) => {
  switch (role) {
    case Role.User:
      return <UserMessage text={text} />;
    case Role.Assistant:
      return <AssistantMessage text={text} />;
    case Role.Code:
      return <CodeMessage text={text} />;
    default:
      return null;
  }
};

export const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputDisabled, setInputDisabled] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${scrollHeight}px`; // Set to content height
    }
  }, [userInput]);

  // Simplified message handling logic
  const processStream = useCallback((stream: AssistantStream) => {
    let currentRole: Role | null = null;
    let textBuffer = "";

    const appendLastMessage = () => {
      if (currentRole && textBuffer) {
        setMessages((prev) => [
          ...prev,
          { role: currentRole!, text: textBuffer },
        ]);
        textBuffer = "";
      }
    };

    stream.on("textCreated", () => {
      appendLastMessage();
      currentRole = Role.Assistant;
    });

    stream.on("textDelta", (delta) => {
      if (delta.value) {
        const cleanedValue = delta.value.replace(/【.*?】/g, "");

        if (cleanedValue) {
          textBuffer += cleanedValue;
          setMessages((prev) => {
            const lastMsg = prev[prev.length - 1];
            if (lastMsg?.role === currentRole) {
              return [...prev.slice(0, -1), { ...lastMsg, text: textBuffer }];
            }
            return [...prev, { role: currentRole!, text: textBuffer }];
          });
        }
      }
    });

    stream.on("toolCallCreated", () => {
      appendLastMessage();
      currentRole = Role.Code;
    });

    stream.on("toolCallDelta", (delta) => {
      if (delta.type === "code_interpreter") {
        if (delta.code_interpreter?.input) {
          textBuffer += delta.code_interpreter.input;
          setMessages((prev) => {
            const lastMsg = prev[prev.length - 1];
            if (lastMsg?.role === currentRole) {
              return [...prev.slice(0, -1), { ...lastMsg, text: textBuffer }];
            }
            return [...prev, { role: currentRole!, text: textBuffer }];
          });
        }
      }
    });

    stream.on("event", (event: AssistantStreamEvent) => {
      if (event.event === "thread.run.completed") {
        setInputDisabled(false);
      }
    });
  }, []);

  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      if (!userInput.trim()) return;

      const userMessage = userInput;
      setMessages((prev) => [...prev, { role: Role.User, text: userMessage }]);
      setUserInput("");
      setInputDisabled(true);

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: userMessage }),
      });

      if (res.body) {
        processStream(AssistantStream.fromReadableStream(res.body));
      }
    },
    [userInput, processStream]
  );

  return (
    <div className="flex flex-col h-[94vh] bg-slate-50 font-sans">
      <div className="flex-1 overflow-y-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 && (
            <div className="text-center py-12 text-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-[#39e079] to-[#2dcc6a] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                Ritchi&apos;s Assistant
              </h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Ask me anything! I can help you skip the basic HR question.
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <Message key={i} {...msg} />
          ))}

          {inputDisabled &&
            messages[messages.length - 1]?.role !== Role.Assistant && (
              <TypingIndicator />
            )}

          <div ref={messagesEndRef} />
        </div>
      </div>
      <p className="text-gray-400  p-2 text-xs mx-auto">
        ⚠️ This assistant is powered by OpenAI, with file search and a vector
        database for smarter answers. Please use it considerately — every
        message costs tokens, and I&apos;m covering those costs myself. Thanks
        for understanding! 🙏
      </p>
      <div className="bg-white/70 backdrop-blur-lg border-t border-slate-200 p-4">
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="relative flex items-center bg-white rounded-full border border-slate-200 shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-slate-50 focus-within:ring-[#39e079] transition-shadow"
          >
            <textarea
              ref={textareaRef}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder="Message Ritchi's Assistant..."
              disabled={inputDisabled}
              className="flex-1 resize-none bg-transparent border-0 py-3 pl-5 pr-16 focus:ring-0 text-gray-800 placeholder-slate-400 disabled:bg-slate-50 disabled:placeholder-slate-300"
              rows={1}
            />
            <button
              type="submit"
              disabled={inputDisabled || !userInput.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#39e079] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:bg-[#2dcc6a] disabled:bg-slate-300 disabled:shadow-none disabled:cursor-not-allowed"
            >
              {inputDisabled ? (
                <div className="w-5 h-5 border-2 border-white/80 border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
