import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { articulos } from "@/db/schema";
import { guardarArticulo, borrarArticulo } from "@/lib/acciones/admin";
import { Campo, Texto, Selector, ListaTexto } from "@/components/admin/campos";
import { AreaMarkdown } from "@/components/admin/AreaMarkdown";
import { CampoImagen } from "@/components/admin/CampoImagen";
import {
  FormAdmin,
  Fieldset,
  AccionesFormulario,
} from "@/components/admin/ui";

function fechaInput(d?: Date) {
  return (d ?? new Date()).toISOString().slice(0, 10);
}

export default async function EditarArticulo({
  params,
}: PageProps<"/admin/blog/[id]">) {
  const { id } = await params;
  const nuevo = id === "nuevo";
  const a = nuevo
    ? null
    : (await db.select().from(articulos).where(eq(articulos.id, id)).limit(1))[0];
  if (!nuevo && !a) notFound();
  const v = <K extends keyof NonNullable<typeof a>>(k: K) =>
    a ? a[k] : undefined;

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl text-tinta">
        {nuevo ? "Nuevo artículo" : a!.titulo}
      </h1>

      <FormAdmin action={guardarArticulo.bind(null, id)}>
        <Fieldset legend="Básico">
          <Campo label="Título">
            <Texto name="titulo" required defaultValue={v("titulo")} />
          </Campo>
          <Campo label="Resumen" hint="Aparece en el listado del blog.">
            <Texto name="resumen" defaultValue={v("resumen")} />
          </Campo>
          <div className="grid gap-4 sm:grid-cols-2">
            <Campo label="Autor">
              <Texto name="autor" defaultValue={v("autor") ?? "Academia PsicoMar"} />
            </Campo>
            <Campo label="Fecha de publicación">
              <input
                type="date"
                name="publicadoEl"
                defaultValue={fechaInput(v("publicadoEl") as Date | undefined)}
                className="w-full rounded-lg border border-mar-200 bg-white px-3 py-2 text-sm outline-none focus:border-mar-500"
              />
            </Campo>
          </div>
          <Campo label="Slug (URL)" hint="Se genera solo si lo dejás vacío.">
            <Texto name="slug" defaultValue={v("slug")} />
          </Campo>
          <Campo label="Tags" hint="Un tag por línea.">
            <ListaTexto name="tags" valor={(v("tags") as string[]) ?? []} />
          </Campo>
        </Fieldset>

        <Fieldset legend="Contenido">
          <Campo label="Cuerpo del artículo">
            <AreaMarkdown name="cuerpo" defaultValue={v("cuerpo")} rows={18} />
          </Campo>
        </Fieldset>

        <Fieldset legend="Imagen de portada">
          <CampoImagen
            name="cover"
            defaultValue={v("cover") ?? null}
            carpeta="blog"
          />
          <Campo label="Texto alternativo">
            <Texto name="coverAlt" defaultValue={v("coverAlt")} />
          </Campo>
        </Fieldset>

        <Fieldset legend="SEO y publicación">
          <Campo label="Título SEO">
            <Texto name="seoTitle" defaultValue={v("seoTitle") ?? ""} />
          </Campo>
          <Campo label="Meta descripción">
            <Texto name="seoDescription" defaultValue={v("seoDescription") ?? ""} />
          </Campo>
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
        </Fieldset>

        <AccionesFormulario
          volverHref="/admin/blog"
        borrarAction={nuevo ? undefined : borrarArticulo.bind(null, id)}
        />
      </FormAdmin>
    </div>
  );
}
