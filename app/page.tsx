import ChefSection from "@/components/sections/ChefSection";
import CuisineSection from "@/components/sections/CuisineSection";
import CultureSection from "@/components/sections/CultureSection";
import HeroSection from "@/components/sections/HeroSection";
import PrivateEventsSection from "@/components/sections/PrivateEventsSection";
import SpaceAestheticsSection from "@/components/sections/SpaceAestheticsSection";
import SpecialOffersSection from "@/components/sections/SpecialOffersSection";
import TableReservationSection from "@/components/sections/TableReservationSection";

export default function Home() {
  return (
    <main className="px-4 md:px-20">
      <HeroSection />
      <CultureSection />
      <ChefSection />
      <CuisineSection />
      <SpecialOffersSection />
      <PrivateEventsSection />
      <TableReservationSection />
      <SpaceAestheticsSection />
    </main>
  );
}
