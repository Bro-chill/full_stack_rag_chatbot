import { Send, Loader2 } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export function ChatInput({
  value,
  onChange,
  onSubmit,
  isLoading,
}: ChatInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || isLoading) return;
    onSubmit();
  };

  return (
    <div className="relative z-10 backdrop-blur-xl bg-white/5 border-t border-white/10 shadow-lg shadow-black/20">
      <div className="container mx-auto max-w-5xl p-6">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative flex gap-3">
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
              <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="relative w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl 
                         focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50
                         text-gray-100 placeholder-gray-500
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-300
                         shadow-lg shadow-black/20"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !value.trim()}
              className="relative group px-6 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl
                       hover:from-purple-600 hover:to-cyan-600
                       focus:outline-none focus:ring-2 focus:ring-purple-500/50
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-300
                       shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75
                       disabled:shadow-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative flex items-center gap-2 text-white font-medium">
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="hidden sm:inline">Sending</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="hidden sm:inline">Send</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
