import React, { FC } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Title } from '@/components/Custom'
import Link from 'next/link'
import { FE_CERTIFICATION } from '@/constants/certification'

const Certification: FC = () => {
  return (
    <div>
      <Title text='Certification' />
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-xl'>Professional Front-End Developer</AccordionTrigger>
          <AccordionContent className='flex justify-between'>
            <Link href={FE_CERTIFICATION} target='_blank'>
              View certificates
            </Link>
            <p>2023 - 2024</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-xl'>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Certification
