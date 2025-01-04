import { Canvas } from "./components/Canvas";

function App() {
  return (
    <div>
      <div className="isolate group transition-all px-6 h-[90vh] grid place-items-center text-center">
        <div className="relative flex flex-col gap-4">
          <Canvas className="absolute group-hover:-top-[100px] group-hover:-rotate-45 group-hover:ease-out group-hover:duration-600 ease-out duration-300 -rotate-[20deg] -top-12 -left-6">
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
                stroke-width="3"
                rx="17.5"
              />
              <circle
                cx="19"
                cy="19"
                r="11"
                stroke="url(#b)"
                stroke-width="4"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="19"
                  x2="19"
                  y1="0"
                  y2="38"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFB3F0" />
                  <stop offset=".515" stop-color="#3D0079" />
                  <stop offset="1" stop-color="#6E66D4" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="19"
                  x2="19"
                  y1="6"
                  y2="32"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFB3F0" />
                  <stop offset=".515" stop-color="#3D0079" />
                  <stop offset="1" stop-color="#6E66D4" />
                </linearGradient>
              </defs>
            </svg>
          </Canvas>
          <Canvas className="absolute group-hover:top-[100px] group-hover:rotate-45 group-hover:ease-out group-hover:duration-600 ease-out duration-300 rotate-[30deg] top-20 -left-10" />
          <Canvas className="absolute group-hover:-top-[110px] group-hover:-right-8 group-hover:rotate-[60deg] group-hover:ease-out group-hover:duration-600 duration-300 rotate-[10deg] -top-10 -right-2" />
          <Canvas className="absolute group-hover:top-[120px] group-hover:-right-4 group-hover:rotate-[60deg] group-hover:ease-out group-hover:duration-600 duration-300 rotate-[20deg] top-20 -right-2" />
          <Canvas className="absolute group-hover:-top-[180px] group-hover:-right-4 group-hover:-rotate-[10deg] group-hover:ease-out group-hover:duration-600 duration-300 rotate-[14deg] -top-20 left-1/2" />
          <h1 className="z-10 text-4xl font-black font-mono text-transparent bg-[linear-gradient(90deg,rgba(255,179,240,0.5),rgba(61,0,121,1),rgba(61,0,121,1),rgba(110,102,212,0.5))] bg-clip-text">
            Animated icons
          </h1>
          <p className="z-10 text-base mx-6 md:w-[480px] leading-6 text-muted-foreground">
            A collection of animated SVG icons - Built on top of Lucid Icons.
            Download and use freely. Created by Ray.
          </p>
        </div>
        <div className="absolute blur-md -z-10 w-[420px] h-[420px] rounded-full bg-[linear-gradient(rgba(255,179,240,0.50),rgba(255,179,240,0.20))] opacity-20"></div>
        <div className="absolute blur-md -z-10 w-[520px] h-[520px] rounded-full bg-[linear-gradient(rgba(255,207,196,0.50),rgba(255,179,240,0.50))] opacity-20"></div>
      </div>
      <div className="h-dvh flex flex-col gap-6">
        <button>Click Icon to Copy SVG</button>
        <div className="max-w-xl mx-auto grid grid-cols-4 md:grid-cols-6 place-items-center gap-4 px-4">
          <Canvas>
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
              className="lucide lucide-brush"
            >
              <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
              <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
            </svg>
          </Canvas>
          <Canvas>
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
          </Canvas>
          <Canvas>
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
              className="lucide lucide-book-open-text"
            >
              <path d="M12 7v14" />
              <path d="M16 12h2" />
              <path d="M16 8h2" />
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              <path d="M6 12h2" />
              <path d="M6 8h2" />
            </svg>
          </Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
          <Canvas></Canvas>
        </div>
      </div>
    </div>
  );
}

export default App;
