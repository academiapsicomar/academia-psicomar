/**
 * Carga variables de entorno para scripts fuera de Next.js (drizzle-kit, seed).
 * Prioridad: .env.local > .env
 */
import { config } from "dotenv";

config({ path: ".env.local" });
config({ path: ".env" });
