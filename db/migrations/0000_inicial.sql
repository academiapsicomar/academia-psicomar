CREATE TYPE "public"."estado_consulta" AS ENUM('nueva', 'respondida');--> statement-breakpoint
CREATE TYPE "public"."estado_publicacion" AS ENUM('borrador', 'publicado');--> statement-breakpoint
CREATE TYPE "public"."modalidad_formacion" AS ENUM('online_vivo', 'grabado', 'presencial');--> statement-breakpoint
CREATE TYPE "public"."rol_usuario" AS ENUM('admin', 'cliente');--> statement-breakpoint
CREATE TYPE "public"."tipo_consulta" AS ENUM('formacion', 'supervision', 'herramientas', 'otro');--> statement-breakpoint
CREATE TYPE "public"."tipo_formacion" AS ENUM('taller', 'curso', 'curso_grabado');--> statement-breakpoint
CREATE TABLE "articulos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"titulo" text NOT NULL,
	"resumen" text DEFAULT '' NOT NULL,
	"cuerpo" text DEFAULT '' NOT NULL,
	"cover" text,
	"cover_alt" text DEFAULT '' NOT NULL,
	"tags" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"autor" text DEFAULT 'Academia PsicoMar' NOT NULL,
	"publicado_el" timestamp with time zone DEFAULT now() NOT NULL,
	"estado" "estado_publicacion" DEFAULT 'borrador' NOT NULL,
	"seo_title" text,
	"seo_description" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "articulos_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "consultas" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tipo" "tipo_consulta" NOT NULL,
	"nombre" text NOT NULL,
	"email" text NOT NULL,
	"mensaje" text NOT NULL,
	"estado" "estado_consulta" DEFAULT 'nueva' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "equipo" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"nombre" text NOT NULL,
	"rol" text NOT NULL,
	"bio" text DEFAULT '' NOT NULL,
	"bio_corta" text DEFAULT '' NOT NULL,
	"enfoque" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"dato_extra" text DEFAULT '' NOT NULL,
	"foto" text,
	"foto_alt" text DEFAULT '' NOT NULL,
	"whatsapp" text,
	"orden" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "equipo_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "formaciones" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"nombre" text NOT NULL,
	"tipo" "tipo_formacion" NOT NULL,
	"modalidad" "modalidad_formacion" NOT NULL,
	"resumen" text DEFAULT '' NOT NULL,
	"descripcion" text DEFAULT '' NOT NULL,
	"para_quien" text DEFAULT '' NOT NULL,
	"duracion" text DEFAULT '' NOT NULL,
	"en_vivo" boolean DEFAULT true NOT NULL,
	"proxima_fecha" text,
	"precio" integer,
	"incluye" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"imagen" text,
	"imagen_alt" text DEFAULT '' NOT NULL,
	"estado" "estado_publicacion" DEFAULT 'borrador' NOT NULL,
	"destacado" boolean DEFAULT false NOT NULL,
	"docentes" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"video_provider" text,
	"video_id" text,
	"seo_title" text,
	"seo_description" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "formaciones_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "productos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"nombre" text NOT NULL,
	"resumen" text DEFAULT '' NOT NULL,
	"descripcion" text DEFAULT '' NOT NULL,
	"incluye" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"para_quien" text DEFAULT '' NOT NULL,
	"precio" integer,
	"imagen" text,
	"imagen_alt" text DEFAULT '' NOT NULL,
	"estado" "estado_publicacion" DEFAULT 'borrador' NOT NULL,
	"destacado" boolean DEFAULT false NOT NULL,
	"seo_title" text,
	"seo_description" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "productos_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "supervision" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clave" text DEFAULT 'principal' NOT NULL,
	"frecuencia" text DEFAULT '' NOT NULL,
	"modalidad" text DEFAULT '' NOT NULL,
	"dinamica" text DEFAULT '' NOT NULL,
	"encuentros" text DEFAULT '' NOT NULL,
	"incluye" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"materiales" text DEFAULT '' NOT NULL,
	"precio_mensual" integer,
	"descripcion" text DEFAULT '' NOT NULL,
	"seo_title" text,
	"seo_description" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "supervision_clave_unique" UNIQUE("clave")
);
--> statement-breakpoint
CREATE TABLE "usuarios" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"password_hash" text NOT NULL,
	"nombre" text NOT NULL,
	"rol" "rol_usuario" DEFAULT 'admin' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "usuarios_email_unique" UNIQUE("email")
);
