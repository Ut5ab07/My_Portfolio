"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function TiltCard({ children, className }) {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [5, -5]);
  const rotateY = useTransform(x, [0, 400], [-5, 5]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <motion.div
      style={{
        perspective: 1000,
      }}
      className={className}
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={() => {
          x.set(200);
          y.set(200);
        }}
        style={{
          rotateX,
          rotateY,
        }}
        className="h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
