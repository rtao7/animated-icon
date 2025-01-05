import { motion } from "motion/react";

interface CanvasProps {
  className?: string;
  children?: React.ReactNode;
}

export function Canvas({ className, children }: CanvasProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className={`${className} z-10 w-16 h-16 grid place-items-center shadow-sm  bg-white rounded-lg`}
    >
      {children}
    </motion.div>
  );
}
