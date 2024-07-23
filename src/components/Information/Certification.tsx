import React, { FC, ReactElement } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ChevronsLeft, Scroll, Title } from '@/components/Custom'
import Link from 'next/link'

import { certificationList } from 'public/data/list'

const Certification: FC = () => {
  const certification = (): ReactElement[] =>
    certificationList.map(
      (item): ReactElement => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className='xsm:text-xl text-base'>{item.title}</AccordionTrigger>
          <AccordionContent className='flex flex-wrap justify-between text-blue-300'>
            <Link href={item.certificate} target='_blank' className='flex gap-6 text-blue-500'>
              View certificate <ChevronsLeft />
            </Link>
            <span>{item.academy}</span>
            <span>{item.time}</span>
          </AccordionContent>
        </AccordionItem>
      )
    )
  return (
    <div>
      <Title text='Certification' />
      <Scroll cursor='cursorScaleOpen'>
        <Accordion type='single' collapsible className='text-slate-300'>
          {certification()}
        </Accordion>
      </Scroll>
    </div>
  )
}

export default Certification
