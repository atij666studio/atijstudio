"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// A thin gradient bar pinned under the navbar that fills as the visitor
// scrolls down the page — a small, common "modern site" signal of progress.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left">
      <div
        className="h-full w-full"
        style={{ backgroundImage: "linear-gradient(90deg, var(--accent), var(--accent-2))" }}
      />
    </motion.div>
  );
}
