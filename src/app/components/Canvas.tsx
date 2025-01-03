interface CanvasProps {
  className?: string;
}

export function Canvas({ className }: CanvasProps) {
  return (
    <div
      className={`${className} bg-white -z-0 absolute w-16 h-16 border rounded-md`}
    ></div>
  );
}
