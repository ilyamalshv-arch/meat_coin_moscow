import Button from "@/components/ui/Button";
import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import PhotoSlider from "@/components/ui/PhotoSlider";
import Tag from "@/components/ui/Tag";
import celebration from "@/public/celebration.png";
import celebration1 from "@/public/celebration1.png";
import celebration2 from "@/public/celebration2.png";
import celebration3 from "@/public/celebration3.png";
import celebration4 from "@/public/celebration4.png";
import Image from "next/image";
import H3Title from "../ui/H3Title";

const eventTags = ["День рождения", "Семейные торжества", "Банкет"];
const celebrationSlides = [
  {
    id: "celebration-1",
    src: celebration1,
    alt: "Приватный зал Meat_Coin с сервировкой",
  },
  {
    id: "celebration-2",
    src: celebration2,
    alt: "Интерьер зала Meat_Coin для частных мероприятий",
  },
  {
    id: "celebration-3",
    src: celebration3,
    alt: "Терраса Meat_Coin для частных мероприятий",
  },
  {
    id: "celebration-4",
    src: celebration4,
    alt: "Приватное пространство Meat_Coin для торжеств",
  },
];

export default function PrivateEventsSection() {
  return (
    <section className="mb-12 md:mt-30">
      <div className="md:mb-18 md:flex md:items-center md:gap-7">
        <Paragraph className="mb-2 text-(--color-gray) md:mb-0 md:w-102">
          Проведение приватных мероприятий
        </Paragraph>

        <H2Title className="mb-9 md:mb-0">Место для вашего праздника</H2Title>
      </div>

      <div className="md:flex md:gap-7">
        <Image
          src={celebration}
          alt="Приватный зал Meat_Coin для камерных мероприятий"
          className="mb-9 md:mb-0 md:w-102"
        />

        <div className="md:w-211">
          <H3Title className="mb-6 md:w-129.25">
            Для тех, кто ценит уединение имеется отдельный зал
          </H3Title>

          <div className="md:mb-11 md:flex md:items-baseline md:gap-4">
            <Tag
              variant="black"
              className="mb-2 gap-1.5 p-3! text-(--color-beige) md:mb-0 md:p-4!"
            >
              <Paragraph>На</Paragraph>
              <span className="text-2xl leading-[116%] font-extrabold tracking-normal">
                25
              </span>
              <Paragraph>гостей</Paragraph>
            </Tag>
            <Paragraph className="mb-9 md:mb-0">
              С камином, личной террасой и санузлом
            </Paragraph>
          </div>

          <H3Title className="mb-7 md:w-80">
            Пространство создано для празднования
          </H3Title>

          <div className="flex flex-wrap gap-2">
            {eventTags.map((tag) => (
              <Tag
                key={tag}
                text={tag}
                variant="black"
                className="p-3! text-base leading-none font-medium"
              />
            ))}
          </div>

          <Button
            text="Забронировать вип-зал"
            className="my-9 w-full py-5 text-center md:my-18"
          />
        </div>
      </div>

      <PhotoSlider
        slides={celebrationSlides}
        className="md:mt-18"
        slideClassName="max-w-none "
        imgClassName="h-[300px] md:h-[720px]"
        indicatorsClassName="justify-start pl-4 md:pl-0"
      />
    </section>
  );
}
