/**
 * Carga inicial de la base a partir de los archivos en `content/`.
 *
 * Uso:  npm run db:seed
 *
 * Es idempotente: solo agrega lo que falta (no pisa lo que ya editaron
 * desde el panel). Los usuarios admin salen de variables de entorno.
 */
import "./load-env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { hashearPassword } from "../lib/auth/password";
import { equipo as equipoData } from "../content/equipo";
import { formaciones as formacionesData } from "../content/formaciones";
import { productos as productosData } from "../content/productos";
import { supervision as supervisionData } from "../content/supervision";
import { articulos as articulosData } from "../content/blog";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("Falta DATABASE_URL en .env.local");

const client = postgres(url, { prepare: false, max: 1 });
const db = drizzle(client, { schema });

async function seedUsuarios() {
  const definiciones = [
    {
      nombre: "Kiara",
      email: process.env.SEED_KIARA_EMAIL,
      password: process.env.SEED_KIARA_PASSWORD,
    },
    {
      nombre: "Maite",
      email: process.env.SEED_MAITE_EMAIL,
      password: process.env.SEED_MAITE_PASSWORD,
    },
  ];

  for (const d of definiciones) {
    if (!d.email || !d.password) {
      console.warn(
        `⚠️  Salteo usuario ${d.nombre}: faltan SEED_${d.nombre.toUpperCase()}_EMAIL / _PASSWORD`,
      );
      continue;
    }
    const passwordHash = await hashearPassword(d.password);
    await db
      .insert(schema.usuarios)
      .values({
        nombre: d.nombre,
        email: d.email.toLowerCase(),
        passwordHash,
        rol: "admin",
      })
      .onConflictDoNothing({ target: schema.usuarios.email });
    console.log(`✓ usuario ${d.nombre} (${d.email})`);
  }
}

async function seedEquipo() {
  for (const m of equipoData) {
    await db
      .insert(schema.equipo)
      .values({
        slug: m.slug,
        nombre: m.nombre,
        rol: m.rol,
        bio: m.bio,
        bioCorta: m.bioCorta,
        enfoque: m.enfoque,
        datoExtra: m.datoExtra,
        foto: m.foto,
        fotoAlt: m.fotoAlt,
        whatsapp: m.whatsapp ?? null,
        orden: m.orden,
      })
      .onConflictDoNothing({ target: schema.equipo.slug });
  }
  console.log(`✓ equipo (${equipoData.length})`);
}

async function seedFormaciones() {
  for (const f of formacionesData) {
    await db
      .insert(schema.formaciones)
      .values({
        slug: f.slug,
        nombre: f.nombre,
        tipo: f.tipo,
        modalidad: f.modalidad,
        resumen: f.resumen,
        descripcion: f.descripcion,
        paraQuien: f.paraQuien,
        duracion: f.duracion,
        enVivo: f.enVivo,
        proximaFecha: f.proximaFecha ?? null,
        precio: f.precio,
        incluye: f.incluye,
        imagen: f.imagen,
        imagenAlt: f.imagenAlt,
        estado: f.estado,
        destacado: f.destacado,
        docentes: f.docentes,
        seoTitle: f.seo?.title ?? null,
        seoDescription: f.seo?.description ?? null,
      })
      .onConflictDoNothing({ target: schema.formaciones.slug });
  }
  console.log(`✓ formaciones (${formacionesData.length})`);
}

async function seedProductos() {
  for (const p of productosData) {
    await db
      .insert(schema.productos)
      .values({
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
        seoTitle: p.seo?.title ?? null,
        seoDescription: p.seo?.description ?? null,
      })
      .onConflictDoNothing({ target: schema.productos.slug });
  }
  console.log(`✓ productos (${productosData.length})`);
}

async function seedSupervision() {
  await db
    .insert(schema.supervision)
    .values({
      clave: "principal",
      frecuencia: supervisionData.frecuencia,
      modalidad: supervisionData.modalidad,
      dinamica: supervisionData.dinamica,
      encuentros: supervisionData.encuentros,
      incluye: supervisionData.incluye,
      materiales: supervisionData.materiales,
      precioMensual: supervisionData.precioMensual,
      descripcion: supervisionData.descripcion,
      seoTitle: supervisionData.seo?.title ?? null,
      seoDescription: supervisionData.seo?.description ?? null,
    })
    .onConflictDoNothing({ target: schema.supervision.clave });
  console.log("✓ supervisión");
}

async function seedArticulos() {
  for (const a of articulosData) {
    await db
      .insert(schema.articulos)
      .values({
        slug: a.slug,
        titulo: a.titulo,
        resumen: a.resumen,
        cuerpo: a.cuerpo,
        cover: a.cover,
        coverAlt: a.coverAlt,
        tags: a.tags,
        autor: a.autor,
        publicadoEl: new Date(a.publicadoEl),
        estado: a.estado,
        seoTitle: a.seo?.title ?? null,
        seoDescription: a.seo?.description ?? null,
      })
      .onConflictDoNothing({ target: schema.articulos.slug });
  }
  console.log(`✓ artículos (${articulosData.length})`);
}

async function main() {
  console.log("Cargando datos iniciales…\n");
  await seedUsuarios();
  await seedEquipo();
  await seedFormaciones();
  await seedProductos();
  await seedSupervision();
  await seedArticulos();
  console.log("\nListo.");
  await client.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
