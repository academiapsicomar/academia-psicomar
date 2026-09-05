"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { enviarConsulta, type EstadoContacto } from "@/lib/acciones/contacto";
import { cn } from "@/lib/cn";

const MOTIVOS = [
  { value: "formacion", label: "Talleres y cursos" },
  { value: "supervision", label: "Supervisiones grupales" },
  { value: "herramientas", label: "Packs de herramientas" },
  { value: "otro", label: "Otra consulta" },
];

const estadoInicial: EstadoContacto = { ok: false };

const inputBase =
  "w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-tinta outline-none transition-colors placeholder:text-tinta-suave/60 focus:border-mar-500";

function Enviar() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-mar-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-mar-800 disabled:opacity-50 md:text-base"
    >
      {pending ? "Enviando…" : "Enviar consulta"}
    </button>
  );
}

export function ContactForm() {
  const [estado, action] = useActionState(enviarConsulta, estadoInicial);

  if (estado.ok) {
    return (
      <div className="rounded-2xl border border-mar-200 bg-mar-50 p-6 text-sm text-mar-800">
        <p className="font-medium">{estado.mensaje}</p>
        <p className="mt-2 text-tinta-suave">
          Mientras tanto podés seguirnos en Instagram para ver novedades de
          talleres y supervisiones.
        </p>
      </div>
    );
  }

  const err = estado.errores ?? {};

  return (
    <form action={action} className="flex flex-col gap-5" noValidate>
      <p className="rounded-xl bg-bruma px-4 py-3 text-sm text-tinta-suave">
        ¿Buscás empezar terapia?{" "}
        <Link href="/atencion-clinica" className="font-medium text-mar-700 underline">
          Escribinos por WhatsApp
        </Link>{" "}
        — ese camino no pasa por este formulario.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-tinta">Nombre</span>
          <input
            name="nombre"
            required
            autoComplete="name"
            className={cn(inputBase, err.nombre ? "border-coral-500" : "border-mar-200")}
          />
          {err.nombre && <span className="text-xs text-coral-600">{err.nombre}</span>}
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-tinta">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={cn(inputBase, err.email ? "border-coral-500" : "border-mar-200")}
          />
          {err.email && <span className="text-xs text-coral-600">{err.email}</span>}
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-tinta">Motivo de la consulta</span>
        <select
          name="motivo"
          required
          defaultValue=""
          className={cn(inputBase, err.motivo ? "border-coral-500" : "border-mar-200")}
        >
          <option value="" disabled>
            Elegí una opción
          </option>
          {MOTIVOS.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
        {err.motivo && <span className="text-xs text-coral-600">{err.motivo}</span>}
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-tinta">Mensaje</span>
        <textarea
          name="mensaje"
          required
          rows={5}
          className={cn(inputBase, "resize-y", err.mensaje ? "border-coral-500" : "border-mar-200")}
        />
        {err.mensaje && <span className="text-xs text-coral-600">{err.mensaje}</span>}
      </label>

      <Enviar />
    </form>
  );
}
