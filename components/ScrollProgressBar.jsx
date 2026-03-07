"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-gradient-to-r from-cyan-400 to-purple-600 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
