"use client";

import {
  type AnimationDelay,
  useResolvedDelay,
} from "@/components/hooks/useResolvedDelay";
import { motion } from "motion/react";

type Props = {
  className?: string;
  delay?: AnimationDelay;
  children?: React.ReactNode;
};

const AnimatedDiv = ({ className = "", delay = 0, children }: Props) => {
  const resolvedDelay = useResolvedDelay(delay);

  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: resolvedDelay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
