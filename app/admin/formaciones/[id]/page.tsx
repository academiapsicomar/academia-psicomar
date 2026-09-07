import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { formaciones } from "@/db/schema";
import { guardarFormacion, borrarFormacion } from "@/lib/acciones/admin";
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

export default async function EditarFormacion({
  params,
}: PageProps<"/admin/formaciones/[id]">) {
  const { id } = await params;
  const nuevo = id === "nuevo";

  const f = nuevo
    ? null
    : (
        await db.select().from(formaciones).where(eq(formaciones.id, id)).limit(1)
      )[0];

  if (!nuevo && !f) notFound();

  const v = <K extends keyof NonNullable<typeof f>>(k: K) =>
    f ? f[k] : undefined;

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl text-tinta">
        {nuevo ? "Nueva formación" : f!.nombre}
      </h1>

      <FormAdmin action={guardarFormacion.bind(null, id)}>
        <Fieldset legend="Básico">
          <Campo label="Nombre">
            <Texto name="nombre" required defaultValue={v("nombre")} />
          </Campo>
          <div className="grid gap-4 sm:grid-cols-2">
            <Campo label="Tipo">
              <Selector
                name="tipo"
                defaultValue={(v("tipo") as string) ?? "taller"}
                opciones={[
                  { value: "taller", label: "Taller" },
                  { value: "curso", label: "Curso" },
                  { value: "curso_grabado", label: "Curso grabado" },
                ]}
              />
            </Campo>
            <Campo label="Modalidad">
              <Selector
                name="modalidad"
                defaultValue={(v("modalidad") as string) ?? "online_vivo"}
                opciones={[
                  { value: "online_vivo", label: "Online en vivo" },
                  { value: "grabado", label: "Grabado" },
                  { value: "presencial", label: "Presencial" },
                ]}
              />
            </Campo>
          </div>
          <Campo label="Resumen" hint="Una línea, aparece en las tarjetas.">
            <Texto name="resumen" defaultValue={v("resumen")} />
          </Campo>
          <Campo
            label="Slug (URL)"
            hint="Se genera solo desde el nombre si lo dejás vacío."
          >
            <Texto name="slug" defaultValue={v("slug")} placeholder="iniciar-en-la-clinica" />
          </Campo>
        </Fieldset>

        <Fieldset legend="Contenido">
          <Campo label="Descripción">
            <AreaMarkdown name="descripcion" defaultValue={v("descripcion")} />
          </Campo>
          <Campo label="Para quién es">
            <Texto name="paraQuien" defaultValue={v("paraQuien")} />
          </Campo>
          <Campo label="Qué incluye" hint="Un ítem por línea.">
            <ListaTexto name="incluye" valor={(v("incluye") as string[]) ?? []} />
          </Campo>
          <Campo label="Docentes" hint="Un nombre por línea.">
            <ListaTexto
              name="docentes"
              valor={(v("docentes") as string[]) ?? ["Kiara", "Maite Martelli"]}
            />
          </Campo>
        </Fieldset>

        <Fieldset legend="Fechas y precio">
          <div className="grid gap-4 sm:grid-cols-2">
            <Campo label="Duración">
              <Texto name="duracion" defaultValue={v("duracion")} placeholder="1 encuentro de 4 horas" />
            </Campo>
            <Campo label="Precio (ARS)" hint="Vacío = 'a confirmar'.">
              <Numero name="precio" defaultValue={v("precio") ?? undefined} />
            </Campo>
          </div>
          <Campo label="Próxima fecha" hint="Texto libre. Ej: 'A confirmar' o '12 de marzo'.">
            <Texto name="proximaFecha" defaultValue={v("proximaFecha") ?? ""} />
          </Campo>
          <Casilla name="enVivo" label="Es en vivo" defaultChecked={v("enVivo") ?? true} />
        </Fieldset>

        <Fieldset legend="Video (solo cursos grabados)">
          <div className="grid gap-4 sm:grid-cols-2">
            <Campo label="Plataforma" hint="vimeo / youtube">
              <Texto name="videoProvider" defaultValue={v("videoProvider") ?? ""} />
            </Campo>
            <Campo label="ID del video">
              <Texto name="videoId" defaultValue={v("videoId") ?? ""} />
            </Campo>
          </div>
        </Fieldset>

        <Fieldset legend="Imagen">
          <CampoImagen
            name="imagen"
            defaultValue={v("imagen") ?? null}
            carpeta="formaciones"
          />
          <Campo label="Texto alternativo de la imagen">
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
              label="Destacado en la home"
              defaultChecked={v("destacado") ?? false}
            />
          </div>
        </Fieldset>

        <AccionesFormulario
          volverHref="/admin/formaciones"
        borrarAction={nuevo ? undefined : borrarFormacion.bind(null, id)}
        />
      </FormAdmin>
    </div>
  );
}
