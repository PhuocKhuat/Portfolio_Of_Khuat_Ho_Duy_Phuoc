import React, { FC } from 'react'
import Certification from '@/components/About/Certification'
import Information from '@/components/About/Information'
import Skills from '@/components/About/Skills/Skills'
import styles from '@/styles/styles'
import waitLoading from '@/lib/loading'
import { montserrat } from '@/fonts/font'

const About: FC = async () => {
  await waitLoading(1000)
  return (
    <section id='about' className={montserrat.className}>
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
