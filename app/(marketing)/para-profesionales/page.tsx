import type { Metadata } from "next";
import { Section, EncabezadoSeccion } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { FormacionCard } from "@/components/FormacionCard";
import { ProductoCard } from "@/components/ProductoCard";
import { IconoFlecha, IconoCheck } from "@/components/ui/iconos";
import {
  getFormaciones,
  getProductos,
  getSupervision,
  precioARS,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Para profesionales — formación, supervisión y herramientas",
  description:
    "Talleres, cursos, supervisión clínica grupal y packs de herramientas para psicólogos/as y profesionales de salud mental. Formación en vivo y grabada.",
  alternates: { canonical: "/para-profesionales" },
};

export default async function ParaProfesionalesPage() {
  const [formaciones, productos, supervision] = await Promise.all([
    getFormaciones("todos"),
    getProductos(),
    getSupervision(),
  ]);

  const talleresYcursos = formaciones.filter((f) => f.tipo !== "curso_grabado");
  const grabados = formaciones.filter((f) => f.tipo === "curso_grabado");

  return (
    <>
      <Section fondo="bruma" espaciado="amplio">
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.14em] text-mar-600">
            Para profesionales
          </span>
          <h1 className="mt-3 text-4xl text-tinta md:text-5xl">
            Si trabajás en salud mental, este espacio es para vos
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-tinta-suave">
            En PsicoMar creamos propuestas pensadas para psicólogos/as y
            profesionales de la salud mental que quieren seguir aprendiendo,
            incorporar herramientas concretas y sentirse más acompañados en su
            práctica clínica.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton href="/formaciones">Ver todas las formaciones</LinkButton>
            <LinkButton href="#supervisiones" variante="contorno">
              Conocé las supervisiones
            </LinkButton>
          </div>
        </div>
      </Section>

      {/* 1. Talleres y cursos */}
      <Section fondo="crema" espaciado="amplio" id="talleres">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <EncabezadoSeccion
            sobretitulo="1 · Talleres y cursos"
            titulo="Formación en vivo"
            descripcion="Encuentros por videollamada, prácticos y con espacio para tus dudas."
          />
          <LinkButton href="/formaciones?tipo=talleres" variante="fantasma">
            Ver talleres
            <IconoFlecha width={16} height={16} />
          </LinkButton>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {talleresYcursos.map((f) => (
            <FormacionCard key={f.slug} formacion={f} />
          ))}
        </ul>
      </Section>

      {/* 2. Supervisiones */}
      <Section fondo="bruma" espaciado="amplio" id="supervisiones">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-5">
            <EncabezadoSeccion
              sobretitulo="2 · Supervisiones grupales"
              titulo="Un espacio para pensar tus casos acompañado"
              descripcion="Supervisión grupal para profesionales que quieren pensar sus casos acompañados, compartir herramientas y seguir creciendo en su práctica clínica. Es una suscripción mensual."
            />
            <ul className="flex flex-col gap-2">
              {supervision.incluye.map((i) => (
                <li key={i} className="flex items-start gap-2 text-tinta-suave">
                  <IconoCheck
                    width={18}
                    height={18}
                    className="mt-0.5 shrink-0 text-mar-500"
                  />
                  {i}
                </li>
              ))}
            </ul>
            <LinkButton href="/supervisiones">
              Quiero conocer las supervisiones
            </LinkButton>
          </div>
          <div className="rounded-2xl border border-mar-100 bg-white p-6 shadow-suave">
            <dl className="flex flex-col divide-y divide-mar-100 text-sm">
              <div className="flex flex-col gap-1 pb-3">
                <dt className="font-medium text-tinta">Frecuencia</dt>
                <dd className="text-tinta-suave">{supervision.frecuencia}</dd>
              </div>
              <div className="flex flex-col gap-1 py-3">
                <dt className="font-medium text-tinta">Modalidad</dt>
                <dd className="text-tinta-suave">{supervision.modalidad}</dd>
              </div>
              <div className="flex flex-col gap-1 py-3">
                <dt className="font-medium text-tinta">Formato</dt>
                <dd className="text-tinta-suave">{supervision.encuentros}</dd>
              </div>
              <div className="flex flex-col gap-1 pt-3">
                <dt className="font-medium text-tinta">Precio mensual</dt>
                <dd className="text-tinta-suave">
                  {precioARS(supervision.precioMensual)}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* 3. Packs de herramientas */}
      <Section fondo="crema" espaciado="amplio" id="herramientas">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <EncabezadoSeccion
            sobretitulo="3 · Packs de herramientas"
            titulo="Recursos listos para usar"
            descripcion="Elegís un pack, lo comprás y accedés al material al instante para usarlo en tu práctica."
          />
          <LinkButton href="/recursos" variante="fantasma">
            Ver la tienda
            <IconoFlecha width={16} height={16} />
          </LinkButton>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {productos.map((p) => (
            <ProductoCard key={p.slug} producto={p} />
          ))}
        </ul>
      </Section>

      {/* 4. Cursos grabados */}
      <Section fondo="bruma" espaciado="amplio" id="grabados">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <EncabezadoSeccion
            sobretitulo="4 · Cursos grabados"
            titulo="Formación asincrónica, a tu ritmo"
            descripcion="Comprás una vez y accedés al contenido para verlo cuando quieras, las veces que necesites."
          />
          <LinkButton href="/formaciones?tipo=grabados" variante="fantasma">
            Ver grabados
            <IconoFlecha width={16} height={16} />
          </LinkButton>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {grabados.map((f) => (
            <FormacionCard key={f.slug} formacion={f} />
          ))}
        </ul>
      </Section>
    </>
  );
}
