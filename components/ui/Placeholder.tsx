import { cn } from "@/lib/cn";

/**
 * Marca el lugar de una foto real que todavía no tenemos.
 * Cuando lleguen las fotos de Kiara y Maite se reemplaza por <Image />.
 */
export function Placeholder({
  etiqueta,
  className,
  ratio = "4 / 5",
}: {
  etiqueta: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        "grano flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-mar-200 via-salvia-suave to-coral-100 p-3",
        className,
      )}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-mar-500/40 text-mar-800">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="9" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="m4 17 4.5-4.5a1 1 0 0 1 1.4 0L13 16m2-2 1.6-1.6a1 1 0 0 1 1.4 0L21 15"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <span className="px-3 text-center text-xs font-medium uppercase tracking-wide">
          {etiqueta}
        </span>
      </div>
    </div>
  );
}
