'use client'

import { useState } from 'react'
import clsx from 'clsx'
import PhotoSlider, { type PhotoSlide } from '@/components/ui/PhotoSlider'

type TabItem = {
  label: string
  slides: PhotoSlide[]
}

type PhotoSliderTabsProps = {
  items: TabItem[]
  className?: string
  sliderClassName?: string
  imgClassName?: string
}

const PhotoSliderTabs = ({
  items,
  className,
  sliderClassName,
  imgClassName,
}: PhotoSliderTabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={className}>
      <div className="mb-4 grid grid-cols-2 gap-2 rounded-sm bg-white p-1">
        {items.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={clsx(
                'min-h-12 rounded-sm px-4 py-3 text-center text-[20px] leading-[120%] font-medium transition-colors',
                isActive
                  ? 'bg-(--color-accent) text-white'
                  : 'bg-transparent text-(--color-dark-black)/28',
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <PhotoSlider
        key={items[activeIndex].label}
        slides={items[activeIndex].slides}
        className={sliderClassName}
        imgClassName={imgClassName}
        indicatorTone="grey"
      />
    </div>
  )
}

export default PhotoSliderTabs
