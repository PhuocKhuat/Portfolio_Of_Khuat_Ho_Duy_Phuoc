'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import {
  chevronsLeftVariants,
  firstAppearVariants,
  hoverVariants,
  loadingVariants,
  secondAppearVariants,
  shapeVariants,
  thirdAppearVariants,
  titleVariants
} from '@/lib/motion'
import { skills } from '@/styles/body'
import { loading } from '@/styles/header'
import { playfairDisplay } from '@/fonts/font'
import Image from 'next/image'
import { ChevronsLeftIcon } from 'lucide-react'
import styles from '@/styles/styles'

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
export const Scroll: FC<ScrollProps> = ({ children, id, cursor }) => (
  <motion.div className={`${cursor} z-30 relative lg:h-[32.3rem] h-[36rem]`} id={id}>
    {children}
  </motion.div>
)
export const FirstAppears: FC<I_Props_Text> = ({ text }) => (
  <motion.p variants={firstAppearVariants} initial='hidden' whileInView='show' className='text-slate-300'>
    {text}
  </motion.p>
)
export const SecondAppears: FC<I_Props_Text> = ({ text }) => (
  <motion.p variants={secondAppearVariants} initial='hidden' whileInView='show' className={styles.secondAppears}>
    {text}
  </motion.p>
)
export const ThirdAppears: FC<I_Props_Text> = ({ text }) => (
  <motion.p variants={thirdAppearVariants} initial='hidden' whileInView='show' className={styles.thirdAppears}>
    {text}
  </motion.p>
)
export const Title: FC<I_Props_Text> = ({ text }) => (
  <motion.h2
    variants={titleVariants}
    initial='hidden'
    whileInView='show'
    className={`${playfairDisplay.className} ${styles.title}`}
  >
    {text}
  </motion.h2>
)
export const Skills: FC<I_Props_Skill_Tooltip> = ({ skill }) => (
  <motion.div variants={shapeVariants} initial='hidden' whileInView='show' className={skills.makeUpSkill}>
    <Image alt={skill.name} src={skill.img} width={55} height={55} quality={60} priority />
  </motion.div>
)
export const ChevronsLeft = (): JSX.Element => (
  <motion.span variants={chevronsLeftVariants} initial='hidden' animate='animate' exit='exit'>
    <ChevronsLeftIcon />
  </motion.span>
)
