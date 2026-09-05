"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { IconoWhatsApp } from "@/components/ui/iconos";
import { site, whatsappLink, MENSAJE_TERAPIA } from "@/lib/site";

interface Props {
  className?: string;
  /** Alineación del panel respecto del botón. */
  alineacion?: "izquierda" | "derecha" | "centro";
  etiqueta?: string;
}

/** Botón "Empezar terapia" que despliega el WhatsApp de cada psicóloga. */
export function TerapiaPopover({
  className,
  alineacion = "derecha",
  etiqueta = "Empezar terapia",
}: Props) {
  const [abierto, setAbierto] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!abierto) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setAbierto(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setAbierto(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [abierto]);

  const opciones = [
    { nombre: "Kiara", numero: site.whatsapp.kiara },
    { nombre: "Maite", numero: site.whatsapp.maite },
  ];

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-expanded={abierto}
        aria-controls={panelId}
        onClick={() => setAbierto((v) => !v)}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-mar-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-mar-800 md:text-base"
      >
        <IconoWhatsApp width={18} height={18} />
        {etiqueta}
      </button>

      {abierto && (
        <div
          id={panelId}
          className={cn(
            "absolute top-[calc(100%+0.5rem)] z-50 w-64 rounded-2xl border border-mar-100 bg-white p-2 shadow-tarjeta",
            alineacion === "derecha" && "right-0",
            alineacion === "izquierda" && "left-0",
            alineacion === "centro" && "left-1/2 -translate-x-1/2",
          )}
        >
          <p className="px-3 py-2 text-xs text-tinta-suave">
            Escribile a la psicóloga con la que quieras empezar. Te responde ella
            directamente.
          </p>
          {opciones.map((o) => (
            <a
              key={o.nombre}
              href={whatsappLink(o.numero, MENSAJE_TERAPIA)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-tinta transition-colors hover:bg-mar-50"
              onClick={() => setAbierto(false)}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mar-50 text-mar-600">
                <IconoWhatsApp width={16} height={16} />
              </span>
              WhatsApp de {o.nombre}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
