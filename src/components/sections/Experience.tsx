"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Work History"
          title="Experience"
          subtitle="Real-world exposure shaping my skills and professional mindset."
        />

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px timeline-line opacity-30 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex gap-6 md:pl-16"
              >
                {/* Dot */}
                <div
                  className="absolute left-5 top-7 w-6 h-6 rounded-full hidden md:flex items-center justify-center"
                  style={{
                    background: exp.current
                      ? "linear-gradient(135deg, #E040FB, #A0C4FF)"
                      : "rgba(76,58,130,0.6)",
                    border: "2px solid rgba(224,64,251,0.5)",
                    boxShadow: exp.current
                      ? "0 0 15px rgba(224,64,251,0.6)"
                      : "none",
                  }}
                >
                  <Briefcase size={11} className="text-white" />
                </div>

                {/* Card */}
                <div
                  className="flex-1 glass rounded-2xl p-6"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-[#A0C4FF] font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {exp.current && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: "rgba(74,222,128,0.15)",
                            border: "1px solid rgba(74,222,128,0.3)",
                            color: "#4ade80",
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Current
                        </span>
                      )}
                      <span className="text-[#C2D1F0]/60 text-sm font-mono">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-[#C2D1F0] text-sm">
                        <CheckCircle2
                          size={15}
                          className="text-[#E040FB] shrink-0 mt-0.5"
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
