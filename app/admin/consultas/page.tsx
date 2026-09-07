import { desc } from "drizzle-orm";
import { db } from "@/lib/db";
import { consultas } from "@/db/schema";
import { marcarConsulta, borrarConsulta } from "@/lib/acciones/admin";
import { EncabezadoAdmin } from "@/components/admin/ui";
import { fechaLegible } from "@/lib/content";

const ETIQUETA_TIPO: Record<string, string> = {
  formacion: "Talleres y cursos",
  supervision: "Supervisiones",
  herramientas: "Herramientas",
  otro: "Otra",
};

export default async function AdminConsultas() {
  const filas = await db
    .select()
    .from(consultas)
    .orderBy(desc(consultas.createdAt));

  return (
    <div>
      <EncabezadoAdmin
        titulo="Consultas"
        descripcion="Lo que llega por el formulario de contacto."
      />
      {filas.length === 0 ? (
        <p className="text-sm text-tinta-suave">Todavía no hay consultas.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {filas.map((c) => (
            <li
              key={c.id}
              className={`rounded-xl border bg-white p-4 ${
                c.estado === "nueva" ? "border-mar-300" : "border-mar-100"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-medium text-tinta">
                    {c.nombre}{" "}
                    <a
                      href={`mailto:${c.email}`}
                      className="font-normal text-mar-700 hover:underline"
                    >
                      {c.email}
                    </a>
                  </p>
                  <p className="text-xs text-tinta-suave">
                    {ETIQUETA_TIPO[c.tipo]} · {fechaLegible(c.createdAt.toISOString())}
                    {c.estado === "nueva" && (
                      <span className="ml-2 rounded-full bg-mar-50 px-2 py-0.5 font-medium text-mar-700">
                        Sin responder
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex gap-1">
                  <form
                    action={marcarConsulta.bind(
                      null,
                      c.id,
                      c.estado === "nueva" ? "respondida" : "nueva",
                    )}
                  >
                    <button className="rounded-full border border-mar-200 px-3 py-1 text-xs text-mar-800 hover:bg-mar-50">
                      {c.estado === "nueva"
                        ? "Marcar respondida"
                        : "Marcar sin responder"}
                    </button>
                  </form>
                  <form action={borrarConsulta.bind(null, c.id)}>
                    <button className="rounded-full px-3 py-1 text-xs text-coral-600 hover:bg-coral-50">
                      Eliminar
                    </button>
                  </form>
                </div>
              </div>
              <p className="mt-2 whitespace-pre-wrap text-sm text-tinta-suave">
                {c.mensaje}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
