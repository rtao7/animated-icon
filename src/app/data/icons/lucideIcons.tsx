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
    name: "bookmark",
    svg: (
      <motion.svg
        initial="initial"
        whileHover="whileHover"
        whileTap="whileTap"
        whileFocus="whileFocus"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-bookmark-check"
      >
        <motion.path
          variants={{
            initial: {
              pathLength: 1,
              opacity: 1,
            },
            whileHover: {
              pathLength: [0, 1],
              opacity: 1,
            },
            whileTap: {
              pathLength: 1,
              opacity: 1,
            },
          }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"
        />
        <motion.path
          variants={{
            initial: {
              pathLength: 0,
              opacity: 0,
            },
            whileHover: {
              pathLength: 1,
              opacity: 1,
            },
            whileTap: {
              pathLength: 1,
              opacity: 1,
            },
          }}
          transition={{ delay: 0.2 }}
          d="m9 10 2 2 4-4"
        />
      </motion.svg>
    ),
  },
  {
    id: 2,
    name: "book",
    svg: (
      <motion.svg
        initial="initial"
        whileHover="whileHover"
        whileTap="whileTap"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-book-open-text"
      >
        <path d="M12 7v14" />
        <motion.path
          variants={{
            initial: { opacity: 0, pathLength: 0 },
            whileHover: { opacity: 1, pathLength: 1 },
          }}
          transition={{ delay: 0.3 }}
          d="M16 12h2"
        />
        <motion.path
          variants={{
            initial: { opacity: 0, pathLength: 0 },
            whileHover: { opacity: 1, pathLength: 1 },
          }}
          transition={{ delay: 0.2 }}
          d="M16 8h2"
        />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
        <motion.path
          variants={{
            initial: { opacity: 0, pathLength: 0 },
            whileHover: { opacity: 1, pathLength: 1 },
          }}
          transition={{ delay: 0.1 }}
          d="M6 12h2"
        />
        <motion.path
          variants={{
            initial: { opacity: 0, pathLength: 0 },
            whileHover: { opacity: 1, pathLength: 1 },
          }}
          d="M6 8h2"
        />
      </motion.svg>
    ),
  },
  {
    id: 3,
    name: "refresh",
    svg: (
      <motion.svg
        initial="initial"
        whileHover="whileHover"
        exit="false"
        variants={{
          whileHover: {
            rotate: [0, -360],
          },
        }}
        transition={{ type: "spring", bounce: 0.01 }}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-refresh-ccw"
      >
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </motion.svg>
    ),
  },

  {
    id: 4,
    name: "copy",
    svg: (
      <motion.svg
        initial="initial"
        whileHover="whileHover"
        whileTap="whileTap"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-copy"
      >
        <motion.rect
          variants={{
            initial: { scale: 1 },
            whileHover: {
              x: [0, -3, 0],
              y: [0, -3, 0],
            },
          }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          width="14"
          height="14"
          x="8"
          y="8"
          rx="2"
          ry="2"
        />
        <motion.path
          variants={{
            initial: { scale: 1, pathLength: 1 },
            whileHover: {
              x: [0, 3, 0],
              y: [0, 3, 0],
              opacity: [0.8, 0, 0.8],
            },
          }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
        />
      </motion.svg>
    ),
  },
  {
    id: 5,
    name: "to-do",
    svg: (
      <motion.svg
        initial="initial"
        whileHover="whileHover"
        whileTap="whileTap"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-list-todo"
      >
        <motion.rect
          variants={{
            initial: { scale: 1 },
            whileHover: { scale: [0, 1] },
          }}
          x="3"
          y="5"
          width="6"
          height="6"
          rx="1"
        />
        <motion.path
          variants={{
            initial: { scale: 1 },
            whileHover: { scale: [0, 1], pathLength: [0, 1] },
          }}
          transition={{ delay: 0.1 }}
          d="m3 17 2 2 4-4"
        />
        <motion.path
          variants={{ whileHover: { pathLength: [0, 1] } }}
          d="M13 6h8"
        />
        <motion.path
          variants={{ whileHover: { pathLength: [0, 1] } }}
          d="M13 12h8"
        />
        <motion.path
          variants={{ whileHover: { pathLength: [0, 1] } }}
          d="M13 18h8"
        />
      </motion.svg>
    ),
  },
  {
    id: 6,
    name: "scan",
    svg: (
      <motion.svg
        initial="initial"
        whileHover="whileHover"
        exit="exit"
        key="scan"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-scan-line"
      >
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <motion.path
          variants={{
            initial: { opacity: 1 },
            whileHover: { y: [0, -5, 5, 0] },
            exit: { opacity: 0 },
          }}
          d="M7 12h10"
        />
      </motion.svg>
    ),
  },
  {
    id: 7,
    name: "bell",
    svg: (
      <motion.svg
        initial="initial"
        whileHover="whileHover"
        exit="exit"
        variants={{
          whileHover: { rotate: [0, 20, -20, 4, 0] },
        }}
        transition={{ duration: 0.6 }}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-bell"
      >
        <motion.path
          variants={{
            whileHover: {
              rotate: [0, 24, 16, -16, 12, 0],
              x: [0, -5, 5, -2, 2, 0],
            },
          }}
          transition={{ duration: 0.8 }}
          d="M10.268 21a2 2 0 0 0 3.464 0"
        />
        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
      </motion.svg>
    ),
  },
  {
    id: 8,
    name: "trash",
    svg: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28" // Increased from 28
        height="28" // Increased from 28
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-trash"
        style={{
          transformOrigin: "center",
          transformBox: "fill-box",
        }}
      >
        <motion.path
          variants={{
            initial: { opacity: 1 },
            whileHover: { x: -3, y: -3, rotate: -10 },
          }}
          d="M3 6h18"
        />
        <motion.path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <motion.path
          variants={{
            initial: { opacity: 1 },
            whileHover: { x: -3, y: -3, rotate: -10 },
          }}
          d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
        />
      </motion.svg>
    ),
  },
  {
    id: 9,
    name: "arrow-right",
    svg: (
      <motion.svg
        initial="initial"
        whileHover="whileHover"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-arrow-right"
      >
        <motion.path
          variants={{
            whileHover: { x: [0, 40, 0, -40, 0], opacity: [1, 0, 0, 1] },
          }}
          d="M5 12h14"
        />
        <motion.path
          variants={{
            whileHover: { x: [0, 40, 0, -40, 0], opacity: [1, 0, 0, 1] },
          }}
          d="m12 5 7 7-7 7"
        />
      </motion.svg>
    ),
  },
  {
    id: 10,
    name: "chart-column",
    svg: (
      <motion.svg
        initial={false}
        whileHover="whileHover"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-chart-column-big"
      >
        <motion.path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <motion.rect
          variants={{
            whileHover: { scaleY: [1, 1.1, 1.05, 1], y: [0, 1, -3, 0] },
          }}
          transition={{ duration: 0.6 }}
          x="15"
          y="5"
          width="4"
          height="12"
          rx="1"
          style={{
            transformBox: "fill-box",
            transformOrigin: "bottom",
          }}
        />
        <motion.rect
          variants={{
            whileHover: { scaleY: [1, 1.2, 1], y: [0, 1, -3, 0] },
          }}
          transition={{ duration: 0.6 }}
          x="7"
          y="8"
          width="4"
          height="9"
          rx="1"
          style={{
            transformBox: "fill-box",
            transformOrigin: "bottom",
          }}
        />
      </motion.svg>
    ),
  },
  {
    id: 11,
    name: "chart-scatter",
    svg: (
      <motion.svg
        initial="initial"
        whileHover="whileHover"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-chart-scatter"
      >
        <motion.circle
          variants={{
            initial: { scale: 1 },
            whileHover: { scale: 1.1, x: 4, y: 2 },
          }}
          cx="7.5"
          cy="7.5"
          r=".5"
          fill="currentColor"
        />
        <motion.circle
          variants={{ whileHover: { scale: 1.1, x: -10 } }}
          cx="18.5"
          cy="5.5"
          r=".5"
          fill="currentColor"
        />
        <motion.circle
          variants={{ whileHover: { scale: 1.1, y: 5, x: 2 } }}
          cx="11.5"
          cy="11.5"
          r=".5"
          fill="currentColor"
        />
        <motion.circle
          variants={{ whileHover: { scale: 1.1, y: -2 } }}
          cx="7.5"
          cy="16.5"
          r=".5"
          fill="currentColor"
        />
        <motion.circle
          variants={{ whileHover: { scale: 1.1, x: 3 } }}
          cx="17.5"
          cy="14.5"
          r=".5"
          fill="currentColor"
        />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      </motion.svg>
    ),
  },
  {
    id: 12,
    name: "chart-line",
    svg: (
      <motion.svg
        initial="initial"
        whileHover="whileHover"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-chart-spline"
      >
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <motion.path
          variants={{
            whileHover: { pathLength: [0, 1] },
          }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"
        />
      </motion.svg>
    ),
  },
  {
    id: 13,
    name: "chart-pie",
    svg: (
      <motion.svg
        initial="initial"
        whileHover="whileHover"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-chart-pie"
      >
        <motion.path
          variants={{
            whileHover: { x: [0, -2, 0, 0], y: [0, 2, 0, 0], scale: [0.8, 1] },
          }}
          d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
        />
        <motion.path
          variants={{
            whileHover: { pathLength: [0, 1] },
          }}
          d="M21.21 15.89A10 10 0 1 1 8 2.83"
        />
      </motion.svg>
    ),
  },
  {
    id: 14,
    name: "train",
    svg: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-train-front-tunnel"
      >
        <motion.path d="M2 22V12a10 10 0 1 1 20 0v10" />
        <motion.path
          variants={{ whileHover: { scale: [0.6, 1.1], y: [3, 0] } }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"
        />
        <motion.path
          variants={{ whileHover: { scale: [0.6, 1.1] } }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          d="M10 15h.01"
        />
        <motion.path
          variants={{ whileHover: { scale: [0.6, 1.1] } }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          d="M14 15h.01"
        />
        <motion.path
          variants={{ whileHover: { scale: [0.6, 1.1] } }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"
        />
        <motion.path
          variants={{ whileHover: { scale: [0.6, 1], y: [0, 1] } }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          d="m9 19-2 3"
        />
        <motion.path
          variants={{ whileHover: { scale: [0.6, 1], y: [0, 1] } }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          d="m15 19 2 3"
        />
      </motion.svg>
    ),
  },
  {
    id: 15,
    name: "plane-takeoff",
    svg: (
      <motion.svg
        initial="initial"
        whileHover="whileHover"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-plane-takeoff"
      >
        <motion.path
          variants={{
            whileHover: { opacity: [1, 0, 1], pathLength: 1 },
          }}
          d="M2 22h20"
        />
        <motion.path
          variants={{
            initial: { rotate: 25, x: 0 },
            whileHover: {
              x: [0, 28, 0, -28, 0],
              opacity: [1, 0, 0, 1],
            },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
        />
      </motion.svg>
    ),
  },
  {
    id: 16,
    name: "@",
    svg: (
      <motion.svg
        initial={false}
        whileHover={{ rotate: [0, -20, 20, -10, 10, -5, 5, 0] }}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-at-sign"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
      </motion.svg>
    ),
  },
  {
    id: 17,
    name: "cloud-download",
    svg: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-cloud-download"
      >
        <motion.path
          variants={{ whileHover: { y: 2 } }}
          transition={{ type: "spring", bounce: 0.8 }}
          d="M12 13v8l-4-4"
        />
        <motion.path
          variants={{ whileHover: { y: 2 } }}
          transition={{ type: "spring", bounce: 0.8 }}
          d="m12 21 4-4"
        />
        <motion.path
          variants={{ whileHover: { y: -1 } }}
          transition={{ type: "spring", bounce: 0.8 }}
          d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"
        />
      </motion.svg>
    ),
  },
];
