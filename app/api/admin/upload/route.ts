import { NextResponse, type NextRequest } from "next/server";
import { put } from "@vercel/blob";
import { requerirAdmin } from "@/lib/auth/dal";

const MAX_BYTES = 6 * 1024 * 1024; // 6 MB
const TIPOS = ["image/jpeg", "image/png", "image/webp", "image/avif"];

export async function POST(req: NextRequest) {
  await requerirAdmin();

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "Falta configurar el almacenamiento de imágenes (Vercel Blob)." },
      { status: 500 },
    );
  }

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No se recibió el archivo." }, { status: 400 });
  }
  if (!TIPOS.includes(file.type)) {
    return NextResponse.json(
      { error: "Formato no permitido. Usá JPG, PNG o WebP." },
      { status: 400 },
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "La imagen supera los 6 MB." },
      { status: 400 },
    );
  }

  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const nombre = `${form.get("carpeta") || "subidas"}/${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}.${ext}`;

  const blob = await put(nombre, file, {
    access: "public",
    addRandomSuffix: false,
  });

  return NextResponse.json({ url: blob.url });
}
