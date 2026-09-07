"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export function CampoImagen({
  name,
  defaultValue,
  carpeta,
}: {
  name: string;
  defaultValue?: string | null;
  carpeta: string;
}) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [subiendo, setSubiendo] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputFile = useRef<HTMLInputElement>(null);

  async function subir(file: File) {
    setSubiendo(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("carpeta", carpeta);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "No se pudo subir.");
      setUrl(data.url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al subir la imagen.");
    } finally {
      setSubiendo(false);
    }
  }

  return (
    <div className="flex items-start gap-4">
      <input type="hidden" name={name} value={url} />
      <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-mar-200 bg-mar-50">
        {url ? (
          <Image
            src={url}
            alt=""
            width={96}
            height={96}
            className="h-full w-full object-cover"
            unoptimized
          />
        ) : (
          <span className="text-xs text-tinta-suave">Sin imagen</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <input
          ref={inputFile}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) subir(f);
          }}
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => inputFile.current?.click()}
            disabled={subiendo}
            className="rounded-full border border-mar-300 px-3 py-1.5 text-xs font-medium text-mar-800 hover:bg-mar-50 disabled:opacity-50"
          >
            {subiendo ? "Subiendo…" : url ? "Cambiar" : "Subir imagen"}
          </button>
          {url && (
            <button
              type="button"
              onClick={() => setUrl("")}
              className="rounded-full px-3 py-1.5 text-xs text-coral-600 hover:bg-coral-50"
            >
              Quitar
            </button>
          )}
        </div>
        {error && <p className="text-xs text-coral-600">{error}</p>}
        <p className="text-[11px] text-tinta-suave">JPG, PNG o WebP · hasta 6 MB</p>
      </div>
    </div>
  );
}
