import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { usuarios } from "@/db/schema";
import { leerSesion } from "./session";

/** Devuelve la sesión o redirige a /acceso. Usar al tope de páginas protegidas. */
export const verificarSesion = cache(async () => {
  const sesion = await leerSesion();
  if (!sesion) redirect("/acceso");
  return sesion;
});

/** Igual que verificarSesion pero exige rol admin. */
export const requerirAdmin = cache(async () => {
  const sesion = await verificarSesion();
  if (sesion.rol !== "admin") redirect("/acceso");
  return sesion;
});

/** Datos completos del usuario logueado (o null). */
export const usuarioActual = cache(async () => {
  const sesion = await leerSesion();
  if (!sesion) return null;
  const filas = await db
    .select({
      id: usuarios.id,
      email: usuarios.email,
      nombre: usuarios.nombre,
      rol: usuarios.rol,
    })
    .from(usuarios)
    .where(eq(usuarios.id, sesion.userId))
    .limit(1);
  return filas[0] ?? null;
});
