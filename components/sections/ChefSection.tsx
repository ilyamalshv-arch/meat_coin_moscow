import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import chefGallerySteak1 from "@/public/chef-gallery-steak-1.png";
import chefGallerySteak2 from "@/public/chef-gallery-steak-2.png";
import chefGallerySteak3 from "@/public/chef-gallery-steak-3.png";
import chefGallerySteak4 from "@/public/chef-gallery-steak-4.png";
import chef from "@/public/chef-portrait.png";
import chefSteaks from "@/public/chef-steaks.jpg";
import Image from "next/image";
import GridSection from "../ui/GridSection";
import H3Title from "../ui/H3Title";
import PhotoSlider from "../ui/PhotoSlider";

const chefSlides = [
  { src: chefGallerySteak1, alt: "Стейк Meat_Coin крупным планом" },
  { src: chefGallerySteak2, alt: "Команда Meat_Coin" },
  { src: chefGallerySteak3, alt: "Шеф Meat_Coin за приготовлением мяса" },
  { src: chefGallerySteak4, alt: "Подача мясного блюда в Meat_Coin" },
];

export default function ChefSection() {
  return (
    <GridSection className="gap-y-6 pb-12 md:gap-y-20! md:py-30">
      <Image
        src={chef}
        alt="Стейки в ресторане Meat_Coin Steak & Terrace"
        className="order-2 col-span-5 md:order-1 md:col-span-4"
      />

      <div className="text-beige order-1 col-span-5 flex flex-col md:order-2">
        <H2Title className="text-accent pb-6 md:pb-116 md:text-white">
          <span className="md:text-accent text-white">мясной ресторан,</span>{" "}
          где каждый стейк становится искусством
        </H2Title>
        <H3Title className="pb-2">
          Сегодня он является главным архитекторм вкуса Meat_Coin в Москве
        </H3Title>
        <Paragraph className="pb-2 md:pb-46.5">
          Каждое его движение у открытого огня как часть ритуала, за которым
          можно наблюдать бесконечно
        </Paragraph>
        <Paragraph className="pb-2 md:pb-46.5">
          Сегодня он является главным архитекторм вкуса Meat_Coin в Москве.
          Каждое его движение у открытого огня как часть ритуала, за которым
          можно наблюдать бесконечно
        </Paragraph>
        <Paragraph>
          Мы работаем с лучшими фермерскими хозяйствами. В наших камерах сухого
          вызревания мясо проводит недели для получения неповторимого вкуса
        </Paragraph>
      </div>

      <div className="order-3 col-span-5 hidden md:col-span-3 md:flex md:flex-col md:gap-7">
        {chefSlides.map((slide) => (
          <Image
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            className="h-75 w-full rounded-sm object-cover"
          />
        ))}
      </div>

      <PhotoSlider
        slides={chefSlides}
        className="order-3 col-span-5 md:hidden"
      />

      <Image
        src={chefSteaks}
        alt="Стейки в ресторане Meat_Coin Steak & Terrace"
        className="order-4 col-span-5 hidden h-75 w-full rounded-sm object-cover md:col-span-12 md:block md:h-180"
      />
    </GridSection>
  );
}
