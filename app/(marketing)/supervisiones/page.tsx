import type { Metadata } from "next";
import { Section, EncabezadoSeccion } from "@/components/ui/Section";
import { Prosa } from "@/components/ui/Prosa";
import { LinkButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { IconoCheck } from "@/components/ui/iconos";
import { site, SITE_URL } from "@/lib/site";
import { getSupervision, precioARS } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const s = await getSupervision();
  return {
    title: s.seo?.title ?? "Supervisiones grupales",
    description: s.seo?.description,
    alternates: { canonical: "/supervisiones" },
  };
}

export default async function SupervisionesPage() {
  const s = await getSupervision();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Supervisión clínica grupal — Academia PsicoMar",
          description: s.seo?.description,
          url: `${SITE_URL}/supervisiones`,
          provider: { "@type": "Organization", name: site.name, url: SITE_URL },
          ...(s.precioMensual
            ? {
                offers: {
                  "@type": "Offer",
                  price: s.precioMensual,
                  priceCurrency: "ARS",
                  category: "Suscripción mensual",
                },
              }
            : {}),
        }}
      />

      <Section fondo="bruma" espaciado="amplio">
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.14em] text-mar-600">
            Supervisiones grupales
          </span>
          <h1 className="mt-3 text-4xl text-tinta md:text-5xl">
            Un espacio de supervisión para no pensar la clínica en soledad
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-tinta-suave">
            Para profesionales que quieren pensar sus casos acompañados,
            compartir herramientas y seguir creciendo en su práctica clínica.
          </p>
        </div>
      </Section>

      <Section fondo="crema" espaciado="amplio">
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
          <Prosa>{s.descripcion}</Prosa>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex flex-col gap-4 rounded-2xl border border-mar-100 bg-white p-6 shadow-suave">
              <dl className="flex flex-col divide-y divide-mar-100 text-sm">
                <div className="flex flex-col gap-0.5 pb-3">
                  <dt className="text-tinta-suave">Frecuencia</dt>
                  <dd className="font-medium text-tinta">{s.frecuencia}</dd>
                </div>
                <div className="flex flex-col gap-0.5 py-3">
                  <dt className="text-tinta-suave">Modalidad</dt>
                  <dd className="font-medium text-tinta">{s.modalidad}</dd>
                </div>
                <div className="flex flex-col gap-0.5 py-3">
                  <dt className="text-tinta-suave">Formato</dt>
                  <dd className="font-medium text-tinta">{s.encuentros}</dd>
                </div>
                <div className="flex flex-col gap-0.5 pt-3">
                  <dt className="text-tinta-suave">Precio mensual</dt>
                  <dd className="text-lg font-semibold text-tinta">
                    {precioARS(s.precioMensual)}
                  </dd>
                </div>
              </dl>
              <LinkButton href="/contacto" anchoCompleto>
                Quiero sumarme
              </LinkButton>
              <p className="text-center text-xs text-tinta-suave">
                La suscripción mensual con Mercado Pago estará disponible muy
                pronto.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Section fondo="bruma" espaciado="amplio">
        <EncabezadoSeccion sobretitulo="Qué incluye" titulo="Lo que te llevás cada mes" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {s.incluye.map((i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-mar-100 bg-white p-5 text-sm text-tinta-suave shadow-suave"
            >
              <IconoCheck
                width={20}
                height={20}
                className="mt-0.5 shrink-0 text-mar-500"
              />
              {i}
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-2xl bg-arena px-6 py-4 text-sm text-tinta-suave">
          <strong className="text-tinta">Materiales:</strong> {s.materiales}
        </p>
      </Section>
    </>
  );
}
