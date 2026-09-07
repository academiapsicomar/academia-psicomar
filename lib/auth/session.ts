import "server-only";
import { cookies } from "next/headers";
import {
  firmarSesion,
  verificarToken,
  NOMBRE_COOKIE_SESION,
  DURACION_SESION_DIAS,
  type DatosSesion,
} from "./jwt";

export type { DatosSesion, Rol } from "./jwt";
export { NOMBRE_COOKIE_SESION } from "./jwt";

export async function crearSesion(datos: DatosSesion): Promise<void> {
  const expira = new Date(
    Date.now() + DURACION_SESION_DIAS * 24 * 60 * 60 * 1000,
  );
  const token = await firmarSesion(datos);
  const store = await cookies();
  store.set(NOMBRE_COOKIE_SESION, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expira,
    path: "/",
  });
}

export async function leerSesion(): Promise<DatosSesion | null> {
  const token = (await cookies()).get(NOMBRE_COOKIE_SESION)?.value;
  return verificarToken(token);
}

export async function borrarSesion(): Promise<void> {
  (await cookies()).delete(NOMBRE_COOKIE_SESION);
}
