import React, { FC } from 'react'
import Certification from '@/components/About/Certification'
import Information from '@/components/About/Information'
import Skills from '@/components/About/Skills'
import styles from '@/styles/styles'

const About: FC = () => {
  return (
    <section id='about'>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className='py-5'>
            <Information />
            <Skills />
            <Certification />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
