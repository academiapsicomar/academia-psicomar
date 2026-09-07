import Link from "next/link";
import type { ReactNode } from "react";

export function EncabezadoAdmin({
  titulo,
  descripcion,
  accion,
}: {
  titulo: string;
  descripcion?: string;
  accion?: { href: string; label: string };
}) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
      <div>
        <h1 className="font-display text-2xl text-tinta">{titulo}</h1>
        {descripcion && (
          <p className="mt-1 text-sm text-tinta-suave">{descripcion}</p>
        )}
      </div>
      {accion && (
        <Link
          href={accion.href}
          className="rounded-full bg-mar-700 px-4 py-2 text-sm font-medium text-white hover:bg-mar-800"
        >
          {accion.label}
        </Link>
      )}
    </div>
  );
}

export function ListaItems({ children }: { children: ReactNode }) {
  return (
    <ul className="divide-y divide-mar-100 overflow-hidden rounded-xl border border-mar-100 bg-white">
      {children}
    </ul>
  );
}

export function ItemLista({
  href,
  titulo,
  detalle,
  badges,
}: {
  href: string;
  titulo: string;
  detalle?: string;
  badges?: ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-mar-50/50"
      >
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-tinta">{titulo}</p>
          {detalle && (
            <p className="truncate text-xs text-tinta-suave">{detalle}</p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2">{badges}</div>
      </Link>
    </li>
  );
}

export function BadgeEstado({ estado }: { estado: "borrador" | "publicado" }) {
  return (
    <span
      className={
        estado === "publicado"
          ? "rounded-full bg-mar-50 px-2 py-0.5 text-[11px] font-medium text-mar-700"
          : "rounded-full bg-arena px-2 py-0.5 text-[11px] font-medium text-tinta-suave"
      }
    >
      {estado === "publicado" ? "Publicado" : "Borrador"}
    </span>
  );
}

export function AccionesFormulario({
  volverHref,
  onBorrar,
}: {
  volverHref: string;
  onBorrar?: ReactNode;
}) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-mar-100 pt-6">
      <button
        type="submit"
        className="rounded-full bg-mar-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-mar-800"
      >
        Guardar
      </button>
      <Link
        href={volverHref}
        className="rounded-full px-4 py-2.5 text-sm text-tinta-suave hover:text-tinta"
      >
        Cancelar
      </Link>
      {onBorrar && <div className="ml-auto">{onBorrar}</div>}
    </div>
  );
}

export function FormAdmin({
  action,
  children,
}: {
  action: (fd: FormData) => void | Promise<void>;
  children: ReactNode;
}) {
  return (
    <form action={action} className="flex flex-col gap-5">
      {children}
    </form>
  );
}

export function Fieldset({
  legend,
  children,
}: {
  legend: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="flex flex-col gap-4 rounded-xl border border-mar-100 bg-white p-4">
      <legend className="px-1 text-xs font-semibold uppercase tracking-wide text-mar-600">
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

export function BotonBorrar({
  action,
  label = "Eliminar",
}: {
  action: () => void | Promise<void>;
  label?: string;
}) {
  return (
    <form action={action}>
      <button
        type="submit"
        className="rounded-full px-4 py-2 text-sm text-coral-600 hover:bg-coral-50"
      >
        {label}
      </button>
    </form>
  );
}
