// "use client" for rending animation on client side
"use client";
import { Canvas } from "./components/Canvas";
import { heroIcons } from "./data/icons/heroIcons";
import { LucideIcons } from "./data/icons/lucideIcons";

function App() {
  return (
    <div>
      <div className="isolate group transition-all px-6 h-[90vh] grid place-items-center text-center">
        <div className="relative flex flex-col gap-4">
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
          <h1 className="z-10 text-4xl font-black font-mono text-transparent bg-[linear-gradient(90deg,rgba(255,179,240,0.5),rgba(61,0,121,1),rgba(61,0,121,1),rgba(110,102,212,0.5))] bg-clip-text">
            Animated icons
          </h1>
          <p className="z-10 text-base mx-6 md:w-[480px] leading-6 text-muted-foreground">
            A collection of animated SVG icons - Built on top of Lucid Icons.
            Download and use freely. Created by Ray.
          </p>
        </div>
        {/* Glowing Blur Circle in the Background */}
        <div className="absolute -z-0 w-[420px] h-[420px] rounded-full bg-[linear-gradient(rgba(255,179,240,0.2),rgba(255,179,240,0.3))] blur-md shadow-lg opacity-20"></div>
        <div className="absolute blur-md -z-10 w-[520px] h-[520px] rounded-full bg-[linear-gradient(rgba(255,207,196,0.50),rgba(255,179,240,0.50))] opacity-50"></div>
      </div>
      <div className="h-dvh flex flex-col gap-6">
        <div className="max-w-xl mx-auto grid grid-cols-4 md:grid-cols-6 place-items-center gap-4 px-4">
          {LucideIcons.map((icons) => (
            <Canvas key={icons.id}>{icons.svg}</Canvas>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
