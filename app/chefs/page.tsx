import type { Metadata } from "next";
import PageStub from "@/components/sections/PageStub";

export const metadata: Metadata = {
  title: "Шефы | Meat_Coin",
};

export default function ChefsPage() {
  return (
    <PageStub
      title="Шефы"
      description="На этой странице позже расскажем о команде шефов, их подходе к кухне и фирменных блюдах Meat_Coin."
    />
  );
}
