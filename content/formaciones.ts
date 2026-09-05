import type { Formacion } from "./types";

/**
 * Contenido inicial de formaciones. Datos de ejemplo listos para editar:
 * precios, fechas y detalles finos los cargan Kiara y Maite desde /admin
 * (Fase 2).
 */
export const formaciones: Formacion[] = [
  {
    slug: "iniciar-en-la-clinica",
    nombre: "Iniciar en la clínica",
    tipo: "taller",
    modalidad: "online_vivo",
    resumen:
      "Un espacio práctico para quienes están dando sus primeros pasos en la atención clínica.",
    descripcion: `## De qué se trata

Empezar a atender genera muchas preguntas que la facultad no siempre responde: cómo armar una primera entrevista, cómo pensar objetivos, qué hacer entre sesión y sesión, cómo sostener el encuadre.

**Iniciar en la clínica** es un taller en vivo, práctico y sin vueltas, pensado para acompañarte en ese comienzo. Trabajamos sobre casos, dudas reales y herramientas que podés aplicar la próxima semana.

## Contenidos

- La primera entrevista: qué explorar y cómo registrar.
- Formulación de caso y objetivos terapéuticos.
- Encuadre, honorarios y consentimiento informado.
- Psicoeducación y tareas entre sesiones.
- Cuándo derivar y cómo hacerlo.
- Cuidado del rol y del propio proceso como terapeuta.

## Modalidad

Encuentros en vivo por videollamada, con material complementario y espacio para consultas.`,
    paraQuien:
      "Psicólogos/as recién recibidos/as o en formación que están por empezar o empezaron hace poco a atender.",
    duracion: "4 encuentros de 90 minutos",
    enVivo: true,
    proximaFecha: "A confirmar — dejá tu consulta y te avisamos",
    precio: null,
    incluye: [
      "4 encuentros en vivo por videollamada",
      "Material teórico-práctico descargable",
      "Modelos de primera entrevista y consentimiento",
      "Espacio de consultas durante la cursada",
      "Certificado de participación",
    ],
    imagen: null,
    imagenAlt: "Taller Iniciar en la clínica de Academia PsicoMar",
    estado: "publicado",
    destacado: true,
    docentes: ["Kiara", "Maite Martelli"],
    seo: {
      title: "Iniciar en la clínica — taller para psicólogos/as",
      description:
        "Taller en vivo y práctico para psicólogos/as que están dando sus primeros pasos en la atención clínica: primera entrevista, formulación de caso, encuadre y herramientas.",
    },
  },
  {
    slug: "psicofarmacologia-para-psicologos",
    nombre: "Psicofarmacología para psicólogos/as",
    tipo: "curso",
    modalidad: "online_vivo",
    resumen:
      "Lo que un/a psicólogo/a necesita saber sobre psicofármacos para acompañar mejor a sus pacientes.",
    descripcion: `## De qué se trata

Muchos de nuestros pacientes toman o van a tomar medicación. Entender para qué sirve cada grupo de psicofármacos, qué efectos esperar y cómo articular con psiquiatría nos permite acompañar mejor y trabajar en equipo.

Este curso ofrece una base clara de **psicofarmacología orientada a la práctica del/de la psicólogo/a**, sin necesidad de formación médica previa.

## Contenidos

- Nociones básicas de neurotransmisión.
- Antidepresivos, ansiolíticos, estabilizadores del ánimo y antipsicóticos.
- Efectos esperables, efectos adversos y tiempos.
- Adherencia: cómo trabajarla desde la psicoterapia.
- Trabajo interdisciplinario con psiquiatría.
- Mitos frecuentes y cómo conversarlos con pacientes.`,
    paraQuien:
      "Psicólogos/as y profesionales de salud mental que quieran incorporar nociones de psicofarmacología aplicadas a la clínica.",
    duracion: "6 encuentros de 90 minutos",
    enVivo: true,
    proximaFecha: "A confirmar — dejá tu consulta y te avisamos",
    precio: null,
    incluye: [
      "6 encuentros en vivo por videollamada",
      "Fichas resumen por grupo farmacológico",
      "Bibliografía seleccionada",
      "Grabación de los encuentros por tiempo limitado",
      "Certificado de participación",
    ],
    imagen: null,
    imagenAlt: "Curso de Psicofarmacología para psicólogos/as de Academia PsicoMar",
    estado: "publicado",
    destacado: true,
    docentes: ["Kiara", "Maite Martelli"],
    seo: {
      title: "Psicofarmacología para psicólogos/as",
      description:
        "Curso online en vivo de psicofarmacología orientada a la práctica del/de la psicólogo/a: grupos de psicofármacos, efectos, adherencia y trabajo con psiquiatría.",
    },
  },
  {
    slug: "iniciar-en-la-clinica-grabado",
    nombre: "Iniciar en la clínica — versión grabada",
    tipo: "curso_grabado",
    modalidad: "grabado",
    resumen:
      "El taller Iniciar en la clínica en formato grabado: lo hacés a tu ritmo, cuando quieras.",
    descripcion: `## De qué se trata

La versión grabada de **Iniciar en la clínica**. Mismo contenido que el taller en vivo, disponible para ver cuando quieras y las veces que necesites.

Ideal si los horarios en vivo no te quedan cómodos o si querés tener el material siempre a mano para repasar.

## Cómo funciona

1. Comprás el curso.
2. Recibís acceso inmediato a tu biblioteca en la web.
3. Ves los módulos a tu ritmo y descargás el material.

## Contenidos

- La primera entrevista: qué explorar y cómo registrar.
- Formulación de caso y objetivos terapéuticos.
- Encuadre, honorarios y consentimiento informado.
- Psicoeducación y tareas entre sesiones.
- Cuándo derivar y cómo hacerlo.`,
    paraQuien:
      "Profesionales que prefieren un formato a demanda, para cursar a su propio ritmo.",
    duracion: "≈ 6 horas de video · acceso permanente",
    enVivo: false,
    precio: null,
    incluye: [
      "Acceso permanente a los módulos grabados",
      "Material teórico-práctico descargable",
      "Modelos de primera entrevista y consentimiento",
      "Actualizaciones del contenido sin costo",
    ],
    imagen: null,
    imagenAlt:
      "Curso grabado Iniciar en la clínica de Academia PsicoMar",
    estado: "publicado",
    destacado: false,
    docentes: ["Kiara", "Maite Martelli"],
    seo: {
      title: "Iniciar en la clínica — curso grabado",
      description:
        "Versión grabada y a demanda del taller Iniciar en la clínica. Acceso permanente, a tu ritmo, con material descargable.",
    },
  },
];
