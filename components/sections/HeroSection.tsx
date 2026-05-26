import MobileHeroImageReveal from "@/components/sections/MobileHeroImageReveal";
import Button from "@/components/ui/Button";
import H1Title from "@/components/ui/H1Title";
import lounge1Image from "@/public/hero-lounge-wine-room.jpg";
import lounge2Image from "@/public/hero-private-dining-room.jpg";
import terraceImage from "@/public/hero-terrace.jpg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <MobileHeroImageReveal />
      <section className="hidden flex-col gap-2 pb-28 md:-mx-20 md:flex md:px-20 md:pt-18 md:pb-83.5 md:gap-0">
        <div className="mx-auto flex min-h-[calc(100svh-60px)] w-full max-w-360 flex-col md:mx-0 md:min-h-0">
          <H1Title className="mb-1 md:mb-11">
            <span className="text-accent">Meat_Coin Steak & Terrace — </span>{" "}
            <span>стейк-хаус с панорамной террасой в Москве</span>
          </H1Title>
          <div className="mt-auto flex flex-col items-stretch gap-3 pb-22 md:mt-0 md:mb-18 md:flex-row md:items-start md:gap-2 md:pb-0">
            <Button
              text="Меню"
              variant="secondary"
              className="w-full border-[1.5px] border-(--color-accent) py-4 text-center text-[16px] leading-[150%] text-white md:order-2 md:!w-fit"
            />
            <Button
              text="Забронировать стол"
              variant="primary"
              className="fixed right-4 bottom-4 left-4 z-[1000] w-auto border-[1.5px] border-(--color-accent) py-4 text-center text-[16px] leading-[150%] text-white md:static md:z-auto md:order-1 md:!w-fit"
            />
          </div>
        </div>
        <div className="mx-auto hidden w-full flex-col gap-4 md:-mx-20 md:flex md:w-screen md:items-center md:gap-0">
          <div className="relative flex w-fit items-center justify-center">
            <Image
              src={terraceImage}
              alt="Терраса и интерьер ресторана Meat_Coin Steak & Terrace"
              className="h-158 w-265.5 rounded-sm"
            />
            <Image
              src={lounge1Image}
              alt="Лаунж зона ресторана Meat_Coin Steak & Terrace"
              className="absolute top-19.5 -right-27.25 h-119 w-102 rounded-sm"
            />
            <Image
              src={lounge2Image}
              alt="Лаунж зона ресторана Meat_Coin Steak & Terrace"
              className="absolute top-19.5 -left-27.25 h-119 w-102 rounded-sm"
            />
          </div>
        </div>
      </section>
    </>
  );
}
