import { Title } from '@/components/Custom'
import WorkItem from '@/components/Work/WorkItem'
import styles from '@/styles/styles'
import { workList } from 'public/data/list'
import React, { FC } from 'react'

const Work: FC = () => {
  return (
    <section id='work'>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <Title text='Experience' />
            <WorkItem workList={workList} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
