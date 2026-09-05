import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Logotipo provisorio de Academia PsicoMar (marca denominativa + onda).
 * Se reemplaza por el logo real cuando llegue el kit de marca.
 */
export function Logo({
  className,
  tono = "tinta",
}: {
  className?: string;
  tono?: "tinta" | "blanco";
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight",
        tono === "blanco" ? "text-white" : "text-tinta",
        className,
      )}
      aria-label="Academia PsicoMar — inicio"
    >
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <circle
          cx="16"
          cy="16"
          r="15"
          fill="none"
          stroke={tono === "blanco" ? "rgba(255,255,255,.5)" : "#92b9c0"}
          strokeWidth="1.5"
        />
        <path
          d="M4 19c2.5 2.5 5 2.5 7.5 0S16.5 16.5 19 19s5 2.5 7.5 0"
          fill="none"
          stroke={tono === "blanco" ? "#ffffff" : "#407e8d"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0"
          fill="none"
          stroke={tono === "blanco" ? "rgba(255,255,255,.55)" : "#db8a67"}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <span>
        Academia <span className="text-mar-500">PsicoMar</span>
      </span>
    </Link>
  );
}
