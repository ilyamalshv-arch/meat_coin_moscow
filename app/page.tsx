import ChefSection from "@/components/sections/ChefSection";
import CuisineSection from "@/components/sections/CuisineSection";
import CultureSection from "@/components/sections/CultureSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="px-4 md:px-20">
      <HeroSection />
      <CultureSection />
      <ChefSection />
      <CuisineSection />
    </main>
  );
}
