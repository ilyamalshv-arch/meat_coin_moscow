import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import UnionOrnament from "./UnionOrnament";

export default function CultureSection() {
  return (
    <section className="md:mb-[334px] md:flex md:items-center md:justify-center">
      <UnionOrnament className="mt-24 mb-12 md:mt-0 md:mb-0" />
      <div className="md:ml-[358px]">
        <H2Title className="mb-6 md:mb-7 md:w-[700px]">
          <span className="text-accent">Воплощение мясной культуры</span>{" "}
          <span>в сердце Москвы</span>
        </H2Title>
        <p className="mb-2 text-[20px] leading-[118%] font-bold md:text-[24px]">
          Искать совершенство в каждой детали
        </p>
        <Paragraph>
          От выбора зерновой говядины до подачи стейка гостю. Наследие турецких
          мастеров, многолетний опыт — вот что остаётся за кадром, но
          чувствуется в каждом блюде
        </Paragraph>
      </div>
      <UnionOrnament className="mt-12 mb-12 md:mt-0 md:mb-0" />
    </section>
  );
}
