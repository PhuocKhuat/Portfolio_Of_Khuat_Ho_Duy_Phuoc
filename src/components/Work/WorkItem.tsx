import { Button } from '@/components/ui/button'
import React from 'react'

const WorkItem = ({ workList }: I_Props_WorkList): JSX.Element => {
  const work = () =>
    workList.map((work) => (
      <div key={work.index} className='flex justify-between'>
        <div>
          <strong className='text-2xl'>{work.position}</strong>
          <p>{work.company}</p>
        </div>
        <div>
          <div>{work.time}</div>
        </div>
      </div>
    ))
  return <>{work()}</>
}

export default WorkItem
