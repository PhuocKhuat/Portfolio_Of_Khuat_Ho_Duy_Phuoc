'use client'

import { FC } from 'react'
import { useTranslations } from 'next-intl'
import Navbar from '@/components/Header/Navbar/Navbar'
import Theme from '@/components/Header/Themes/Theme'
import Locale from '@/components/Header/Locales/Locale/Locale'
import MobileNav from '@/components/Header/Navbar/MobileNav'
import Image from 'next/image'
import logo from '/public/imgs/header/profile-pic.png'
import { montserrat } from '@/fonts/font'
import styles from '@/styles/styles'
import { header } from '@/styles/header'

const Header: FC = () => {
  const translate = useTranslations(`Components.Header`)
  return (
    <header className={`${montserrat.className} h-20`} id='home'>
      <div className='fixed w-full z-[35]'>
        <div className={styles.container}>
          <div className={styles.containerWrapper}>
            <div className='py-5'>
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
                <div className={header.hideNav}>
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
      </div>
    </header>
  )
}

export default Header
