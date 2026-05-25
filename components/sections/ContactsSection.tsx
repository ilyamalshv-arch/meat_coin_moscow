"use client";

import MailIcon from "@/components/icons/MailIcon";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import H2Title from "@/components/ui/H2Title";
import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import Tag from "@/components/ui/Tag";
import Telegram from "@/components/ui/Telegram";
import { useState } from "react";

const phone = "+7 499 283-19-11";
const moscowMapUrl =
  "https://yandex.ru/map-widget/v1/?um=constructor%3A8fa274675addcb7c5913109f940af88d15084baefad65478edc23090113f6f82&source=constructor";

const otherLocations = [
  {
    city: "Санкт-Петербург",
    address: "ул. Рубинштейна • 4",
  },
  {
    city: "Москва",
    address:
      "Смоленская площадь • 5 БЦ Смоленский пассаж 2 • 4 этаж • (отдельный вход со стороны Николощеповского переулка)",
  },
  {
    city: "Комарово",
    address: "Ленинградская область • пос. Комарово • Приморское шоссе • 466",
  },
];

function ContactLinks({ className = "" }: { className?: string }) {
  return (
    <Paragraph
      className={`flex h-10 items-center justify-between gap-4 text-(--color-accent) ${className}`}
    >
      <a href="tel:+74992831911">{phone}</a>
      <a href="mailto:info@meat-coin.ru" aria-label="Написать на почту">
        <MailIcon width={24} height={24} color="white" />
      </a>
      <a href="https://t.me/" target="_blank" aria-label="Открыть Telegram">
        <Telegram width={24} height={24} color="white" />
      </a>
    </Paragraph>
  );
}

function YandexMap({ className = "" }: { className?: string }) {
  return (
    <iframe
      src={moscowMapUrl}
      width="100%"
      height="100%"
      className={`border-0 ${className}`}
      allowFullScreen
      title="Карта Яндекса: Steak & Terrace"
    />
  );
}

export default function ContactsSection() {
  const [isMainLocationOpen, setIsMainLocationOpen] = useState(true);

  return (
    <section className="-mx-4 border-b border-(--color-devider) md:border-none px-4 pt-0 pb-5 md:-mx-20 md:px-20 md:pt-16 md:pb-0">
      <div className="pb-9 md:ml-109 md:pb-18">
        <H2Title className="mb-2">Адрес и контакты</H2Title>
        <Paragraph className="md:text-(--color-gray)">
          Стейк-хаус в Москве на 4 этаже бизнес-центра «Смоленский пассаж 2»
        </Paragraph>
      </div>

      <Dropdown
        className="mt-6 md:hidden"
        isOpen={isMainLocationOpen}
        onToggle={() => setIsMainLocationOpen((current) => !current)}
        buttonClassName="flex w-full items-start justify-between gap-4 text-left"
        contentClassName="pb-[108px]"
        iconColor="#8D7E65"
        trigger={
          <div className="mb-2 flex flex-col items-start gap-2">
            <H3Title>Steak & Terrace</H3Title>
            <Tag variant="gray">Москва</Tag>
          </div>
        }
      >
        <Paragraph className="mb-6 max-w-60 text-(--color-gray)">
          Бесплатный крытый паркинг для гостей
        </Paragraph>

        <div className="mb-6 flex flex-col gap-1">
          <Paragraph className="mb-1 text-(--color-gray)">Адрес</Paragraph>
          <Paragraph>Смоленская площадь • 5</Paragraph>
          <Paragraph className="max-w-72 text-(--color-gray)">
            (отдельный вход со стороны Николощеповского переулка)
          </Paragraph>
        </div>

        <div className="mb-6 flex flex-col gap-2">
          <Paragraph className="text-(--color-gray)">Режим работы</Paragraph>
          <div className="flex items-baseline gap-4">
            <Paragraph>Ежедневно</Paragraph>
            <H3Title>12:00-00:00</H3Title>
          </div>
        </div>

        <Button text="Оставить заявку" className="mb-2 w-full text-white" />

        <ContactLinks className="mb-6" />

        <YandexMap className="h-105 rounded-sm" />
      </Dropdown>

      <div className="hidden md:block">
        <div className="grid grid-cols-[408px_minmax(0,1fr)] gap-x-7 pb-11">
          <div className="flex flex-col justify-between">
            <div>
              <H3Title className="mb-2">Steak & Terrace</H3Title>
              <Tag variant="gray">Москва</Tag>
            </div>

            <Paragraph className="max-w-48 text-sm text-(--color-gray)">
              Для гостей доступна бесплатная парковка
            </Paragraph>
          </div>

          <div>
            <div className="mb-7 flex flex-col gap-1">
              <Paragraph className="text-(--color-gray)">Адрес</Paragraph>
              <Paragraph className="">Смоленская площадь • 5</Paragraph>
              <Paragraph className="text-(--color-gray)">
                (отдельный вход со стороны Николощеповского переулка)
              </Paragraph>
            </div>

            <div className="mb-7 flex flex-col gap-1">
              <Paragraph className="text-(--color-gray)">
                Режим работы
              </Paragraph>
              <div className="flex items-baseline gap-4">
                <Paragraph className="">Ежедневно</Paragraph>
                <H3Title>12:00-00:00</H3Title>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button text="Оставить заявку" className="w-61 text-white" />
              <ContactLinks className="w-64 justify-start gap-7" />
            </div>
          </div>
        </div>

        <div className="-mx-20 mb-30">
          <YandexMap className="h-105 md:h-119" />
        </div>
      </div>

      <div className="md:hidden md:pb-11">
        {otherLocations.map((location) => (
          <div key={location.city} className="mb-8 last:mb-0">
            <H3Title className="mb-4 text-[24px] text-(--color-accent) underline md:text-2xl">
              {location.city}
            </H3Title>
            <Paragraph className="mb-4 md:min-h-12">
              {location.address}
            </Paragraph>
            <ContactLinks />
          </div>
        ))}
      </div>
    </section>
  );
}
