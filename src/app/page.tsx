import { Canvas } from "./components/Canvas";

function App() {
  return (
    <div className="px-6 h-dvh grid mt-[40%] text-center">
      <div className="relative flex flex-col gap-4">
        <Canvas className="-rotate-[20deg] -top-12 -left-6" />
        <Canvas className="-rotate-[30deg] top-20 -left-10" />
        <Canvas className="rotate-[10deg] -top-10 -right-2" />
        <Canvas className="rotate-[20deg] top-20 -right-2" />
        <Canvas className="-rotate-[14deg] top-[30%] left-1/2" />
        <h1 className="z-10 text-2xl font-black">Animated icons</h1>
        <p className="z-10 text-base leading-6 text-muted-foreground">
          A collection of animated SVG icons - Built on top of Lucid Icons.
          Download and use freely. Created by Ray.
        </p>
      </div>
    </div>
  );
}

export default App;
