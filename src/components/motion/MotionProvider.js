"use client";

import { MotionConfig } from "framer-motion";
import ScrollProgress from "./ScrollProgress";

// Wraps the whole app so every animation in the motion/ components
// automatically respects the visitor's OS-level "reduce motion" setting,
// and mounts the top scroll-progress bar once, globally.
export default function MotionProvider({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      {children}
    </MotionConfig>
  );
}
