import Button from "@/components/ui/Button";
import H1Title from "@/components/ui/H1Title";
import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import PhotoSlider from "@/components/ui/PhotoSlider";
import PhotoSliderTabs from "@/components/ui/PhotoSliderTabs";
import bar1 from "@/public/bar1.png";
import kitchen1 from "@/public/kitchen1.png";
import kitchen2 from "@/public/kitchen2.png";
import kitchen3 from "@/public/kitchen3.png";
import lounge1Image from "@/public/lounge_1.jpg";
import lounge2Image from "@/public/lounge_2.jpg";
import slide1 from "@/public/slide1.png";
import slide2 from "@/public/slide2.png";
import slide3 from "@/public/slide3.png";
import slide4 from "@/public/slide4.png";
import terraceImage from "@/public/terrace.jpg";
import union from "@/public/union.png";
import Image from "next/image";

export default function Home() {
  const chefSlides = [
    { src: slide1, alt: "Стейк Meat_Coin крупным планом" },
    { src: slide2, alt: "Команда Meat_Coin" },
    { src: slide3, alt: "Шеф Meat_Coin за приготовлением мяса" },
    { src: slide4, alt: "Подача мясного блюда в Meat_Coin" },
  ];

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

  return (
    <main className="px-4">
      <section className="flex flex-col gap-2 pt-6 md:pt-12 md:pb-16">
        <div className="mx-auto flex w-full max-w-360 flex-col  md:px-20">
          <Paragraph className="mb-2 text-[16px] tracking-[1%] text-(--color-gray) md:text-base">
            Бренд, где выбор отрубов, выдержка и прожарка — традиция поколений
          </Paragraph>
          <H1Title className="mb-1">
            <span className="text-accent">Meat_Coin Steak & Terrace — </span>{" "}
            <span>стейк-хаус с панорамной террасой в Москве</span>
          </H1Title>
        </div>
        <div className="mx-auto flex w-full max-w-360 flex-col gap-4  md:px-20">
          <Button
            text="Меню"
            variant="secondary"
            className="flex w-full items-center justify-center border-[1.5px] border-(--color-accent) py-4 text-center text-[16px] leading-[150%] text-white"
          />
          <div className="relative">
            <Image
              src={terraceImage}
              alt="Терраса и интерьер ресторана Meat_Coin Steak & Terrace"
              className="h-auto w-full rounded-sm"
            />
            <Image
              src={lounge1Image}
              alt="Лаунж зона ресторана Meat_Coin Steak & Terrace"
              className="absolute  top-4.5 -right-1.5 h-40.5 w-34.5 rounded-sm"
            />
            <Image
              src={lounge2Image}
              alt="Лаунж зона ресторана Meat_Coin Steak & Terrace"
              className="h-40.5 w-34.5 rounded-sm absolute -bottom-12 left-0"
            />
          </div>
        </div>
      </section>

      <Image src={union} alt="Union" className="mt-24 mb-12 mx-auto" />

      <section className="md:pt-12 md:pb-16">
        <H2Title className="mb-6">
          <span className="text-accent">Воплощение мясной культуры</span>{" "}
          <span>в сердце Москвы</span>
        </H2Title>
        <p className="text-[20px] leading-[118%] font-bold mb-2">
          Искать совершенство в каждой детали
        </p>
        <Paragraph>
          От выбора зерновой говядины до подачи стейка гостю. Наследие турецких
          мастеров, многолетний опыт — вот что остаётся за кадром, но
          чувствуется в каждом блюде
        </Paragraph>
      </section>

      <Image src={union} alt="Union" className="mt-12 mb-12 mx-auto" />

      <section className="mb-12">
        <H2Title className="mb-6">
          <span>мясной ресторан</span>
          {", "}
          <span className="text-accent">
            где каждый стейк становится искусством
          </span>
        </H2Title>

        <p className="text-[20px] leading-[118%] font-bold mb-2">
          Сегодня он является главным архитекторм вкуса Meat_Coin в Москве
        </p>
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

        <PhotoSlider slides={chefSlides} />
      </section>

      <section className="-mx-4 rounded-t-[60px] bg-(--color-beige) px-4 pt-12 pb-14 text-(--color-dark-black) md:px-8 md:pt-16">
        <Paragraph className="text-gray mb-2">География вкуса</Paragraph>
        <H2Title className="mb-9 text-(--color-dark-black)">
          Авторская кухня и турецкие традиции мясников
        </H2Title>

        <PhotoSliderTabs items={whiteSectionTabs} imgClassName="h-[418px]" />
      </section>
    </main>
  );
}
