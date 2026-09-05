import { LinkButton } from "@/components/ui/Button";
import { IconoWhatsApp } from "@/components/ui/iconos";
import { cn } from "@/lib/cn";
import { site, whatsappLink, MENSAJE_TERAPIA } from "@/lib/site";

/** Dos botones de WhatsApp, uno por psicóloga. Para usar dentro de páginas. */
export function TerapiaBotones({
  tamano = "md",
  sobreOscuro = false,
}: {
  tamano?: "sm" | "md" | "lg";
  sobreOscuro?: boolean;
}) {
  const clase = cn(
    sobreOscuro && "bg-white text-mar-800 hover:bg-white/90",
  );
  const opciones = [
    { nombre: "Kiara", numero: site.whatsapp.kiara },
    { nombre: "Maite", numero: site.whatsapp.maite },
  ];

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {opciones.map((o) => (
        <LinkButton
          key={o.nombre}
          href={whatsappLink(o.numero, MENSAJE_TERAPIA)}
          variante="primario"
          tamano={tamano}
          className={clase}
          aria-label={`Escribirle a ${o.nombre} por WhatsApp`}
        >
          <IconoWhatsApp width={18} height={18} />
          Escribile a {o.nombre}
        </LinkButton>
      ))}
    </div>
  );
}
