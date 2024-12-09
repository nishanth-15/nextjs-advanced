import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "shadow-md p-5 border border-gray-700 rounded-lg flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}
