import type { Producto } from "./types";

/**
 * Packs de herramientas (productos digitales). Datos de ejemplo.
 * En Fase 3 cada uno se conecta a Mercado Pago y entrega acceso automático.
 */
export const productos: Producto[] = [
  {
    slug: "pack-ansiedad-herramientas",
    nombre: "Pack Ansiedad · Herramientas para la clínica",
    resumen:
      "Materiales listos para usar en sesión con pacientes con trastornos de ansiedad.",
    descripcion: `Un pack de recursos prácticos para trabajar la ansiedad en la clínica, basados en TCC y DBT. Todo en PDF editable e imprimible, listo para compartir con tus pacientes o usar en sesión.

Pensado para ahorrarte horas de armado y para que tengas a mano intervenciones claras y con respaldo.`,
    incluye: [
      "Registro de pensamientos automáticos (2 versiones)",
      "Guía de exposición gradual + jerarquía de situaciones",
      "Psicoeducación sobre el ciclo de la ansiedad (láminas)",
      "Ejercicios de respiración y grounding",
      "Hoja de objetivos y seguimiento entre sesiones",
    ],
    paraQuien:
      "Psicólogos/as que atienden adultos con ansiedad y quieren material aplicable desde la primera sesión.",
    precio: null,
    imagen: null,
    imagenAlt: "Vista previa del Pack Ansiedad de Academia PsicoMar",
    estado: "publicado",
    destacado: true,
    seo: {
      title: "Pack Ansiedad — herramientas para psicólogos/as",
      description:
        "Pack de recursos digitales en PDF para trabajar la ansiedad en la clínica: registros, exposición, psicoeducación y seguimiento. Basado en TCC y DBT.",
    },
  },
  {
    slug: "pack-primera-entrevista",
    nombre: "Pack Primera entrevista",
    resumen:
      "Modelos y guías para ordenar tus primeras entrevistas y la formulación de caso.",
    descripcion: `Todo lo que necesitás para que tus primeras entrevistas dejen de ser un salto al vacío: guías de exploración, modelo de historia clínica, consentimiento informado y una plantilla de formulación de caso.`,
    incluye: [
      "Guía de primera entrevista por áreas",
      "Modelo de historia clínica",
      "Consentimiento informado (plantilla editable)",
      "Plantilla de formulación de caso",
      "Checklist de encuadre",
    ],
    paraQuien:
      "Profesionales que están empezando a atender o quieren sistematizar su proceso de admisión.",
    precio: null,
    imagen: null,
    imagenAlt: "Vista previa del Pack Primera entrevista de Academia PsicoMar",
    estado: "publicado",
    destacado: false,
    seo: {
      title: "Pack Primera entrevista — herramientas para psicólogos/as",
      description:
        "Modelos y guías descargables para tus primeras entrevistas: exploración, historia clínica, consentimiento informado y formulación de caso.",
    },
  },
];
