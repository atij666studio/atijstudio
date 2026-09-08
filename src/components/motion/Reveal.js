"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Fades + slides an element in once it scrolls into view. Use this for any
// section on the page that isn't visible on first load.
export function Reveal({ children, className = "", delay = 0, y = 24, as = "div" }) {
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}

// Wrap a grid/list with RevealGroup and each child with RevealItem to have
// them fade in one after another as the group scrolls into view.
export function RevealGroup({ children, className = "", stagger = 0.08 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: stagger }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "", y = 20 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Same idea as RevealGroup/RevealItem, but plays immediately on mount
// instead of waiting for scroll — for hero content that's visible on load.
export function HeroGroup({ children, className = "", stagger = 0.12 }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: stagger }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({ children, className = "", y = 20 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
