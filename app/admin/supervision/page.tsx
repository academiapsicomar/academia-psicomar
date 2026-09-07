import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supervision } from "@/db/schema";
import { guardarSupervision } from "@/lib/acciones/admin";
import { Campo, Texto, Numero, ListaTexto } from "@/components/admin/campos";
import { AreaMarkdown } from "@/components/admin/AreaMarkdown";
import { FormAdmin, Fieldset, AccionesFormulario } from "@/components/admin/ui";

export default async function AdminSupervision() {
  const s = (
    await db
      .select()
      .from(supervision)
      .where(eq(supervision.clave, "principal"))
      .limit(1)
  )[0];

  return (
    <div>
      <h1 className="mb-1 font-display text-2xl text-tinta">Supervisión grupal</h1>
      <p className="mb-6 text-sm text-tinta-suave">
        Hay una sola. Se muestra en /supervisiones y en /para-profesionales.
      </p>

      <FormAdmin action={guardarSupervision}>
        <Fieldset legend="Datos">
          <Campo label="Frecuencia">
            <Texto name="frecuencia" defaultValue={s?.frecuencia} placeholder="1 encuentro mensual de 2 horas" />
          </Campo>
          <Campo label="Modalidad">
            <Texto name="modalidad" defaultValue={s?.modalidad} />
          </Campo>
          <Campo label="Dinámica">
            <Texto name="dinamica" defaultValue={s?.dinamica} />
          </Campo>
          <Campo label="Formato / encuentros">
            <Texto name="encuentros" defaultValue={s?.encuentros} />
          </Campo>
          <Campo label="Precio mensual (ARS)" hint="Vacío = 'a confirmar'.">
            <Numero name="precioMensual" defaultValue={s?.precioMensual ?? undefined} />
          </Campo>
        </Fieldset>

        <Fieldset legend="Contenido">
          <Campo label="Descripción">
            <AreaMarkdown name="descripcion" defaultValue={s?.descripcion} />
          </Campo>
          <Campo label="Qué incluye" hint="Un ítem por línea.">
            <ListaTexto name="incluye" valor={s?.incluye ?? []} />
          </Campo>
          <Campo label="Materiales">
            <Texto name="materiales" defaultValue={s?.materiales} />
          </Campo>
        </Fieldset>

        <Fieldset legend="SEO">
          <Campo label="Título SEO">
            <Texto name="seoTitle" defaultValue={s?.seoTitle ?? ""} />
          </Campo>
          <Campo label="Meta descripción">
            <Texto name="seoDescription" defaultValue={s?.seoDescription ?? ""} />
          </Campo>
        </Fieldset>

        <AccionesFormulario volverHref="/admin" />
      </FormAdmin>
    </div>
  );
}
