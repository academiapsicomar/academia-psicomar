import Link from "next/link";
import { count, desc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  articulos,
  consultas,
  equipo,
  formaciones,
  productos,
} from "@/db/schema";
import { fechaLegible } from "@/lib/content";

const n = (r: { n: number }[]) => r[0]?.n ?? 0;

export default async function AdminHome() {
  const [nFormaciones, nProductos, nArticulos, nEquipo, sinLeer, ultimas] =
    await Promise.all([
      db.select({ n: count() }).from(formaciones).then(n),
      db.select({ n: count() }).from(productos).then(n),
      db.select({ n: count() }).from(articulos).then(n),
      db.select({ n: count() }).from(equipo).then(n),
      db
        .select({ n: count() })
        .from(consultas)
        .where(eq(consultas.estado, "nueva"))
        .then(n),
      db
        .select()
        .from(consultas)
        .orderBy(desc(consultas.createdAt))
        .limit(5),
    ]);

  const tarjetas = [
    { href: "/admin/formaciones", label: "Formaciones", n: nFormaciones },
    { href: "/admin/productos", label: "Packs de herramientas", n: nProductos },
    { href: "/admin/blog", label: "Artículos del blog", n: nArticulos },
    { href: "/admin/equipo", label: "Miembros del equipo", n: nEquipo },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl text-tinta">Panel</h1>
      <p className="mt-1 text-sm text-tinta-suave">
        Desde acá editás todo lo que se ve en el sitio.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {tarjetas.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="flex items-center justify-between rounded-xl border border-mar-100 bg-white px-4 py-4 transition-shadow hover:shadow-suave"
          >
            <span className="text-sm font-medium text-tinta">{t.label}</span>
            <span className="font-display text-xl text-mar-600">{t.n}</span>
          </Link>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-mar-100 bg-white p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-tinta">Últimas consultas</h2>
          <Link
            href="/admin/consultas"
            className="text-xs font-medium text-mar-700 hover:underline"
          >
            Ver todas{sinLeer ? ` (${sinLeer} sin leer)` : ""}
          </Link>
        </div>
        {ultimas.length === 0 ? (
          <p className="mt-3 text-sm text-tinta-suave">Todavía no hay consultas.</p>
        ) : (
          <ul className="mt-3 divide-y divide-mar-100">
            {ultimas.map((c) => (
              <li key={c.id} className="flex items-center justify-between py-2.5">
                <div className="min-w-0">
                  <p className="truncate text-sm text-tinta">
                    {c.nombre}{" "}
                    <span className="text-tinta-suave">· {c.email}</span>
                  </p>
                  <p className="truncate text-xs text-tinta-suave">
                    {c.mensaje}
                  </p>
                </div>
                <span className="shrink-0 pl-3 text-xs text-tinta-suave">
                  {fechaLegible(c.createdAt.toISOString())}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
