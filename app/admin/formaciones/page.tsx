import { asc } from "drizzle-orm";
import { db } from "@/lib/db";
import { formaciones } from "@/db/schema";
import {
  EncabezadoAdmin,
  ListaItems,
  ItemLista,
  BadgeEstado,
} from "@/components/admin/ui";
import { precioARS } from "@/lib/content";

const ETIQUETA_TIPO = {
  taller: "Taller",
  curso: "Curso",
  curso_grabado: "Curso grabado",
} as const;

export default async function AdminFormaciones() {
  const filas = await db
    .select()
    .from(formaciones)
    .orderBy(asc(formaciones.nombre));

  return (
    <div>
      <EncabezadoAdmin
        titulo="Formaciones"
        descripcion="Talleres, cursos en vivo y cursos grabados."
        accion={{ href: "/admin/formaciones/nuevo", label: "Nueva formación" }}
      />
      {filas.length === 0 ? (
        <p className="text-sm text-tinta-suave">Todavía no hay formaciones.</p>
      ) : (
        <ListaItems>
          {filas.map((f) => (
            <ItemLista
              key={f.id}
              href={`/admin/formaciones/${f.id}`}
              titulo={f.nombre}
              detalle={`${ETIQUETA_TIPO[f.tipo]} · ${precioARS(f.precio)}`}
              badges={
                <>
                  {f.destacado && (
                    <span className="rounded-full bg-coral-50 px-2 py-0.5 text-[11px] font-medium text-coral-600">
                      Destacado
                    </span>
                  )}
                  <BadgeEstado estado={f.estado} />
                </>
              }
            />
          ))}
        </ListaItems>
      )}
    </div>
  );
}
