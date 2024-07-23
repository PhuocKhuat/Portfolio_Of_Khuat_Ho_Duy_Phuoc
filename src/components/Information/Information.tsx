import Certification from '@/components/Information/Certification'
import styles from '@/styles/styles'
import React, { FC } from 'react'

const Information: FC = () => {
  return (
    <section id='information'>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <Certification />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information
