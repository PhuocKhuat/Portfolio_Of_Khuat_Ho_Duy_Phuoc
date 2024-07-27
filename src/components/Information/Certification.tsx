import React, { FC, ReactElement } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ChevronsLeft, Open, Title } from '@/components/Custom'
import Link from 'next/link'
import { information } from '@/styles/body'

const Certification: FC<I_Props_Certification_List> = ({ certificationList }) => {
  const certification = (): ReactElement[] =>
    certificationList.map(
      (item): ReactElement => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className={information.title}>{item.title}</AccordionTrigger>
          <AccordionContent className={information.content}>
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
      <Open cursor='cursorScaleOpen'>
        <Accordion type='single' collapsible className='text-slate-300'>
          {certification()}
        </Accordion>
      </Open>
    </div>
  )
}

export default Certification
