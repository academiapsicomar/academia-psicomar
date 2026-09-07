"use client";

import { useState } from "react";
import { Prosa } from "@/components/ui/Prosa";
import { cn } from "@/lib/cn";

export function AreaMarkdown({
  name,
  defaultValue,
  rows = 12,
}: {
  name: string;
  defaultValue?: string;
  rows?: number;
}) {
  const [texto, setTexto] = useState(defaultValue ?? "");
  const [preview, setPreview] = useState(false);

  return (
    <div className="rounded-lg border border-mar-200 bg-white">
      <div className="flex gap-1 border-b border-mar-100 p-1.5">
        {(["Escribir", "Vista previa"] as const).map((t, i) => {
          const activo = preview === (i === 1);
          return (
            <button
              key={t}
              type="button"
              onClick={() => setPreview(i === 1)}
              className={cn(
                "rounded-md px-3 py-1 text-xs font-medium transition-colors",
                activo ? "bg-mar-50 text-mar-800" : "text-tinta-suave",
              )}
            >
              {t}
            </button>
          );
        })}
        <span className="ml-auto self-center pr-2 text-[11px] text-tinta-suave">
          Markdown: **negrita**, ## título, - lista
        </span>
      </div>

      {preview ? (
        <div className="min-h-[8rem] p-3">
          {texto.trim() ? (
            <Prosa className="text-sm">{texto}</Prosa>
          ) : (
            <p className="text-sm text-tinta-suave">Nada para previsualizar.</p>
          )}
        </div>
      ) : (
        <textarea
          name={name}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={rows}
          className="w-full resize-y rounded-b-lg bg-white p-3 font-mono text-[13px] text-tinta outline-none"
        />
      )}
    </div>
  );
}
