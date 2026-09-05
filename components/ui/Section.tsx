import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Fondo = "crema" | "bruma" | "arena" | "mar" | "blanco";

const fondos: Record<Fondo, string> = {
  crema: "bg-crema",
  bruma: "bg-bruma",
  arena: "bg-arena",
  mar: "bg-mar-800 text-white",
  blanco: "bg-white",
};

interface SectionProps {
  children: ReactNode;
  fondo?: Fondo;
  className?: string;
  id?: string;
  as?: ElementType;
  /** Padding vertical. */
  espaciado?: "normal" | "amplio" | "compacto";
}

export function Section({
  children,
  fondo = "crema",
  className,
  id,
  as: Tag = "section",
  espaciado = "normal",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        fondos[fondo],
        espaciado === "amplio" && "py-20 md:py-28",
        espaciado === "normal" && "py-16 md:py-20",
        espaciado === "compacto" && "py-10 md:py-14",
        className,
      )}
    >
      <div className="contenedor">{children}</div>
    </Tag>
  );
}

interface EncabezadoProps {
  sobretitulo?: string;
  titulo: ReactNode;
  descripcion?: ReactNode;
  centrado?: boolean;
  className?: string;
}

export function EncabezadoSeccion({
  sobretitulo,
  titulo,
  descripcion,
  centrado,
  className,
}: EncabezadoProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 max-w-2xl",
        centrado && "mx-auto text-center items-center",
        className,
      )}
    >
      {sobretitulo && (
        <span className="text-sm font-medium uppercase tracking-[0.14em] text-mar-600">
          {sobretitulo}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl text-tinta">{titulo}</h2>
      {descripcion && (
        <p className="text-lg text-tinta-suave leading-relaxed">{descripcion}</p>
      )}
    </div>
  );
}
