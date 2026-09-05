import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Prosa } from "@/components/ui/Prosa";
import { LinkButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { IconoFlecha } from "@/components/ui/iconos";
import { site, SITE_URL } from "@/lib/site";
import { getArticulo, getSlugsArticulos, fechaLegible } from "@/lib/content";

export async function generateStaticParams() {
  return (await getSlugsArticulos()).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = await getArticulo(slug);
  if (!a) return {};
  return {
    title: a.seo?.title ?? a.titulo,
    description: a.seo?.description ?? a.resumen,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.seo?.title ?? a.titulo,
      description: a.seo?.description ?? a.resumen,
      url: `${SITE_URL}/blog/${a.slug}`,
      publishedTime: a.publicadoEl,
    },
  };
}

export default async function ArticuloPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const a = await getArticulo(slug);
  if (!a) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.titulo,
          description: a.seo?.description ?? a.resumen,
          datePublished: a.publicadoEl,
          author: { "@type": "Organization", name: a.autor },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: `${SITE_URL}/blog/${a.slug}`,
        }}
      />

      <Section fondo="bruma" espaciado="normal">
        <nav className="mb-6 text-sm text-tinta-suave">
          <Link href="/blog" className="hover:text-tinta">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-tinta">{a.titulo}</span>
        </nav>
        <div className="flex flex-wrap items-center gap-2">
          {a.tags.map((t) => (
            <Badge key={t} tono="salvia">
              {t}
            </Badge>
          ))}
          <span className="text-xs text-tinta-suave">
            {fechaLegible(a.publicadoEl)} · {a.autor}
          </span>
        </div>
        <h1 className="mt-4 max-w-3xl text-4xl text-tinta md:text-5xl">
          {a.titulo}
        </h1>
      </Section>

      <Section fondo="crema" espaciado="amplio">
        <article className="mx-auto max-w-2xl">
          <Prosa>{a.cuerpo}</Prosa>
        </article>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-bruma p-6 text-center">
          <p className="text-sm text-tinta-suave">
            El contenido de este artículo es informativo y no reemplaza la
            atención profesional individual.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <LinkButton href="/atencion-clinica">Quiero comenzar terapia</LinkButton>
            <LinkButton href="/blog" variante="contorno">
              <IconoFlecha width={16} height={16} className="rotate-180" />
              Volver al blog
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
