import { Tooltip as Tooltips, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Image from 'next/image'
import React, { FC } from 'react'

const Tooltip: FC<I_Props_Skill_Tooltip> = ({ skill }) => {
  return (
    <TooltipProvider>
      <Tooltips>
        <TooltipTrigger>
          <Image alt={skill.name} src={skill.img} width={45} height={45} priority className='shadow-white' />
        </TooltipTrigger>
        <TooltipContent className='mb-2'>
          <p>{skill.name}</p>
        </TooltipContent>
      </Tooltips>
    </TooltipProvider>
  )
}

export default Tooltip
