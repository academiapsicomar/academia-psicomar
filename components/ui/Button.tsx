import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variante = "primario" | "secundario" | "contorno" | "fantasma";
type Tamano = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none text-center";

const variantes: Record<Variante, string> = {
  primario: "bg-mar-700 text-white hover:bg-mar-800",
  secundario: "bg-coral-500 text-white hover:bg-coral-600",
  contorno:
    "border border-mar-300 text-mar-800 hover:bg-mar-50 hover:border-mar-400",
  fantasma: "text-mar-800 hover:bg-mar-50",
};

const tamanos: Record<Tamano, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5 md:text-base",
  lg: "text-base px-6 py-3.5",
};

function clasesBoton(
  variante: Variante,
  tamano: Tamano,
  anchoCompleto?: boolean,
  className?: string,
) {
  return cn(
    base,
    variantes[variante],
    tamanos[tamano],
    anchoCompleto && "w-full",
    className,
  );
}

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variante?: Variante;
  tamano?: Tamano;
  anchoCompleto?: boolean;
  className?: string;
  /** Fuerza abrir en pestaña nueva (los http(s) y wa.me ya lo hacen). */
  externo?: boolean;
  prefetch?: boolean;
  "aria-label"?: string;
}

export function LinkButton({
  href,
  children,
  variante = "primario",
  tamano = "md",
  anchoCompleto,
  className,
  externo,
  prefetch,
  ...rest
}: LinkButtonProps) {
  const clases = clasesBoton(variante, tamano, anchoCompleto, className);
  const esExterno =
    externo || /^https?:\/\//.test(href) || href.startsWith("mailto:");

  if (esExterno) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clases}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} prefetch={prefetch} className={clases} {...rest}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: Variante;
  tamano?: Tamano;
  anchoCompleto?: boolean;
}

export function Button({
  variante = "primario",
  tamano = "md",
  anchoCompleto,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clasesBoton(variante, tamano, anchoCompleto, className)}
      {...rest}
    >
      {children}
    </button>
  );
}
