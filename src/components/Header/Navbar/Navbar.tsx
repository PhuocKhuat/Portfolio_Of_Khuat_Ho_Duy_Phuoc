'use client'
import React, { FC, memo } from 'react'
import { navbar } from '@/styles/header'
import { Hover } from '@/components/Custom'
import styles from '@/styles/styles'

const Navbar: FC<I_Props_Translate> = ({ translate, drawerClose }) => {
  const links = ['home', 'skills', 'information', 'work', 'contact']
  return (
    <nav className={`${navbar.handleFlex} ${navbar.handleGap}`}>
      {links.map((link) => (
        <div key={link} className={styles.lineBottom}>
          <Hover link={link} drawerClose={drawerClose} text={translate(link)} />
        </div>
      ))}
    </nav>
  )
}

export default memo(Navbar)
