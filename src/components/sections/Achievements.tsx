"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Milestones"
          title="Achievements"
          subtitle="Recognition and milestones that reflect dedication and consistent effort."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-6 relative overflow-hidden group cursor-default"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(224,64,251,0.1), transparent 70%)",
                }}
              />

              <div className="relative">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(224,64,251,0.15), rgba(160,196,255,0.15))",
                    border: "1px solid rgba(224,64,251,0.25)",
                    boxShadow: "0 4px 20px rgba(224,64,251,0.1)",
                  }}
                >
                  {ach.icon}
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-[#E040FB] transition-colors duration-300">
                  {ach.title}
                </h3>
                <p className="text-[#C2D1F0] text-sm leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-b-2xl"
                style={{
                  background: "linear-gradient(90deg, #E040FB, #A0C4FF)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
