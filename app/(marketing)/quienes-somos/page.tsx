import type { Metadata } from "next";
import { Section, EncabezadoSeccion } from "@/components/ui/Section";
import { TeamCard } from "@/components/TeamCard";
import { PilaresPsicoMar } from "@/components/PilaresPsicoMar";
import { LinkButton } from "@/components/ui/Button";
import { TerapiaPopover } from "@/components/TerapiaPopover";
import { getEquipo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Kiara y Maite, psicólogas y fundadoras de Academia PsicoMar. Nuestra historia, nuestra forma de trabajar y por qué creamos este espacio.",
  alternates: { canonical: "/quienes-somos" },
};

export default async function QuienesSomosPage() {
  const equipo = await getEquipo();

  return (
    <>
      <Section fondo="bruma" espaciado="amplio">
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.14em] text-mar-600">
            Quiénes somos
          </span>
          <h1 className="mt-3 text-4xl text-tinta md:text-5xl">
            Dos psicólogas. Una misma idea: hacer de la psicología algo un poco
            más cercano.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-tinta-suave">
            Nos conocimos compartiendo formaciones, casos y muchas charlas sobre
            clínica. De esas conversaciones nació PsicoMar: un lugar donde la
            psicología basada en evidencia se combina con calidez, humor y
            herramientas que se puedan usar de verdad —tanto en terapia como en
            la práctica profesional.
          </p>
        </div>
      </Section>

      <Section fondo="crema" espaciado="amplio">
        <div className="flex flex-col gap-8">
          {equipo.map((m) => (
            <TeamCard key={m.slug} miembro={m} />
          ))}
        </div>
        <p className="mt-8 rounded-2xl bg-arena px-6 py-5 text-center text-tinta-suave">
          Dos perfiles complementarios, una misma manera de entender el
          acompañamiento: con evidencia, con vínculo y con objetivos claros.
        </p>
      </Section>

      <PilaresPsicoMar fondo="bruma" />

      <Section fondo="mar" espaciado="amplio">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl text-white">¿Empezamos?</h2>
          <p className="text-white/80">
            Si querés iniciar un proceso, escribinos por WhatsApp. Si sos
            profesional, mirá las formaciones que tenemos abiertas.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <TerapiaPopover alineacion="centro" etiqueta="Quiero comenzar terapia" />
            <LinkButton
              href="/formaciones"
              variante="contorno"
              className="border-white/40 text-white hover:bg-white/10"
            >
              Ver formaciones
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
