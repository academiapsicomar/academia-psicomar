/**
 * Crea o actualiza un usuario admin, y (opcional) limpia usuarios de prueba.
 *
 *   npx tsx scripts/set-admin.ts <email> <password> ["Nombre"]
 *
 * Vuelve a correrlo con otra contraseña para cambiarla.
 */
import "../db/load-env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { eq, like } from "drizzle-orm";
import * as schema from "../db/schema";
import { hashearPassword } from "../lib/auth/password";

async function main() {
  const [email, password, nombre = "Equipo PsicoMar"] = process.argv.slice(2);
  if (!email || !password) {
    console.error('Uso: npx tsx scripts/set-admin.ts <email> <password> ["Nombre"]');
    process.exit(1);
  }

  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("Falta DATABASE_URL");
  const client = postgres(url, { prepare: false, max: 1 });
  const db = drizzle(client, { schema });

  const passwordHash = await hashearPassword(password);
  const emailLower = email.toLowerCase();

  const existe = await db
    .select({ id: schema.usuarios.id })
    .from(schema.usuarios)
    .where(eq(schema.usuarios.email, emailLower))
    .limit(1);

  if (existe[0]) {
    await db
      .update(schema.usuarios)
      .set({ passwordHash, nombre, rol: "admin" })
      .where(eq(schema.usuarios.email, emailLower));
    console.log(`✓ actualizado: ${emailLower}`);
  } else {
    await db
      .insert(schema.usuarios)
      .values({ email: emailLower, passwordHash, nombre, rol: "admin" });
    console.log(`✓ creado: ${emailLower}`);
  }

  // Limpieza de usuarios de prueba
  const borrados = await db
    .delete(schema.usuarios)
    .where(like(schema.usuarios.email, "%@psicomar.local"))
    .returning({ email: schema.usuarios.email });
  if (borrados.length) {
    console.log(`✓ borrados de prueba: ${borrados.map((b) => b.email).join(", ")}`);
  }

  await client.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
