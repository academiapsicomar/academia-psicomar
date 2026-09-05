import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Logotipo de Academia PsicoMar: marca de la ola + "Academia PsicoMar".
 *
 * La ola está recreada en SVG a partir del logo de marca (isotipo de ola en
 * tonos teal con espuma). Si más adelante querés usar el archivo original,
 * guardalo en `public/logo.svg` y reemplazá este SVG por
 * `<Image src="/logo.svg" ... />`.
 */
export function Logo({
  className,
  tono = "tinta",
}: {
  className?: string;
  tono?: "tinta" | "blanco";
}) {
  const marca = tono === "blanco" ? "text-white" : "text-tinta";
  const acento = tono === "blanco" ? "text-white/90" : "text-mar-600";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight",
        marca,
        className,
      )}
      aria-label="Academia PsicoMar — inicio"
    >
      <OlaMarca className="h-8 w-8 shrink-0" />
      <span className="leading-none">
        Academia <span className={acento}>PsicoMar</span>
      </span>
    </Link>
  );
}

/** Isotipo: ola que rompe, con curl y espuma. Decorativo. */
export function OlaMarca({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Ola de Academia PsicoMar"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* ola que rompe con curl */}
      <path
        d="M5 36c0-13 9-24 22-24 10 0 17 7 17 16 0 7-5 12-12 12-6 0-10-4-10-9 0-4 3-7 7-7"
        className="stroke-mar-600"
        strokeWidth="4.5"
      />
      {/* base del agua */}
      <path
        d="M4 40c3.5 2.7 7 2.7 10.5 0s7-2.7 10.5 0 7 2.7 10.5 0 7-2.7 10.5 0"
        className="stroke-mar-400"
        strokeWidth="3.5"
      />
      {/* espuma del crest */}
      <circle cx="13" cy="13.5" r="3" className="fill-mar-200 stroke-none" />
      <circle cx="20.5" cy="8.6" r="3.7" className="fill-mar-100 stroke-none" />
      <circle cx="29" cy="10" r="2.9" className="fill-mar-200 stroke-none" />
    </svg>
  );
}
