import type { Metadata } from "next";
import PageStub from "@/components/sections/PageStub";

export const metadata: Metadata = {
  title: "Меню | Meat_Coin",
};

export default function MenuPage() {
  return (
    <PageStub
      title="Меню"
      description="Здесь появится полное меню с основными разделами, авторскими позициями и актуальными сезонными предложениями."
    />
  );
}
