"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  download?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  target,
  download,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 relative overflow-hidden";

  const variantClasses = {
    primary:
      "bg-[#E040FB] text-white hover:bg-[#c930e0] shadow-lg hover:shadow-[0_0_30px_rgba(224,64,251,0.5)]",
    secondary:
      "glass border border-white/20 text-white hover:border-[#E040FB]/50 hover:shadow-[0_0_20px_rgba(224,64,251,0.2)]",
    ghost: "text-[#C2D1F0] hover:text-white hover:bg-white/5",
  };

  const classes = cn(baseClasses, variantClasses[variant], className);

  const MotionComponent = motion.div;

  if (href) {
    return (
      <MotionComponent whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.03 }}>
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          download={download}
          className={classes}
        >
          {children}
        </a>
      </MotionComponent>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
