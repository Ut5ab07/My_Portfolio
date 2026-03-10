"use client";
import SectionWrapper from "./ui/SectionWrapper";
import GlassCard from "./ui/GlassCard";

export default function About() {
  return (
    <section id="about" className="relative z-10 w-full max-w-7xl px-6 py-24">
      <SectionWrapper>
        <GlassCard className="p-8 md:p-12">
          <div className="flex flex-col gap-12 md:flex-row md:items-center">
            {/* Left Side: Photo Placeholder */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative group cursor-pointer h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(91,192,190,0.1)] hover:shadow-[0_0_50px_rgba(91,192,190,0.5)] hover:border-cyan-400/60 transition-all duration-500 ease-in-out bg-slate-800/50">
                {/* Fallback pattern since profile.jpg might not exist initially */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm italic">
                  Image Placeholder
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt="Utsab"
                  className="absolute inset-0 h-full w-full object-cover z-10 opacity-0 filter grayscale hover:grayscale-0 transform transition-all duration-500 ease-in-out group-hover:scale-110"
                  onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
                />
              </div>
            </div>

            {/* Right Side: Text */}
            <div className="w-full md:w-2/3 space-y-6 text-gray-300 leading-relaxed text-lg">
              <div className="flex items-center w-full mb-6 cursor-pointer">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl px-6 whitespace-nowrap">
                  About Me<span className="text-cyan-400">.</span>
                </h2>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>

              <p>
                Hello! I&apos;m Utsab, a passionate AI and Data
                Science enthusiast with a deep curiosity for understanding complex
                systems. I&apos;m particularly interested in machine learning, semantic search, and recommendation systems, and I enjoy exploring
                how algorithms and data can be used to solve real-world problems.
              </p>

              <p>
                I also enjoy creating clean, intuitive applications that make complex technologies easier to use.
                When I&apos;m not working on projects, I&apos;m usually experimenting with new AI ideas,
                learning about emerging technologies in machine learning or watching movies and sports.
              </p>

            </div>
          </div>
        </GlassCard>
      </SectionWrapper>
    </section>
  );
}
