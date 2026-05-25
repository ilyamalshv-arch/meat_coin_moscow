import Button from "@/components/ui/Button";
import H2Title from "@/components/ui/H2Title";
import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import reservationImage from "@/public/reservation.jpg";
import Image from "next/image";

export default function TableReservationSection() {
  return (
    <section className="mb-12 md:mt-30 md:mb-30">
      <div className="md:mb-15 md:ml-109 md:w-129.25">
        <H2Title className="mb-2 md:mb-2">Бронирование стола</H2Title>

        <Paragraph className="mb-9 text-(--color-gray) md:mb-0">
          Вечер в Meat_Coin — это возможность прикоснуться к культуре, где
          главный язык — вкус
        </Paragraph>
      </div>

      <div className="md:flex md:h-151 md:gap-7">
        <div className="mb-4 rounded-sm border border-(--color-devider) p-4 md:mb-0 md:flex md:h-full md:w-102 md:shrink-0 md:flex-col md:justify-between md:p-6">
          <div className="min-h-50.5">
            <H3Title className="mb-2">Забронируйте стол</H3Title>
            <Paragraph>
              Позвольте себе погрузиться в незабываемую атмосферу
            </Paragraph>
          </div>

          <Button text="Забронировать" className="w-full" />
        </div>

        <div className="md:-mr-20 md:flex-1">
          <Image
            src={reservationImage}
            alt="Зал ресторана Meat_Coin с сервированными столами"
            className="h-60 w-full rounded-sm object-cover md:h-full"
            sizes="(min-width: 768px) calc(100vw - 516px), 100vw"
          />
        </div>
      </div>
    </section>
  );
}
