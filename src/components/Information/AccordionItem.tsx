import React, { FC } from 'react'
import { ChevronsLeft } from '@/components/Custom'
import { AccordionContent, AccordionTrigger, AccordionItem as AccordItem } from '@/components/ui/accordion'
import { information } from '@/styles/body'
import Link from 'next/link'

const AccordionItem: FC<I_Props_AccordionItem> = ({ item }) => {
  return (
    <AccordItem key={item.value} value={item.value}>
      <AccordionTrigger className={information.title}>{item.title}</AccordionTrigger>
      <AccordionContent className={information.content}>
        <Link href={item.url} target='_blank' className='flex gap-6 text-blue-500'>
          {item.view} <ChevronsLeft />
        </Link>
        <span>{item.academy}</span>
        <span>{item.time}</span>
      </AccordionContent>
    </AccordItem>
  )
}

export default AccordionItem
