import Link from 'next/link'
import React, { FC, memo } from 'react'
import styles from '@/styles/styles'
import { navbar } from '@/styles/home'
import { Hover } from '@/components/Custom'

const Navbar: FC<I_Props_Translate> = ({ translate }) => {
  const links = ['home', 'about', 'work', 'contact']

  return (
    <nav className={`${navbar.handleFlex} ${navbar.handleGap}`}>
      {links.map((link) => (
        <div key={link} className={styles.lineBottom}>
          <Link href={`/${link === 'home' ? '' : link}`}>
            <Hover text={translate(link)} />
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default memo(Navbar)
