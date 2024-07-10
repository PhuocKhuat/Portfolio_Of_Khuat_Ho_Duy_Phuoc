import React, { FC } from 'react'
import Image from 'next/image'
import avatar_2 from 'public/imgs/introduce/avatar_portfolio_2.png'
import styles from '@/styles/styles'
import introduce from './introduce.module.css'
import { montserrat } from '@/fonts/font'

const Introduce: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={`${styles.flexCenter} relative`}>
            <div className={`absolute top-10 left-56 ${introduce.leftSize}`}>
              <p>I am Phuoc, a</p>
              <p className='mt-1 mb-3'>Web Developer</p>
              <p className={`${introduce.noteSize}`}>
                With a passion for UX/UI design, I want to provide the best user experience
              </p>
            </div>
            <div>
              <Image alt='Phuoc' src={avatar_2} quality={80} priority className={introduce.avatarSize} />
            </div>
            <div className={`absolute top-50 right-56 ${montserrat.className}`}>
              <p>ABOUT ME</p>
              <p></p>
              <p>I`m web developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Introduce
