import { Foto } from "@/components/ui/Foto";
import { Prosa } from "@/components/ui/Prosa";
import { IconoCheck } from "@/components/ui/iconos";
import type { MiembroEquipo } from "@/content/types";

export function TeamCard({ miembro }: { miembro: MiembroEquipo }) {
  return (
    <article className="grid gap-6 rounded-2xl border border-mar-100 bg-white p-6 shadow-suave md:grid-cols-[minmax(0,240px)_1fr] md:p-8">
      <div className="mx-auto w-full max-w-[240px]">
        <Foto
          src={miembro.foto}
          alt={miembro.fotoAlt}
          etiqueta={`Foto de ${miembro.nombre}`}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-2xl text-tinta">{miembro.nombre}</h3>
          <p className="text-sm font-medium text-mar-600">{miembro.rol}</p>
        </div>
        <Prosa className="text-[15px]">{miembro.bio}</Prosa>
        <div>
          <p className="text-sm font-medium text-tinta">Cómo trabaja</p>
          <ul className="mt-2 flex flex-col gap-1.5">
            {miembro.enfoque.map((e) => (
              <li
                key={e}
                className="flex items-start gap-2 text-sm text-tinta-suave"
              >
                <IconoCheck
                  width={16}
                  height={16}
                  className="mt-0.5 shrink-0 text-mar-500"
                />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
