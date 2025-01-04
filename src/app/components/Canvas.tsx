interface CanvasProps {
  className?: string;
  children?: React.ReactNode;
}

export function Canvas({ className, children }: CanvasProps) {
  return (
    <div
      className={`${className} z-10 w-16 h-16 grid place-items-center shadow-sm  bg-white rounded-md`}
    >
      {children}
    </div>
  );
}
