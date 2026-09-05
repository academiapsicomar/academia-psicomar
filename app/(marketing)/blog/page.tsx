import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { IconoFlecha } from "@/components/ui/iconos";
import { getArticulos, fechaLegible } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog — psicología, clínica y herramientas",
  description:
    "Artículos sobre ansiedad, TCC, DBT, herramientas clínicas y formación para profesionales de salud mental, escritos por el equipo de Academia PsicoMar.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const articulos = await getArticulos();

  return (
    <Section fondo="crema" espaciado="amplio">
      <div className="max-w-2xl">
        <span className="text-sm font-medium uppercase tracking-[0.14em] text-mar-600">
          Blog
        </span>
        <h1 className="mt-3 text-4xl text-tinta md:text-5xl">
          Psicología, clínica y herramientas
        </h1>
        <p className="mt-4 text-lg text-tinta-suave">
          Notas sobre ansiedad, TCC, DBT, recursos para la práctica y formación
          profesional. Sin tecnicismos innecesarios.
        </p>
      </div>

      {articulos.length > 0 ? (
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {articulos.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/blog/${a.slug}`}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-mar-100 bg-white p-6 shadow-suave transition-shadow hover:shadow-tarjeta"
              >
                <div className="flex flex-wrap items-center gap-2">
                  {a.tags.map((t) => (
                    <Badge key={t} tono="salvia">
                      {t}
                    </Badge>
                  ))}
                  <span className="text-xs text-tinta-suave">
                    {fechaLegible(a.publicadoEl)}
                  </span>
                </div>
                <h2 className="text-2xl text-tinta">{a.titulo}</h2>
                <p className="text-sm text-tinta-suave">{a.resumen}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-mar-700">
                  Leer la nota
                  <IconoFlecha
                    width={16}
                    height={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-tinta-suave">Pronto vamos a publicar las primeras notas.</p>
      )}
    </Section>
  );
}
