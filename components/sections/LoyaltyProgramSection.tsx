import ArrowIcon from "@/components/icons/ArrowIcon";
import Button from "@/components/ui/Button";
import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import loyaltyCards from "@/public/loyalty.svg";
import Image from "next/image";
import Link from "next/link";
import H3Title from "../ui/H3Title";

const loyaltyBenefits = [
  "Приоритетное бронирование столов",
  "Доступ к предпродаже на специальные мероприятия",
  "Персональные предложения и накопление баллов (meat_coins)",
  "Подарочный сертификат на сумму номинала — универсальный статусный подарок",
];

export default function LoyaltyProgramSection() {
  return (
    <section className="-mx-4 px-4 pt-0 pb-12 md:-mx-20 md:grid md:grid-cols-[408px_minmax(0,1fr)] md:gap-x-7 md:px-20 md:pt-0 md:pb-16">
      <Paragraph className="mb-2 text-(--color-gray) md:col-start-1 md:row-start-1 md:mb-0 md:pt-1">
        Станьте частью закрытого круга
      </Paragraph>

      <H2Title className="mb-9 md:col-start-2 md:row-start-1 md:mb-18">
        <span className="hidden text-(--color-accent) md:inline">
          MEAT_COIN CLUB{" "}
        </span>
        Программа лояльности
      </H2Title>

      <Paragraph className="text-accent md:col-start-2 md:row-start-2 md:mb-4">
        Участники программы получают
      </Paragraph>

      <Image
        src={loyaltyCards}
        alt="Карты программы лояльности Meat_Coin Club"
        className="hidden md:col-start-1 md:row-span-3 md:row-start-3 md:mt-60 md:block md:w-75"
      />

      <div className="border-b border-(--color-devider) md:col-start-2 md:row-start-3 md:mb-18">
        {loyaltyBenefits.map((benefit) => (
          <H3Title
            key={benefit}
            className="w-77 border-b border-(--color-devider) py-6 last:border-b-0 md:w-full md:py-11"
          >
            {benefit}
          </H3Title>
        ))}
      </div>

      <div className="border-b border-(--color-devider) px-0 pt-9 md:col-start-2 md:row-start-4 md:flex md:items-start md:justify-between md:border-b-0 md:pt-0">
        <Button
          text="Оформить"
          variant="secondary"
          className="w-full text-white md:w-96 md:py-3"
        />

        <Link
          href="#"
          className="mt-2 flex items-center justify-center gap-2 pt-1.5 pb-2.5 text-[16px] leading-[148%] font-medium text-(--color-accent) md:mt-0 md:px-21 md:pt-3 md:pb-3"
        >
          <span>О программе лояльности</span>
          <ArrowIcon width={26} height={26} />
        </Link>
      </div>
    </section>
  );
}
