"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { consultas } from "@/db/schema";
import { enviarMail, layoutMail } from "@/lib/email";
import { site } from "@/lib/site";

export interface EstadoContacto {
  ok: boolean;
  mensaje?: string;
  errores?: Partial<Record<"nombre" | "email" | "motivo" | "mensaje", string>>;
}

const schema = z.object({
  nombre: z.string().trim().min(2, "Contanos tu nombre."),
  email: z.string().trim().toLowerCase().email("Ingresá un email válido."),
  motivo: z.enum(["formacion", "supervision", "herramientas", "otro"], {
    message: "Elegí un motivo.",
  }),
  mensaje: z.string().trim().min(10, "Escribí un mensaje un poco más largo."),
});

const ETIQUETA_MOTIVO: Record<string, string> = {
  formacion: "Talleres y cursos",
  supervision: "Supervisiones grupales",
  herramientas: "Packs de herramientas",
  otro: "Otra consulta",
};

export async function enviarConsulta(
  _prev: EstadoContacto,
  formData: FormData,
): Promise<EstadoContacto> {
  const parsed = schema.safeParse({
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    motivo: formData.get("motivo"),
    mensaje: formData.get("mensaje"),
  });

  if (!parsed.success) {
    const errores: EstadoContacto["errores"] = {};
    for (const issue of parsed.error.issues) {
      const campo = issue.path[0] as keyof NonNullable<EstadoContacto["errores"]>;
      if (campo && !errores[campo]) errores[campo] = issue.message;
    }
    return { ok: false, errores };
  }

  const { nombre, email, motivo, mensaje } = parsed.data;

  await db.insert(consultas).values({ nombre, email, tipo: motivo, mensaje });

  const destino = process.env.EMAIL_CONSULTAS || site.email;
  await enviarMail({
    to: destino,
    replyTo: email,
    subject: `Nueva consulta (${ETIQUETA_MOTIVO[motivo]}) — ${nombre}`,
    html: layoutMail(
      "Nueva consulta desde la web",
      `<p><strong>Nombre:</strong> ${nombre}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Motivo:</strong> ${ETIQUETA_MOTIVO[motivo]}</p>
       <p><strong>Mensaje:</strong></p>
       <p style="white-space:pre-wrap">${mensaje.replace(/</g, "&lt;")}</p>`,
    ),
  });

  return {
    ok: true,
    mensaje:
      "¡Recibimos tu consulta! Te vamos a responder al mail que dejaste dentro de las próximas 48 h hábiles.",
  };
}
