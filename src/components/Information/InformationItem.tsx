import React, { FC, ReactElement } from 'react'
import { Accordion } from '@/components/ui/accordion'
import { Open } from '@/components/Custom'
import AccordionItem from '@/components/Information/AccordionItem'
import { montserratNormal } from '@/fonts/font'
import { I_Props_Information_List } from '@/types/home'

const InformationItem: FC<I_Props_Information_List> = ({ list, translate }) => {
  const List = (): ReactElement[] =>
    list.map((item) => <AccordionItem key={item.value} item={item} translate={translate} />)
  return (
    <div className={`mb-10 ${montserratNormal.className}`}>
      <Open cursor='cursorScaleOpen'>
        <Accordion type='single' collapsible className='text-slate-300'>
          {List()}
        </Accordion>
      </Open>
    </div>
  )
}

export default InformationItem
