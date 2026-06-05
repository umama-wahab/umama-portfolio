"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

type Filter = "All" | "Java" | "Web" | "Research" | "Design";
const filters: Filter[] = ["All", "Java", "Web", "Research", "Design"];

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="What I've Built"
          title="Projects"
          subtitle="A collection of engineering projects spanning systems, web apps, research, and design."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                color: active === f ? "#fff" : "#C2D1F0",
              }}
            >
              {active === f && (
                <motion.div
                  layoutId="filterActive"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(224,64,251,0.3), rgba(160,196,255,0.15))",
                    border: "1px solid rgba(224,64,251,0.4)",
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              {active !== f && (
                <span
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass rounded-2xl p-6 flex flex-col group"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                {/* Icon + category */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(224,64,251,0.15), rgba(160,196,255,0.15))",
                      border: "1px solid rgba(224,64,251,0.25)",
                    }}
                  >
                    {project.icon}
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-lg text-xs font-mono"
                    style={{
                      background: "rgba(160,196,255,0.1)",
                      border: "1px solid rgba(160,196,255,0.2)",
                      color: "#A0C4FF",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-[#E040FB] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-[#C2D1F0] text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag-pill">
                      {t}
                    </span>
                  ))}
                </div>

                {/* View details */}
                <div
                  className="flex items-center gap-2 text-sm text-[#E040FB] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                  <ExternalLink size={14} />
                  View Details
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{
                    background: "linear-gradient(90deg, #E040FB, #A0C4FF)",
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
