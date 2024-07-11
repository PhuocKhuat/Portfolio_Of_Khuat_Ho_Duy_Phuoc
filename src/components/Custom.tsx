'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { textGoUpVariants } from '@/lib/motion'
import { CURSORSCALE } from '@/constants/mouse'
import introduce from './Introduce/introduce.module.css'

export const Scroll: React.FC<ScrollProps> = ({ children }) => (
  <motion.section className={CURSORSCALE}>{children}</motion.section>
)

export const TextGoUp: React.FC<TextGoUpProps> = ({ name, job, passion }) => (
  <motion.p variants={textGoUpVariants} initial='hidden' whileInView='show' className={CURSORSCALE}>
    {name && <motion.span>{name}</motion.span>}
    {job && <motion.span className='mt-1 mb-3'>{job}</motion.span>}
    {passion && <motion.span className={`${introduce.noteSize}`}>{passion}</motion.span>}
  </motion.p>
)
