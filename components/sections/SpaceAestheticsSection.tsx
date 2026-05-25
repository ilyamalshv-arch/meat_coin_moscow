import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import PhotoSlider from "@/components/ui/PhotoSlider";
import spaceAestheticsBuildingView from "@/public/space-aesthetics-building-view.png";
import spaceAestheticsDiningHall from "@/public/space-aesthetics-dining-hall.png";
import spaceAestheticsLiveEdgeTable from "@/public/space-aesthetics-live-edge-table.png";
import spaceAestheticsTerracePanorama from "@/public/space-aesthetics-terrace-panorama.png";
import spaceAestheticsTerraceTable from "@/public/space-aesthetics-terrace-table.png";
import spaceAestheticsTerraceWide from "@/public/space-aesthetics-terrace-wide.png";
import spaceAestheticsWindowTables from "@/public/space-aesthetics-window-tables.png";

const spaceSlides = [
  {
    id: "space-building-view",
    src: spaceAestheticsBuildingView,
    alt: "Вид на здание МИД с панорамной террасы Meat_Coin",
  },
  {
    id: "space-terrace-wide",
    src: spaceAestheticsTerraceWide,
    alt: "Панорамная терраса Meat_Coin с видом на город",
  },
  {
    id: "space-terrace-table",
    src: spaceAestheticsTerraceTable,
    alt: "Сервированный стол на террасе Meat_Coin",
  },
  {
    id: "space-terrace-panorama",
    src: spaceAestheticsTerracePanorama,
    alt: "Терраса Meat_Coin с панорамным видом",
  },
  {
    id: "space-dining-hall",
    src: spaceAestheticsDiningHall,
    alt: "Обеденный зал Meat_Coin с деревянными столами",
  },
  {
    id: "space-window-tables",
    src: spaceAestheticsWindowTables,
    alt: "Столы Meat_Coin у панорамных окон",
  },
  {
    id: "space-live-edge-table",
    src: spaceAestheticsLiveEdgeTable,
    alt: "Длинный деревянный стол в интерьере Meat_Coin",
  },
];

export default function SpaceAestheticsSection() {
  return (
    <section className="-mx-4 mb-12 px-4 pt-11">
      <div className="mb-9 md:ml-109 md:w-129.25">
        <H2Title className="mb-2 md:mb-7">Эстетика пространства</H2Title>
        <Paragraph className="mb-2">
          Дизайн от бюро DA Bureau сочетает природные материалы, приглушенный
          свет и открытую кухню
        </Paragraph>
        <Paragraph>
          Главный акцент на панорамной террасе с видом на Садовое кольцо и
          здание МИД
        </Paragraph>
      </div>

      <PhotoSlider
        slides={spaceSlides}
        slideClassName="flex flex-col justify-end w-full!"
        indicatorsClassName="justify-start"
        imgClassName="md:h-full md:w-full"
        className="md:-mt-66"
      />
    </section>
  );
}
