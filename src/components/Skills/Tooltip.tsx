import React, { FC } from 'react'
import { Tooltip as Tooltips, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Skills } from '@/components/Custom'
import { skills } from '@/styles/body'

const Tooltip: FC<I_Props_Skill_Tooltip> = ({ skill }) => {
  return (
    <TooltipProvider>
      <Tooltips>
        <TooltipTrigger className={skills.hoverSkill}>
          <Skills skill={skill} />
        </TooltipTrigger>
        <TooltipContent side='bottom' className='relative bottom-5'>
          <p>{skill.name}</p>
        </TooltipContent>
      </Tooltips>
    </TooltipProvider>
  )
}

export default Tooltip
