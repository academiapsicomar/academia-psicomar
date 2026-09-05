import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Prosa } from "@/components/ui/Prosa";
import { privacidad } from "@/content/legal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo Academia PsicoMar recopila, usa y protege tus datos personales.",
  alternates: { canonical: "/privacidad" },
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <Section fondo="crema" espaciado="amplio">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl text-tinta">Política de privacidad</h1>
        <div className="mt-8">
          <Prosa>{privacidad}</Prosa>
        </div>
      </div>
    </Section>
  );
}
