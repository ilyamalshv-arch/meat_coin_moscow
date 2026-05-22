import type { Metadata } from "next";
import PageStub from "@/components/sections/PageStub";

export const metadata: Metadata = {
  title: "Медиа | Meat_Coin",
};

export default function MediaPage() {
  return (
    <PageStub
      title="Медиа"
      description="Раздел с публикациями, новостями и визуальными материалами находится в подготовке и скоро будет доступен."
    />
  );
}
