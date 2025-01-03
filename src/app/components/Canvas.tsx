interface CanvasProps {
  className?: string;
}

export function Canvas({ className }: CanvasProps) {
  return (
    <div
      className={`${className} -z-0 absolute w-16 h-16 rounded-md shadow-lg`}
    ></div>
  );
}
