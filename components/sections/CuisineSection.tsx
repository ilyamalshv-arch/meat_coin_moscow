import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import PhotoSliderTabs from "@/components/ui/PhotoSliderTabs";
import authors1 from "@/public/authors_1.png";
import authors2 from "@/public/authors_2.png";
import authors3 from "@/public/authors_3.png";
import authors4 from "@/public/authors_4.png";
import bar1 from "@/public/bar1.png";
import kitchen1 from "@/public/kitchen1.png";
import kitchen2 from "@/public/kitchen2.png";
import kitchen3 from "@/public/kitchen3.png";
import Image from "next/image";
import Button from "../ui/Button";
import H3Title from "../ui/H3Title";

const kitchenSlides = [
  {
    id: "kitchen-1",
    src: kitchen1,
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
    src: kitchen2,
    alt: "Кухня Meat_Coin",
    imageLabel: "Кухня",
    description: "Отдельный раздел в меню посвящен гастрономическим парам",
  },
  {
    id: "kitchen-3",
    src: kitchen3,
    alt: "Кухня Meat_Coin",
    imageLabel: "Кухня",
  },
];

const barSlides = [
  {
    id: "bar-1",
    src: bar1,
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
    <section className="-mx-4 md:-mx-20 rounded-t-[60px] bg-(--color-beige) px-4 pt-12 pb-14 text-(--color-dark-black) md:px-20 md:pt-30">
      <Paragraph className="text-gray mb-2 md:hidden">
        География вкуса
      </Paragraph>
      <div className="md:flex md:gap-7 md:mb-18">
        <div className="md:flex w-102 md:gap-2 hidden">
          <Button text="Меню" variant="secondary" />
          <Button text="Винная карта" variant="secondary" />
        </div>
        <H2Title className="text-(--color-dark-black) hidden md:block">
          Авторская кухня ресторана
        </H2Title>
        <H2Title className="mb-9 text-(--color-dark-black) md:hidden block">
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

          <Image src={authors1} alt="Кухня Meat_Coin" className="w-211 h-119" />
        </div>

        <div className="flex items-end gap-7">
          <div className="flex flex-col gap-2">
            <Paragraph>
              Отдельный раздел в меню посвящен гастрономическим парам
            </Paragraph>
          </div>

          <Image src={authors2} alt="Кухня Meat_Coin" className="w-211 h-119" />
        </div>
        <div className="flex w-full justify-end gap-7">
          <div className="flex flex-col gap-2 ">
            {/* <H3Title className="mb-2">Основу гриль-меню составляют блюда с огня</H3Title> */}
            {/* <Paragraph>Мастера точно знают, как добиться идеальной прожарки, сохранив внутри сок</Paragraph> */}
            {/* <Paragraph>Помимо стейков представлены позиции, созданные под руководством шефа</Paragraph> */}
          </div>

          <Image src={authors3} alt="Кухня Meat_Coin" className="w-211 h-119" />
        </div>
        <div className="flex gap-7">
          <div className="flex flex-col gap-2">
            <H3Title className="mb-2">Винной карте более 300 позиций</H3Title>
            <Paragraph>
              Сомелье тщательно отбирает этикетки Старого и Нового Света,
              чтобы каждая бутылка гармонировала с насыщенным вкусом мяса
            </Paragraph>
          </div>

          <Image src={authors4} alt="Кухня Meat_Coin" className="w-211 h-119" />
        </div>
      </div>

      <PhotoSliderTabs
        items={whiteSectionTabs}
        imgClassName="h-[418px]"
        className="md:hidden"
      />

      <div className="md:hidden flex flex-col gap-2 items-center mt-9">
        <Button text="Меню" variant="secondary" className="w-full" />
        <Button text="Винная карта" variant="secondary" className="w-full" />
      </div>
    </section>
  );
}
