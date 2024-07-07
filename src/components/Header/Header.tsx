'use client'

import { FC } from 'react'
import header from './header.module.css'
import styles from '@/styles/styles'
import Link from 'next/link'
import Image from 'next/image'
import avatar from '/public/imgs/profile-pic.png'
import ModeToggle from '@/components/Themes/Toggle'
import Locale from '@/components/Locales/Locale'
import { useTranslations } from 'next-intl'
import { montserrat } from '@/styles/font'
import MobileNav from '@/components/Header/MobileNav'

const Header: FC = () => {
  const trans = useTranslations('Components.Header.navbar')

  return (
    <section className={montserrat.className}>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={header.menuWrapper}>
            <div className={styles.flexBetween}>
              {/* LOGO */}
              <Link
                href={'/'}
                onClick={() => {
                  window.location.href = '/'
                }}
              >
                <Image alt='Phuoc`s avatar' src={avatar} quality={80} priority={true} className={header.circleImage} />
              </Link>
              {/* NAVBAR */}
              <div className={`${styles.gap} ${header.menuItem}`}>
                <div>
                  <Link href='/'>{trans('home')}</Link>
                </div>
                <div>
                  <Link href='/'>{trans('about')}</Link>
                </div>
                <div>
                  <Link href='/'>{trans('work')}</Link>
                </div>
                <div>
                  <Link href='/'>{trans('contact')}</Link>
                </div>
              </div>
              {/* UTILS */}
              <div className={`${styles.gap} ${header.utilItem}`}>
                <div>
                  <ModeToggle />
                </div>
                <div>
                  <Locale />
                </div>
              </div>
              {/* MOBILE */}
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
