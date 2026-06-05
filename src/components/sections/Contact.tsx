"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire up backend here
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-white text-sm placeholder-[#C2D1F0]/40 outline-none transition-all duration-300 focus:border-[#E040FB]/60 focus:shadow-[0_0_15px_rgba(224,64,251,0.15)]";
  const inputStyle = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Get In Touch"
          title="Contact"
          subtitle="Have a project in mind or want to connect? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <GlassCard className="p-8" delay={0.1}>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Let&apos;s work together
            </h3>
            <p className="text-[#C2D1F0] mb-8 leading-relaxed">
              Whether it&apos;s a freelance project, internship opportunity, or just a
              conversation about tech — my inbox is always open.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <Mail size={18} className="text-[#E040FB]" />,
                  label: "Email",
                  value: "umamawahab412@gmail.com",
                  href: "mailto:umamawahab412@gmail.com",
                },
                {
                  icon: <Github size={18} className="text-[#A0C4FF]" />,
                  label: "GitHub",
                  value: "github.com/umama-wahab",
                  href: "https://github.com/umama-wahab/",
                },
                {
                  icon: <Linkedin size={18} className="text-[#A0C4FF]" />,
                  label: "LinkedIn",
                  value: "linkedin.com/in/umama-wahab",
                  href: "https://www.linkedin.com/in/umama-wahab",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300 hover:border-[#E040FB]/30"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#C2D1F0]/60 text-xs mb-0.5">{item.label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-[#E040FB] transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </GlassCard>

          {/* Form */}
          <GlassCard className="p-8" delay={0.2}>
            <h3 className="font-display text-xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#C2D1F0] text-xs font-mono mb-2 uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-[#C2D1F0] text-xs font-mono mb-2 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-[#C2D1F0] text-xs font-mono mb-2 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70"
                style={{
                  background: sent
                    ? "linear-gradient(135deg, #4ade80, #22c55e)"
                    : "linear-gradient(135deg, #E040FB, #A0C4FF)",
                  boxShadow: "0 0 20px rgba(224,64,251,0.3)",
                }}
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} /> Message Sent!
                  </>
                ) : loading ? (
                  <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
