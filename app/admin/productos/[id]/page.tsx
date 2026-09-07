import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { productos } from "@/db/schema";
import { guardarProducto, borrarProducto } from "@/lib/acciones/admin";
import {
  Campo,
  Texto,
  Numero,
  Selector,
  Casilla,
  ListaTexto,
} from "@/components/admin/campos";
import { AreaMarkdown } from "@/components/admin/AreaMarkdown";
import { CampoImagen } from "@/components/admin/CampoImagen";
import {
  FormAdmin,
  Fieldset,
  AccionesFormulario,
} from "@/components/admin/ui";

export default async function EditarProducto({
  params,
}: PageProps<"/admin/productos/[id]">) {
  const { id } = await params;
  const nuevo = id === "nuevo";
  const p = nuevo
    ? null
    : (await db.select().from(productos).where(eq(productos.id, id)).limit(1))[0];
  if (!nuevo && !p) notFound();
  const v = <K extends keyof NonNullable<typeof p>>(k: K) =>
    p ? p[k] : undefined;

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl text-tinta">
        {nuevo ? "Nuevo pack" : p!.nombre}
      </h1>

      <FormAdmin action={guardarProducto.bind(null, id)}>
        <Fieldset legend="Básico">
          <Campo label="Nombre">
            <Texto name="nombre" required defaultValue={v("nombre")} />
          </Campo>
          <Campo label="Resumen" hint="Una línea para las tarjetas.">
            <Texto name="resumen" defaultValue={v("resumen")} />
          </Campo>
          <Campo label="Slug (URL)" hint="Se genera solo si lo dejás vacío.">
            <Texto name="slug" defaultValue={v("slug")} />
          </Campo>
        </Fieldset>

        <Fieldset legend="Contenido">
          <Campo label="Descripción">
            <AreaMarkdown name="descripcion" defaultValue={v("descripcion")} />
          </Campo>
          <Campo label="Qué incluye" hint="Un ítem por línea.">
            <ListaTexto name="incluye" valor={(v("incluye") as string[]) ?? []} />
          </Campo>
          <Campo label="Para quién está pensado">
            <Texto name="paraQuien" defaultValue={v("paraQuien")} />
          </Campo>
          <Campo label="Precio (ARS)" hint="Vacío = 'a confirmar'.">
            <Numero name="precio" defaultValue={v("precio") ?? undefined} />
          </Campo>
        </Fieldset>

        <Fieldset legend="Imagen">
          <CampoImagen
            name="imagen"
            defaultValue={v("imagen") ?? null}
            carpeta="productos"
          />
          <Campo label="Texto alternativo">
            <Texto name="imagenAlt" defaultValue={v("imagenAlt")} />
          </Campo>
        </Fieldset>

        <Fieldset legend="SEO y publicación">
          <Campo label="Título SEO">
            <Texto name="seoTitle" defaultValue={v("seoTitle") ?? ""} />
          </Campo>
          <Campo label="Meta descripción">
            <Texto name="seoDescription" defaultValue={v("seoDescription") ?? ""} />
          </Campo>
          <div className="flex flex-wrap items-center gap-6">
            <Campo label="Estado" className="w-40">
              <Selector
                name="estado"
                defaultValue={(v("estado") as string) ?? "borrador"}
                opciones={[
                  { value: "borrador", label: "Borrador" },
                  { value: "publicado", label: "Publicado" },
                ]}
              />
            </Campo>
            <Casilla
              name="destacado"
              label="Destacado"
              defaultChecked={v("destacado") ?? false}
            />
          </div>
        </Fieldset>

        <AccionesFormulario
          volverHref="/admin/productos"
        borrarAction={nuevo ? undefined : borrarProducto.bind(null, id)}
        />
      </FormAdmin>
    </div>
  );
}
