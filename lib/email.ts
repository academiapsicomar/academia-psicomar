import "server-only";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const from =
  process.env.EMAIL_FROM ?? "Academia PsicoMar <onboarding@resend.dev>";

const resend = apiKey ? new Resend(apiKey) : null;

interface MailArgs {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

/** Envía un mail. Si Resend no está configurado, solo lo loguea. */
export async function enviarMail({
  to,
  subject,
  html,
  replyTo,
}: MailArgs): Promise<{ ok: boolean; error?: string }> {
  if (!resend) {
    console.info(`[email] (sin RESEND_API_KEY) → ${to} · ${subject}`);
    return { ok: true };
  }
  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo,
    });
    if (error) {
      console.error("[email] Resend error:", error);
      return { ok: false, error: error.message };
    }
    return { ok: true };
  } catch (e) {
    console.error("[email] error inesperado:", e);
    return { ok: false, error: "No se pudo enviar el mail." };
  }
}

export function layoutMail(titulo: string, cuerpo: string): string {
  return `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:560px;margin:0 auto;color:#1c2b30">
    <h2 style="color:#356777;font-size:18px;margin:0 0 12px">${titulo}</h2>
    ${cuerpo}
    <hr style="border:none;border-top:1px solid #dde9eb;margin:24px 0" />
    <p style="font-size:12px;color:#4a5b60">Academia PsicoMar</p>
  </div>`;
}
