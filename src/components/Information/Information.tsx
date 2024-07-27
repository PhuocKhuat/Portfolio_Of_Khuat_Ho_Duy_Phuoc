import React, { FC } from 'react'
import Certification from '@/components/Information/Certification'
import Education from '@/components/Information/Education'
import waitLoading from '@/lib/loading'
import styles from '@/styles/styles'
import { certificationList } from 'public/data/list'
import { educationList } from 'public/data/list'

const Information: FC = async () => {
  await waitLoading(1000)
  return (
    <section id='information' className='lg:h-[32.3rem] h-[36rem]'>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <Education educationList={educationList} />
            <Certification certificationList={certificationList} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information
