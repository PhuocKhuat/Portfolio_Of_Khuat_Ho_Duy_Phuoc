'use client'

import { FC } from 'react'
import header from './header.module.css'
import styles from '@/styles/styles'
import Image from 'next/image'
import avatar from '/public/imgs/profile-pic.png'
import ModeToggle from '@/components/Themes/Toggle'
import Locale from '@/components/Locales/Locale'
import { montserrat } from '@/styles/font'
import MobileNav from '@/components/MobileNav/MobileNav'
import Navbar from '@/components/Navbar/Navbar'

const Header: FC = () => {
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
                <Navbar />
              </div>
              {/* UTILS */}
              <div className={`${styles.gap8} ${header.hideItem}`}>
                <div>
                  <ModeToggle />
                </div>
                <div>
                  <Locale />
                </div>
              </div>
              {/* MOBILE NAV */}
              <div className={header.showMobileNav}>
                <MobileNav />
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
