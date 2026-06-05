"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowRight, Sparkles, Code2, Palette } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 relative"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#C2D1F0] mb-6 border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Umama Wahab</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A0C4FF] text-lg md:text-xl font-medium mb-4"
          >
            Software Engineering Student · Full-Stack Developer Intern · UI/UX Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#C2D1F0] text-base md:text-lg leading-relaxed mb-8 max-w-lg"
          >
            I design and develop modern software solutions, from intuitive user
            experiences to scalable web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Button href="#projects" variant="primary">
              View Projects <ArrowRight size={16} />
            </Button>
            <Button href="/resume.pdf" variant="secondary" download>
              Download Resume <Download size={16} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/umama-wahab/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl text-[#C2D1F0] hover:text-white hover:border-[#E040FB]/50 transition-all duration-300 border border-white/10"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/umama-wahab"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl text-[#C2D1F0] hover:text-white hover:border-[#E040FB]/50 transition-all duration-300 border border-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <span className="text-[#C2D1F0]/40 text-sm ml-2">
              github.com/umama-wahab
            </span>
          </motion.div>
        </div>

        {/* Right: Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Main card */}
            <div
              className="glass rounded-3xl p-8 w-80 md:w-96 relative overflow-hidden"
              style={{
                border: "1px solid rgba(224,64,251,0.25)",
                boxShadow:
                  "0 0 60px rgba(224,64,251,0.15), 0 30px 60px rgba(0,0,0,0.3)",
              }}
            >
              {/* Glow top */}
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, #E040FB, transparent)",
                }}
              />

              {/* Avatar */}
              <div className="flex flex-col items-center text-center mb-6">
                <div
                  className="w-24 h-24 rounded-full mb-4 flex items-center justify-center text-4xl relative"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(224,64,251,0.3), rgba(160,196,255,0.3))",
                    border: "2px solid rgba(224,64,251,0.4)",
                    boxShadow: "0 0 30px rgba(224,64,251,0.3)",
                  }}
                >
                  <span className="font-display font-bold text-2xl gradient-text">
                    UW
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-1">
                  Umama Wahab
                </h3>
                <p className="text-[#E040FB] text-sm font-medium mb-4">
                  Full Stack Web Developer Intern
                </p>

                <div
                  className="px-4 py-2 rounded-xl text-xs font-mono"
                  style={{
                    background: "rgba(224,64,251,0.1)",
                    border: "1px solid rgba(224,64,251,0.3)",
                    color: "#E040FB",
                  }}
                >
                  @ NexSoft Solutions
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Projects", value: "9+" },
                  { label: "Skills", value: "15+" },
                  { label: "GPA", value: "Top" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <p className="font-display text-lg font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-[#C2D1F0] text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {["React", "Next.js", "Java", "Figma"].map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ x: [0, 8, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 top-1/4 glass rounded-2xl px-4 py-3 flex items-center gap-2 border border-white/15"
            >
              <Code2 size={16} className="text-[#A0C4FF]" />
              <span className="text-white text-xs font-medium whitespace-nowrap">
                Full-Stack Dev
              </span>
            </motion.div>

            <motion.div
              animate={{ x: [0, -8, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-10 bottom-1/4 glass rounded-2xl px-4 py-3 flex items-center gap-2 border border-white/15"
            >
              <Palette size={16} className="text-[#E040FB]" />
              <span className="text-white text-xs font-medium whitespace-nowrap">
                UI/UX Design
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -top-6 left-1/3 glass rounded-2xl px-4 py-2 flex items-center gap-2 border border-white/15"
            >
              <Sparkles size={14} className="text-[#E040FB]" />
              <span className="text-white text-xs font-medium">NUST</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-[#C2D1F0]/50 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-[#E040FB]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
