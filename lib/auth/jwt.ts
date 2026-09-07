import { SignJWT, jwtVerify } from "jose";

export const NOMBRE_COOKIE_SESION = "psicomar_sesion";
export const DURACION_SESION_DIAS = 7;

export type Rol = "admin" | "cliente";

export interface DatosSesion {
  userId: string;
  rol: Rol;
  nombre: string;
}

function claveSecreta(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("Falta AUTH_SECRET en las variables de entorno.");
  return new TextEncoder().encode(secret);
}

export async function firmarSesion(datos: DatosSesion): Promise<string> {
  return new SignJWT({ ...datos })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${DURACION_SESION_DIAS}d`)
    .sign(claveSecreta());
}

export async function verificarToken(
  token: string | undefined,
): Promise<DatosSesion | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, claveSecreta(), {
      algorithms: ["HS256"],
    });
    if (
      typeof payload.userId === "string" &&
      (payload.rol === "admin" || payload.rol === "cliente") &&
      typeof payload.nombre === "string"
    ) {
      return { userId: payload.userId, rol: payload.rol, nombre: payload.nombre };
    }
    return null;
  } catch {
    return null;
  }
}
