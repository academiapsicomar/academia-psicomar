import { Section, EncabezadoSeccion } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import {
  IconoFormacion,
  IconoSupervision,
  IconoHerramientas,
} from "@/components/ui/iconos";

const CATEGORIAS = [
  {
    icono: IconoFormacion,
    titulo: "Talleres y cursos",
    texto: "Iniciar en la clínica, Psicofarmacología y nuevas capacitaciones.",
  },
  {
    icono: IconoSupervision,
    titulo: "Supervisiones grupales",
    texto: "Un espacio mensual para pensar tus casos acompañado.",
  },
  {
    icono: IconoHerramientas,
    titulo: "Packs de herramientas",
    texto: "Recursos digitales listos para usar, con descarga inmediata.",
  },
  {
    icono: IconoFormacion,
    titulo: "Cursos grabados",
    texto: "Formación asincrónica para cursar a tu ritmo, cuando quieras.",
  },
];

export function ProfesionalesPreview() {
  return (
    <Section fondo="bruma" espaciado="amplio">
      <EncabezadoSeccion
        sobretitulo="Para profesionales"
        titulo="Si trabajás en salud mental, este espacio es para vos"
        descripcion="Creamos propuestas para psicólogos/as y profesionales de la salud mental que quieren seguir aprendiendo, incorporar herramientas concretas y sentirse más acompañados en su práctica clínica."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {CATEGORIAS.map((c) => {
          const Icono = c.icono;
          return (
            <div
              key={c.titulo}
              className="flex gap-4 rounded-2xl border border-mar-100 bg-white p-5 shadow-suave"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mar-50 text-mar-600">
                <Icono width={22} height={22} />
              </span>
              <div>
                <h3 className="text-base text-tinta">{c.titulo}</h3>
                <p className="mt-1 text-sm text-tinta-suave">{c.texto}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href="/formaciones">Ver propuestas de formación</LinkButton>
        <LinkButton href="/supervisiones" variante="contorno">
          Conocé las supervisiones
        </LinkButton>
      </div>
    </Section>
  );
}
