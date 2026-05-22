import type { Metadata } from "next";
import PageStub from "@/components/sections/PageStub";

export const metadata: Metadata = {
  title: "Программа лояльности | Meat_Coin",
};

export default function LoyaltyPage() {
  return (
    <PageStub
      title="Программа лояльности"
      description="Скоро здесь будут условия участия, привилегии для гостей и все детали бонусной программы."
    />
  );
}
