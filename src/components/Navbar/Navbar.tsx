import Link from 'next/link'
import React, { FC } from 'react'
import styles from '@/styles/styles'

const Navbar: FC<I_Props_Translate> = ({ translate }) => {
  return (
    <>
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
    </>
  )
}

export default Navbar
