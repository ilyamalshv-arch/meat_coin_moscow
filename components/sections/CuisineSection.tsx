import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import PhotoSliderTabs from "@/components/ui/PhotoSliderTabs";
import cuisineAuthorKitchen1 from "@/public/cuisine-author-kitchen-1.png";
import cuisineAuthorKitchen2 from "@/public/cuisine-author-kitchen-2.png";
import cuisineAuthorKitchen3 from "@/public/cuisine-author-kitchen-3.png";
import cuisineWinePairing from "@/public/cuisine-wine-pairing.png";
import cuisineBar from "@/public/cuisine-bar.png";
import cuisineKitchenFire from "@/public/cuisine-kitchen-fire.png";
import cuisineKitchenPlating from "@/public/cuisine-kitchen-plating.png";
import cuisineKitchenService from "@/public/cuisine-kitchen-service.png";
import Image from "next/image";
import Button from "../ui/Button";
import H3Title from "../ui/H3Title";

const kitchenSlides = [
  {
    id: "kitchen-1",
    src: cuisineKitchenFire,
    alt: "Кухня Meat_Coin",
    imageLabel: "Кухня",
    title: "Основу гриль-меню составляют блюда с огня",
    description:
      "Мастера точно знают, как добиться идеальной прожарки, сохранив внутри сок",
    description2:
      "Помимо стейков представлены позиции, созданные под руководством шефа",
  },
  {
    id: "kitchen-2",
    src: cuisineKitchenPlating,
    alt: "Кухня Meat_Coin",
    imageLabel: "Кухня",
    description: "Отдельный раздел в меню посвящен гастрономическим парам",
  },
  {
    id: "kitchen-3",
    src: cuisineKitchenService,
    alt: "Кухня Meat_Coin",
    imageLabel: "Кухня",
  },
];

const barSlides = [
  {
    id: "bar-1",
    src: cuisineBar,
    alt: "Бар Meat_Coin",
    imageLabel: "Бар",
    title: "Винной карте более 300 позиций",
    description:
      "Сомелье тщательно отбирает этикетки Старого и Нового Света, чтобы каждая бутылка гармонировала с насыщенным вкусом мяса",
    description2: "Отдельный раздел в меню посвящен гастрономическим парам",
  },
];

const whiteSectionTabs = [
  { label: "Кухня", slides: kitchenSlides },
  { label: "Бар", slides: barSlides },
];

export default function CuisineSection() {
  return (
    <section className="-mx-4 rounded-t-[60px] bg-(--color-beige) px-4 pt-12 pb-14 text-(--color-dark-black) md:-mx-20 md:px-20 md:pt-30">
      <Paragraph className="text-gray mb-2 md:hidden">
        География вкуса
      </Paragraph>
      <div className="md:mb-18 md:flex md:gap-7">
        <div className="hidden w-102 md:flex md:gap-2">
          <Button text="Меню" variant="secondary" />
          <Button text="Винная карта" variant="secondary" />
        </div>
        <H2Title className="hidden text-(--color-dark-black) md:block">
          Авторская кухня ресторана
        </H2Title>
        <H2Title className="mb-9 block text-(--color-dark-black) md:hidden">
          Авторская кухня и турецкие традиции мясников
        </H2Title>
      </div>

      <div className="hidden md:flex md:flex-col md:items-center md:gap-7">
        <div className="flex gap-7">
          <div className="flex flex-col gap-2">
            <H3Title className="mb-2">
              Основу гриль-меню <br />
              составляют блюда с огня
            </H3Title>
            <Paragraph>
              Мастера точно знают, как добиться идеальной прожарки, сохранив
              внутри сок
            </Paragraph>
            <Paragraph>
              Помимо стейков представлены позиции, созданные под руководством
              шефа
            </Paragraph>
          </div>

          <Image
            src={cuisineAuthorKitchen1}
            alt="Кухня Meat_Coin"
            className="h-119 w-211"
          />
        </div>

        <div className="flex items-end gap-7">
          <div className="flex flex-col gap-2">
            <Paragraph>
              Отдельный раздел в меню посвящен гастрономическим парам
            </Paragraph>
          </div>

          <Image
            src={cuisineAuthorKitchen2}
            alt="Кухня Meat_Coin"
            className="h-119 w-211"
          />
        </div>
        <div className="flex w-full justify-end gap-7">
          <div className="flex flex-col gap-2">
            {/* <H3Title className="mb-2">Основу гриль-меню составляют блюда с огня</H3Title> */}
            {/* <Paragraph>Мастера точно знают, как добиться идеальной прожарки, сохранив внутри сок</Paragraph> */}
            {/* <Paragraph>Помимо стейков представлены позиции, созданные под руководством шефа</Paragraph> */}
          </div>

          <Image
            src={cuisineAuthorKitchen3}
            alt="Кухня Meat_Coin"
            className="h-119 w-211"
          />
        </div>
        <div className="flex gap-7">
          <div className="flex flex-col gap-2">
            <H3Title className="mb-2">Винной карте более 300 позиций</H3Title>
            <Paragraph>
              Сомелье тщательно отбирает этикетки Старого и Нового Света,
              чтобы каждая бутылка гармонировала с насыщенным вкусом мяса
            </Paragraph>
          </div>

          <Image
            src={cuisineWinePairing}
            alt="Кухня Meat_Coin"
            className="h-119 w-211"
          />
        </div>
      </div>

      <PhotoSliderTabs
        items={whiteSectionTabs}
        imgClassName="h-[418px]"
        className="md:hidden"
      />

      <div className="mt-9 flex flex-col items-center gap-2 md:hidden">
        <Button text="Меню" variant="secondary" className="w-full" />
        <Button text="Винная карта" variant="secondary" className="w-full" />
      </div>
    </section>
  );
}
