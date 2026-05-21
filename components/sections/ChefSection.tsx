import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import PhotoSlider from "@/components/ui/PhotoSlider";
import chef from "@/public/chef.png";
import slide1 from "@/public/slide1.png";
import slide2 from "@/public/slide2.png";
import slide3 from "@/public/slide3.png";
import slide4 from "@/public/slide4.png";
import steiki from "@/public/steiki.jpg";
import Image from "next/image";
import H3Title from "../ui/H3Title";

const chefSlides = [
  { src: slide1, alt: "Стейк Meat_Coin крупным планом" },
  { src: slide2, alt: "Команда Meat_Coin" },
  { src: slide3, alt: "Шеф Meat_Coin за приготовлением мяса" },
  { src: slide4, alt: "Подача мясного блюда в Meat_Coin" },
];

export default function ChefSection() {
  return (
    <>
      <ChefDesktopSection />
      <section className="mb-12 md:hidden">
        <H2Title className="mb-6">
          <span>мясной ресторан</span>
          {", "}
          <span className="text-accent">
            где каждый стейк становится искусством
          </span>
        </H2Title>

        <H3Title className="mb-2">
          Сегодня он является главным архитекторм вкуса Meat_Coin в Москве
        </H3Title>
        <Paragraph className="mb-2">
          Каждое его движение у открытого огня как часть ритуала, за которым
          можно наблюдать бесконечно
        </Paragraph>
        <Paragraph className="mb-2">
          Сегодня он является главным архитекторм вкуса Meat_Coin в Москве.
          Каждое его движение у открытого огня как часть ритуала, за которым
          можно наблюдать бесконечно{" "}
        </Paragraph>
        <Paragraph className="mb-6">
          Мы работаем с лучшими фермерскими хозяйствами. В наших камерах сухого
          вызревания мясо проводит недели для получения неповторимого вкуса{" "}
        </Paragraph>

        <Image
          src={chef}
          alt="Шеф-повар ресторана Meat_Coin Steak & Terrace"
          className="mb-6"
        />
        <PhotoSlider slides={chefSlides} />
      </section>
    </>
  );
}
export function ChefDesktopSection() {
  return (
    <section className="mb-30 hidden md:block">
      <div className="grid grid-cols-[408px_517px_300px] grid-rows-[auto_auto_1fr_auto] gap-7 md:mb-20">
        <div className="row-span-4">
          <Image
            src={chef}
            alt="Шеф-повар ресторана Meat_Coin Steak & Terrace"
            className="h-full max-h-165 rounded-t-[120px] object-cover object-center"
          />
        </div>

        <H2Title className="max-w-129.25 text-[2.8rem] leading-[96%]">
          <span className="text-accent">мясной ресторан,</span>{" "}
          <span>где каждый стейк становится искусством</span>
        </H2Title>

        <div className="col-start-3 row-start-1 overflow-hidden rounded-xs">
          <Image
            src={slide1}
            alt="Стейк Meat_Coin крупным планом"
            className="h-75 w-full object-cover"
          />
        </div>

        <div className="col-start-3 row-start-2 overflow-hidden rounded-xs">
          <Image
            src={slide2}
            alt="Команда Meat_Coin"
            className="h-75 w-full object-cover"
          />
        </div>

        <div className="col-start-3 row-start-3 overflow-hidden rounded-xs">
          <Image
            src={slide3}
            alt="Шеф Meat_Coin за приготовлением мяса"
            className="h-75 w-full object-cover"
          />
        </div>

        <div className="col-start-3 row-start-4 overflow-hidden rounded-xs">
          <Image
            src={slide4}
            alt="Подача мясного блюда в Meat_Coin"
            className="h-75 w-full object-cover"
          />
        </div>

        <div className="max-w-129.25 self-end pt-2">
          <H3Title className="mb-2">
            Сегодня он является главным архитекторм вкуса Meat_Coin в Москве
          </H3Title>
          <Paragraph className="text-beige">
            Каждое его движение у открытого огня как часть ритуала, за которым
            можно наблюдать бесконечно
          </Paragraph>
        </div>

        <Paragraph className="max-w-129.25 self-end text-beige">
          Сегодня он является главным архитекторм вкуса Meat_Coin в Москве.
          Каждое его движение у открытого огня как часть ритуала, за которым
          можно наблюдать бесконечно
        </Paragraph>

        <Paragraph className="max-w-129.25 self-end text-beige">
          Мы работаем с лучшими фермерскими хозяйствами. В наших камерах сухого
          вызревания мясо проводит недели для получения неповторимого вкуса
        </Paragraph>
      </div>

      <Image
        src={steiki}
        alt="Стейки в ресторане Meat_Coin Steak & Terrace"
        className="rounded-sm h-180"
      />
    </section>
  );
}
