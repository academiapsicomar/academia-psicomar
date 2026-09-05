import { LinkButton } from "@/components/ui/Button";
import { Foto } from "@/components/ui/Foto";
import { Blob } from "@/components/ui/Ondas";
import { TerapiaPopover } from "@/components/TerapiaPopover";
import { IconoFormacion } from "@/components/ui/iconos";
import { fotoAmbas } from "@/content/equipo";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bruma">
      <Blob className="left-[-10%] top-[-20%] h-[420px] w-[420px] opacity-60" color="var(--color-salvia)" />
      <Blob className="right-[-8%] bottom-[-30%] h-[380px] w-[380px] opacity-50" color="var(--color-coral-100)" />
      <div className="contenedor relative grid gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-mar-200 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-mar-700">
            Psicología basada en evidencia
          </span>
          <h1 className="text-4xl leading-[1.08] text-tinta md:text-[3.4rem]">
            Psicología para la vida real.{" "}
            <span className="text-mar-600">
              Herramientas para transformar la práctica.
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-tinta-suave">
            Somos Kiara y Maite, psicólogas y fundadoras de Academia PsicoMar.
            Creamos este espacio para acercar herramientas de psicología basadas
            en evidencia: a quienes buscan comenzar un proceso terapéutico y a
            quienes trabajan en salud mental y quieren seguir formándose.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <TerapiaPopover alineacion="izquierda" etiqueta="Quiero comenzar terapia" />
            <LinkButton href="/para-profesionales" variante="contorno" tamano="md">
              <IconoFormacion width={18} height={18} />
              Soy profesional de salud mental
            </LinkButton>
          </div>
        </div>

        <div className="relative">
          <Foto
            src={fotoAmbas.src}
            alt={fotoAmbas.alt}
            etiqueta="Foto de Kiara y Maite"
            ratio="4 / 5"
            priority
            className="mx-auto max-w-sm md:ml-auto md:mr-0"
          />
        </div>
      </div>
    </section>
  );
}
