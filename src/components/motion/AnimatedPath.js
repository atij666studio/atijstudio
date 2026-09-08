"use client";

import { motion } from "framer-motion";

// A stroked SVG path that draws itself in when it scrolls into view.
// Pass any normal <path> props (d, stroke, etc.) through.
export function AnimatedPath({ delay = 0, duration = 1.2, ...props }) {
  return (
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: "easeInOut" }}
      {...props}
    />
  );
}
