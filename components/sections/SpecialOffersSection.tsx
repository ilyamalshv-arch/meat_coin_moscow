import H2Title from "@/components/ui/H2Title";
import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import Tag from "@/components/ui/Tag";
import specialoffers1 from "@/public/specialoffers1.png";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "../icons/ArrowIcon";
import Button from "../ui/Button";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

type SpecialOffer = {
  id: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  date: string;
  href: string;
};

const specialOffers: SpecialOffer[] = [
  {
    id: "gala-dinner-1",
    imageSrc: specialoffers1,
    imageAlt: "Афиша гала-ужина Meat_Coin",
    title: "Гала-ужин в Meat_Coin",
    date: "26 марта в 19:30",
    href: "#",
  },
  {
    id: "gala-dinner-2",
    imageSrc: specialoffers1,
    imageAlt: "Афиша гала-ужина Meat_Coin",
    title: "Гала-ужин в Meat_Coin",
    date: "26 марта в 19:30",
    href: "#",
  },
  {
    id: "gala-dinner-3",
    imageSrc: specialoffers1,
    imageAlt: "Афиша гала-ужина Meat_Coin",
    title: "Гала-ужин в Meat_Coin",
    date: "26 марта в 19:30",
    href: "#",
  },
  {
    id: "gala-dinner-4",
    imageSrc: specialoffers1,
    imageAlt: "Афиша гала-ужина Meat_Coin",
    title: "Гала-ужин в Meat_Coin",
    date: "26 марта в 19:30",
    href: "#",
  },
];

function SpecialOfferCard({ offer }: { offer: SpecialOffer }) {
  return (
    <article className="border-b border-(--color-devider) py-4">
      <div className="mb-4 overflow-hidden rounded-sm">
        <div className="relative aspect-square">
          <Image src={offer.imageSrc} alt={offer.imageAlt} />
        </div>
      </div>

      <H3Title className="mb-2">{offer.title}</H3Title>

      <Tag text={offer.date} variant="gray" className="mb-7" />

      <Link href={offer.href}>
        <Paragraph className="flex items-center gap-2 text-(--color-accent)">
          Записаться <ArrowIcon />
        </Paragraph>
      </Link>
    </article>
  );
}

export default function SpecialOffersSection() {
  return (
    <section className="mb-12 md:mb-0 md:mt-30 mt-12">
      <div className="md:flex md:gap-[295px]">
        <Paragraph className="mb-2 text-(--color-gray)">
          Особые моменты
        </Paragraph>
        <div className="md:flex md:flex-col md:gap-2 md:w-[470px]">
          <H2Title className="mb-4 md:mb-2">Спецпредложения</H2Title>

          <Paragraph className="mb-2">
            Дегустационный сет «Загородный» — дает возможность за один вечер
            исследовать разные текстуры и техники
          </Paragraph>

          <Paragraph className="mb-9 md:mb-18">
            Также мы проводим закрытые гастроужины, где шеф представляет новые
            авторские позиции
          </Paragraph>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {specialOffers.map((offer) => (
          <SpecialOfferCard key={offer.id} offer={offer} />
        ))}
      </div>

      <div className="flex flex-col gap-2 mt-9">
        <Button
          text="Все события"
          variant="secondary"
          className="w-full text-white"
        />
        <Paragraph className="text-gray">
          Информация о ближайших событиях появится здесь
        </Paragraph>
      </div>
    </section>
  );
}
