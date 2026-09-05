import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center bg-bruma px-4 py-24">
      <div className="max-w-md text-center">
        <p className="font-display text-6xl text-mar-500">404</p>
        <h1 className="mt-4 text-2xl text-tinta">No encontramos esta página</h1>
        <p className="mt-3 text-tinta-suave">
          Puede que el enlace haya cambiado o que la página ya no exista.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-mar-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-mar-800"
          >
            Ir al inicio
          </Link>
          <Link
            href="/formaciones"
            className="rounded-full border border-mar-300 px-5 py-2.5 text-sm font-medium text-mar-800 hover:bg-mar-50"
          >
            Ver formaciones
          </Link>
        </div>
      </div>
    </main>
  );
}
