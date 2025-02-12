import { FirstAppears } from '@/components/Custom'
import { montserratNormal } from '@/fonts/font'
import styles from '@/styles/styles'
import { I_Props_WorkList } from '@/types/home'
import React from 'react'

const WorkItem = ({ workList, translate }: I_Props_WorkList): JSX.Element => {
  const work = () =>
    workList.map((work) => (
      <div key={work.index} className={`${styles.flexBetween} border-b-2 pb-4 mt-10 ${montserratNormal.className}`}>
        <div>
          <strong className='text-2xl'>
            <FirstAppears text={translate(work.position)} />
          </strong>
          <div>{translate(work.company)}</div>
        </div>
        <div className='text-sm text-slate-400'>
          <div>{translate(work.time)}</div>
          <div className='flex justify-end'>{translate(work.typeOfWork)}</div>
        </div>
      </div>
    ))
  return <>{work()}</>
}

export default WorkItem
