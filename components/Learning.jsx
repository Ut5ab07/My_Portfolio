"use client";
import SectionWrapper from "./ui/SectionWrapper";
import GlassCard from "./ui/GlassCard";
import { Sparkles } from "lucide-react";

const TOPICS = [
  "Reinforcement Learning",
  "Computer Vision",
  "System Design",
  "Advanced ML",
  "Generative Models",
  "Rust Programming",
];

export default function Learning() {
  return (
    <SectionWrapper delay={0.2}>
      <GlassCard className="h-full p-8 border-white/10 hover:border-purple-500/30 transition-colors duration-500 relative overflow-hidden group">
        <div className="absolute bottom-0 left-0 p-32 bg-purple-500/5 rounded-full blur-3xl -ml-16 -mb-16 group-hover:bg-purple-500/10 transition-colors duration-500" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center w-full mb-8 cursor-pointer">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="flex items-center gap-3 px-6 text-white">
              <Sparkles className="h-8 w-8 text-purple-400" />
              <h3 className="text-2xl font-bold tracking-tight whitespace-nowrap">Currently Learning</h3>
            </div>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          <p className="text-gray-300 mb-6 flex-1">
            Always pushing boundaries and exploring new technologies to build better, more efficient systems.
          </p>

          <div className="flex flex-wrap gap-3 mt-auto">
            {TOPICS.map((topic, i) => (
              <span
                key={i}
                className="px-4 py-2 font-medium bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-xl text-sm text-gray-200 shadow-sm backdrop-blur-md"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
