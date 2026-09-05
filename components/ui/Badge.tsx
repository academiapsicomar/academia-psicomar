import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tono = "mar" | "coral" | "salvia" | "neutro";

const tonos: Record<Tono, string> = {
  mar: "bg-mar-50 text-mar-700",
  coral: "bg-coral-50 text-coral-600",
  salvia: "bg-salvia-suave text-mar-800",
  neutro: "bg-bruma text-tinta-suave",
};

export function Badge({
  children,
  tono = "mar",
  className,
}: {
  children: ReactNode;
  tono?: Tono;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        tonos[tono],
        className,
      )}
    >
      {children}
    </span>
  );
}
