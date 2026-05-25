import Button from "@/components/ui/Button";
import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import Tag from "@/components/ui/Tag";
import butcherShopAgingRoom from "@/public/butcher-shop-aging-room.png";
import butcherShopCounter from "@/public/butcher-shop-counter.png";
import butcherShopRibeye from "@/public/butcher-shop-ribeye.png";
import butcherShopSpices from "@/public/butcher-shop-spices.png";
import butcherShopSteak from "@/public/butcher-shop-steak.png";
import butcherShopWagyu from "@/public/butcher-shop-wagyu.png";
import Image from "next/image";
import H3Title from "../ui/H3Title";

const cutTags = ["Рибай на кости", "Нью-Йорк", "Филе-миньон", "Вагю"];

const butcherPhotos = [
  {
    id: "butcher-shop-1",
    src: butcherShopCounter,
    alt: "Мясная витрина Meat_Coin",
  },
  {
    id: "butcher-shop-2",
    src: butcherShopSpices,
    alt: "Специи для стейка Meat_Coin",
  },
  {
    id: "butcher-shop-3",
    src: butcherShopAgingRoom,
    alt: "Камера сухого вызревания мяса Meat_Coin",
  },
  {
    id: "butcher-shop-4",
    src: butcherShopRibeye,
    alt: "Отруб мраморной говядины Meat_Coin",
  },
  {
    id: "butcher-shop-5",
    src: butcherShopSteak,
    alt: "Стейк из мясной лавки Meat_Coin",
  },
  {
    id: "butcher-shop-6",
    src: butcherShopWagyu,
    alt: "Премиальная говядина Meat_Coin",
  },
];

export default function ButcherShopSection() {
  return (
    <section className="-mx-4 mb-12 px-4 py-6 md:-mx-20 md:mb-30 md:px-20 md:pt-8 md:pb-0">
      <div className="md:relative md:min-h-111">
        <H2Title className="mb-4 md:mb-18 md:ml-109 md:max-w-178">
          <span className="text-(--color-accent)">Мясная лавка</span> Выберите
          свой идеальный стейк
        </H2Title>

        <Tag className="mb-9 px-3! py-3! md:absolute md:top-0 md:left-0 md:mb-0 md:px-4! md:py-3.5!">
          <span className="mr-1">Ежедневно</span>
          <span className="text-xl leading-[116%] font-extrabold">
            12:00-23:00
          </span>
        </Tag>

        <div className="md:ml-109 md:w-120">
          <H3Title className="mb-2 w-75 md:w-full">
            Мраморная говядина Прайм и Вагю
          </H3Title>
          <Paragraph className="mb-7 text-sm text-(--color-gray)">
            Для ценителей и гурманов
          </Paragraph>

          <Paragraph className="mb-2">
            В мясной лавке представлены отрубы
          </Paragraph>

          <div className="mb-2 flex flex-wrap gap-2">
            {cutTags.map((tag) => (
              <Tag key={tag} text={tag} className="px-3! py-3!" />
            ))}
          </div>

          <Paragraph className="mb-11 w-77 md:w-full">
            Наши мастера помогут выбрать мясо и нужную степень прожарки, чтобы
            ваш домашний опыт достиг ресторанного уровня
          </Paragraph>

          <Button
            text="Заказать с доставкой"
            variant="secondary"
            className="mb-9 w-full border-(--color-accent)! text-white hover:border-(--color-accent)! md:mb-18"
          />
        </div>
      </div>

      <div className="no-scrollbar -mr-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 md:-mx-20 md:gap-7 md:px-0">
        {butcherPhotos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            className="h-72 w-72 rounded-sm object-cover md:h-75 md:w-75"
          />
        ))}
      </div>
    </section>
  );
}
