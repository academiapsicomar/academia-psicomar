import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { IconoTerapia, IconoFormacion, IconoFlecha } from "@/components/ui/iconos";

const CAMINOS = [
  {
    href: "/atencion-clinica",
    icono: IconoTerapia,
    titulo: "Quiero empezar terapia",
    texto:
      "Terapia online para adultos, con Kiara o con Maite. Un espacio cálido y con herramientas concretas para lo que estás atravesando.",
    cta: "Conocé cómo trabajamos",
  },
  {
    href: "/para-profesionales",
    icono: IconoFormacion,
    titulo: "Quiero formarme como profesional",
    texto:
      "Talleres, cursos, supervisión grupal y packs de herramientas para psicólogos/as y profesionales de salud mental.",
    cta: "Ver propuestas de formación",
  },
];

export function Bifurcacion() {
  return (
    <Section fondo="crema" espaciado="amplio">
      <div className="mx-auto mb-10 max-w-xl text-center">
        <h2 className="text-3xl text-tinta md:text-4xl">¿Qué estás buscando?</h2>
        <p className="mt-3 text-tinta-suave">
          En PsicoMar conviven dos caminos. Elegí el tuyo y te llevamos derecho al
          siguiente paso.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {CAMINOS.map((c) => {
          const Icono = c.icono;
          return (
            <Link
              key={c.href}
              href={c.href}
              className="group flex flex-col gap-4 rounded-2xl border border-mar-100 bg-white p-8 shadow-suave transition-shadow hover:shadow-tarjeta"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mar-50 text-mar-600">
                <Icono width={24} height={24} />
              </span>
              <h3 className="text-2xl text-tinta">{c.titulo}</h3>
              <p className="text-tinta-suave">{c.texto}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-mar-700">
                {c.cta}
                <IconoFlecha
                  width={16}
                  height={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
