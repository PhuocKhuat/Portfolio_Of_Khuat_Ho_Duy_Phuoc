import React from 'react'

const WorkItem = ({ workList }: I_Props_WorkList): JSX.Element => {
  const work = () =>
    workList.map((work) => (
      <div key={work.index} className='flex justify-between items-center border-b-2'>
        <div className='mb-5'>
          <strong className='text-2xl'>{work.position}</strong>
          <div>{work.company}</div>
        </div>
        <div className='text-xs text-slate-400'>
          <div>{work.time}</div>
          <div className='flex justify-end'>{work.typeOfWork}</div>
        </div>
      </div>
    ))
  return <>{work()}</>
}

export default WorkItem
