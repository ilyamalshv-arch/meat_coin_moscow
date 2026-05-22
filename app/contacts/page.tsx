import type { Metadata } from "next";
import PageStub from "@/components/sections/PageStub";

export const metadata: Metadata = {
  title: "Контакты | Meat_Coin",
};

export default function ContactsPage() {
  return (
    <PageStub
      title="Контакты"
      description="Контактная информация, адреса и удобные способы связаться с командой скоро появятся на этой странице."
    />
  );
}
