import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { OrganizationJsonLd } from "@/components/JsonLd";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <OrganizationJsonLd />
      <Header />
      {/* pb-24 en mobile deja aire para la MobileCtaBar fija */}
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
