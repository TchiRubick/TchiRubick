import { Metadata } from "next";
import { Chat } from "./_components/chat";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.tchi.xyz/chat",
  },
};

export default function ChatPage() {
  return (
    <div>
      <Chat />
    </div>
  );
}
