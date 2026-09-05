import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { IconoInstagram, IconoWhatsApp } from "@/components/ui/iconos";
import {
  site,
  instagramUrl,
  whatsappLink,
  MENSAJE_TERAPIA,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Querés saber más sobre nuestros talleres, supervisiones o herramientas? Escribinos. Para empezar terapia, contactanos por WhatsApp.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <Section fondo="crema" espaciado="amplio">
      <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
        <div>
          <span className="text-sm font-medium uppercase tracking-[0.14em] text-mar-600">
            Contacto
          </span>
          <h1 className="mt-3 text-4xl text-tinta md:text-5xl">
            ¿Querés saber más? Hablemos.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-tinta-suave">
            Escribinos por consultas sobre talleres, cursos, supervisiones o
            packs de herramientas. Te respondemos al mail que dejes.
          </p>
          <div className="mt-8 max-w-xl">
            <ContactForm />
          </div>
        </div>

        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl border border-mar-100 bg-white p-6 shadow-suave">
            <h2 className="text-lg text-tinta">¿Vas a empezar terapia?</h2>
            <p className="mt-2 text-sm text-tinta-suave">
              Ese camino es directo por WhatsApp con la psicóloga que elijas.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={whatsappLink(site.whatsapp.kiara, MENSAJE_TERAPIA)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-mar-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-mar-800"
              >
                <IconoWhatsApp width={16} height={16} />
                WhatsApp de Kiara
              </a>
              <a
                href={whatsappLink(site.whatsapp.maite, MENSAJE_TERAPIA)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-mar-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-mar-800"
              >
                <IconoWhatsApp width={16} height={16} />
                WhatsApp de Maite
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-mar-100 bg-white p-6 shadow-suave">
            <h2 className="text-lg text-tinta">En redes</h2>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={instagramUrl(site.instagram.academia)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-mar-700 hover:underline"
              >
                <IconoInstagram width={16} height={16} />@{site.instagram.academia}
              </a>
              <a
                href={instagramUrl(site.instagram.maite)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-mar-700 hover:underline"
              >
                <IconoInstagram width={16} height={16} />@{site.instagram.maite}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
