/**
 * Capa de acceso al contenido.
 *
 * Hoy lee de los archivos en `content/`. En la Fase 2 se reemplaza el cuerpo de
 * estas funciones por consultas a la base (Drizzle) sin tocar las páginas: las
 * firmas ya son asíncronas y devuelven solo contenido publicado.
 */
import { equipo } from "@/content/equipo";
import { formaciones } from "@/content/formaciones";
import { productos } from "@/content/productos";
import { supervision } from "@/content/supervision";
import { articulos } from "@/content/blog";
import type {
  ArticuloBlog,
  Formacion,
  MiembroEquipo,
  Producto,
  Supervision,
  TipoFormacion,
} from "@/content/types";

const publicado = <T extends { estado: string }>(items: T[]) =>
  items.filter((i) => i.estado === "publicado");

// --- Equipo ---

export async function getEquipo(): Promise<MiembroEquipo[]> {
  return [...equipo].sort((a, b) => a.orden - b.orden);
}

export async function getMiembro(slug: string): Promise<MiembroEquipo | null> {
  return equipo.find((m) => m.slug === slug) ?? null;
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
  const pub = publicado(formaciones);
  const tipos = TIPOS_POR_FILTRO[filtro];
  const lista = tipos ? pub.filter((f) => tipos.includes(f.tipo)) : pub;
  return [...lista].sort(
    (a, b) => Number(b.destacado) - Number(a.destacado) || a.nombre.localeCompare(b.nombre),
  );
}

export async function getFormacionesDestacadas(
  limite = 3,
): Promise<Formacion[]> {
  const pub = publicado(formaciones).filter((f) => f.destacado);
  return pub.slice(0, limite);
}

export async function getFormacion(slug: string): Promise<Formacion | null> {
  const f = formaciones.find((f) => f.slug === slug);
  return f && f.estado === "publicado" ? f : null;
}

export async function getSlugsFormaciones(): Promise<string[]> {
  return publicado(formaciones).map((f) => f.slug);
}

// --- Productos ---

export async function getProductos(): Promise<Producto[]> {
  return [...publicado(productos)].sort(
    (a, b) => Number(b.destacado) - Number(a.destacado) || a.nombre.localeCompare(b.nombre),
  );
}

export async function getProducto(slug: string): Promise<Producto | null> {
  const p = productos.find((p) => p.slug === slug);
  return p && p.estado === "publicado" ? p : null;
}

export async function getSlugsProductos(): Promise<string[]> {
  return publicado(productos).map((p) => p.slug);
}

// --- Supervisión ---

export async function getSupervision(): Promise<Supervision> {
  return supervision;
}

// --- Blog ---

export async function getArticulos(): Promise<ArticuloBlog[]> {
  return [...publicado(articulos)].sort(
    (a, b) => +new Date(b.publicadoEl) - +new Date(a.publicadoEl),
  );
}

export async function getArticulo(slug: string): Promise<ArticuloBlog | null> {
  const a = articulos.find((a) => a.slug === slug);
  return a && a.estado === "publicado" ? a : null;
}

export async function getSlugsArticulos(): Promise<string[]> {
  return publicado(articulos).map((a) => a.slug);
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
