"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/Icons";

// A small bouncing hint at the bottom of a hero section, inviting the
// visitor to keep scrolling. Automatically goes static for visitors with
// "reduce motion" enabled, via the MotionConfig set up in MotionProvider.
export default function ScrollCue({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className={`pointer-events-none flex justify-center ${className}`}
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="text-muted"
      >
        <Icon name="chevron-down" className="h-5 w-5" />
      </motion.div>
    </motion.div>
  );
}
