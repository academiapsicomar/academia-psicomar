import type { Metadata } from "next";
import { Section, EncabezadoSeccion } from "@/components/ui/Section";
import { Foto } from "@/components/ui/Foto";
import { TerapiaBotones } from "@/components/TerapiaBotones";
import { fotoAmbas } from "@/content/equipo";
import { JsonLd } from "@/components/JsonLd";
import { IconoCheck } from "@/components/ui/iconos";
import { site, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Atención clínica — terapia online para adultos",
  description:
    "Terapia individual online para adultos con orientación en TCC y DBT y abordaje de trastornos de ansiedad. Atendemos personas de Argentina y del exterior. Escribinos por WhatsApp.",
  alternates: { canonical: "/atencion-clinica" },
};

const COMO_TRABAJAMOS = [
  {
    titulo: "Herramientas basadas en evidencia",
    texto:
      "Trabajamos con Terapia Cognitivo Conductual (TCC) y Terapia Dialéctico Conductual (DBT), con foco en trastornos de ansiedad.",
  },
  {
    titulo: "Psicoeducación",
    texto:
      "Entender qué te está pasando y por qué es parte del proceso: no trabajamos a ciegas.",
  },
  {
    titulo: "Objetivos terapéuticos",
    texto:
      "Definimos juntos hacia dónde vamos y revisamos cómo venimos.",
  },
  {
    titulo: "Trabajo entre sesiones",
    texto:
      "Te llevás herramientas concretas para aplicar en tu día a día, no solo para la sesión.",
  },
];

const FAQ = [
  {
    q: "¿Cómo son las sesiones?",
    a: "Son individuales, por videollamada, de aproximadamente 50 minutos. La frecuencia habitual es semanal, aunque se ajusta a cada proceso.",
  },
  {
    q: "Vivo fuera de Argentina, ¿puedo hacer terapia con ustedes?",
    a: "Sí. El formato online nos permite acompañar procesos independientemente del lugar donde vivas, siempre respetando las condiciones legales y profesionales que correspondan.",
  },
  {
    q: "¿Con quién hago la terapia, con Kiara o con Maite?",
    a: "Elegís vos. Escribile por WhatsApp a la psicóloga con la que quieras empezar y coordinan un primer contacto. Si no estás segura/o, contanos y te orientamos.",
  },
  {
    q: "¿Qué pasa en el primer contacto?",
    a: "Es una charla breve para conocernos, que nos cuentes qué te trae y ver si podemos ayudarte. A partir de ahí coordinamos la primera entrevista.",
  },
];

export default function AtencionClinicaPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: "Atención clínica — Academia PsicoMar",
          url: `${SITE_URL}/atencion-clinica`,
          about: {
            "@type": "MedicalTherapy",
            name: "Psicoterapia (TCC y DBT)",
          },
          provider: { "@type": "Organization", name: site.name, url: SITE_URL },
        }}
      />

      <Section fondo="bruma" espaciado="amplio">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="flex flex-col gap-5">
            <span className="text-sm font-medium uppercase tracking-[0.14em] text-mar-600">
              Atención clínica
            </span>
            <h1 className="text-4xl text-tinta md:text-5xl">
              Terapia para adultos, estés donde estés
            </h1>
            <p className="text-lg leading-relaxed text-tinta-suave">
              Brindamos atención clínica individual para adultos de manera
              online. Atendemos a personas de Argentina y también a quienes se
              encuentran en otros países.
            </p>
            <p className="text-lg leading-relaxed text-tinta-suave">
              La terapia no es una lista de diagnósticos: es un espacio para
              trabajar sobre distintas dificultades y construir herramientas para
              la vida cotidiana.
            </p>
            <div className="mt-2 rounded-2xl border border-mar-200 bg-white p-5">
              <p className="text-sm font-medium text-tinta">
                Para empezar, escribinos por WhatsApp
              </p>
              <p className="mb-4 mt-1 text-sm text-tinta-suave">
                Te responde directamente la psicóloga con la que quieras
                comenzar. Coordinamos un primer contacto sin compromiso.
              </p>
              <TerapiaBotones />
            </div>
          </div>
          <Foto
            src={fotoAmbas.src}
            alt={fotoAmbas.alt}
            etiqueta="Foto de Kiara y Maite"
            ratio="4 / 5"
          />
        </div>
      </Section>

      <Section fondo="crema" espaciado="amplio">
        <EncabezadoSeccion
          sobretitulo="Cómo trabajamos"
          titulo="Un proceso claro, cálido y con herramientas"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {COMO_TRABAJAMOS.map((c) => (
            <div
              key={c.titulo}
              className="flex gap-3 rounded-2xl border border-mar-100 bg-white p-5 shadow-suave"
            >
              <IconoCheck
                width={20}
                height={20}
                className="mt-0.5 shrink-0 text-mar-500"
              />
              <div>
                <h3 className="text-base text-tinta">{c.titulo}</h3>
                <p className="mt-1 text-sm text-tinta-suave">{c.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section fondo="bruma" espaciado="amplio">
        <EncabezadoSeccion sobretitulo="Preguntas frecuentes" titulo="Antes de escribir" />
        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-mar-100 bg-white p-5 [&_summary]:cursor-pointer"
            >
              <summary className="flex list-none items-center justify-between gap-4 font-medium text-tinta">
                {item.q}
                <span className="text-mar-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-tinta-suave">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <Section fondo="mar" espaciado="amplio">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl text-white">Quiero comenzar terapia</h2>
          <p className="text-white/80">
            Elegí con quién querés empezar y escribinos. Te responde la psicóloga
            directamente.
          </p>
          <TerapiaBotones tamano="lg" sobreOscuro />
        </div>
      </Section>
    </>
  );
}
