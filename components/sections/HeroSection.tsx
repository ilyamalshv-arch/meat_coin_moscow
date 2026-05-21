import Button from "@/components/ui/Button";
import H1Title from "@/components/ui/H1Title";
import Paragraph from "@/components/ui/Paragraph";
import lounge1Image from "@/public/lounge_1.jpg";
import lounge2Image from "@/public/lounge_2.jpg";
import terraceImage from "@/public/terrace.jpg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-2 pt-6 md:pt-18 md:pb-83.5">
      <div className="mx-auto flex w-full max-w-360 flex-col md:mx-0">
        <Paragraph className="mb-2 text-[16px] tracking-[1%] text-(--color-gray) md:hidden">
          Бренд, где выбор отрубов, выдержка и прожарка — традиция поколений
        </Paragraph>
        <H1Title className="mb-1 md:mb-11">
          <span className="text-accent">Meat_Coin Steak & Terrace — </span>{" "}
          <span>стейк-хаус с панорамной террасой в Москве</span>
        </H1Title>
      </div>
      <div className="mx-auto flex w-full max-w-360 flex-col gap-4 md:mx-0 md:gap-0">
        <div className="flex items-start gap-2 md:mb-18">
          <Button
            text="Забронировать стол"
            variant="primary"
            className="border-[1.5px] border-(--color-accent) py-4 text-center text-[16px] leading-[150%] text-white"
          />
          <Button
            text="Меню"
            variant="secondary"
            className="border-[1.5px] border-(--color-accent) py-4 text-center text-[16px] leading-[150%] text-white"
          />
        </div>
        <div className="relative">
          <Image
            src={terraceImage}
            alt="Терраса и интерьер ресторана Meat_Coin Steak & Terrace"
            className="h-auto w-full rounded-sm"
          />
          <Image
            src={lounge1Image}
            alt="Лаунж зона ресторана Meat_Coin Steak & Terrace"
            className="absolute top-4.5 -right-1.5 h-40.5 w-34.5 rounded-sm"
          />
          <Image
            src={lounge2Image}
            alt="Лаунж зона ресторана Meat_Coin Steak & Terrace"
            className="absolute -bottom-12 left-0 h-40.5 w-34.5 rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
