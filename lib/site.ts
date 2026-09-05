/**
 * Configuración global del sitio.
 *
 * En la Fase 2 varios de estos valores (WhatsApp, Instagram, textos legales)
 * pasan a `site_settings` en la base y se editan desde /admin. Por ahora viven
 * acá y/o en variables de entorno.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://academiapsicomar.com";

export const site = {
  name: "Academia PsicoMar",
  shortName: "PsicoMar",
  tagline: "Psicología, formación y herramientas para la práctica.",
  description:
    "Academia PsicoMar es un espacio de psicología basada en evidencia: terapia online para adultos y formación, supervisión y herramientas concretas para profesionales de salud mental.",
  url: SITE_URL,
  locale: "es_AR",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hola@academiapsicomar.com",
  instagram: {
    academia: "academia.psicomar",
    maite: "lic.maitemartelli",
  },
  /**
   * Números de WhatsApp (formato internacional, solo dígitos).
   * TODO: reemplazar por los números reales de Kiara y Maite.
   */
  whatsapp: {
    kiara: process.env.NEXT_PUBLIC_WHATSAPP_KIARA ?? "5490000000000",
    maite: process.env.NEXT_PUBLIC_WHATSAPP_MAITE ?? "5490000000000",
  },
} as const;

/** Mensaje precargado del CTA de terapia. */
export const MENSAJE_TERAPIA =
  "Hola, quiero más info sobre la terapia online 🙂";

/** Link wa.me con mensaje precargado. */
export function whatsappLink(numeroDigitos: string, mensaje: string): string {
  return `https://wa.me/${numeroDigitos.replace(/\D/g, "")}?text=${encodeURIComponent(
    mensaje,
  )}`;
}

export function instagramUrl(handle: string): string {
  return `https://instagram.com/${handle}`;
}

/** Navegación principal. */
export const navPrincipal = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/atencion-clinica", label: "Atención clínica" },
  { href: "/para-profesionales", label: "Para profesionales" },
  { href: "/formaciones", label: "Formaciones" },
  { href: "/recursos", label: "Recursos" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
] as const;

/** Links del footer, agrupados. */
export const footerLinks = [
  {
    titulo: "Academia PsicoMar",
    links: [
      { href: "/quienes-somos", label: "Quiénes somos" },
      { href: "/atencion-clinica", label: "Atención clínica" },
      { href: "/para-profesionales", label: "Para profesionales" },
      { href: "/blog", label: "Blog" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
  {
    titulo: "Formación",
    links: [
      { href: "/formaciones", label: "Todas las formaciones" },
      { href: "/formaciones?tipo=talleres", label: "Talleres y cursos" },
      { href: "/supervisiones", label: "Supervisiones grupales" },
      { href: "/recursos", label: "Packs de herramientas" },
      { href: "/formaciones?tipo=grabados", label: "Cursos grabados" },
    ],
  },
] as const;

export const DISCLAIMER_LEGAL =
  "El contenido educativo de esta web tiene fines informativos y de formación profesional. No constituye asesoramiento clínico individual ni reemplaza la atención profesional cuando esta es necesaria. Ante una urgencia en salud mental, comunicate con los servicios de emergencia de tu zona.";
