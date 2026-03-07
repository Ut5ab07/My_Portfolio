"use client";
/* eslint-disable @next/next/no-img-element */
import SectionWrapper from "./ui/SectionWrapper";
import TiltCard from "./ui/TiltCard";

import { 
  Brain, Network, Eye
} from "lucide-react";

const SKILL_CATEGORIES = {
  "Languages": [
    { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: "JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8 md:w-10 md:h-10 rounded-sm" /> },
    { name: "TypeScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8 md:w-10 md:h-10 rounded-sm" /> },
    { name: "SQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="SQL" className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: "C++", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-8 h-8 md:w-10 md:h-10" /> }
  ],
  "AI & Data Science": [
    { name: "Machine Learning", icon: <Brain className="w-8 h-8 md:w-10 md:h-10 text-purple-400" /> },
    { name: "Deep Learning", icon: <Network className="w-8 h-8 md:w-10 md:h-10 text-pink-400" /> },
    { name: "PyTorch", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: "TensorFlow", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: "Pandas", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" className="w-8 h-8 md:w-10 md:h-10 bg-white rounded flex p-1" /> },
    { name: "Computer Vision", icon: <Eye className="w-8 h-8 md:w-10 md:h-10 text-blue-300" /> }
  ],
  "Tools & Technologies": [
    { name: "Docker", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: "Git", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: "Linux", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux" className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: "AWS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-8 h-8 md:w-10 md:h-10 bg-white rounded p-1 object-contain" /> },
    { name: "Next.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full p-1 border border-transparent" /> },
    { name: "FastAPI", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="w-8 h-8 md:w-10 md:h-10" /> }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 w-full max-w-7xl px-6 py-24">
      <SectionWrapper>
        <div className="mb-16 flex items-center w-full cursor-pointer">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white px-6 whitespace-nowrap">
            Technical Skills<span className="text-purple-500">.</span>
          </h2>
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <div className="flex flex-col gap-12">
          {Object.entries(SKILL_CATEGORIES).map(([category, skills], categoryIndex) => (
            <div key={categoryIndex} className="flex flex-col items-center">
              <div className="flex items-center w-full max-w-3xl mb-8">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <h3 className="text-xl font-semibold text-cyan-400 px-6 whitespace-nowrap">
                  {category}
                </h3>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {skills.map((skill, index) => (
                  <TiltCard key={index} className="h-28 w-28 sm:w-32 lg:w-36">
                    <div className="group relative flex h-full w-full flex-col items-center justify-center rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-md transition-colors hover:border-cyan-500/30 hover:bg-white/10 shadow-lg cursor-pointer">
                      {/* Icon Container - Fades out slightly or moves up on hover */}
                      <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-90 group-hover:opacity-40">
                        {skill.icon}
                      </div>

                      {/* Tooltip Text - Hidden by default, appears on hover */}
                      <div className="absolute bottom-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <span className="text-center font-medium text-white text-xs sm:text-sm whitespace-nowrap drop-shadow-md">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
