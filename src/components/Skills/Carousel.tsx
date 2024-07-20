import React, { FC } from 'react'
import {
  Carousel as Carousels,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel'
import Tooltip from '@/components/Skills/Tooltip'

const Carousel: FC<I_Props_Skill_Carousel> = ({ item }) => {
  return (
    <Carousels
      opts={{
        align: 'start'
      }}
      className='w-full max-w-max'
    >
      <CarouselContent className='-ml-1'>
        {item.skills.map((skill) => (
          <CarouselItem key={skill.name} className='pl-5 basis-1/7'>
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
