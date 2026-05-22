import Link from "next/link";
import H1Title from "@/components/ui/H1Title";
import Paragraph from "@/components/ui/Paragraph";
import Tag from "@/components/ui/Tag";

interface PageStubProps {
  title: string;
  description: string;
}

export default function PageStub({ title, description }: PageStubProps) {
  return (
    <main className="px-4 py-12 md:px-20 md:py-20">
      <section className="mx-auto flex min-h-[calc(100dvh-220px)] max-w-360 flex-col justify-center rounded-[2rem] border border-(--color-devider) bg-[radial-gradient(circle_at_top,#2C2A27_0%,#1E1E1E_52%,#151515_100%)] px-6 py-10 md:px-14 md:py-16">
        <Tag text="Скоро" variant="gray" />
        <H1Title className="mt-6 max-w-4xl">{title}</H1Title>
        <Paragraph className="mt-6 max-w-2xl text-(--color-gray)">
          {description}
        </Paragraph>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-sm bg-(--color-accent) px-5 py-3 text-sm leading-[146%] font-medium text-(--color-dark) transition-opacity duration-300 hover:opacity-85"
          >
            На главную
          </Link>
          <Paragraph disableAnimation className="text-(--color-gray)">
            Страница находится в разработке.
          </Paragraph>
        </div>
      </section>
    </main>
  );
}
