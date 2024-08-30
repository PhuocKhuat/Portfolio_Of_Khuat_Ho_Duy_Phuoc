import { Hover } from '@/components/Custom'
import { montserratNormal } from '@/fonts/font'
import React from 'react'

const WorkItem = ({ workList, translate }: I_Props_WorkList): JSX.Element => {
  const work = () =>
    workList.map((work) => (
      <div
        key={work.index}
        className={`flex justify-between items-center border-b-2 mt-10 ${montserratNormal.className}`}
      >
        <div className='mb-5'>
          <strong className='text-2xl'>
            <Hover text={translate(work.position)} />
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
