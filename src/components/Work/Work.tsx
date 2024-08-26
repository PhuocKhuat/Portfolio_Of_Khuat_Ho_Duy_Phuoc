import { BigTitle } from '@/components/Custom'
import WorkItem from '@/components/Work/WorkItem'
import { playfairDisplay } from '@/fonts/font'
import styles from '@/styles/styles'
import { workList } from 'public/data/list'
import React, { FC } from 'react'

const Work: FC = () => {
  return (
    <section id='work'>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <BigTitle text='Experience.' className={`${playfairDisplay.className} ${styles.bigTitle}`} />
            <WorkItem workList={workList} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
