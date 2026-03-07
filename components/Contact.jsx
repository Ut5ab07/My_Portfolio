"use client";
import SectionWrapper from "./ui/SectionWrapper";
import GlassCard from "./ui/GlassCard";
import MagneticButton from "./ui/MagneticButton";
import { Send, FileDown, Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 w-full max-w-4xl px-6 py-24 mx-auto">
      <SectionWrapper>
        <GlassCard className="p-10 text-center md:p-16 border-white/10">
          <div className="flex items-center w-full mb-6 cursor-pointer">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white px-6 whitespace-nowrap">
              Let&apos;s Build Something<span className="text-cyan-400">.</span>
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          
          <p className="max-w-xl mx-auto text-lg text-gray-300 mb-10 leading-relaxed">
            I&apos;m always open to discussing product design work, collaborations on data science projects, or partnering to build intelligent systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <MagneticButton className="flex items-center gap-2 bg-white text-slate-900 border border-transparent shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-gray-100">
              <Send className="w-4 h-4" />
              Send Message
            </MagneticButton>
            
            <MagneticButton className="flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white">
              <FileDown className="w-4 h-4" />
              Download Resume
            </MagneticButton>
          </div>

          <div className="flex items-center justify-center gap-8 border-t border-white/10 pt-8 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </GlassCard>
      </SectionWrapper>
    </section>
  );
}
