import { BigTitle } from '@/components/Custom'
import WorkItem from '@/components/Work/WorkItem'
import { playfairDisplay } from '@/fonts/font'
import styles from '@/styles/styles'
import { workList } from 'public/data/list'
import React from 'react'

const Work: React.FC<I_Props_Translate> = ({ translate }) => {
  return (
    <section id='work'>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <BigTitle text={translate('experience')} className={`${playfairDisplay.className} ${styles.bigTitle}`} />
            <WorkItem workList={workList} translate={translate} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
