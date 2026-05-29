import type { Metadata } from "next";
import ContactsPageSection from "@/components/sections/ContactsPageSection";

export const metadata: Metadata = {
  title: "Контакты | Meat_Coin",
};

export default function ContactsPage() {
  return <ContactsPageSection />;
}
