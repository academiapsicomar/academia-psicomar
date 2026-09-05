import { Placeholder } from "@/components/ui/Placeholder";
import { LinkButton } from "@/components/ui/Button";
import { TerapiaPopover } from "@/components/TerapiaPopover";
import { IconoCheck } from "@/components/ui/iconos";

const PUNTOS = [
  "Terapia individual online para adultos",
  "Orientación en TCC y DBT, con foco en trastornos de ansiedad",
  "Herramientas concretas para tu día a día, no solo diagnósticos",
  "Personas de Argentina y del exterior",
];

export function ClinicaPreview() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="contenedor grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <Placeholder
          etiqueta="Foto de una sesión / del consultorio"
          ratio="1 / 1"
          className="max-w-sm"
        />
        <div className="flex flex-col gap-5">
          <span className="text-sm font-medium uppercase tracking-[0.14em] text-mar-600">
            Atención clínica
          </span>
          <h2 className="text-3xl text-tinta md:text-4xl">
            Terapia para adultos, estés donde estés
          </h2>
          <p className="text-lg leading-relaxed text-tinta-suave">
            El formato online nos permite acompañar procesos sin importar dónde
            vivas, siempre respetando las condiciones legales y profesionales que
            correspondan. La terapia es un espacio para trabajar sobre lo que te
            pasa y construir herramientas para la vida cotidiana.
          </p>
          <ul className="flex flex-col gap-2">
            {PUNTOS.map((p) => (
              <li key={p} className="flex items-start gap-2 text-tinta-suave">
                <IconoCheck
                  width={18}
                  height={18}
                  className="mt-0.5 shrink-0 text-mar-500"
                />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <TerapiaPopover alineacion="izquierda" etiqueta="Quiero comenzar terapia" />
            <LinkButton href="/atencion-clinica" variante="fantasma">
              Ver más sobre la terapia
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
