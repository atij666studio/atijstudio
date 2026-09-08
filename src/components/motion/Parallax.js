"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// A background layer that drifts slower than the page as you scroll past
// its containing section — the classic hero "depth" effect. Render this as
// the first child of a `relative` section with `overflow-hidden`.
export function ParallaxLayer({ src, className = "", strength = 30 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${strength}%`]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        style={{ y, backgroundImage: `url(${src})` }}
        className={`absolute inset-0 -top-[20%] h-[140%] bg-cover bg-center ${className}`}
      />
    </div>
  );
}
