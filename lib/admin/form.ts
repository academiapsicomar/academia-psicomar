/** Helpers para parsear los formularios del panel. */

export function str(fd: FormData, k: string): string {
  return String(fd.get(k) ?? "").trim();
}

export function bool(fd: FormData, k: string): boolean {
  const v = fd.get(k);
  return v === "on" || v === "true";
}

export function num(fd: FormData, k: string): number | null {
  const v = str(fd, k).replace(/[^\d]/g, "");
  return v === "" ? null : Number(v);
}

export function opt(v: string): string | null {
  return v === "" ? null : v;
}

/** string[] a partir de un textarea (una línea por ítem). */
export function parseLista(raw: FormDataEntryValue | null): string[] {
  return String(raw ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
