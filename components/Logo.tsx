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

/**
 * Isotipo: ola que rompe con curl y espuma, en tonos teal.
 * Recreación de la marca de PsicoMar. Decorativo.
 */
export function OlaMarca({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Ola de Academia PsicoMar"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* curl de la ola que rompe: espiral que se abre hacia abajo */}
      <path
        d="M10 44C10 24 22 12 37 14c11 1.5 17 11 15 21-1.6 8-8 13-16 12-6.4-.8-11-6-10.4-12.4C26.2 27 31 22 37.5 22.6c5 .5 8.6 4.6 8.2 9.4"
        className="stroke-mar-600"
        strokeWidth="5"
      />
      {/* dos líneas de agua en la base */}
      <path
        d="M6 50c4.5 3.4 9 3.4 13.5 0s9-3.4 13.5 0 9 3.4 13.5 0 9-3.4 13.5 0"
        className="stroke-mar-500"
        strokeWidth="4.5"
      />
      <path
        d="M12 57c3.5 2.4 7 2.4 10.5 0s7-2.4 10.5 0 7 2.4 10.5 0"
        className="stroke-mar-300"
        strokeWidth="3.5"
      />
      {/* espuma del crest */}
      <circle cx="16" cy="17" r="4" className="fill-mar-200" />
      <circle cx="26" cy="10.5" r="4.8" className="fill-mar-100" />
      <circle cx="37" cy="12" r="3.8" className="fill-mar-200" />
    </svg>
  );
}
