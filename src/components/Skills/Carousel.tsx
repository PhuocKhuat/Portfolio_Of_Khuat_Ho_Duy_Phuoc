import React, { FC } from 'react'
import {
  Carousel as Carousels,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel'
import Tooltip from '@/components/Skills/Tooltip'
import { I_Props_Skill_Carousel } from '@/types/home'

const Carousel: FC<I_Props_Skill_Carousel> = ({ item }) => {
  return (
    <Carousels
      opts={{
        align: 'start'
      }}
      className='mdn:w-full w-4/5 max-w-xl mdn:mx-0 mx-auto'
    >
      <CarouselContent className='-ms-1'>
        {item.skills.map((skill) => (
          <CarouselItem
            key={skill.name}
            className='md:ps-5 md:basis-1/6 sm:basis-1/5 xsn:basis-1/4 xsm:basis-1/3 basis-1/2 ps-3'
          >
            <Tooltip skill={skill} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousels>
  )
}

export default Carousel
