'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import {
  firstAppearVariants,
  hoverVariants,
  secondAppearVariants,
  thirdAppearVariants,
  titleVariants
} from '@/lib/motion'
import { CURSORSCALE } from '@/constants/mouse'
import { introduce } from '@/styles/home'

export const Hover: FC<I_Props_Text> = ({ text }) => (
  <motion.span variants={hoverVariants} initial='initial' whileHover='hover' className='block'>
    {text}
  </motion.span>
)
export const Scroll: FC<ScrollProps> = ({ children }) => (
  <motion.section className={CURSORSCALE}>{children}</motion.section>
)
export const FirstAppears: FC<I_Props_Text> = ({ text }) => (
  <motion.p variants={firstAppearVariants} initial='hidden' whileInView='show'>
    {text}
  </motion.p>
)
export const SecondAppears: FC<I_Props_Text> = ({ text }) => (
  <motion.p variants={secondAppearVariants} initial='hidden' whileInView='show' className='mt-1 mb-3'>
    {text}
  </motion.p>
)
export const ThirdAppears: FC<I_Props_Text> = ({ text }) => (
  <motion.p variants={thirdAppearVariants} initial='hidden' whileInView='show' className={introduce.thirdChildText}>
    {text}
  </motion.p>
)
export const Title: FC<I_Props_Text> = ({ text }) => (
  <motion.h2 variants={titleVariants} initial='hidden' whileInView='show' className='text-2xl text-orange-500'>
    {text}
  </motion.h2>
)
