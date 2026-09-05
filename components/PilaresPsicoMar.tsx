import Link from "next/link";
import { Section, EncabezadoSeccion } from "@/components/ui/Section";
import {
  IconoTerapia,
  IconoFormacion,
  IconoSupervision,
  IconoHerramientas,
} from "@/components/ui/iconos";

const PILARES = [
  {
    icono: IconoTerapia,
    titulo: "Atención clínica",
    texto: "Terapia individual online para adultos, con orientación TCC y DBT.",
    href: "/atencion-clinica",
  },
  {
    icono: IconoFormacion,
    titulo: "Formación",
    texto:
      "Talleres, cursos y capacitaciones sobre distintos temas de psicología y salud mental.",
    href: "/formaciones",
  },
  {
    icono: IconoSupervision,
    titulo: "Supervisión",
    texto:
      "Espacios de supervisión grupal mensual para pensar casos entre colegas.",
    href: "/supervisiones",
  },
  {
    icono: IconoHerramientas,
    titulo: "Herramientas",
    texto:
      "Materiales y recursos prácticos, listos para usar en la clínica.",
    href: "/recursos",
  },
];

export function PilaresPsicoMar({
  fondo = "arena",
}: {
  fondo?: "arena" | "crema" | "bruma" | "blanco";
}) {
  return (
    <Section fondo={fondo} espaciado="amplio">
      <EncabezadoSeccion
        centrado
        sobretitulo="Qué es Academia PsicoMar"
        titulo="No es solo una academia"
        descripcion="PsicoMar es un espacio que conecta la clínica, la formación y las herramientas concretas. Creemos en una psicología que se pueda llevar a la práctica."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PILARES.map((p) => {
          const Icono = p.icono;
          return (
            <Link
              key={p.titulo}
              href={p.href}
              className="group flex flex-col gap-3 rounded-2xl border border-mar-100 bg-white p-6 shadow-suave transition-shadow hover:shadow-tarjeta"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mar-50 text-mar-600">
                <Icono width={22} height={22} />
              </span>
              <h3 className="text-lg text-tinta">{p.titulo}</h3>
              <p className="text-sm leading-relaxed text-tinta-suave">
                {p.texto}
              </p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
