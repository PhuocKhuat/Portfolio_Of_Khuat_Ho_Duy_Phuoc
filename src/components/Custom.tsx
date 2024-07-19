'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import {
  firstAppearVariants,
  hoverVariants,
  loadingVariants,
  secondAppearVariants,
  shapeVariants,
  thirdAppearVariants,
  titleVariants
} from '@/lib/motion'
import { CURSORSCALE } from '@/constants/mouse'
import { introduce, skills } from '@/styles/body'
import { loading } from '@/styles/header'
import { playfairDisplay } from '@/fonts/font'
import Image from 'next/image'

export const Hover: FC<I_Props_Text> = ({ text }) => (
  <motion.span variants={hoverVariants} initial='hidden' whileHover='show' className='block'>
    {text}
  </motion.span>
)
export const LoadingUp: FC = () => (
  <motion.section
    variants={loadingVariants}
    initial='hidden'
    whileInView='show'
    className={`${loading.screen} ${loading.between}`}
  >
    Loading
  </motion.section>
)
export const Scroll: FC<ScrollProps> = ({ children, id }) => (
  <motion.section className={`${CURSORSCALE} z-30 relative h-[32.3rem]`} id={id}>
    {children}
  </motion.section>
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
  <motion.h2
    variants={titleVariants}
    initial='hidden'
    whileInView='show'
    className={`${playfairDisplay.className} text-3xl font-bold mb-3 uppercase`}
  >
    {text}
  </motion.h2>
)
export const Skills: FC<I_Props_Skill_Tooltip> = ({ skill }) => (
  <motion.div variants={shapeVariants} initial='hidden' whileInView='show' className={skills.makeUpSkill}>
    <Image alt={skill.name} src={skill.img} width={60} height={60} priority className='shadow-white' />
  </motion.div>
)
