import { cn } from "@/lib/cn";

type ColorOnda = "crema" | "bruma" | "arena" | "blanco" | "mar-800";

const fills: Record<ColorOnda, string> = {
  crema: "#fbf9f5",
  bruma: "#e8edf4",
  arena: "#f4efe6",
  blanco: "#ffffff",
  "mar-800": "#2b4652",
};

/**
 * Divisor de onda entre secciones. `color` es el color hacia el que "cae" la
 * onda (normalmente el fondo de la sección siguiente).
 */
export function OndaDivisor({
  color,
  invertida,
  className,
}: {
  color: ColorOnda;
  invertida?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative -mt-px leading-[0]", className)}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={cn("block h-[40px] w-full md:h-[64px]", invertida && "rotate-180")}
      >
        <path
          d="M0 32c120 28 280 42 480 24s360-56 560-52 280 44 400 44v16H0Z"
          fill={fills[color]}
        />
      </svg>
    </div>
  );
}

/** Forma orgánica difuminada, decorativa. */
export function Blob({
  className,
  color = "var(--color-salvia)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute -z-10 blur-3xl", className)}
      style={{
        background: color,
        borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%",
      }}
    />
  );
}
