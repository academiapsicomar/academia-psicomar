/**
 * Capa de acceso al contenido — ahora lee de la base (Drizzle).
 * Las páginas consumen estos helpers; devuelven las formas de `content/types.ts`.
 */
import "server-only";
import { and, asc, desc, eq, inArray } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  articulos as tArticulos,
  equipo as tEquipo,
  formaciones as tFormaciones,
  productos as tProductos,
  supervision as tSupervision,
} from "@/db/schema";
import type {
  ArticuloBlog,
  Formacion,
  MiembroEquipo,
  Producto,
  Supervision,
  TipoFormacion,
} from "@/content/types";

type FilaEquipo = typeof tEquipo.$inferSelect;
type FilaFormacion = typeof tFormaciones.$inferSelect;
type FilaProducto = typeof tProductos.$inferSelect;
type FilaArticulo = typeof tArticulos.$inferSelect;
type FilaSupervision = typeof tSupervision.$inferSelect;

const PUBLICADO = eq(tFormaciones.estado, "publicado");

// --- Mappers fila -> tipo de contenido ---

function aMiembro(f: FilaEquipo): MiembroEquipo {
  return {
    slug: f.slug,
    nombre: f.nombre,
    rol: f.rol,
    bio: f.bio,
    bioCorta: f.bioCorta,
    enfoque: f.enfoque,
    datoExtra: f.datoExtra,
    foto: f.foto,
    fotoAlt: f.fotoAlt,
    whatsapp: f.whatsapp ?? undefined,
    orden: f.orden,
  };
}

function aFormacion(f: FilaFormacion): Formacion {
  return {
    slug: f.slug,
    nombre: f.nombre,
    tipo: f.tipo,
    modalidad: f.modalidad,
    resumen: f.resumen,
    descripcion: f.descripcion,
    paraQuien: f.paraQuien,
    duracion: f.duracion,
    enVivo: f.enVivo,
    proximaFecha: f.proximaFecha ?? undefined,
    precio: f.precio,
    incluye: f.incluye,
    imagen: f.imagen,
    imagenAlt: f.imagenAlt,
    estado: f.estado,
    destacado: f.destacado,
    docentes: f.docentes,
    seo: { title: f.seoTitle ?? undefined, description: f.seoDescription ?? undefined },
  };
}

function aProducto(p: FilaProducto): Producto {
  return {
    slug: p.slug,
    nombre: p.nombre,
    resumen: p.resumen,
    descripcion: p.descripcion,
    incluye: p.incluye,
    paraQuien: p.paraQuien,
    precio: p.precio,
    imagen: p.imagen,
    imagenAlt: p.imagenAlt,
    estado: p.estado,
    destacado: p.destacado,
    seo: { title: p.seoTitle ?? undefined, description: p.seoDescription ?? undefined },
  };
}

function aArticulo(a: FilaArticulo): ArticuloBlog {
  return {
    slug: a.slug,
    titulo: a.titulo,
    resumen: a.resumen,
    cuerpo: a.cuerpo,
    cover: a.cover,
    coverAlt: a.coverAlt,
    tags: a.tags,
    autor: a.autor,
    publicadoEl: a.publicadoEl.toISOString(),
    estado: a.estado,
    seo: { title: a.seoTitle ?? undefined, description: a.seoDescription ?? undefined },
  };
}

function aSupervision(s: FilaSupervision): Supervision {
  return {
    frecuencia: s.frecuencia,
    modalidad: s.modalidad,
    dinamica: s.dinamica,
    encuentros: s.encuentros,
    incluye: s.incluye,
    materiales: s.materiales,
    precioMensual: s.precioMensual,
    descripcion: s.descripcion,
    seo: { title: s.seoTitle ?? undefined, description: s.seoDescription ?? undefined },
  };
}

// --- Equipo ---

export async function getEquipo(): Promise<MiembroEquipo[]> {
  const filas = await db.select().from(tEquipo).orderBy(asc(tEquipo.orden));
  return filas.map(aMiembro);
}

export async function getMiembro(slug: string): Promise<MiembroEquipo | null> {
  const filas = await db
    .select()
    .from(tEquipo)
    .where(eq(tEquipo.slug, slug))
    .limit(1);
  return filas[0] ? aMiembro(filas[0]) : null;
}

// --- Formaciones ---

