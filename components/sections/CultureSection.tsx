import GridSection from "@/components/ui/GridSection";
import H2Title from "@/components/ui/H2Title";
import H3Title from "../ui/H3Title";
import Ornament from "../ui/Ornament";
import Paragraph from "../ui/Paragraph";

export default function CultureSection() {
  return (
    <GridSection className="py-12 md:items-center md:py-83.5">
      <Ornament className="py-12 md:col-span-1 md:py-0" />
      <div className="col-span-5 md:col-span-6 md:col-start-5">
        <H2Title className="mb-6 md:mb-7" delay={0.2}>
          <span className="text-accent">Воплощение мясной культуры</span>
          <br className="md:hidden" /> в сердце Москвы
        </H2Title>
        <H3Title className="mb-2" delay={0.4}>
          Искать совершенство в каждой детали
        </H3Title>
        <Paragraph delay={0.6}>
          От выбора зерновой говядины до подачи стейка гостю.
          <br className="hidden md:block" /> Наследие турецких мастеров,
          многолетний опыт — <br className="hidden md:block" /> вот что остаётся
          за кадром, но чувствуется в каждом блюде
        </Paragraph>
      </div>
      <Ornament className="pt-12 md:col-span-1! md:col-start-12! md:pt-0" />
    </GridSection>
  );
}
