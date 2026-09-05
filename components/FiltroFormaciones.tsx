import Link from "next/link";
import { cn } from "@/lib/cn";

const FILTROS = [
  { key: "todos", label: "Todas", href: "/formaciones" },
  { key: "talleres", label: "Talleres", href: "/formaciones?tipo=talleres" },
  { key: "cursos", label: "Cursos", href: "/formaciones?tipo=cursos" },
  { key: "grabados", label: "Grabados", href: "/formaciones?tipo=grabados" },
  { key: "supervisiones", label: "Supervisiones", href: "/supervisiones" },
  { key: "herramientas", label: "Herramientas", href: "/recursos" },
] as const;

export function FiltroFormaciones({ activo }: { activo: string }) {
  return (
    <div className="flex flex-wrap gap-2" role="list" aria-label="Filtrar formaciones">
      {FILTROS.map((f) => {
        const esActivo = f.key === activo;
        return (
          <Link
            key={f.key}
            href={f.href}
            role="listitem"
            aria-current={esActivo ? "page" : undefined}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              esActivo
                ? "border-mar-600 bg-mar-600 text-white"
                : "border-mar-200 text-mar-800 hover:border-mar-400 hover:bg-mar-50",
            )}
          >
            {f.label}
          </Link>
        );
      })}
    </div>
  );
}
