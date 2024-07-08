import Link from 'next/link'
import React, { FC } from 'react'
import styles from '@/styles/styles'
import { I_Props_Translate } from '@/components/Header/Header'
import { ABOUT, CONTACT, HOME, WORK } from '@/constants/locale'

const Navbar: FC<I_Props_Translate> = ({ translate }) => {
  return (
    <>
      <div className={styles.lineBottom}>
        <Link href='/'>{translate(HOME)}</Link>
      </div>
      <div className={styles.lineBottom}>
        <Link href='/'>{translate(ABOUT)}</Link>
      </div>
      <div className={styles.lineBottom}>
        <Link href='/'>{translate(WORK)}</Link>
      </div>
      <div className={styles.lineBottom}>
        <Link href='/'>{translate(CONTACT)}</Link>
      </div>
    </>
  )
}

export default Navbar
