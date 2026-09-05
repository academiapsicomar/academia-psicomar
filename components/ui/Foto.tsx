import Image from "next/image";
import { cn } from "@/lib/cn";
import { Placeholder } from "./Placeholder";

/**
 * Foto real con marco redondeado. Si `src` es null, muestra el Placeholder
 * (útil mientras faltan fotos).
 */
export function Foto({
  src,
  alt,
  etiqueta,
  ratio = "4 / 5",
  className,
  priority,
  sizes = "(max-width: 768px) 92vw, 520px",
  quality = 88,
}: {
  src: string | null;
  alt: string;
  /** Texto del placeholder si no hay foto. */
  etiqueta: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}) {
  if (!src) {
    return <Placeholder etiqueta={etiqueta} ratio={ratio} className={className} />;
  }

  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-mar-100 bg-mar-50",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        quality={quality}
        className="object-cover"
      />
    </div>
  );
}
