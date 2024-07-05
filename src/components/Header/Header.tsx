'use client'

import { FC } from 'react'
import header from './header.module.css'
import styles from '@/styles/styles'
import Link from 'next/link'
import Image from 'next/image'
import avatar from '/public/imgs/profile-pic.png'
import ModeToggle from '@/components/Themes/Toggle'

const Header: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={header.menuWrapper}>
            <div className={styles.flexBetween}>
              <Link
                href={'/'}
                onClick={() => {
                  window.location.href = '/'
                }}
              >
                <Image alt='Phuoc`s avatar' src={avatar} width={80} height={80} quality={80} priority={true} />
              </Link>
              <div className={styles.flexGap}>
                <div>
                  <Link href='/'>Home</Link>
                </div>
                <div>
                  <Link href='/'>About</Link>
                </div>
                <div>
                  <Link href='/'>Work</Link>
                </div>
                <div>
                  <Link href='/'>Contact</Link>
                </div>
              </div>
              <div className={styles.flexGap}>
                <div>
                  <ModeToggle />
                </div>
                <div>Language</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
