"use client";

import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 px-4 border-t border-white/10">
      <div
        className="max-w-6xl mx-auto glass rounded-2xl px-8 py-6"
        style={{ border: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-display text-white font-bold text-lg mb-1">
              Umama Wahab
            </p>
            <p className="text-[#C2D1F0]/60 text-sm">
              © 2026 · Built with Next.js, Tailwind CSS &amp; Framer Motion
            </p>
          </div>

          <div className="flex items-center gap-2 text-[#C2D1F0]/50 text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-[#E040FB]" fill="#E040FB" />
            <span>by Umama</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/umama-wahab/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-[#C2D1F0] hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/umama-wahab"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-[#C2D1F0] hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
