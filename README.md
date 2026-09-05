# Academia PsicoMar

Sitio web de Academia PsicoMar: terapia online para adultos y formación,
supervisión y herramientas para profesionales de salud mental.

Stack: **Next.js 16** (App Router) · **React 19** · **TypeScript** ·
**Tailwind CSS v4**.

## Correr en local

```bash
npm install
cp .env.example .env.local   # completá al menos NEXT_PUBLIC_WHATSAPP_*
npm run dev
```

Abrí <http://localhost:3000>.

## Estado del proyecto

Ver el plan completo por fases en `../.claude/plans/` (o pedírselo al equipo).

- **Fase 1 — Sitio público (actual).** Todas las páginas de marketing con
  contenido cargado desde `content/`. El CTA de terapia abre WhatsApp. El
  formulario de contacto valida y registra en el log del servidor (todavía no
  guarda en base ni manda mail).
- **Fase 2 — Auth + panel `/admin`.** El contenido pasa a Postgres (Drizzle) y
  se edita desde el navegador.
- **Fase 3 — Tienda + Mercado Pago.** Checkout, webhooks, entrega automática de
  contenido y área `/mi-cuenta`.
- **Fase 4 — Suscripción de supervisión, newsletter, video.**

## Estructura

```
app/(marketing)/   Páginas públicas (Home, Quiénes somos, etc.)
components/         UI + componentes de sección
  ui/              Kit base (Button, Section, Card, iconos…)
content/           Contenido editable: equipo, formaciones, productos, blog…
lib/               site.ts (config), content.ts (acceso al contenido), acciones/
```

### Cómo editar el contenido (Fase 1)

Todo el contenido vive en `content/`:

- `equipo.ts` — bios de Kiara y Maite.
- `formaciones.ts` — talleres, cursos y cursos grabados.
- `productos.ts` — packs de herramientas.
- `supervision.ts` — la supervisión grupal.
- `blog.ts` — artículos (cuerpo en Markdown).
- `legal.ts` — términos y privacidad.

Editás el archivo, hacés commit y Vercel redeploya.

### Pendientes para producción

- Cargar los WhatsApp reales (`NEXT_PUBLIC_WHATSAPP_KIARA` / `_MAITE`).
- Reemplazar los `<Placeholder>` por fotos reales (`next/image`).
- Aplicar el kit de marca definitivo en `app/globals.css` (colores y tipografías).
- Precios y fechas reales de cada formación.
