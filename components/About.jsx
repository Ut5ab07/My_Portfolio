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
              <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(91,192,190,0.15)] bg-slate-800/50">
                {/* Fallback pattern since profile.jpg might not exist initially */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm italic">
                  Image Placeholder
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/profile.jpg" 
                  alt="Utsab" 
                  className="absolute inset-0 h-full w-full object-cover z-10 opacity-0 transition-opacity duration-300"
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
                Hello! I&apos;m Utsab, a passionate AI Engineer and Data
                Science enthusiast with a deep curiosity for understanding complex
                systems. My journey began with writing simple scripts, which
                quickly evolved into architecting scalable machine learning pipelines
                and web applications.
              </p>

              <p>
                I thrive at the intersection of data and design. While my core
                expertise lies in developing intelligent algorithms and analyzing
                large datasets, I equally value creating clean, intuitive user
                interfaces that make technology accessible and enjoyable.
              </p>

              <p>
                When I&apos;m not analyzing data or building models, you can find
                me exploring new frontend frameworks, reading up on the latest
                papers in deep learning, or contributing to open-source projects.
              </p>
            </div>
          </div>
        </GlassCard>
      </SectionWrapper>
    </section>
  );
}
