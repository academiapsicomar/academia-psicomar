"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { navPrincipal } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { LinkButton } from "@/components/ui/Button";
import { TerapiaPopover } from "@/components/TerapiaPopover";
import { IconoMenu, IconoCerrar } from "@/components/ui/iconos";

export function Header() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    setAbierto(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  const activo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-mar-100 bg-crema/90 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-3 md:h-[4.5rem]">
        <Logo className="shrink-0 whitespace-nowrap" />

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-0.5 lg:flex"
        >
          {navPrincipal
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-2.5 py-2 text-[0.9rem] transition-colors",
                  activo(item.href)
                    ? "bg-mar-50 text-mar-800"
                    : "text-tinta-suave hover:text-tinta",
                )}
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <span className="hidden 2xl:inline-flex">
            <LinkButton
              href="/formaciones"
              variante="contorno"
              tamano="sm"
              className="whitespace-nowrap"
            >
              Ver formaciones
            </LinkButton>
          </span>
          <TerapiaPopover />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-tinta md:hidden"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
        >
          {abierto ? (
            <IconoCerrar width={24} height={24} />
          ) : (
            <IconoMenu width={24} height={24} />
          )}
        </button>
      </div>

      {abierto && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-mar-100 bg-crema px-5 py-6 md:hidden">
          <nav aria-label="Navegación principal" className="flex flex-col gap-1">
            {navPrincipal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-3 text-base",
                  activo(item.href)
                    ? "bg-mar-50 text-mar-800"
                    : "text-tinta",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <TerapiaPopover className="[&>button]:w-full" alineacion="centro" />
            <LinkButton href="/formaciones" variante="contorno" anchoCompleto>
              Ver formaciones
            </LinkButton>
          </div>
        </div>
      )}
    </header>
  );
}
