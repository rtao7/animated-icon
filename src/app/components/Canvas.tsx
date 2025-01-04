interface CanvasProps {
  className?: string;
  children?: React.ReactNode;
}

export function Canvas({ className, children }: CanvasProps) {
  return (
    <div
      className={`${className} -z-0 w-16 h-16 grid place-items-center rounded-md shadow-lg`}
    >
      {children}
    </div>
  );
}
