import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { FiltroFormaciones } from "@/components/FiltroFormaciones";
import { FormacionCard } from "@/components/FormacionCard";
import { LinkButton } from "@/components/ui/Button";
import { getFormaciones, type FiltroFormacion } from "@/lib/content";

export const metadata: Metadata = {
  title: "Formaciones para psicólogos/as",
  description:
    "Todas las propuestas de formación de Academia PsicoMar: talleres, cursos, formación grabada, supervisión clínica y packs de herramientas para profesionales de salud mental.",
  alternates: { canonical: "/formaciones" },
};

const TITULOS: Record<string, string> = {
  todos: "Todas las formaciones",
  talleres: "Talleres",
  cursos: "Cursos",
  grabados: "Cursos grabados",
};

const FILTROS_VALIDOS = new Set(["todos", "talleres", "cursos", "grabados"]);

export default async function FormacionesPage({
  searchParams,
}: PageProps<"/formaciones">) {
  const sp = await searchParams;
  const tipoParam = typeof sp.tipo === "string" ? sp.tipo : "todos";
  const filtro = (
    FILTROS_VALIDOS.has(tipoParam) ? tipoParam : "todos"
  ) as FiltroFormacion;

  const formaciones = await getFormaciones(filtro);

  return (
    <Section fondo="crema" espaciado="amplio">
      <div className="max-w-2xl">
        <span className="text-sm font-medium uppercase tracking-[0.14em] text-mar-600">
          Formaciones
        </span>
        <h1 className="mt-3 text-4xl text-tinta md:text-5xl">
          {TITULOS[filtro] ?? "Formaciones"}
        </h1>
        <p className="mt-4 text-lg text-tinta-suave">
          Propuestas para seguir formándote y sumar herramientas a tu práctica
          clínica. Elegís el formato que mejor te queda: en vivo o a tu ritmo.
        </p>
      </div>

      <div className="mt-8">
        <FiltroFormaciones activo={filtro} />
      </div>

      {formaciones.length > 0 ? (
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {formaciones.map((f) => (
            <FormacionCard key={f.slug} formacion={f} />
          ))}
        </ul>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-mar-200 bg-white p-10 text-center">
          <p className="text-tinta-suave">
            Todavía no hay formaciones en esta categoría. Seguinos en Instagram
            para enterarte de las próximas fechas.
          </p>
        </div>
      )}

      <div className="mt-12 rounded-2xl bg-bruma p-6 text-center md:p-8">
        <h2 className="text-2xl text-tinta">¿Buscás supervisión o herramientas?</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-tinta-suave">
          La supervisión grupal y los packs de herramientas tienen su propia
          sección.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <LinkButton href="/supervisiones" variante="contorno">
            Supervisiones grupales
          </LinkButton>
          <LinkButton href="/recursos" variante="contorno">
            Packs de herramientas
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
