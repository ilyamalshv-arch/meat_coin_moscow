import type { Metadata } from "next";
import PageStub from "@/components/sections/PageStub";

export const metadata: Metadata = {
  title: "Event | Meat_Coin",
};

export default function EventPage() {
  return (
    <PageStub
      title="Event"
      description="Страница для частных мероприятий и специальных событий скоро появится с форматами, площадками и возможностями бронирования."
    />
  );
}
