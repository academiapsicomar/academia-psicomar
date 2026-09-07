# Publicar el sitio (paso a paso)

Objetivo: que Academia PsicoMar tenga una URL real, y que cada cambio que
hagamos se publique solo.

Todo lo que sigue es **gratis** para este tamaño de proyecto.

---

## Paso 1 — Subir el código a GitHub (una sola vez)

1. Creá una cuenta en <https://github.com> (si ya tenés, saltealo).
2. Entrá a <https://github.com/new> y creá un repositorio:
   - **Repository name:** `academia-psicomar`
   - **Private** (privado) ✅
   - **No** marques "Add a README" ni nada más.
   - Clic en **Create repository**.
3. GitHub te muestra una página con comandos. Necesitás la línea que dice
   `git remote add origin ...` (algo como
   `https://github.com/TU-USUARIO/academia-psicomar.git`).
4. Pasámela y yo hago el push, **o** corré vos en una terminal, dentro de
   `C:\Users\Maite\academia-psicomar`:

   ```bash
   git remote add origin https://github.com/TU-USUARIO/academia-psicomar.git
   git push -u origin main
   ```

   (Te va a pedir loguearte con GitHub la primera vez.)

> Si te resulta más cómodo con interfaz gráfica: instalá **GitHub Desktop**
> (<https://desktop.github.com>), "Add existing repository" → elegí la carpeta
> `academia-psicomar` → "Publish repository" (privado).

---

## Paso 2 — Conectar Vercel

1. Creá una cuenta en <https://vercel.com> usando **"Continue with GitHub"**
   (así quedan conectados).
2. En el panel de Vercel: **Add New… → Project**.
3. Te lista tus repos de GitHub. Elegí **academia-psicomar** → **Import**.
4. Vercel detecta que es Next.js solo. **No cambies nada.**
5. Antes de dar "Deploy", abrí **Environment Variables** y agregá:

   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | `https://academiapsicomar.com` (o la URL que vayas a usar) |
   | `NEXT_PUBLIC_CONTACT_EMAIL` | el mail donde querés recibir consultas |

   Los números de WhatsApp e Instagram ya están en el código, no hace falta
   cargarlos.
6. Clic en **Deploy**. En ~1 minuto tenés una URL tipo
   `academia-psicomar.vercel.app`.

Desde ahí, **cada vez que yo haga un cambio y lo suba, Vercel republica solo**.

---

## Paso 3 — El dominio (cuando lo tengan)

1. Comprá `academiapsicomar.com` en cualquier registrador (Namecheap, Google
   Domains, Nic.ar, etc.).
2. En Vercel: **Project → Settings → Domains → Add** → escribí el dominio.
3. Vercel te dice qué registros DNS cargar en el registrador (un par de
   líneas). Los cargás y en unas horas queda andando con HTTPS automático.
4. Avisame el dominio final para dejar `NEXT_PUBLIC_SITE_URL` igual (importa
   para el SEO y los links de compartir).

---

## Qué necesito de vos para avanzar

- **La URL del repo de GitHub** (después del Paso 1), o decime si querés que
  te guíe en vivo.
- Nada más para publicar. El dominio y las fases 2–4 vienen después.
