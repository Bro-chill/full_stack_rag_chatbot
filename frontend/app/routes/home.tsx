import type { Route } from "./+types/home";
import { Link } from "react-router";
import { MessageSquare, Sparkles, Zap, Shield } from "lucide-react";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { FeatureCard } from "../components/FeatureCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Assistant - Home" },
    { name: "description", content: "Welcome to your futuristic AI assistant" },
  ];
}

export default function Home() {
  const features = [
    {
      icon: Sparkles,
      title: "Poetic Responses",
      description: "Unique rhyming answers to all your questions",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
      shadowColor: "purple-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Powered by Google's Gemini AI technology",
      gradientFrom: "from-cyan-500",
      gradientTo: "to-blue-500",
      shadowColor: "cyan-500",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Content filtered for safety and appropriateness",
      gradientFrom: "from-pink-500",
      gradientTo: "to-purple-500",
      shadowColor: "pink-500",
    },
  ];

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-16">
      <AnimatedBackground />

      <div className="relative z-10 text-center space-y-12 p-8 max-w-4xl mx-auto">
        {/* Logo/Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-2xl opacity-75 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-6 rounded-full shadow-2xl shadow-purple-500/50">
              <MessageSquare className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            AI Assistant
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Experience the future of intelligent conversation
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Link
            to="/chat"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl
                     hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600
                     transition-all duration-300
                     shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/75
                     text-white font-semibold text-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity"></div>
            <MessageSquare className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Start Chatting</span>
            <Sparkles className="w-5 h-5 relative z-10 animate-pulse" />
          </Link>
        </div>

        {/* Footer text */}
        <p className="text-gray-500 text-sm mt-12">
          Powered by React Router & FastAPI
        </p>
      </div>
    </main>
  );
}
