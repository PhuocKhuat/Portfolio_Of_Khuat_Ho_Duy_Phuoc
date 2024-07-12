'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import Navbar from '@/components/Navbar/Navbar'
import Theme from '@/components/Themes/Theme'
import Locale from '@/components/Locales/Locale'
import MobileNav from '@/components/Navbar/MobileNav'
import Image from 'next/image'
import logo from '/public/imgs/header/profile-pic.png'
import { montserrat } from '@/fonts/font'
import { COMPONENTS } from '@/constants/locale'
import styles from '@/styles/styles'
import { header } from '@/styles/home'

const Header: React.FC = () => {
  const translate = useTranslations(`${COMPONENTS}.Header`)
  return (
    <header className={montserrat.className}>
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
                <Image alt='Phuoc`s logo' src={logo} quality={80} priority className={header.circleImage} />
              </button>
              {/* NAVBAR */}
              <div className='hidden md:block'>
                <Navbar translate={translate} />
              </div>
              {/* UTILS */}
              <div className={`${styles.gap8} ${header.hideItem}`}>
                <Theme translate={translate} />
                <Locale translate={translate} />
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
    </header>
  )
}

export default Header
