import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import H3Title from "../ui/H3Title";
import UnionOrnament from "../ui/UnionOrnament";

export default function CultureSection() {
  return (
    <section className="md:mb-83.5 md:flex md:items-start md:justify-center">
      <UnionOrnament className="my-12 md:my-0" />
      <div className="md:ml-89.5">
        <H2Title className="mb-6 md:mb-7 md:w-175">
          <span className="text-accent">Воплощение мясной культуры</span>{" "}
          <span>в сердце Москвы</span>
        </H2Title>
        <H3Title className="mb-2">Искать совершенство в каждой детали</H3Title>
        <Paragraph className="w-76 text-[14px] md:w-125 md:text-base">
          От выбора зерновой говядины до подачи стейка гостю. Наследие турецких
          мастеров, многолетний опыт — <br />
          вот что остаётся за кадром, но чувствуется в каждом блюде
        </Paragraph>
      </div>
      <UnionOrnament className="my-12 md:my-0" />
    </section>
  );
}
