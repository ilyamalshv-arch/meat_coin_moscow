"use client";

import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

export type PhotoSlide = {
  id?: string;
  src: StaticImageData;
  alt: string;
  imageLabel?: string;
  title?: string;
  description?: string;
  description2?: string;
};

type PhotoSliderProps = {
  slides: PhotoSlide[];
  className?: string;
  imgClassName?: string;
  slideClassName?: string;
  indicatorsClassName?: string;
  indicatorTone?: "light" | "dark";
};

const PhotoSlider = ({
  slides,
  className,
  imgClassName,
  slideClassName,
  indicatorsClassName,
  indicatorTone = "light",
}: PhotoSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const updateActiveSlide = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) {
          return;
        }

        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const distance = Math.abs(slideCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveSlide();
    container.addEventListener("scroll", updateActiveSlide, { passive: true });
    window.addEventListener("resize", updateActiveSlide);

    return () => {
      container.removeEventListener("scroll", updateActiveSlide);
      window.removeEventListener("resize", updateActiveSlide);
    };
  }, [slides.length]);

  const scrollToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 md:mx-0 md:-mr-20 md:gap-7 md:px-0"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id ?? `${slide.alt}-${index}`}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            className={clsx(
              "w-[calc(100vw-2rem)] max-w-[22rem] shrink-0 snap-center md:w-auto",
              slideClassName,
            )}
          >
            <div className="relative">
              <Image
                src={slide.src}
                alt={slide.alt}
                className={clsx("w-full rounded-sm object-cover", imgClassName)}
              />
              {slide.imageLabel ? (
                <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-sm bg-[linear-gradient(90deg,rgba(104,83,68,0.88)_0%,rgba(154,120,80,0.88)_50%,rgba(102,52,31,0.88)_100%)] px-4 py-3 text-center text-[1.125rem] leading-[120%] font-extrabold text-white shadow-[0_10px_30px_rgba(33,22,15,0.28)] backdrop-blur-[10px]">
                  {slide.imageLabel}
                </div>
              ) : null}
            </div>
            {slide.title ? (
              <H3Title className="mt-2 text-(--color-dark-black) md:text-xl md:leading-[118%] md:font-bold">
                {slide.title}
              </H3Title>
            ) : null}
            {slide.description ? (
              <Paragraph
                className={clsx(
                  slide.title ? "mt-2" : "mt-4",
                  "tracking-[0%] text-(--color-dark-black)/78",
                )}
              >
                {slide.description}
              </Paragraph>
            ) : null}
            {slide.description2 ? (
              <Paragraph className="mt-2 tracking-[0%] text-(--color-dark-black)/78">
                {slide.description2}
              </Paragraph>
            ) : null}
          </div>
        ))}
      </div>

      <div
        className={clsx(
          "mt-4 flex items-center justify-center gap-2",
          indicatorsClassName,
        )}
      >
        {slides.map((slide, index) => (
          <button
            key={`indicator-${slide.id ?? `${slide.alt}-${index}`}`}
            type="button"
            aria-label={`Перейти к слайду ${index + 1}`}
            onClick={() => scrollToSlide(index)}
            className={clsx(
              "h-3 rounded-full transition-all",
              indicatorTone === "light" && "border border-white/30",
              indicatorTone === "dark" &&
                "border border-(--color-dark-black)/20",
              activeIndex === index
                ? indicatorTone === "light"
                  ? "w-6 bg-white/60"
                  : "w-6 bg-(--color-dark-black)"
                : indicatorTone === "light"
                  ? "w-3 bg-transparent hover:bg-white/20"
                  : "w-3 bg-transparent hover:bg-(--color-dark-black)/15",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
