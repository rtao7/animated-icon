import React from "react";
import { motion } from "motion/react";

export interface LucideIcon {
  id: number;
  name: string;
  //   svg type React.ReactNode (vs.JSX.Element)
  svg: React.ReactNode;
}

export const LucideIcons: LucideIcon[] = [
  {
    id: 1,
    name: "message-circle",
    svg: (
      <motion.svg
        whileHover="whileHover"
        variants={{
          whileHover: { rotate: [0, -20, 10, -20, 5, -10, 0] },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-message-circle"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
      </motion.svg>
    ),
  },
  {
    id: 2,
    name: "bell",
    svg: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-bell"
      >
        <path d="M10.268 21a2 2 0 0 0 3.464 0" />
        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
      </motion.svg>
    ),
  },
];
