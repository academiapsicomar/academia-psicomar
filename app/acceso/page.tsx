import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Acceso",
  robots: { index: false, follow: false },
};

export default function AccesoPage() {
  return (
    <main className="flex flex-1 items-center justify-center bg-bruma px-4 py-16">
      <div className="w-full max-w-sm">
        <Link href="/" className="mx-auto mb-8 flex w-fit items-center gap-2.5">
          <Image
            src="/logo-icono.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="font-display text-lg font-semibold text-tinta">
            Academia <span className="text-mar-600">PsicoMar</span>
          </span>
        </Link>

        <div className="rounded-2xl border border-mar-100 bg-white p-6 shadow-suave md:p-8">
          <h1 className="text-xl text-tinta">Acceso al panel</h1>
          <p className="mt-1 mb-6 text-sm text-tinta-suave">
            Ingresá con tu email y contraseña.
          </p>
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-xs text-tinta-suave">
          <Link href="/" className="hover:text-tinta">
            ← Volver al sitio
          </Link>
        </p>
      </div>
    </main>
  );
}
