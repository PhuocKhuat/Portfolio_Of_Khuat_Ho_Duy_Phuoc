'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FirstAppearVariants, SecondAppearVariants, ThirdAppearVariants } from '@/lib/motion'
import { CURSORSCALE } from '@/constants/mouse'
import { introduce } from '@/styles/home'

export const Scroll: React.FC<ScrollProps> = ({ children }) => (
  <motion.section className={CURSORSCALE}>{children}</motion.section>
)
export const FirstAppears: React.FC<I_Props_FirstAppears> = ({ name }) => (
  <motion.p variants={FirstAppearVariants} initial='hidden' whileInView='show'>
    {name && <>{name}</>}
  </motion.p>
)
export const SecondAppears: React.FC<I_Props_SecondAppears> = ({ job }) => (
  <motion.p variants={SecondAppearVariants} initial='hidden' whileInView='show' className='mt-1 mb-3'>
    {job && <>{job}</>}
  </motion.p>
)
export const ThirdAppears: React.FC<I_Props_ThirdAppears> = ({ passion }) => (
  <motion.p variants={ThirdAppearVariants} initial='hidden' whileInView='show' className={introduce.thirdChildText}>
    {passion && <>{passion}</>}
  </motion.p>
)
