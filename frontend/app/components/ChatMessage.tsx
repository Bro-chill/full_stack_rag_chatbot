import { Bot, User, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === "bot";
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-4 ${
        isUser ? "justify-end" : "justify-start"
      } animate-fade-in`}
    >
      {isBot && <BotAvatar />}

      <div
        className={`group max-w-[75%] rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] ${
          isUser
            ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 shadow-lg shadow-purple-500/20"
            : "bg-white/5 border border-white/10 shadow-lg shadow-black/20"
        }`}
      >
        <div className="px-5 py-3">
          <p className="text-gray-100 whitespace-pre-wrap break-words leading-relaxed">
            {message.content}
          </p>
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
            <span>{message.timestamp.toLocaleTimeString()}</span>
            {isBot && <Sparkles className="w-3 h-3 text-cyan-400" />}
          </div>
        </div>
      </div>

      {isUser && <UserAvatar />}
    </div>
  );
}

function BotAvatar() {
  return (
    <div className="flex-shrink-0 relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity"></div>
      <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
        <Bot className="w-5 h-5 text-white" />
      </div>
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="flex-shrink-0 relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity"></div>
      <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/50">
        <User className="w-5 h-5 text-white" />
      </div>
    </div>
  );
}
