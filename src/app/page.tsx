import { Canvas } from "./components/Canvas";

function App() {
  return (
    <div>
      <div className="group transition-all px-6 h-dvh grid place-items-center text-center">
        <div className="relative flex flex-col gap-4">
          <Canvas className="group-hover:-top-[100px] group-hover:-rotate-45 group-hover:ease-out group-hover:duration-600 ease-out duration-300 -rotate-[20deg] -top-12 -left-6" />
          <Canvas className="group-hover:top-[100px] group-hover:rotate-45 group-hover:ease-out group-hover:duration-600 ease-out duration-300 rotate-[30deg] top-20 -left-10" />
          <Canvas className="group-hover:-top-[110px] group-hover:-right-8 group-hover:rotate-[60deg] group-hover:ease-out group-hover:duration-600 duration-300 rotate-[10deg] -top-10 -right-2" />
          <Canvas className="group-hover:top-[120px] group-hover:-right-4 group-hover:rotate-[60deg] group-hover:ease-out group-hover:duration-600 duration-300 rotate-[20deg] top-20 -right-2" />
          <Canvas className="group-hover:-top-[180px] group-hover:-right-4 group-hover:-rotate-[10deg] group-hover:ease-out group-hover:duration-600 duration-300 rotate-[14deg] -top-20 left-1/2" />
          <h1 className="z-10 text-2xl font-black font-mono">Animated icons</h1>
          <p className="z-10 text-base leading-6 text-muted-foreground">
            A collection of animated SVG icons - Built on top of Lucid Icons.
            Download and use freely. Created by Ray.
          </p>
        </div>
      </div>
      <div className="h-dvh bg-slate-200"></div>
    </div>
  );
}

export default App;
