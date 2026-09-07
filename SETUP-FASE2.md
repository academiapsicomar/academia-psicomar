# Fase 2 — Cuentas que hay que crear

Todo gratis. Cuando tengas cada dato, me lo pasás y yo lo cargo en Vercel.

---

## 1. Neon — base de datos (Postgres)

Acá se van a guardar los talleres, productos, blog, consultas, usuarios del panel, etc.

1. Entrá a <https://neon.tech> → **Sign up** (podés usar "Continue with GitHub" con la cuenta `academiapsicomar`).
2. Te crea un proyecto por defecto. Si te pregunta:
   - **Project name:** `academia-psicomar`
   - **Postgres version:** la que venga por defecto
   - **Region:** elegí la más cercana (ej. *AWS US East (Ohio)* o *São Paulo* si aparece).
3. Cuando termina, te muestra una pantalla con **"Connection string"**.
   - Asegurate de que diga **"Pooled connection"** (hay un toggle/checkbox "Pooled connection" — dejalo activado).
   - Copiá toda esa línea. Empieza con `postgresql://` y termina con `...sslmode=require`.
4. **Pasámela** (o guardala en un lugar seguro). Es la variable `DATABASE_URL`.

> Esa cadena es una credencial: no la publiques en ningún lado. A mí pasámela por acá nomás.

---

## 2. Resend — envío de mails

Para que les llegue un mail cada vez que alguien completa el formulario de contacto.

1. Entrá a <https://resend.com> → **Sign up** (mismo, podés usar GitHub).
   - **Importante:** registrate con el mail donde querés **recibir** las consultas
     (ej. el mail de PsicoMar que revisan seguido).
2. En el panel: **API Keys** → **Create API Key**.
   - Name: `academia-psicomar`
   - Permission: **Full access** (o "Sending access")
3. Copiá la key (empieza con `re_...`). **Solo se muestra una vez.**
4. **Pasámela.** Es la variable `RESEND_API_KEY`.

> Sin dominio propio, los mails van a salir de una dirección genérica de Resend
> (`onboarding@resend.dev`) y solo llegan a tu propio mail de la cuenta. Alcanza
> perfecto para las notificaciones de contacto. Cuando tengan dominio, lo
> verificamos y salen de `hola@academiapsicomar.com`.

---

## 3. Vercel Blob — archivos (esto lo activás en Vercel, no es cuenta nueva)

Para subir fotos e imágenes desde el panel.

1. En Vercel → tu proyecto **academia-psicomar** → pestaña **Storage**.
2. **Create Database** → elegí **Blob** → nombre `imagenes` → **Create**.
3. Vercel lo conecta solo al proyecto (crea la variable `BLOB_READ_WRITE_TOKEN`).
   No tenés que copiar nada, avisame cuando esté creado.

---

## Resumen de lo que necesito de vos

| Dato | De dónde sale |
|---|---|
| `DATABASE_URL` | Neon (paso 1) |
| `RESEND_API_KEY` | Resend (paso 2) |
| Blob creado ✔️ | Vercel → Storage (paso 3) |
| El mail donde querés recibir las consultas | vos me decís |
| Emails y contraseñas iniciales para Kiara y Maite | vos me decís (después las cambian) |
