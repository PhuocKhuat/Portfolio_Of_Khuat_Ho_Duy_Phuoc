import Link from 'next/link'
import React, { FC } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/styles'
import navbar from './navbar.module.css'

const Navbar: FC<I_Props_Translate> = ({ translate }) => {
  return (
    <motion.nav className={`${navbar.handleFlex} ${navbar.handleGap}`}>
      <div className={styles.lineBottom}>
        <Link href='/'>{translate('home')}</Link>
      </div>
      <div className={styles.lineBottom}>
        <Link href='/'>{translate('about')}</Link>
      </div>
      <div className={styles.lineBottom}>
        <Link href='/'>{translate('work')}</Link>
      </div>
      <div className={styles.lineBottom}>
        <Link href='/'>{translate('contact')}</Link>
      </div>
    </motion.nav>
  )
}

export default Navbar
