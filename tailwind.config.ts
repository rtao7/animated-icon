import type { Config } from "tailwindcss/types";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-major-mono)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        sm: "0px 3px 3px -2px rgba(0,0,0,0.08), 0px 2px 2px -1px rgba(0,0,0,0.08), 0px 1px 1px -0.5px rgba(0,0,0,0.08), 0px 0px 0px 1px rgba(0,0,0,0.08)",
        md: "0px 6px 6px -3px rgba(0,0,0,0.08), 0px 3px 3px -1.5px rgba(0,0,0,0.08), 0px 1px 1px -0.5px rgba(0,0,0,0.08), 0px 0px 0px 1px rgba(0,0,0,0.08)",
        lg: "0px 12px 12px -6px rgba(0, 0, 0, 0.04), 0px 6px 6px -3px rgba(0, 0, 0, 0.04), 0px 3px 3px -1.5px rgba(0, 0, 0, 0.04), 0px 1px 1px -0.5px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
} satisfies Config;
