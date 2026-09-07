import { asc } from "drizzle-orm";
import { db } from "@/lib/db";
import { productos } from "@/db/schema";
import {
  EncabezadoAdmin,
  ListaItems,
  ItemLista,
  BadgeEstado,
} from "@/components/admin/ui";
import { precioARS } from "@/lib/content";

export default async function AdminProductos() {
  const filas = await db.select().from(productos).orderBy(asc(productos.nombre));

  return (
    <div>
      <EncabezadoAdmin
        titulo="Packs de herramientas"
        descripcion="Productos digitales para profesionales."
        accion={{ href: "/admin/productos/nuevo", label: "Nuevo pack" }}
      />
      {filas.length === 0 ? (
        <p className="text-sm text-tinta-suave">Todavía no hay packs.</p>
      ) : (
        <ListaItems>
          {filas.map((p) => (
            <ItemLista
              key={p.id}
              href={`/admin/productos/${p.id}`}
              titulo={p.nombre}
              detalle={precioARS(p.precio)}
              badges={<BadgeEstado estado={p.estado} />}
            />
          ))}
        </ListaItems>
      )}
    </div>
  );
}
