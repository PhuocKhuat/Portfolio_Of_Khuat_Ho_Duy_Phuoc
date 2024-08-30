import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

const ProjectItem: React.FC<I_Props_ProjectItem> = ({ list }) => {
  const projectListRender = list.map((project) => (
    <AspectRatio key={project.index} ratio={16 / 5} className='relative'>
      <span className='absolute -top-9 right-0 z-10 text-6xl'>{project.number}</span>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <Image src={project.img} alt='Photo by Drew Beamer' fill className='h-full w-full rounded-2xl object-cover' />
      <div className='absolute left-0 -bottom-16'>
        <p className='text-xs text-gray-300'>{project.time} || Development</p>
        <strong className='uppercase text-2xl'>{project.name}</strong>
      </div>
    </AspectRatio>
  ))
  return <>{projectListRender}</>
}

export default ProjectItem
