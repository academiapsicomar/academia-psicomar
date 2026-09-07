import {
  pgTable,
  pgEnum,
  uuid,
  text,
  integer,
  boolean,
  jsonb,
  timestamp,
} from "drizzle-orm/pg-core";

// --- Enums ---

export const rolUsuario = pgEnum("rol_usuario", ["admin", "cliente"]);
export const estadoPublicacion = pgEnum("estado_publicacion", [
  "borrador",
  "publicado",
]);
export const tipoFormacion = pgEnum("tipo_formacion", [
  "taller",
  "curso",
  "curso_grabado",
]);
export const modalidadFormacion = pgEnum("modalidad_formacion", [
  "online_vivo",
  "grabado",
  "presencial",
]);
export const tipoConsulta = pgEnum("tipo_consulta", [
  "formacion",
  "supervision",
  "herramientas",
  "otro",
]);
export const estadoConsulta = pgEnum("estado_consulta", ["nueva", "respondida"]);

const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
};

// --- Usuarios del panel ---

export const usuarios = pgTable("usuarios", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  nombre: text("nombre").notNull(),
  rol: rolUsuario("rol").notNull().default("admin"),
  ...timestamps,
});

// --- Equipo ---

export const equipo = pgTable("equipo", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  nombre: text("nombre").notNull(),
  rol: text("rol").notNull(),
  bio: text("bio").notNull().default(""),
  bioCorta: text("bio_corta").notNull().default(""),
  enfoque: jsonb("enfoque").$type<string[]>().notNull().default([]),
  datoExtra: text("dato_extra").notNull().default(""),
  foto: text("foto"),
  fotoAlt: text("foto_alt").notNull().default(""),
  whatsapp: text("whatsapp"),
  orden: integer("orden").notNull().default(0),
  ...timestamps,
});

// --- Formaciones ---

export const formaciones = pgTable("formaciones", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  nombre: text("nombre").notNull(),
  tipo: tipoFormacion("tipo").notNull(),
  modalidad: modalidadFormacion("modalidad").notNull(),
  resumen: text("resumen").notNull().default(""),
  descripcion: text("descripcion").notNull().default(""),
  paraQuien: text("para_quien").notNull().default(""),
  duracion: text("duracion").notNull().default(""),
  enVivo: boolean("en_vivo").notNull().default(true),
  proximaFecha: text("proxima_fecha"),
  precio: integer("precio"),
  incluye: jsonb("incluye").$type<string[]>().notNull().default([]),
  imagen: text("imagen"),
  imagenAlt: text("imagen_alt").notNull().default(""),
  estado: estadoPublicacion("estado").notNull().default("borrador"),
  destacado: boolean("destacado").notNull().default(false),
  docentes: jsonb("docentes").$type<string[]>().notNull().default([]),
  videoProvider: text("video_provider"),
  videoId: text("video_id"),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  ...timestamps,
});

// --- Productos (packs de herramientas) ---

export const productos = pgTable("productos", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  nombre: text("nombre").notNull(),
  resumen: text("resumen").notNull().default(""),
  descripcion: text("descripcion").notNull().default(""),
  incluye: jsonb("incluye").$type<string[]>().notNull().default([]),
  paraQuien: text("para_quien").notNull().default(""),
  precio: integer("precio"),
  imagen: text("imagen"),
  imagenAlt: text("imagen_alt").notNull().default(""),
  estado: estadoPublicacion("estado").notNull().default("borrador"),
  destacado: boolean("destacado").notNull().default(false),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  ...timestamps,
});

// --- Supervisión (fila única) ---

export const supervision = pgTable("supervision", {
  id: uuid("id").defaultRandom().primaryKey(),
  clave: text("clave").notNull().unique().default("principal"),
  frecuencia: text("frecuencia").notNull().default(""),
  modalidad: text("modalidad").notNull().default(""),
  dinamica: text("dinamica").notNull().default(""),
  encuentros: text("encuentros").notNull().default(""),
  incluye: jsonb("incluye").$type<string[]>().notNull().default([]),
  materiales: text("materiales").notNull().default(""),
  precioMensual: integer("precio_mensual"),
  descripcion: text("descripcion").notNull().default(""),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  ...timestamps,
});

// --- Blog ---

export const articulos = pgTable("articulos", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  titulo: text("titulo").notNull(),
  resumen: text("resumen").notNull().default(""),
  cuerpo: text("cuerpo").notNull().default(""),
  cover: text("cover"),
  coverAlt: text("cover_alt").notNull().default(""),
  tags: jsonb("tags").$type<string[]>().notNull().default([]),
  autor: text("autor").notNull().default("Academia PsicoMar"),
  publicadoEl: timestamp("publicado_el", { withTimezone: true })
    .defaultNow()
    .notNull(),
  estado: estadoPublicacion("estado").notNull().default("borrador"),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  ...timestamps,
});

// --- Consultas (formulario de contacto) ---

export const consultas = pgTable("consultas", {
  id: uuid("id").defaultRandom().primaryKey(),
  tipo: tipoConsulta("tipo").notNull(),
  nombre: text("nombre").notNull(),
  email: text("email").notNull(),
  mensaje: text("mensaje").notNull(),
  estado: estadoConsulta("estado").notNull().default("nueva"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
