import type { MiembroEquipo } from "./types";
import { site } from "@/lib/site";

/** Cómo nació PsicoMar. Se usa en la sección "Quiénes somos". */
export const historiaEquipo = `Nos conocimos el **primer día de la carrera** y desde ese día nos volvimos inseparables. Cursamos juntas toda la carrera y también las especializaciones que fuimos haciendo —y que seguimos haciendo hoy—.

De tantos años compartiendo apuntes, primeras experiencias clínicas y charlas interminables sobre casos, nació Academia PsicoMar: un espacio donde la psicología basada en evidencia se combina con calidez, humor y herramientas que se puedan usar de verdad, tanto en terapia como en la práctica profesional.`;

/** Foto de Kiara y Maite juntas. */
export const fotoAmbas = {
  src: "/equipo/kiara-y-maite.jpg",
  alt: "Kiara y Maite, psicólogas y fundadoras de Academia PsicoMar, en la playa",
};

export const equipo: MiembroEquipo[] = [
  {
    slug: "kiara",
    nombre: "Kiara",
    rol: "Psicóloga · Especialista en trastornos de ansiedad",
    bioCorta:
      "Descontracturada, cálida y cercana. Trabaja desde el vínculo, el humor y objetivos claros, con tareas entre sesiones.",
    bio: `Soy psicóloga y especialista en trastornos de ansiedad, con formación y orientación en **Terapia Cognitivo Conductual (TCC)** y **Terapia Dialéctico Conductual (DBT)**.

Me defino como una profesional descontracturada, cálida y cercana: para mí, construir un vínculo terapéutico real es el punto de partida de todo lo demás.

En mis sesiones no faltan el humor, la psicoeducación y los objetivos claros. Trabajo con tareas entre sesiones y acompaño cada proceso desde herramientas concretas, pero también desde la empatía y la humanidad.

Dato extra sobre mí: soy fan de los animales y de no dejar de aprender nunca. 🐶 🐱 📚`,
    enfoque: [
      "Terapia Cognitivo Conductual (TCC)",
      "Terapia Dialéctico Conductual (DBT)",
      "Trastornos de ansiedad",
      "Vínculo terapéutico y trabajo entre sesiones",
    ],
    datoExtra: "Fan de los animales y de seguir aprendiendo. 🐶 🐱 📚",
    foto: "/equipo/kiara.jpg",
    fotoAlt: "Retrato de Kiara, psicóloga y cofundadora de Academia PsicoMar",
    whatsapp: site.whatsapp.kiara,
    orden: 1,
  },
  {
    slug: "maite",
    nombre: "Maite Martelli",
    rol: "Psicóloga · Especialista en trastornos de ansiedad",
    bioCorta:
      "Un espacio cálido, cercano y sin prejuicios. Cree en las herramientas concretas, en desarmar creencias que limitan y en hablarnos con amabilidad.",
    bio: `Soy psicóloga con orientación en **Terapia Cognitivo Conductual (TCC)** y **Terapia Dialéctico Conductual (DBT)**, y especialista en trastornos de ansiedad.

Acompaño a personas que quieren entenderse mejor, gestionar sus emociones y construir una vida con más bienestar.

En terapia me importa generar un espacio cálido, cercano y sin prejuicios, donde puedas sentirte escuchadx y acompañadx. Creo en el poder de las herramientas concretas que te podés llevar para aplicar en el día a día, en desarmar las creencias que nos limitan y en aprender a hablarnos con amabilidad.

Dato extra sobre mí: amo la música, siempre me acompaña, ya sea en el consultorio o en casa. Mi plan ideal: lluvia, mate y una buena playlist de fondo. Ese combo me conecta, me calma y me inspira. 🎶 🧉 🌧`,
    enfoque: [
      "Terapia Cognitivo Conductual (TCC)",
      "Terapia Dialéctico Conductual (DBT)",
      "Trastornos de ansiedad",
      "Regulación emocional y herramientas para el día a día",
    ],
    datoExtra:
      "Amante de la música. Plan ideal: lluvia, mate y una buena playlist. 🎶 🧉 🌧",
    foto: "/equipo/maite.jpg",
    fotoAlt:
      "Retrato de Maite Martelli, psicóloga y cofundadora de Academia PsicoMar",
    whatsapp: site.whatsapp.maite,
    orden: 2,
  },
];