export type FiltroFormacion =
  | "todos"
  | "talleres"
  | "cursos"
  | "grabados"
  | "supervisiones"
  | "herramientas";

const TIPOS_POR_FILTRO: Record<string, TipoFormacion[]> = {
  talleres: ["taller"],
  cursos: ["curso"],
  grabados: ["curso_grabado"],
};

export async function getFormaciones(
  filtro: FiltroFormacion = "todos",
): Promise<Formacion[]> {
  const tipos = TIPOS_POR_FILTRO[filtro];
  const where = tipos
    ? and(PUBLICADO, inArray(tFormaciones.tipo, tipos))
    : PUBLICADO;
  const filas = await db
    .select()
    .from(tFormaciones)
    .where(where)
    .orderBy(desc(tFormaciones.destacado), asc(tFormaciones.nombre));
  return filas.map(aFormacion);
}

export async function getFormacionesDestacadas(limite = 3): Promise<Formacion[]> {
  const filas = await db
    .select()
    .from(tFormaciones)
    .where(and(PUBLICADO, eq(tFormaciones.destacado, true)))
    .orderBy(asc(tFormaciones.nombre))
    .limit(limite);
  return filas.map(aFormacion);
}

export async function getFormacion(slug: string): Promise<Formacion | null> {
  const filas = await db
    .select()
    .from(tFormaciones)
    .where(and(eq(tFormaciones.slug, slug), PUBLICADO))
    .limit(1);
  return filas[0] ? aFormacion(filas[0]) : null;
}

export async function getSlugsFormaciones(): Promise<string[]> {
  try {
    const filas = await db
      .select({ slug: tFormaciones.slug })
      .from(tFormaciones)
      .where(PUBLICADO);
    return filas.map((f) => f.slug);
  } catch {
    return [];
  }
}

// --- Productos ---

export async function getProductos(): Promise<Producto[]> {
  const filas = await db
    .select()
    .from(tProductos)
    .where(eq(tProductos.estado, "publicado"))
    .orderBy(desc(tProductos.destacado), asc(tProductos.nombre));
  return filas.map(aProducto);
}

export async function getProducto(slug: string): Promise<Producto | null> {
  const filas = await db
    .select()
    .from(tProductos)
    .where(and(eq(tProductos.slug, slug), eq(tProductos.estado, "publicado")))
    .limit(1);
  return filas[0] ? aProducto(filas[0]) : null;
}

export async function getSlugsProductos(): Promise<string[]> {
  try {
    const filas = await db
      .select({ slug: tProductos.slug })
      .from(tProductos)
      .where(eq(tProductos.estado, "publicado"));
    return filas.map((p) => p.slug);
  } catch {
    return [];
  }
}

// --- Supervisión ---

export async function getSupervision(): Promise<Supervision> {
  const filas = await db
    .select()
    .from(tSupervision)
    .where(eq(tSupervision.clave, "principal"))
    .limit(1);
  if (!filas[0]) {
    // Fallback vacío por si todavía no se sembró.
    return {
      frecuencia: "",
      modalidad: "",
      dinamica: "",
      encuentros: "",
      incluye: [],
      materiales: "",
      precioMensual: null,
      descripcion: "",
    };
  }
  return aSupervision(filas[0]);
}

// --- Blog ---

export async function getArticulos(): Promise<ArticuloBlog[]> {
  const filas = await db
    .select()
    .from(tArticulos)
    .where(eq(tArticulos.estado, "publicado"))
    .orderBy(desc(tArticulos.publicadoEl));
  return filas.map(aArticulo);
}

export async function getArticulo(slug: string): Promise<ArticuloBlog | null> {
  const filas = await db
    .select()
    .from(tArticulos)
    .where(and(eq(tArticulos.slug, slug), eq(tArticulos.estado, "publicado")))
    .limit(1);
  return filas[0] ? aArticulo(filas[0]) : null;
}

export async function getSlugsArticulos(): Promise<string[]> {
  try {
    const filas = await db
      .select({ slug: tArticulos.slug })
      .from(tArticulos)
      .where(eq(tArticulos.estado, "publicado"));
    return filas.map((a) => a.slug);
  } catch {
    return [];
  }
}

// --- Utilidades ---

export function precioARS(valor: number | null): string {
  if (valor === null) return "Precio a confirmar";
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(valor);
}

export function fechaLegible(iso: string): string {
  return new Date(iso).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
