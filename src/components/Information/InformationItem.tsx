import React, { FC, ReactElement } from 'react'
import { Accordion } from '@/components/ui/accordion'
import { Open, Title } from '@/components/Custom'
import AccordionItem from '@/components/Information/AccordionItem'

const InformationItem: FC<I_Props_Information_List> = ({ list, title }) => {
  const List = (): ReactElement[] => list.map((item) => <AccordionItem key={item.value} item={item} />)
  return (
    <div className='mb-10'>
      <Title text={title} />
      <Open cursor='cursorScaleOpen'>
        <Accordion type='single' collapsible className='text-slate-300'>
          {List()}
        </Accordion>
      </Open>
    </div>
  )
}

export default InformationItem
