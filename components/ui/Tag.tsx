'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'

interface TagProps {
  text: string
  variant?: 'black' | 'gray'
  className?: string
  delay?: number
}

const baseStyles =
  'w-fit rounded-sm px-2 py-1 text-base leading-[148%] font-medium tracking-[1%] whitespace-nowrap'

const variantStyles: Record<NonNullable<TagProps['variant']>, string> = {
  black: 'bg-(--color-dark-black)',
  gray: 'bg-(--color-devider)',
}

const Tag = ({ text, variant = 'black', className = '', delay = 0 }: TagProps) => {
  return (
    <motion.p
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
      {text}
    </motion.p>
  )
}

export default Tag
