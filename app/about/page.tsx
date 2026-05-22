import type { Metadata } from "next";
import PageStub from "@/components/sections/PageStub";

export const metadata: Metadata = {
  title: "О нас | Meat_Coin",
};

export default function AboutPage() {
  return (
    <PageStub
      title="О нас"
      description="Здесь будет история бренда, философия проекта и материалы о том, что делает Meat_Coin особенным."
    />
  );
}
