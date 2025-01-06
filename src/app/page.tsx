// "use client" for rending animation on client side
"use client";
import { Button } from "@/components/ui/button";
import { Canvas } from "./components/Canvas";
import { heroIcons } from "./data/icons/heroIcons";
import { LucideIcons } from "./data/icons/lucideIcons";
import { Badge } from "@/components/ui/badge";

function App() {
  return (
    <div className="bg-[linear-gradient(180deg,rgba(255,207,196,0.05)_10%,rgba(255,207,196,0.1)_50%,rgba(255,179,240,0.1)_75%,transparent_100%)]">
      <div className="isolate group transition-all px-6 h-[70vh] grid place-items-center text-center">
        <div className="relative flex flex-col items-center gap-4">
          <Canvas className="absolute group-hover:-top-[100px] group-hover:-rotate-45 group-hover:ease-out group-hover:duration-600 ease-out duration-300 -rotate-[20deg] -top-12 -left-6">
            {heroIcons[0].svg}
          </Canvas>
          <Canvas className="absolute group-hover:top-[100px] group-hover:rotate-45 group-hover:ease-out group-hover:duration-600 ease-out duration-300 rotate-[30deg] top-20 -left-10">
            {heroIcons[1].svg}
          </Canvas>
          <Canvas className="absolute group-hover:-top-[110px] group-hover:-right-8 group-hover:rotate-[60deg] group-hover:ease-out group-hover:duration-600 duration-300 rotate-[10deg] -top-10 -right-2">
            {heroIcons[2].svg}
          </Canvas>
          <Canvas className="absolute group-hover:top-[120px] group-hover:-right-4 group-hover:rotate-[60deg] group-hover:ease-out group-hover:duration-600 duration-300 rotate-[20deg] top-20 -right-2">
            {heroIcons[4].svg}
          </Canvas>
          <Canvas className="absolute group-hover:-top-[180px] group-hover:-right-4 group-hover:-rotate-[10deg] group-hover:ease-out group-hover:duration-600 duration-300 rotate-[14deg] -top-20 left-1/2">
            {heroIcons[3].svg}
          </Canvas>
          <Badge className="rounded-full">Looking for collaborators</Badge>
          <h1 className="z-10 text-4xl font-black font-mono text-transparent bg-[linear-gradient(90deg,rgba(255,179,240,0.5),rgba(61,0,121,1),rgba(61,0,121,1),rgba(110,102,212,0.5))] bg-clip-text">
            Animated icons
          </h1>
          <p className="z-10 font-monoJetBrains text-base mx-6 md:w-[480px] text-muted-foreground">
            A collection of animated SVG icons - Built using Framer motion and
            Lucide Icons. Check out Github & Free feel to reuse.
          </p>
          <Button variant="secondary" className="w-fit" asChild>
            <a href="https://github.com/rtao7/animated-icon" target="_blank">
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
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Github
            </a>
          </Button>
          <div className="absolute blur-sm -z-10 w-[520px] h-[520px] rounded-full bg-[linear-gradient(rgba(255,207,196,0.50),rgba(255,179,240,0.50))] opacity-50"></div>
        </div>
        {/* Glowing Blur Circle in the Background */}
      </div>
      {/* icon gallery container */}
      <div className="relative h-dvh flex flex-col gap-6">
        <div className="absolute -top-8 h-[1px] w-full bg-[repeating-linear-gradient(90deg,gray,gray_2px,transparent_2px,transparent_4px)] [mask:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)] opacity-20"></div>
        <div className="relative max-w-xl mx-auto flex flex-wrap justify-between md:grid md:grid-cols-6 place-items-center gap-2 md:gap-4 px-4">
          <div className="absolute -left-2 -top-20 w-[1px] h-dvh bg-[repeating-linear-gradient(180deg,gray,gray_2px,transparent_2px,transparent_4px)] [mask:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)] opacity-20"></div>
          <div className="absolute -right-2 -top-20 w-[1px] h-dvh bg-[repeating-linear-gradient(180deg,gray,gray_2px,transparent_2px,transparent_4px)] [mask:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)] opacity-20"></div>
          {LucideIcons.map((icons) => (
            <Canvas
              className="isolate relative rounded-xl bg-[linear-gradient(135deg,rgba(243,243,243,0.1)_65%,rgba(236,247,252,0.5))] shadow-[inset_0_0_8px_-3px_rgba(0,0,0,0.3)]"
              key={icons.id}
            >
              {/* icon canvas background blur */}
              <div className="absolute rounded-full blur-lg ring-1 -inset-1 ring-inset bg-slate-100 -z-10"></div>
              <div className="absolute z-0 h-[1px] w-full bg-[repeating-linear-gradient(90deg,gray,gray_2px,transparent_2px,transparent_4px)] [mask:linear-gradient(90deg,transparent_9%,black_10%,transparent_45%,transparent_65%,black_66%,black_94%,transparent_95%)] opacity-30"></div>
              <div className="absolute z-0 w-[1px] h-full bg-[repeating-linear-gradient(180deg,gray,gray_2px,transparent_2px,transparent_4px)] [mask:linear-gradient(180deg,transparent_9%,black_10%,transparent_45%,transparent_65%,black_66%,black_94%,transparent_94%)] opacity-30"></div>
              <div className="overflow-hidden ring-1 inset-1 p-3 bg-gray-50 ring-purple-200 shadow-lg rounded-lg">
                {icons.svg}
              </div>
            </Canvas>
          ))}{" "}
          {LucideIcons.map((icons) => (
            <Canvas
              className="isolate relative rounded-xl bg-[linear-gradient(135deg,rgba(243,243,243,0.1)_65%,rgba(236,247,252,0.5))] shadow-[inset_0_0_8px_-3px_rgba(0,0,0,0.3)]"
              key={icons.id}
            >
              {/* icon canvas background blur */}
              <div className="absolute rounded-full blur-lg ring-1 -inset-1 ring-inset bg-slate-100 -z-10"></div>
              <div className="absolute z-0 h-[1px] w-full bg-[repeating-linear-gradient(90deg,gray,gray_2px,transparent_2px,transparent_4px)] [mask:linear-gradient(90deg,transparent_9%,black_10%,transparent_45%,transparent_65%,black_66%,black_94%,transparent_95%)] opacity-30"></div>
              <div className="absolute z-0 w-[1px] h-full bg-[repeating-linear-gradient(180deg,gray,gray_2px,transparent_2px,transparent_4px)] [mask:linear-gradient(180deg,transparent_9%,black_10%,transparent_45%,transparent_65%,black_66%,black_94%,transparent_94%)] opacity-30"></div>
              <div className="overflow-hidden ring-1 inset-1 p-3 bg-gray-50 ring-purple-200 shadow-lg rounded-lg">
                {icons.svg}
              </div>
            </Canvas>
          ))}
          {LucideIcons.map((icons) => (
            <Canvas
              className="isolate relative rounded-xl bg-[linear-gradient(135deg,rgba(243,243,243,0.1)_65%,rgba(236,247,252,0.5))] shadow-[inset_0_0_8px_-3px_rgba(0,0,0,0.3)]"
              key={icons.id}
            >
              {/* icon canvas background blur */}
              <div className="absolute rounded-full blur-lg ring-1 -inset-1 ring-inset bg-slate-100 -z-10"></div>
              <div className="absolute z-0 h-[1px] w-full bg-[repeating-linear-gradient(90deg,gray,gray_2px,transparent_2px,transparent_4px)] [mask:linear-gradient(90deg,transparent_9%,black_10%,transparent_45%,transparent_65%,black_66%,black_94%,transparent_95%)] opacity-30"></div>
              <div className="absolute z-0 w-[1px] h-full bg-[repeating-linear-gradient(180deg,gray,gray_2px,transparent_2px,transparent_4px)] [mask:linear-gradient(180deg,transparent_9%,black_10%,transparent_45%,transparent_65%,black_66%,black_94%,transparent_94%)] opacity-30"></div>
              <div className="overflow-hidden ring-1 inset-1 p-3 bg-gray-50 ring-purple-200 shadow-lg rounded-lg">
                {icons.svg}
              </div>
            </Canvas>
          ))}
        </div>
        <div className="h-[1px] w-full bg-[repeating-linear-gradient(90deg,gray,gray_2px,transparent_2px,transparent_4px)] [mask:linear-gradient(90deg,transparent,black_45%,black_55%,transparent)] opacity-30"></div>
      </div>
      {/* Footer */}
      <div className="relative flex flex-col gap-6 items-center h-[40vh] justify-center text-center">
        <h2 className="z-10 text-2xl font-black font-mono">What is this?</h2>
        <div className="">
          Made by Ray
          <span>
            This is a personal projects that I always wanted to do. If you find
            this useful, and would like to contribute. Let&apos;s chat! ☕️
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
