import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Prosa } from "@/components/ui/Prosa";
import { terminos } from "@/content/legal";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso del sitio de Academia PsicoMar y de la contratación de sus servicios y productos.",
  alternates: { canonical: "/terminos" },
  robots: { index: false, follow: true },
};

export default function TerminosPage() {
  return (
    <Section fondo="crema" espaciado="amplio">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl text-tinta">Términos y condiciones</h1>
        <div className="mt-8">
          <Prosa>{terminos}</Prosa>
        </div>
      </div>
    </Section>
  );
}
