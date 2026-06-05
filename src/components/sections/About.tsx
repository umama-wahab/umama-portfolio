"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Lightbulb, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const traits = [
  {
    icon: <Code2 size={22} className="text-[#E040FB]" />,
    title: "Full-Stack Development",
    desc: "Building end-to-end web applications with React, Next.js, and modern backend technologies.",
  },
  {
    icon: <Layers size={22} className="text-[#A0C4FF]" />,
    title: "UI/UX Design",
    desc: "Crafting intuitive, visually elegant interfaces using Figma and design-first thinking.",
  },
  {
    icon: <Lightbulb size={22} className="text-[#E040FB]" />,
    title: "Problem Solving",
    desc: "Tackling complex engineering challenges with structured algorithms and creative approaches.",
  },
  {
    icon: <Users size={22} className="text-[#A0C4FF]" />,
    title: "Team Collaboration",
    desc: "Working effectively in agile teams, contributing to shared goals and clean codebases.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Who I Am"
          title="About Me"
          subtitle="A passionate engineer building meaningful software at the intersection of design and technology."
        />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Bio card */}
          <GlassCard className="p-8" delay={0.1}>
            <div className="mb-6">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4"
                style={{
                  background: "rgba(224,64,251,0.1)",
                  border: "1px solid rgba(224,64,251,0.3)",
                  color: "#E040FB",
                }}
              >
                ✦ Currently at NexSoft Solutions
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Building the future, one commit at a time.
              </h3>
            </div>

            <div className="space-y-4 text-[#C2D1F0] leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-medium">Umama Wahab</span>, a
                BS Software Engineering student at{" "}
                <span className="text-[#A0C4FF] font-medium">
                  National University of Science and Technology (NUST)
                </span>
                — one of Pakistan&apos;s most prestigious institutions.
              </p>
              <p>
                My passion lies at the intersection of{" "}
                <span className="text-[#E040FB] font-medium">
                  software engineering
                </span>
                ,{" "}
                <span className="text-[#E040FB] font-medium">
                  full-stack development
                </span>
                , and{" "}
                <span className="text-[#E040FB] font-medium">UI/UX design</span>. I
                believe great software is both technically excellent and
                beautifully crafted.
              </p>
              <p>
                Currently interning as a{" "}
                <span className="text-white font-medium">
                  Full Stack Web Developer
                </span>{" "}
                at NexSoft Solutions, where I contribute to real-world
                production projects and sharpen my skills every day.
              </p>
              <p>
                Beyond code, I enjoy researching emerging technologies,
                designing product interfaces, and building projects that solve
                real problems.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              {[
                { label: "Projects Built", value: "9+" },
                { label: "Technologies", value: "15+" },
                { label: "Board Positions", value: "2×" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-2xl font-bold gradient-text">
                    {s.value}
                  </p>
                  <p className="text-[#C2D1F0] text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Traits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <GlassCard key={t.title} className="p-6" hover delay={0.1 + i * 0.1}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {t.icon}
                </div>
                <h4 className="font-display text-base font-semibold text-white mb-2">
                  {t.title}
                </h4>
                <p className="text-[#C2D1F0] text-sm leading-relaxed">{t.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
