/**
 * Tipos del contenido de PsicoMar.
 *
 * En la Fase 2 estas mismas formas se sirven desde la base (Drizzle) a través
 * de `lib/content.ts`. Las páginas consumen los helpers, no estos archivos
 * directamente, así el cambio a base de datos no toca las vistas.
 */

export type EstadoPublicacion = "borrador" | "publicado";

export type TipoFormacion = "taller" | "curso" | "curso_grabado";

export type ModalidadFormacion = "online_vivo" | "grabado" | "presencial";

export interface Seo {
  title?: string;
  description?: string;
}

export interface MiembroEquipo {
  slug: string;
  nombre: string;
  rol: string;
  /** Bio larga en Markdown. */
  bio: string;
  /** Frase corta para tarjetas / preview. */
  bioCorta: string;
  enfoque: string[];
  datoExtra: string;
  foto: string | null;
  fotoAlt: string;
  whatsapp?: string;
  orden: number;
}

export interface Formacion {
  slug: string;
  nombre: string;
  tipo: TipoFormacion;
  modalidad: ModalidadFormacion;
  /** Resumen de una línea para las tarjetas. */
  resumen: string;
  /** Contenido largo en Markdown. */
  descripcion: string;
  paraQuien: string;
  duracion: string;
  /** Si es en vivo (con fecha) o a demanda. */
  enVivo: boolean;
  proximaFecha?: string;
  /** Precio en ARS. `null` = "a confirmar". */
  precio: number | null;
  /** Lista de "qué incluye". */
  incluye: string[];
  imagen: string | null;
  imagenAlt: string;
  estado: EstadoPublicacion;
  destacado: boolean;
  docentes: string[];
  seo?: Seo;
}

export interface Producto {
  slug: string;
  nombre: string;
  resumen: string;
  descripcion: string;
  incluye: string[];
  paraQuien: string;
  precio: number | null;
  imagen: string | null;
  imagenAlt: string;
  estado: EstadoPublicacion;
  destacado: boolean;
  seo?: Seo;
}

export interface Supervision {
  frecuencia: string;
  modalidad: string;
  dinamica: string;
  encuentros: string;
  incluye: string[];
  materiales: string;
  precioMensual: number | null;
  descripcion: string;
  seo?: Seo;
}

export interface ArticuloBlog {
  slug: string;
  titulo: string;
  resumen: string;
  /** Cuerpo en Markdown. */
  cuerpo: string;
  cover: string | null;
  coverAlt: string;
  tags: string[];
  autor: string;
  publicadoEl: string;
  estado: EstadoPublicacion;
  seo?: Seo;
}
