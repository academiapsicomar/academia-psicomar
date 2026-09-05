"use server";

import { site } from "@/lib/site";

export interface EstadoContacto {
  ok: boolean;
  mensaje?: string;
  errores?: Partial<Record<"nombre" | "email" | "motivo" | "mensaje", string>>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOTIVOS = ["formacion", "supervision", "herramientas", "otro"] as const;

/**
 * Recibe una consulta del formulario de /contacto.
 *
 * Fase 2: guardar en la tabla `leads` (Drizzle) y enviar un aviso por email
 * (Resend) a {site.email}. Por ahora valida y registra en el log del servidor.
 */
export async function enviarConsulta(
  _prev: EstadoContacto,
  formData: FormData,
): Promise<EstadoContacto> {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const motivo = String(formData.get("motivo") ?? "").trim();
  const mensaje = String(formData.get("mensaje") ?? "").trim();

  const errores: EstadoContacto["errores"] = {};
  if (nombre.length < 2) errores.nombre = "Contanos tu nombre.";
  if (!EMAIL_RE.test(email)) errores.email = "Ingresá un email válido.";
  if (!MOTIVOS.includes(motivo as (typeof MOTIVOS)[number]))
    errores.motivo = "Elegí un motivo.";
  if (mensaje.length < 10)
    errores.mensaje = "Escribí un mensaje un poco más largo.";

  if (Object.keys(errores).length > 0) {
    return { ok: false, errores };
  }

  const consulta = { nombre, email, motivo, mensaje, fecha: new Date().toISOString() };

  // TODO(Fase 2): db.insert(leads).values(consulta) + resend.emails.send(...)
  console.info(`[contacto] nueva consulta para ${site.email}:`, consulta);

  return {
    ok: true,
    mensaje:
      "¡Recibimos tu consulta! Te vamos a responder al mail que dejaste dentro de las próximas 48 h hábiles.",
  };
}
