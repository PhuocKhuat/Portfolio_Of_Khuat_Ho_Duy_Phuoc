'use client'

import { FC } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import avatar from '/public/imgs/profile-pic.png'
import Navbar from '@/components/Navbar/Navbar'
import Theme from '@/components/Themes/Theme'
import Locale from '@/components/Locales/Locale'
import MobileNav from '@/components/MobileNav/MobileNav'
import header from './header.module.css'
import { montserrat } from '@/styles/font'
import styles from '@/styles/styles'

export interface I_Props_Translate {
  translate: (key: string) => string
}

const Header: FC = () => {
  const translate = useTranslations('Components.Header')
  return (
    <section className={montserrat.className}>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={header.menuWrapper}>
            <div className={styles.flexBetween}>
              {/* LOGO */}
              <button
                onClick={() => {
                  window.location.href = '/'
                }}
              >
                <Image alt='Phuoc`s avatar' src={avatar} quality={80} priority className={header.circleImage} />
              </button>
              {/* NAVBAR */}
              <div className={`${styles.gap8} ${header.hideItem}`}>
                <Navbar translate={translate} />
              </div>
              {/* UTILS */}
              <div className={`${styles.gap8} ${header.hideItem}`}>
                <Theme />
                <Locale />
              </div>
              {/* MOBILE NAV */}
              <div className={header.showMobileNav}>
                <MobileNav translate={translate} />
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
