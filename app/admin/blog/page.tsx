import { desc } from "drizzle-orm";
import { db } from "@/lib/db";
import { articulos } from "@/db/schema";
import {
  EncabezadoAdmin,
  ListaItems,
  ItemLista,
  BadgeEstado,
} from "@/components/admin/ui";
import { fechaLegible } from "@/lib/content";

export default async function AdminBlog() {
  const filas = await db
    .select()
    .from(articulos)
    .orderBy(desc(articulos.publicadoEl));

  return (
    <div>
      <EncabezadoAdmin
        titulo="Blog"
        descripcion="Artículos sobre clínica, ansiedad, TCC, DBT, herramientas."
        accion={{ href: "/admin/blog/nuevo", label: "Nuevo artículo" }}
      />
      {filas.length === 0 ? (
        <p className="text-sm text-tinta-suave">Todavía no hay artículos.</p>
      ) : (
        <ListaItems>
          {filas.map((a) => (
            <ItemLista
              key={a.id}
              href={`/admin/blog/${a.id}`}
              titulo={a.titulo}
              detalle={fechaLegible(a.publicadoEl.toISOString())}
              badges={<BadgeEstado estado={a.estado} />}
            />
          ))}
        </ListaItems>
      )}
    </div>
  );
}
