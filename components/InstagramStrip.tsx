import { Section } from "@/components/ui/Section";
import { IconoInstagram, IconoFlecha } from "@/components/ui/iconos";
import { site, instagramUrl } from "@/lib/site";

export function InstagramStrip() {
  const cuentas = [
    {
      handle: site.instagram.academia,
      texto: "Novedades de talleres, supervisiones y herramientas",
    },
    {
      handle: site.instagram.kiara,
      texto: "Clínica y formación, por Kiara",
    },
    {
      handle: site.instagram.maite,
      texto: "Clínica y formación, por Maite",
    },
  ];

  return (
    <Section fondo="arena" espaciado="compacto">
      <div className="flex flex-col gap-6">
        <div className="max-w-md">
          <h2 className="text-2xl text-tinta">Seguinos en Instagram</h2>
          <p className="mt-2 text-sm text-tinta-suave">
            Ahí compartimos recursos, avisamos fechas nuevas y hablamos de
            clínica en formato corto.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cuentas.map((c) => (
            <a
              key={c.handle}
              href={instagramUrl(c.handle)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-mar-100 bg-white px-4 py-3 shadow-suave transition-shadow hover:shadow-tarjeta"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mar-50 text-mar-600">
                <IconoInstagram width={20} height={20} />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-medium text-tinta">
                  @{c.handle}
                </span>
                <span className="text-xs text-tinta-suave">{c.texto}</span>
              </span>
              <IconoFlecha
                width={16}
                height={16}
                className="ml-auto text-mar-500 transition-transform group-hover:translate-x-0.5"
              />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
