"use client";
import { motion } from "framer-motion";

export default function SectionWrapper({ children, className, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
