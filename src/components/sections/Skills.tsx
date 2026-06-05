"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="What I Work With"
          title="Skills & Technologies"
          subtitle="A curated toolkit built through academic projects, internships, and self-directed learning."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-6 group cursor-default"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                transition: "border-color 0.3s",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(224,64,251,0.2), rgba(160,196,255,0.2))",
                    border: "1px solid rgba(224,64,251,0.3)",
                  }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {cat.category}
                </h3>
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "rgba(224,64,251,0.2)",
                      borderColor: "rgba(224,64,251,0.5)",
                    }}
                    className="px-3 py-1.5 rounded-xl text-sm text-[#C2D1F0] cursor-default transition-colors duration-200"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>

              {/* Bottom glow on hover */}
              <div
                className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                style={{
                  background: "linear-gradient(90deg, transparent, #E040FB, transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
