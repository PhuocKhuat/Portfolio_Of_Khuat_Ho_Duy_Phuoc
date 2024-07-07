import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import styles from '@/styles/styles'

const Navbar = (): JSX.Element => {
  const trans = useTranslations('Components.Header.navbar')
  return (
    <>
      <div className={styles.lineBottom}>
        <Link href='/'>{trans('home')}</Link>
      </div>
      <div className={styles.lineBottom}>
        <Link href='/'>{trans('about')}</Link>
      </div>
      <div className={styles.lineBottom}>
        <Link href='/'>{trans('work')}</Link>
      </div>
      <div className={styles.lineBottom}>
        <Link href='/'>{trans('contact')}</Link>
      </div>
    </>
  )
}

export default Navbar
