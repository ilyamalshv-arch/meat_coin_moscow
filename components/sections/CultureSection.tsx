import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import H3Title from "../ui/H3Title";
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
        <H3Title className="mb-2">Искать совершенство в каждой детали</H3Title>
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
