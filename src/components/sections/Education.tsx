"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Academic Background"
          title="Education"
          subtitle="A strong academic foundation built on consistency, hard work, and a passion for learning."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px timeline-line opacity-30 hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex gap-6 md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-5 top-6 w-6 h-6 rounded-full hidden md:flex items-center justify-center"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(135deg, #E040FB, #A0C4FF)"
                        : "rgba(224,64,251,0.3)",
                    border: "2px solid rgba(224,64,251,0.5)",
                    boxShadow: i === 0 ? "0 0 15px rgba(224,64,251,0.5)" : "none",
                  }}
                >
                  {i === 0 ? (
                    <GraduationCap size={12} className="text-white" />
                  ) : (
                    <Award size={12} className="text-[#E040FB]" />
                  )}
                </div>

                {/* Card */}
                <div
                  className="flex-1 glass rounded-2xl p-6 transition-all duration-300 hover:border-[#E040FB]/30"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-[#A0C4FF] text-sm">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono"
                        style={{
                          background:
                            i === 0
                              ? "rgba(224,64,251,0.2)"
                              : "rgba(255,255,255,0.08)",
                          border:
                            i === 0
                              ? "1px solid rgba(224,64,251,0.4)"
                              : "1px solid rgba(255,255,255,0.12)",
                          color: i === 0 ? "#E040FB" : "#C2D1F0",
                        }}
                      >
                        {edu.status}
                      </span>
                      {edu.year && (
                        <span className="text-[#C2D1F0]/60 text-xs font-mono">
                          {edu.year}
                        </span>
                      )}
                    </div>
                  </div>

                  {edu.achievement && (
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm"
                      style={{
                        background: "rgba(160,196,255,0.1)",
                        border: "1px solid rgba(160,196,255,0.25)",
                      }}
                    >
                      <span>🥉</span>
                      <span className="text-[#A0C4FF] font-medium">
                        {edu.achievement}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
