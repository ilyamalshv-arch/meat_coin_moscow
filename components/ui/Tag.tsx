'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface TagProps {
  text?: ReactNode
  children?: ReactNode
  variant?: 'black' | 'gray'
  className?: string
  delay?: number
}

const baseStyles =
  'inline-flex w-fit items-baseline rounded-sm px-2 py-1 whitespace-nowrap'

const variantStyles: Record<NonNullable<TagProps['variant']>, string> = {
  black: 'bg-(--color-dark-black)',
  gray: 'bg-(--color-devider)',
}

const Tag = ({ text, children, variant = 'black', className = '', delay = 0 }: TagProps) => {
  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay,
      }}
      className={clsx(baseStyles, variantStyles[variant], className)}
    >
      {children ?? (
        <span className="text-base leading-[148%] font-medium tracking-[1%]">
          {text}
        </span>
      )}
    </motion.div>
  )
}

export default Tag
