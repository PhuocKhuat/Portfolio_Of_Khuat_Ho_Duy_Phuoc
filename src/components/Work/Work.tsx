import { BigTitle } from '@/components/Custom'
import WorkItem from '@/components/Work/WorkItem'
import { playfairDisplay } from '@/fonts/font'
import waitLoading from '@/lib/loading'
import styles from '@/styles/styles'
import { I_Props_Translate } from '@/types/home'
import { workList } from 'public/data/list'
import React from 'react'

const Work: React.FC<I_Props_Translate> = async ({ translate }) => {
  await waitLoading(500)
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
