import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import PhotoSliderTabs from "@/components/ui/PhotoSliderTabs";
import cuisineAuthorKitchen1 from "@/public/cuisine-author-kitchen-1.png";
import cuisineAuthorKitchen2 from "@/public/cuisine-author-kitchen-2.png";
import cuisineAuthorKitchen3 from "@/public/cuisine-author-kitchen-3.png";
import cuisineBar from "@/public/cuisine-bar.png";
import cuisineKitchenFire from "@/public/cuisine-kitchen-fire.png";
import cuisineKitchenPlating from "@/public/cuisine-kitchen-plating.png";
import cuisineKitchenService from "@/public/cuisine-kitchen-service.png";
import cuisineWinePairing from "@/public/cuisine-wine-pairing.png";
import Image from "next/image";
import type { ReactNode } from "react";
import Button from "../ui/Button";
import H3Title from "../ui/H3Title";

const kitchenSlides = [
  {
    id: "kitchen-1",
    src: cuisineKitchenFire,
    alt: "Кухня Meat_Coin",
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
    description: "Отдельный раздел в меню посвящен гастрономическим парам",
  },
  {
    id: "kitchen-3",
    src: cuisineKitchenService,
    alt: "Кухня Meat_Coin",
  },
];

const barSlides = [
  {
    id: "bar-1",
    src: cuisineBar,
    alt: "Бар Meat_Coin",
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
      <CuisineMobileSection />
      <CuisineDesktopSection />
    </section>
  );
}

function CuisineMobileSection() {
  return (
    <div className="md:hidden">
      <Paragraph className="text-gray mb-2">География вкуса</Paragraph>

      <H2Title className="mb-9 text-(--color-dark-black)">
        Авторская кухня и турецкие традиции мясников
      </H2Title>

      <PhotoSliderTabs items={whiteSectionTabs} imgClassName="h-[418px]" />

      <div className="mt-9 flex flex-col items-center gap-2">
        <Button text="Меню" variant="secondary" className="w-full" />
        <Button text="Винная карта" variant="secondary" className="w-full" />
      </div>
    </div>
  );
}

function CuisineDesktopSection() {
  return (
    <div className="hidden md:block">
      <div className="mb-18 flex gap-7">
        <div className="flex w-102 gap-2">
          <Button text="Меню" variant="secondary" />
          <Button text="Винная карта" variant="secondary" />
        </div>
        <H2Title className="text-(--color-dark-black)">
          Авторская кухня ресторана
        </H2Title>
      </div>

      <div className="flex flex-col items-center gap-7">
        <div className="flex gap-7">
          <CuisineDesktopTextBlock
            title={
              <>
                Основу гриль-меню <br />
                составляют блюда с огня
              </>
            }
            paragraphs={[
              "Мастера точно знают, как добиться идеальной прожарки, сохранив внутри сок",
              "Помимо стейков представлены позиции, созданные под руководством шефа",
            ]}
          />

          <Image
            src={cuisineAuthorKitchen1}
            alt="Кухня Meat_Coin"
            className="h-119 w-211"
          />
        </div>

        <div className="flex items-end gap-7">
          <CuisineDesktopTextBlock
            paragraphs={[
              "Отдельный раздел в меню посвящен гастрономическим парам",
            ]}
          />

          <Image
            src={cuisineAuthorKitchen2}
            alt="Кухня Meat_Coin"
            className="h-119 w-211"
          />
        </div>

        <div className="flex w-full justify-end gap-7">
          <CuisineDesktopTextBlock />

          <Image
            src={cuisineAuthorKitchen3}
            alt="Кухня Meat_Coin"
            className="h-119 w-211"
          />
        </div>

        <div className="flex gap-7">
          <CuisineDesktopTextBlock
            title="Винной карте более 300 позиций"
            paragraphs={[
              "Сомелье тщательно отбирает этикетки Старого и Нового Света, чтобы каждая бутылка гармонировала с насыщенным вкусом мяса",
            ]}
          />

          <Image
            src={cuisineWinePairing}
            alt="Кухня Meat_Coin"
            className="h-119 w-211"
          />
        </div>
      </div>
    </div>
  );
}

function CuisineDesktopTextBlock({
  title,
  paragraphs,
}: {
  title?: ReactNode;
  paragraphs?: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      {title ? <H3Title className="mb-2">{title}</H3Title> : null}
      {paragraphs?.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </div>
  );
}
