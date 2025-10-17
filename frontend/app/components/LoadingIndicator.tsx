import { Bot, Loader2 } from "lucide-react";

export function LoadingIndicator() {
  return (
    <div className="flex gap-4 justify-start animate-fade-in">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
        <Bot className="w-5 h-5 text-white" />
      </div>
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-5 py-3 shadow-lg shadow-black/20">
        <div className="flex items-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin text-cyan-400" />
          <span className="text-gray-400 text-sm">Thinking...</span>
        </div>
      </div>
    </div>
  );
}
