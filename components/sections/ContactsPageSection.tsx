"use client";

import clsx from "clsx";
import { useState } from "react";
import MailIcon from "@/components/icons/MailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import Button from "@/components/ui/Button";
import GridSection from "@/components/ui/GridSection";
import H1Title from "@/components/ui/H1Title";
import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import Telegram from "@/components/ui/Telegram";
import { CONTACT_RESTAURANTS, type ContactRestaurant } from "@/consts/contacts";

function CityTag({ city }: { city: string }) {
  return (
    <span className="text-accent w-fit rounded-sm bg-white px-3 py-3 text-base leading-[148%] font-medium tracking-[1%] whitespace-nowrap md:px-2 md:py-1">
      {city}
    </span>
  );
}

function RestaurantDetails({ restaurant }: { restaurant: ContactRestaurant }) {
  return (
    <div className="flex flex-col gap-7 pb-11">
      <div className="flex gap-2">
        <LocationIcon width={24} height={24} />
        <Paragraph>{restaurant.address}</Paragraph>
      </div>

      <div className="text-accent flex items-center gap-4">
        <div className="flex flex-col gap-3">
          {restaurant.schedule.map((row) => (
            <Paragraph key={row.days}>{row.days}</Paragraph>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {restaurant.schedule.map((row) => (
            <H3Title key={row.time} className="md:leading-[116%]">
              {row.time}
            </H3Title>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <Button text="Оставить заявку" />
        <div className="flex items-center gap-4">
          <a href={restaurant.phoneHref} className="text-accent">
            {restaurant.phone}
          </a>
          <a
            href="mailto:info@meat-coin.ru"
            aria-label="Написать на почту"
            className="px-4 py-2"
          >
            <MailIcon width={24} height={24} />
          </a>
          <a
            href={restaurant.telegram}
            target="_blank"
            aria-label="Открыть Telegram"
            className="px-4 py-2"
          >
            <Telegram width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

function ContactsMap({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative h-[58vh] w-full overflow-hidden rounded-xl">
      {CONTACT_RESTAURANTS.map((restaurant, index) => (
        <div
          key={restaurant.id}
          className={clsx(
            "absolute inset-0 grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0",
            index === activeIndex
              ? "opacity-100"
              : "pointer-events-none opacity-0",
          )}
        >
          <iframe
            src={restaurant.mapSrc}
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            title={restaurant.name}
          />
        </div>
      ))}
    </div>
  );
}

export default function ContactsPageSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="bg-beige text-dark">
      <GridSection className="gap-y-0! pt-11 pb-30">
        {/* Title */}
        <div className="col-span-5 flex flex-col gap-2 pb-18 md:col-span-12">
          <H1Title>Контакты</H1Title>
          <Paragraph className="text-gray">Наших ресторанов</Paragraph>
        </div>

        {/* Restaurants — единый адаптивный аккордеон (как в проде, без отдельных
            мобильных табов): на всех экранах один список с раскрытием. */}
        <div className="col-span-5 md:col-span-6">
          {CONTACT_RESTAURANTS.map((restaurant, index) => {
            const isActive = index === activeIndex;
            return (
              <div key={restaurant.id} className="relative">
                {isActive && (
                  <div className="bg-border absolute top-0 -left-4 h-full w-0.5 rounded-sm" />
                )}
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group w-full cursor-pointer pt-11 pb-0 text-left"
                >
                  <div
                    className={clsx(
                      "flex justify-between",
                      isActive ? "pb-11" : "pb-4",
                    )}
                  >
                    <div className="flex flex-col gap-2">
                      <H3Title className="group-hover:text-accent transition-colors duration-200 md:leading-[116%]">
                        {restaurant.name}
                      </H3Title>
                      <CityTag city={restaurant.city} />
                    </div>
                    {isActive && restaurant.note && (
                      <Paragraph className="text-border text-end">
                        {restaurant.note}
                      </Paragraph>
                    )}
                  </div>
                  {!isActive && (
                    <Paragraph className="text-accent pb-11">
                      {restaurant.address}
                    </Paragraph>
                  )}
                </button>

                <div
                  className={clsx(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <RestaurantDetails restaurant={restaurant} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map: правая колонка на десктопе, под списком на мобиле */}
        <div className="col-span-5 md:col-span-6">
          <ContactsMap activeIndex={activeIndex} />
        </div>
      </GridSection>
    </main>
  );
}
