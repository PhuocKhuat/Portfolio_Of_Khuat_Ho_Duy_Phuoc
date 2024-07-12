import React from 'react'
import Image from 'next/image'
import avatar_2 from 'public/imgs/introduce/avatar_portfolio_2.png'
import { montserrat } from '@/fonts/font'
import { FirstAppears, Scroll, SecondAppears, ThirdAppears } from '@/components/Custom'
import styles from '@/styles/styles'
import { introduce } from '@/styles/home'

const Introduce: React.FC = () => {
  return (
    <Scroll>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={`${styles.flexCenter} relative`}>
            <div className={`absolute top-10 left-44 ${introduce.leftText}`}>
              <FirstAppears name='I am Phuoc, a' />
              <SecondAppears job='Web Developer' />
              <ThirdAppears passion='With a passion for UX/UI design, I want to provide the best user experience' />
            </div>
            <div>
              <Image alt='Phuoc' src={avatar_2} quality={80} priority className={introduce.avatarSize} />
            </div>
            <div className={`absolute top-50 right-0 w-96 ${montserrat.className}`}>
              <div>
                <p>ABOUT ME</p>
                <p>My full name is Khuat Ho Duy Phuoc.</p>
                <p>I studied and graduated from CyberSoft Academy.</p>
                <p>I am currently living in Ho Chi Minh City.</p>
              </div>
              <div>
                <h3>MY WORK</h3>
                <p>I specialize in both Front-End and Back-End development.</p>
                <p>Primarily using React JS and Node JS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  )
}

export default Introduce
