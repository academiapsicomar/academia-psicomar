import type { Metadata } from "next";
import { Section, EncabezadoSeccion } from "@/components/ui/Section";
import { ProductoCard } from "@/components/ProductoCard";
import { IconoCheck } from "@/components/ui/iconos";
import { getProductos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Recursos y herramientas para psicólogos/as",
  description:
    "Packs de herramientas digitales para la práctica clínica: registros, guías y materiales listos para usar en sesión. Descarga inmediata tras la compra.",
  alternates: { canonical: "/recursos" },
};

const PASOS = [
  "Elegís el pack que necesitás",
  "Pagás de forma segura con Mercado Pago",
  "Accedés al material al instante desde tu cuenta",
  "Lo usás en tu práctica todas las veces que quieras",
];

export default async function RecursosPage() {
  const productos = await getProductos();

  return (
    <>
      <Section fondo="bruma" espaciado="amplio">
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.14em] text-mar-600">
            Recursos
          </span>
          <h1 className="mt-3 text-4xl text-tinta md:text-5xl">
            Herramientas listas para usar en la clínica
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-tinta-suave">
            Packs de materiales digitales basados en TCC y DBT, pensados para
            ahorrarte horas de armado y tener a mano intervenciones claras y con
            respaldo.
          </p>
        </div>
      </Section>

      <Section fondo="crema" espaciado="amplio">
        <EncabezadoSeccion sobretitulo="La tienda" titulo="Elegí tu pack" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((p) => (
            <ProductoCard key={p.slug} producto={p} />
          ))}
        </ul>
      </Section>

      <Section fondo="arena" espaciado="amplio">
        <EncabezadoSeccion sobretitulo="Cómo funciona" titulo="De la compra al material, en un minuto" />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PASOS.map((paso, i) => (
            <li
              key={paso}
              className="flex flex-col gap-3 rounded-2xl border border-mar-100 bg-white p-5 shadow-suave"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mar-600 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <p className="text-sm text-tinta-suave">{paso}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 flex items-center gap-2 text-sm text-tinta-suave">
          <IconoCheck width={16} height={16} className="text-mar-500" />
          El checkout con Mercado Pago y la entrega automática se activan muy
          pronto.
        </p>
      </Section>
    </>
  );
}
