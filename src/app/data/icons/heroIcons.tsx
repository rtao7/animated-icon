import { JSX } from "react";

export interface HeroIcons {
  id: number;
  name: string;
  svg: JSX.Element;
}

export const heroIcons: HeroIcons[] = [
  {
    id: 1,
    name: "bullseye",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 38 38"
        width={40}
        height={40}
      >
        <rect
          width="35"
          height="35"
          x="1.5"
          y="1.5"
          stroke="url(#a)"
          strokeWidth="3"
          rx="17.5"
        />
        <circle cx="19" cy="19" r="11" stroke="url(#b)" strokeWidth="4" />
        <defs>
          <linearGradient
            id="a"
            x1="19"
            x2="19"
            y1="0"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFB3F0" />
            <stop offset=".515" stopColor="#3D0079" />
            <stop offset="1" stopColor="#6E66D4" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="19"
            x2="19"
            y1="6"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFB3F0" />
            <stop offset=".515" stopColor="#3D0079" />
            <stop offset="1" stopColor="#6E66D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    name: "x",
    svg: (
      <svg
        viewBox="0 0 38 38"
        width={32}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.8841 38L0 6.17024L6.14306 0L38 31.8841L31.8841 38ZM6.14306 38L0 31.8841L31.8841 0L38 6.17024L22.0715 22.0851L6.14306 38Z"
          fill="url(#paint0_linear_372_276)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_372_276"
            x1="19"
            y1="0"
            x2="19"
            y2="50.6667"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFB3F0" />
            <stop offset="0.515" stop-color="#3D0079" />
            <stop offset="1" stop-color="#6E66D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    name: "square",
    svg: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_372_278" fill="white">
          <rect width="38" height="38" rx="2" />
        </mask>
        <rect
          width="38"
          height="38"
          rx="2"
          stroke="url(#paint0_linear_372_278)"
          strokeWidth="8"
          mask="url(#path-1-inside-1_372_278)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_372_278"
            x1="19"
            y1="0"
            x2="19"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFB3F0" />
            <stop offset="0.515" stop-color="#3D0079" />
            <stop offset="1" stop-color="#6E66D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    name: "triangle",
    svg: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 44 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 0L0 38H44L22 0ZM22 9.65079L8.38095 33.1746H35.6191L22 9.65079Z"
          fill="url(#paint0_linear_372_269)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_372_269"
            x1="22"
            y1="0"
            x2="22"
            y2="50.6667"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFB3F0" />
            <stop offset="0.515" stop-color="#3D0079" />
            <stop offset="1" stop-color="#6E66D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 5,
    name: "circle",
    svg: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="34"
          height="34"
          rx="17"
          stroke="url(#paint0_linear_372_262)"
          strokeWidth="4"
        />
        <defs>
          <linearGradient
            id="paint0_linear_372_262"
            x1="19"
            y1="0"
            x2="19"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFB3F0" />
            <stop offset="0.515" stop-color="#3D0079" />
            <stop offset="1" stop-color="#6E66D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];
