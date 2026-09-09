import { NextResponse, type NextRequest } from "next/server";
import { put } from "@vercel/blob";
import { requerirAdmin } from "@/lib/auth/dal";

const MAX_BYTES = 6 * 1024 * 1024; // 6 MB
const TIPOS = ["image/jpeg", "image/png", "image/webp", "image/avif"];

export async function POST(req: NextRequest) {
  await requerirAdmin();

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

  try {
    // En Vercel se autentica solo (OIDC + store conectado). En local necesita
    // BLOB_READ_WRITE_TOKEN en .env.local.
    const blob = await put(nombre, file, {
      access: "public",
      addRandomSuffix: false,
    });
    return NextResponse.json({ url: blob.url });
  } catch (e) {
    console.error("[upload] error de Vercel Blob:", e);
    return NextResponse.json(
      {
        error:
          "No se pudo subir la imagen. Revisá que el Blob store esté conectado al proyecto.",
      },
      { status: 500 },
    );
  }
}
