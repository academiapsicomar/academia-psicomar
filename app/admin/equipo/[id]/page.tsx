import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { equipo } from "@/db/schema";
import { guardarMiembro, borrarMiembro } from "@/lib/acciones/admin";
import { Campo, Texto, Numero, ListaTexto } from "@/components/admin/campos";
import { AreaMarkdown } from "@/components/admin/AreaMarkdown";
import { CampoImagen } from "@/components/admin/CampoImagen";
import {
  FormAdmin,
  Fieldset,
  AccionesFormulario,
  BotonBorrar,
} from "@/components/admin/ui";

export default async function EditarMiembro({
  params,
}: PageProps<"/admin/equipo/[id]">) {
  const { id } = await params;
  const nuevo = id === "nuevo";
  const m = nuevo
    ? null
    : (await db.select().from(equipo).where(eq(equipo.id, id)).limit(1))[0];
  if (!nuevo && !m) notFound();
  const v = <K extends keyof NonNullable<typeof m>>(k: K) =>
    m ? m[k] : undefined;

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl text-tinta">
        {nuevo ? "Nueva persona" : m!.nombre}
      </h1>

      <FormAdmin action={guardarMiembro.bind(null, id)}>
        <Fieldset legend="Datos">
          <div className="grid gap-4 sm:grid-cols-2">
            <Campo label="Nombre">
              <Texto name="nombre" required defaultValue={v("nombre")} />
            </Campo>
            <Campo label="Orden" hint="1 aparece primero.">
              <Numero name="orden" defaultValue={v("orden") ?? 1} />
            </Campo>
          </div>
          <Campo label="Rol / título">
            <Texto
              name="rol"
              defaultValue={v("rol")}
              placeholder="Psicóloga · Especialista en trastornos de ansiedad"
            />
          </Campo>
          <Campo label="Slug (URL)" hint="Se genera solo si lo dejás vacío.">
            <Texto name="slug" defaultValue={v("slug")} />
          </Campo>
          <Campo label="WhatsApp" hint="Formato internacional, solo dígitos.">
            <Texto name="whatsapp" defaultValue={v("whatsapp") ?? ""} />
          </Campo>
        </Fieldset>

        <Fieldset legend="Textos">
          <Campo label="Bio completa">
            <AreaMarkdown name="bio" defaultValue={v("bio")} />
          </Campo>
          <Campo label="Bio corta" hint="Para las tarjetas y la home.">
            <Texto name="bioCorta" defaultValue={v("bioCorta")} />
          </Campo>
          <Campo label="Cómo trabaja" hint="Un ítem por línea.">
            <ListaTexto name="enfoque" valor={(v("enfoque") as string[]) ?? []} />
          </Campo>
          <Campo label="Dato extra">
            <Texto name="datoExtra" defaultValue={v("datoExtra")} />
          </Campo>
        </Fieldset>

        <Fieldset legend="Foto">
          <CampoImagen
            name="foto"
            defaultValue={v("foto") ?? null}
            carpeta="equipo"
          />
          <Campo label="Texto alternativo">
            <Texto name="fotoAlt" defaultValue={v("fotoAlt")} />
          </Campo>
        </Fieldset>

        <AccionesFormulario
          volverHref="/admin/equipo"
          onBorrar={
            nuevo ? undefined : (
              <BotonBorrar action={borrarMiembro.bind(null, id)} />
            )
          }
        />
      </FormAdmin>
    </div>
  );
}
