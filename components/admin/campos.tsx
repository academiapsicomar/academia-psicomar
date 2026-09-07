import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const inputBase =
  "w-full rounded-lg border border-mar-200 bg-white px-3 py-2 text-sm text-tinta outline-none transition-colors focus:border-mar-500 disabled:bg-mar-50";

export function Campo({
  label,
  hint,
  children,
  className,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-sm font-medium text-tinta">{label}</span>
      {children}
      {hint && <span className="text-xs text-tinta-suave">{hint}</span>}
    </label>
  );
}

export function Texto(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(inputBase, props.className)} />;
}

export function Numero(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="number"
      inputMode="numeric"
      {...props}
      className={cn(inputBase, props.className)}
    />
  );
}

export function AreaTexto(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  return (
    <textarea
      rows={4}
      {...props}
      className={cn(inputBase, "resize-y font-mono text-[13px]", props.className)}
    />
  );
}

export function Selector({
  opciones,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  opciones: { value: string; label: string }[];
}) {
  return (
    <select {...props} className={cn(inputBase, props.className)}>
      {opciones.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function Casilla({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="flex items-center gap-2.5 text-sm text-tinta">
      <input
        type="checkbox"
        {...props}
        className="h-4 w-4 rounded border-mar-300 text-mar-600"
      />
      {label}
    </label>
  );
}

/** string[] editado como una línea por ítem. */
export function ListaTexto({
  valor,
  ...props
}: Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "defaultValue"> & {
  valor: string[];
}) {
  return (
    <textarea
      rows={Math.max(3, valor.length + 1)}
      defaultValue={valor.join("\n")}
      {...props}
      className={cn(inputBase, "resize-y text-[13px]", props.className)}
    />
  );
}

