import React, { FC } from 'react'
import { Open, Title } from '@/components/Custom'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { information } from '@/styles/body'

const Education: FC<I_Props_Education_List> = ({ educationList }) => {
  const education = () =>
    educationList.map((item) => (
      <AccordionItem value='item-1' key={item.value}>
        <AccordionTrigger className={information.title}>{item.title}</AccordionTrigger>
        <AccordionContent className={information.content}>
          <span>{item.academy}</span>
          <span>{item.time}</span>
        </AccordionContent>
      </AccordionItem>
    ))
  return (
    <div>
      <Title text='Education' />
      <Open cursor='cursorScaleOpen'>
        <Accordion type='single' collapsible className='text-slate-300'>
          {education()}
        </Accordion>
      </Open>
    </div>
  )
}

export default Education
