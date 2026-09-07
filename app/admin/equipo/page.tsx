import { asc } from "drizzle-orm";
import { db } from "@/lib/db";
import { equipo } from "@/db/schema";
import {
  EncabezadoAdmin,
  ListaItems,
  ItemLista,
} from "@/components/admin/ui";

export default async function AdminEquipo() {
  const filas = await db.select().from(equipo).orderBy(asc(equipo.orden));

  return (
    <div>
      <EncabezadoAdmin
        titulo="Equipo"
        descripcion="Las fichas de la sección Quiénes somos."
        accion={{ href: "/admin/equipo/nuevo", label: "Agregar persona" }}
      />
      {filas.length === 0 ? (
        <p className="text-sm text-tinta-suave">Todavía no hay nadie cargado.</p>
      ) : (
        <ListaItems>
          {filas.map((m) => (
            <ItemLista
              key={m.id}
              href={`/admin/equipo/${m.id}`}
              titulo={m.nombre}
              detalle={m.rol}
            />
          ))}
        </ListaItems>
      )}
    </div>
  );
}
