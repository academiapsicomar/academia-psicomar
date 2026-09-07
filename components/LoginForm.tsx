"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { iniciarSesion, type EstadoLogin } from "@/lib/acciones/auth";

const inicial: EstadoLogin = {};

function Boton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-1 inline-flex items-center justify-center rounded-full bg-mar-700 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-mar-800 disabled:opacity-50"
    >
      {pending ? "Entrando…" : "Entrar"}
    </button>
  );
}

export function LoginForm() {
  const [estado, action] = useActionState(iniciarSesion, inicial);

  return (
    <form action={action} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-tinta">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          autoFocus
          className="rounded-xl border border-mar-200 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-mar-500"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-tinta">Contraseña</span>
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="rounded-xl border border-mar-200 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-mar-500"
        />
      </label>

      {estado.error && (
        <p className="rounded-lg bg-coral-50 px-3 py-2 text-sm text-coral-600">
          {estado.error}
        </p>
      )}

      <Boton />
    </form>
  );
}
