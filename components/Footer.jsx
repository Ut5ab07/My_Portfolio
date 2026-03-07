"use client";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-slate-900/50 backdrop-blur-md py-8 relative z-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-6 sm:flex-row">
        
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-lg font-bold tracking-tight text-white gap-2 flex items-center">
            Utsab<span className="text-cyan-400">.</span>
          </span>
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Utsab. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
