import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

export function ParallaxMotion({ children, speed = -100 }: { children: ReactNode; speed?: number }) {
  const { scrollY } = useScroll();

  const translateY = useTransform(scrollY, [0, 1000], [0, speed]);

  return (
    <motion.div style={{ y: translateY }}>
      {children}
    </motion.div>
  );
}
