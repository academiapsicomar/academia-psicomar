import type { Formacion } from "./types";

/**
 * Contenido de formaciones. Fechas, precios y detalles finos los editarán
 * Kiara y Maite desde /admin (Fase 2).
 */
export const formaciones: Formacion[] = [
  {
    slug: "iniciar-en-la-clinica",
    nombre: "Iniciar en la clínica",
    tipo: "taller",
    modalidad: "online_vivo",
    resumen:
      "Cómo empezar a atender de verdad: conseguir pacientes, honorarios, historia clínica y todo lo que la facultad no te explica.",
    descripcion: `## De qué se trata

Terminás la facultad sabiendo mucho de teoría y muy poco de lo que pasa cuando abrís el consultorio: cómo conseguir tus primeros pacientes, cuánto cobrar, qué papeles necesitás, cómo llevar una historia clínica.

**Iniciar en la clínica** es un encuentro en vivo de 4 horas, práctico y sin vueltas, donde te contamos cómo empezar a atender —lo clínico y lo que nadie te explica.

## Qué vas a ver

- **Cómo conseguir pacientes.** Estrategias concretas para tus primeras derivaciones y para hacerte conocer. Le dedicamos tiempo especial: es lo que más preguntan.
- Cómo empezar a atender: la primera entrevista y el encuadre.
- Cómo plantear tus honorarios.
- Historia clínica: qué registrar y cómo.
- Consentimiento informado.
- Seguro de mala praxis: qué es y por qué lo necesitás.

## Modalidad

Un único encuentro en vivo de 4 horas por videollamada, con material descargable y espacio para preguntas.`,
    paraQuien:
      "Psicólogos/as recién recibidos/as o en formación que están por empezar o empezaron hace poco a atender.",
    duracion: "1 encuentro en vivo de 4 horas",
    enVivo: true,
    proximaFecha: "A confirmar",
    precio: 30000,
    incluye: [
      "1 encuentro en vivo de 4 horas por videollamada",
      "Estrategias concretas para conseguir pacientes",
      "Modelo de historia clínica y de consentimiento informado",
      "Guía para plantear honorarios",
      "Info sobre seguro de mala praxis",
      "Material descargable y certificado de participación",
    ],
    imagen: null,
    imagenAlt: "Taller Iniciar en la clínica de Academia PsicoMar",
    estado: "publicado",
    destacado: true,
    docentes: ["Kiara", "Maite Martelli"],
    seo: {
      title: "Iniciar en la clínica — taller para psicólogos/as",
      description:
        "Encuentro en vivo de 4 horas para psicólogos/as que empiezan a atender: cómo conseguir pacientes, plantear honorarios, historia clínica, consentimiento informado y seguro de mala praxis.",
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
    duracion: "A confirmar",
    enVivo: true,
    proximaFecha: "A confirmar",
    precio: null,
    incluye: [
      "Encuentros en vivo por videollamada",
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
      "El taller Iniciar en la clínica, grabado: 4 horas para ver a tu ritmo, cuando quieras.",
    descripcion: `## De qué se trata

La versión grabada de **Iniciar en la clínica**: 4 horas de video para ver cuando quieras y las veces que necesites. Mismo contenido que el encuentro en vivo.

Ideal si querés arrancar ya, a tu ritmo, y tener el material siempre a mano.

## Cómo funciona

1. Comprás el curso.
2. Recibís acceso inmediato a tu biblioteca en la web.
3. Ves el video a tu ritmo y descargás el material.

## Qué vas a ver

- **Cómo conseguir pacientes.** Estrategias concretas para tus primeras derivaciones y para hacerte conocer.
- Cómo empezar a atender: la primera entrevista y el encuadre.
- Cómo plantear tus honorarios.
- Historia clínica: qué registrar y cómo.
- Consentimiento informado.
- Seguro de mala praxis: qué es y por qué lo necesitás.`,
    paraQuien:
      "Profesionales que prefieren un formato a demanda, para cursar a su propio ritmo.",
    duracion: "4 horas de video · acceso permanente",
    enVivo: false,
    precio: null,
    incluye: [
      "4 horas de video con acceso permanente",
      "Estrategias concretas para conseguir pacientes",
      "Modelo de historia clínica y de consentimiento informado",
      "Guía para plantear honorarios",
      "Info sobre seguro de mala praxis",
      "Material descargable",
    ],
    imagen: null,
    imagenAlt: "Curso grabado Iniciar en la clínica de Academia PsicoMar",
    estado: "publicado",
    destacado: false,
    docentes: ["Kiara", "Maite Martelli"],
    seo: {
      title: "Iniciar en la clínica — curso grabado",
      description:
        "Versión grabada del taller Iniciar en la clínica: 4 horas de video a tu ritmo sobre cómo conseguir pacientes, honorarios, historia clínica, consentimiento informado y seguro de mala praxis.",
    },
  },
];
