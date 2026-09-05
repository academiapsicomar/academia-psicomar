import { site, SITE_URL, instagramUrl } from "@/lib/site";

/** Inserta un bloque JSON-LD. El contenido es data controlada por nosotros. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: site.name,
        url: SITE_URL,
        description: site.description,
        email: site.email,
        sameAs: [
          instagramUrl(site.instagram.academia),
          instagramUrl(site.instagram.kiara),
          instagramUrl(site.instagram.maite),
        ],
      }}
    />
  );
}
