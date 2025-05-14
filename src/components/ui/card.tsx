import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-zinc-700 p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
}
