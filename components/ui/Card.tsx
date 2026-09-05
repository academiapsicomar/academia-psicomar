import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Si se pasa, toda la tarjeta es un link. */
  href?: string;
  as?: "div" | "article" | "li";
}

export function Card({ children, className, href, as = "div" }: CardProps) {
  const clases = cn(
    "group relative flex flex-col rounded-2xl border border-mar-100 bg-white p-6 shadow-suave transition-shadow",
    href && "hover:shadow-tarjeta",
    className,
  );

  if (href) {
    const Tag = as === "li" ? "li" : "article";
    return (
      <Tag className={clases}>
        <Link href={href} className="absolute inset-0 rounded-2xl">
          <span className="sr-only">Ver más</span>
        </Link>
        {children}
      </Tag>
    );
  }

  const Tag = as;
  return <Tag className={clases}>{children}</Tag>;
}
