import { JSX } from "react";

export interface LucideIcons {
  id: number;
  name: string;
  svg: JSX.Element;
}

export const LucideIcons: LucideIcons[] = [
  {
    id: 1,
    name: "message-circle",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-message-circle"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    ),
  },
];
